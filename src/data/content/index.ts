import type { ContentItem } from '../../types';
import { accounting } from './accounting';
import { accounting2 } from './accounting2';
import { accounting3 } from './accounting3';
import { business } from './business';
import { business2 } from './business2';
import { business3 } from './business3';
import { chemistry } from './chemistry';
import { chemistry2 } from './chemistry2';
import { chemistry3 } from './chemistry3';
import { english } from './english';
import { english2 } from './english2';
import { english3 } from './english3';
import { french } from './french';
import { french2 } from './french2';
import { french3 } from './french3';
import { irish } from './irish';
import { irish2 } from './irish2';
import { irish3 } from './irish3';
import { maths } from './maths';
import { maths2 } from './maths2';
import { maths3 } from './maths3';

export const CONTENT: ContentItem[] = [
  ...accounting, ...accounting2, ...accounting3,
  ...english, ...english2, ...english3,
  ...irish, ...irish2, ...irish3,
  ...maths, ...maths2, ...maths3,
  ...chemistry, ...chemistry2, ...chemistry3,
  ...french, ...french2, ...french3,
  ...business, ...business2, ...business3,
];

export const CONTENT_BY_ID: Map<string, ContentItem> = new Map(CONTENT.map((c) => [c.id, c]));
