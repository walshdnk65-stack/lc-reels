import type { ContentItem } from '../../types';
import { accounting } from './accounting';
import { accounting2 } from './accounting2';
import { accounting3 } from './accounting3';
import { accounting4 } from './accounting4';
import { accounting5 } from './accounting5';
import { business } from './business';
import { business2 } from './business2';
import { business3 } from './business3';
import { business4 } from './business4';
import { business5 } from './business5';
import { chemistry } from './chemistry';
import { chemistry2 } from './chemistry2';
import { chemistry3 } from './chemistry3';
import { chemistry4 } from './chemistry4';
import { chemistry5 } from './chemistry5';
import { english } from './english';
import { english2 } from './english2';
import { english3 } from './english3';
import { english4 } from './english4';
import { english5 } from './english5';
import { french } from './french';
import { french2 } from './french2';
import { french3 } from './french3';
import { french4 } from './french4';
import { french5 } from './french5';
import { irish } from './irish';
import { irish2 } from './irish2';
import { irish3 } from './irish3';
import { irish4 } from './irish4';
import { irish5 } from './irish5';
import { maths } from './maths';
import { maths2 } from './maths2';
import { maths3 } from './maths3';
import { maths4 } from './maths4';
import { maths5 } from './maths5';

export const CONTENT: ContentItem[] = [
  ...accounting, ...accounting2, ...accounting3, ...accounting4, ...accounting5,
  ...english, ...english2, ...english3, ...english4, ...english5,
  ...irish, ...irish2, ...irish3, ...irish4, ...irish5,
  ...maths, ...maths2, ...maths3, ...maths4, ...maths5,
  ...chemistry, ...chemistry2, ...chemistry3, ...chemistry4, ...chemistry5,
  ...french, ...french2, ...french3, ...french4, ...french5,
  ...business, ...business2, ...business3, ...business4, ...business5,
];

export const CONTENT_BY_ID: Map<string, ContentItem> = new Map(CONTENT.map((c) => [c.id, c]));
