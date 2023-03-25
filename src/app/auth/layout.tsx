import { ReactNode } from 'react';

type AuthLayoutPropsType = {
  children: ReactNode;
};

export default function AuthLayout({ children }: AuthLayoutPropsType) {
  return (
    <div>
      <h1>Auth</h1>
      {children}
    </div>
  );
}
