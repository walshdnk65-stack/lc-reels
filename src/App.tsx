import { useState, type ReactNode } from 'react';
import { dayKey, liveStreak, useApp } from './engine/store';
import { Explore } from './ui/Explore';
import { Feed, type FeedFocus } from './ui/Feed';
import { Icon, type IconName } from './ui/Icon';
import { Onboarding } from './ui/Onboarding';
import { Profile } from './ui/Profile';
import { Progress } from './ui/Progress';
import { useTheme } from './ui/theme';

type Tab = 'feed' | 'explore' | 'progress' | 'setup';

const TABS: { id: Tab; icon: IconName; label: string }[] = [
  { id: 'feed', icon: 'feed', label: 'Feed' },
  { id: 'explore', icon: 'explore', label: 'Explore' },
  { id: 'progress', icon: 'stats', label: 'Progress' },
  { id: 'setup', icon: 'setup', label: 'Setup' },
];

const FOCUS_KEY = 'lc-reels:focus';

/** Remember which subject the feed was on, so a reload keeps the same feed. */
function loadFocus(): FeedFocus | null {
  try { return JSON.parse(localStorage.getItem(FOCUS_KEY) ?? 'null'); } catch { return null; }
}

export default function App() {
  const app = useApp();
  const theme = useTheme();
  const [tab, setTab] = useState<Tab>('feed');
  const [focus, setFocusState] = useState<FeedFocus | null>(loadFocus);
  const setFocus = (f: FeedFocus | null) => {
    setFocusState(f);
    try { localStorage.setItem(FOCUS_KEY, JSON.stringify(f)); } catch { /* per-device convenience only */ }
  };

  if (!app.profile.onboarded) return <Onboarding />;

  const study = (f: FeedFocus | null) => { setFocus(f); setTab('feed'); };
  const today = app.stats.days[dayKey(Date.now())]?.cards ?? 0;
  const streak = liveStreak(app.stats);
  const subtitle: Record<Exclude<Tab, 'feed'>, string> = {
    explore: 'Your syllabus map · tap a topic to study it',
    progress: `${streak}-day streak · ${today} of ${app.profile.dailyGoal} cards today`,
    setup: `Leaving Cert ${app.profile.examYear} · ${app.profile.subjects.length} subjects`,
  };

  const screen = (title: string, body: ReactNode) => (
    <div className="screen">
      <div className="shell-top">
        <header className="top">
          <div className="titles">
            <div className="title">{title}</div>
            <div className="sub">{subtitle[tab as Exclude<Tab, 'feed'>]}</div>
          </div>
          <button className="hbtn" onClick={theme.toggle} aria-label={theme.isDark ? 'Switch to light mode' : 'Switch to dark mode'}>
            <Icon name={theme.isDark ? 'sun' : 'moon'} />
          </button>
        </header>
      </div>
      <div className="screen-body">{body}</div>
    </div>
  );

  return (
    <div className="app">
      <nav className="tabs" aria-label="Main">
        <div className="brand"><img src="./icon.svg" alt="" /> LC Reels</div>
        {TABS.map((t) => (
          <button key={t.id} className={tab === t.id ? 'active' : ''} onClick={() => setTab(t.id)} aria-current={tab === t.id ? 'page' : undefined}>
            <span className="ico"><Icon name={t.icon} /></span>
            {t.label}
          </button>
        ))}
      </nav>
      <main className="main">
        {/* The feed stays mounted so you keep your place when switching tabs. */}
        <div className="tab-pane" hidden={tab !== 'feed'}>
          <Feed focus={focus} onFocus={setFocus} onClearFocus={() => setFocus(null)} onOpenProgress={() => setTab('progress')} />
        </div>
        {tab === 'explore' && screen('Explore', <Explore onStudy={study} />)}
        {tab === 'progress' && screen('Progress', <Progress onStudy={study} />)}
        {tab === 'setup' && screen('Setup', <Profile theme={theme} />)}
      </main>
    </div>
  );
}
