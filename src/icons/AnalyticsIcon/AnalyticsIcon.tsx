import React, { FC } from 'react';

import { EqualSizeIconProps } from '../types';

export const AnalyticsIcon: FC<EqualSizeIconProps> = ({ className, size = 30 }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    fill="#000"
    version="1.1"
    viewBox="0 0 512 512"
    xmlSpace="preserve">
    <g>
      <path
        fill="#2D2D2D"
        d="M313.816 343.644L180.864 209.524 52.456 337.94 41.144 326.612 180.912 186.852 313.816 320.908 441.064 192.548 452.424 203.812z"></path>
      <circle cx="46.792" cy="332.276" r="46.792" fill="#ff2e2e"></circle>
      <circle cx="46.792" cy="332.276" r="20.592" fill="#FFF"></circle>
      <circle cx="315.976" cy="332.276" r="46.792" fill="#ff2e2e"></circle>
      <circle cx="315.976" cy="332.276" r="20.592" fill="#FFF"></circle>
      <circle cx="180.96" cy="198.188" r="65.256" fill="#41ee11"></circle>
      <circle cx="180.96" cy="198.188" r="28.72" fill="#FFF"></circle>
      <circle cx="446.744" cy="198.188" r="65.256" fill="#41ee11"></circle>
      <circle cx="446.744" cy="198.188" r="28.72" fill="#FFF"></circle>
    </g>
  </svg>
);
