import { memo, SVGProps } from 'react';

const Ellipse6Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 181 172' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M181 86.1472C181 133.368 140.482 171.647 90.5 171.647C40.5182 171.647 0 133.368 0 86.1472C0 38.9269 40.5182 0.647217 90.5 0.647217C140.482 0.647217 181 38.9269 181 86.1472Z'
      fill='#D73E3E'
    />
  </svg>
);
const Memo = memo(Ellipse6Icon);
export { Memo as Ellipse6Icon };
