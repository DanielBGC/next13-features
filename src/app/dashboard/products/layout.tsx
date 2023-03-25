import { ReactNode } from 'react';

type ProductLayoutPropsType = {
  children: ReactNode;
};

export const metadata = {
  title: {
    default: 'DanielBGC',
    template: '%s | DanielBGC',
  },
};

export default function ProductLayout({ children }: ProductLayoutPropsType) {
  return (
    <div>
      <h1>Products Layout</h1>
      {children}
    </div>
  );
}
