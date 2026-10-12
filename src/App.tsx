import { useState } from 'react';
import { useApp } from './engine/store';
import { Explore } from './ui/Explore';
import { Feed, type FeedFocus } from './ui/Feed';
import { Onboarding } from './ui/Onboarding';
import { Profile } from './ui/Profile';
import { Progress } from './ui/Progress';

type Tab = 'feed' | 'explore' | 'progress' | 'profile';

const TABS: { id: Tab; icon: string; label: string }[] = [
  { id: 'feed', icon: '▶', label: 'Feed' },
  { id: 'explore', icon: '◎', label: 'Explore' },
  { id: 'progress', icon: '▲', label: 'Progress' },
  { id: 'profile', icon: '●', label: 'Profile' },
];

const FOCUS_KEY = 'lc-reels:focus';

/** Remember which subject the feed was on, so a reload keeps the same feed. */
function loadFocus(): FeedFocus | null {
  try { return JSON.parse(localStorage.getItem(FOCUS_KEY) ?? 'null'); } catch { return null; }
}

export default function App() {
  const app = useApp();
  const [tab, setTab] = useState<Tab>('feed');
  const [focus, setFocusState] = useState<FeedFocus | null>(loadFocus);
  const setFocus = (f: FeedFocus | null) => {
    setFocusState(f);
    try { localStorage.setItem(FOCUS_KEY, JSON.stringify(f)); } catch { /* per-device convenience only */ }
  };

  if (!app.profile.onboarded) return <Onboarding />;

  const study = (f: FeedFocus | null) => { setFocus(f); setTab('feed'); };

  return (
    <div className="app">
      <main className="main">
        {/* The feed stays mounted so you keep your place when switching tabs. */}
        <div className="tab-pane" hidden={tab !== 'feed'}>
          <Feed focus={focus} onFocus={setFocus} onClearFocus={() => setFocus(null)} onOpenProgress={() => setTab('progress')} />
        </div>
        {tab === 'explore' && <Explore onStudy={study} />}
        {tab === 'progress' && <Progress onStudy={study} />}
        {tab === 'profile' && <Profile />}
      </main>
      <nav className="tabbar" aria-label="Main">
        {TABS.map((t) => (
          <button key={t.id} className={tab === t.id ? 'on' : ''} onClick={() => setTab(t.id)} aria-current={tab === t.id ? 'page' : undefined}>
            <span className="tab-icon" aria-hidden>{t.icon}</span>
            <span>{t.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
}
