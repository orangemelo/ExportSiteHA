import { memo, SVGProps } from 'react';

const Ellipse1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 181 171' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={90.5} cy={85.5} rx={90.5} ry={85.5} fill='#D73E3E' />
  </svg>
);
const Memo = memo(Ellipse1Icon);
export { Memo as Ellipse1Icon };
