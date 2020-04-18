// Core
import { all } from 'redux-saga/effects';
// типизация саги SagaIterator
import { SagaIterator } from '@redux-saga/core';

// Watchers
import { watchStarships } from '../bus/starships/saga';

export function* rootSaga(): SagaIterator {
  yield all([watchStarships()]);
}
