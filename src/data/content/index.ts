import type { ContentItem } from '../../types';
import { accounting } from './accounting';
import { accounting2 } from './accounting2';
import { business } from './business';
import { business2 } from './business2';
import { chemistry } from './chemistry';
import { chemistry2 } from './chemistry2';
import { english } from './english';
import { english2 } from './english2';
import { french } from './french';
import { french2 } from './french2';
import { irish } from './irish';
import { irish2 } from './irish2';
import { maths } from './maths';
import { maths2 } from './maths2';

export const CONTENT: ContentItem[] = [
  ...accounting, ...accounting2,
  ...english, ...english2,
  ...irish, ...irish2,
  ...maths, ...maths2,
  ...chemistry, ...chemistry2,
  ...french, ...french2,
  ...business, ...business2,
];

export const CONTENT_BY_ID: Map<string, ContentItem> = new Map(CONTENT.map((c) => [c.id, c]));
