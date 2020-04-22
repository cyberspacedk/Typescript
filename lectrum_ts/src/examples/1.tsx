import React, { ReactElement, ReactNode } from 'react';

// Example how typed props
export interface Iprops {
  title?: string;
  children: ReactNode;
}

// Func component should return ReactElement
export function Component1({ children, title }: Iprops): ReactElement {
  return (
    <div>
      {title}
      :
      {children}
    </div>
  );
}
