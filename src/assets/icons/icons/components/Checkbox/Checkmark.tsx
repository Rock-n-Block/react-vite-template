import React from 'react';

import { BaseSVGIcon } from 'assets/icons/icons/components/BaseSVGIcon';
import { IconProps } from 'assets/icons/icons/icons.types';

export const Checkmark: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <svg width="8" height="7" viewBox="0 0 8 7" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M6.03854 0.429263C6.39259 -0.0379573 7.07178 -0.139509 7.55554 0.202441C8.0393 0.544391 8.14445 1.20035 7.79039 1.66757L4.43119 6.10046C4.06878 6.5787 3.36974 6.63233 2.93862 6.21496L0.317012 3.67696C-0.106383 3.26707 -0.105565 2.6033 0.318838 2.19438C0.743241 1.78546 1.43052 1.78625 1.85391 2.19614L3.49539 3.78526L6.03854 0.429263Z" fill="#A60E49" />
    </svg>
  </BaseSVGIcon>
);