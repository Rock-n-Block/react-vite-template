import React from 'react';

import { IconProps } from '../icons.types';

import { BaseSVGIcon } from './BaseSVGIcon';

export const ChevronDown: React.FC<IconProps> = (props) => (
  <BaseSVGIcon
    width="24"
    height="24"
    fill="black"
    viewBox="0 0 24 24"
    {...props}
  >
    <g id="Icon/chevron-down">
      <path id="&#240;&#159;&#142;&#168; Icon &#208;&#161;olor" fillRule="evenodd" clipRule="evenodd" d="M11.9998 15.5C11.7438 15.5 11.4878 15.402 11.2928 15.207L7.29276 11.207C6.90176 10.816 6.90176 10.184 7.29276 9.79301C7.68376 9.40201 8.31576 9.40201 8.70676 9.79301L12.0118 13.098L15.3048 9.91801C15.7038 9.53501 16.3348 9.54601 16.7188 9.94301C17.1028 10.34 17.0918 10.974 16.6948 11.357L12.6948 15.219C12.4998 15.407 12.2498 15.5 11.9998 15.5Z" fill="#6C778F" />
      <mask id="mask0_614_5725" style={{ maskType: 'alpha' }} maskUnits="userSpaceOnUse" x="6" y="9" width="11" height="7">
        <path id="&#240;&#159;&#142;&#168; Icon &#208;&#161;olor_2" fillRule="evenodd" clipRule="evenodd" d="M11.9998 15.5C11.7438 15.5 11.4878 15.402 11.2928 15.207L7.29276 11.207C6.90176 10.816 6.90176 10.184 7.29276 9.79301C7.68376 9.40201 8.31576 9.40201 8.70676 9.79301L12.0118 13.098L15.3048 9.91801C15.7038 9.53501 16.3348 9.54601 16.7188 9.94301C17.1028 10.34 17.0918 10.974 16.6948 11.357L12.6948 15.219C12.4998 15.407 12.2498 15.5 11.9998 15.5Z" fill="white" />
      </mask>
      <g mask="url(#mask0_614_5725)" />
    </g>
  </BaseSVGIcon>
);
