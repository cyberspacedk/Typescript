import React, { FC } from 'react';

import './style.css';

type PropTypes = {
  children: string;
}

export const Title: FC<PropTypes> = ({ children }: PropTypes) => (
  <h1 className="title">{children}</h1>
);
