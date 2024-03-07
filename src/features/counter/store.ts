import { configureStore } from '@reduxjs/toolkit'
import counterReducer  from './counterSlice'
import createSagaMiddleware  from 'redux-saga'
import rootSaga  from './sagas'


const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
})

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch