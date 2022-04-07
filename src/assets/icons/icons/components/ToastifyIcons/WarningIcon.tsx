import React from 'react';

import { BaseSVGIcon } from 'assets/icons/icons/components/BaseSVGIcon';
import { IconProps } from 'assets/icons/icons/icons.types';

export const WarningIcon: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24"
    height="24"
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path fillRule="evenodd" clipRule="evenodd" d="M12.9993 13C12.9993 13.552 12.5513 14 11.9993 14C11.4473 14 10.9993 13.552 10.9993 13V9C10.9993 8.448 11.4473 8 11.9993 8C12.5513 8 12.9993 8.448 12.9993 9V13ZM11.9993 17C11.4473 17 10.9993 16.552 10.9993 16C10.9993 15.448 11.4473 15 11.9993 15C12.5513 15 12.9993 15.448 12.9993 16C12.9993 16.552 12.5513 17 11.9993 17ZM22.5603 16.303L14.8883 3.584C14.2893 2.592 13.2093 2 11.9993 2C10.7893 2 9.70932 2.592 9.11032 3.584L1.43833 16.303C0.870325 17.246 0.853325 18.38 1.39333 19.336C1.97233 20.363 3.09733 21 4.32733 21H19.6713C20.9013 21 22.0263 20.363 22.6053 19.336C23.1453 18.38 23.1283 17.246 22.5603 16.303Z" fill="#F2C94C" />
    <path fillRule="evenodd" clipRule="evenodd" d="M12.9993 13C12.9993 13.552 12.5513 14 11.9993 14C11.4473 14 10.9993 13.552 10.9993 13V9C10.9993 8.448 11.4473 8 11.9993 8C12.5513 8 12.9993 8.448 12.9993 9V13Z" fill="#594B1F" />
    <path fillRule="evenodd" clipRule="evenodd" d="M11.9993 17C11.4473 17 10.9993 16.552 10.9993 16C10.9993 15.448 11.4473 15 11.9993 15C12.5513 15 12.9993 15.448 12.9993 16C12.9993 16.552 12.5513 17 11.9993 17Z" fill="#594B1F" />

  </BaseSVGIcon>
);