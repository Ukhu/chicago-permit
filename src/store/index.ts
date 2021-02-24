import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import permitReducer from './permit/permitSlice';
import permitSagas from './permit/permitSagas';

let sagaMiddleware = createSagaMiddleware();
const middleware = [...getDefaultMiddleware({ thunk: false }), sagaMiddleware];

export const store = configureStore({
  reducer: {
    permit: permitReducer,
  },
  middleware
});

sagaMiddleware.run(permitSagas);

export type RootState = ReturnType<typeof store.getState>;
