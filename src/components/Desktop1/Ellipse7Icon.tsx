import { memo, SVGProps } from 'react';

const Ellipse7Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 181 171' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M181 85.5C181 132.72 140.482 171 90.5 171C40.5182 171 0 132.72 0 85.5C0 38.2797 40.5182 0 90.5 0C140.482 0 181 38.2797 181 85.5Z'
      fill='#D73E3E'
    />
  </svg>
);
const Memo = memo(Ellipse7Icon);
export { Memo as Ellipse7Icon };
