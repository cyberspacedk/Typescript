// Grab all types and constants
import {
  ErrorHttpAction,
  Starships,
  STARSHIPS_FETCH_ASYNC,
  STARSHIPS_FILL,
  STARSHIPS_SET_FETCHING_ERROR,
  STARSHIPS_START_FETCHING,
  STARSHIPS_STOP_FETCHING,
  StarshipsActionTypes,
  StarshipsFillAction,
  StarshipsSetFetchingErrorAction,
} from './types';

// Sync

/*
StarshipsActionTypes содержит в себе все типы
и когда мы передаем в type константу он матчит ее с типом
поэтому мы можем типизиолвать возвращаемое значение из экшена
универсальным типом StarshipsActionTypes
*/

export function startFetching(): StarshipsActionTypes {
  return {
    type: STARSHIPS_START_FETCHING,
  };
}

export function stopFetching(): StarshipsActionTypes {
  return {
    type: STARSHIPS_STOP_FETCHING,
  };
}

export function fetchAsync(): StarshipsActionTypes {
  return {
    type: STARSHIPS_FETCH_ASYNC,
  };
}

export function fill(payload: Starships): StarshipsFillAction {
  return {
    type: STARSHIPS_FILL,
    payload,
  };
}

export function setfetchingError(payload: ErrorHttpAction): StarshipsSetFetchingErrorAction {
  return {
    type: STARSHIPS_SET_FETCHING_ERROR,
    error: true,
    payload,
  };
}
