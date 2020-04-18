import React, { FC } from 'react';
import { Provider } from 'react-redux';

import { store } from './init/store';

export const App: FC = () => (
  <Provider store={store} />
);

export default App;
