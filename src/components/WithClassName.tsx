import  { FC } from 'react';

interface WithClassNameProps {
  className?: string;
}

const WithClassName = (Component: FC) => {
  return ({ className }: WithClassNameProps) => (
    <div className={className}>
      <Component />
    </div>
  );
};

export default WithClassName;
