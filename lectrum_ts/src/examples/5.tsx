import React, { ReactNode, ReactElement } from 'react';

interface PropTypes<T> {
  children: (item: T) => ReactNode;
  items: Array<T>;
}

export function Component5<T>({ items, children }: PropTypes<T>): ReactElement {
  return (
    <div>
      {items.map((item: T) => (
        children(item)
      ))}
    </div>
  );
}
