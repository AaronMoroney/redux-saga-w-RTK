import { all, call, put, takeEvery } from 'redux-saga/effects'

const delay = (ms: number) => new Promise(res => setTimeout(res, ms))

export function* incrementAsync() {
  yield delay(1000)
  //as a string
  yield put({ type: 'counter/increment' }) //from RTK reducer increment action
  //as an action type 
  //yield put(counterSlice.actions.increment());
}

export function* watchIncrementAsync() {
  yield takeEvery('INCREMENT_ASYNC', incrementAsync)
}

export function* helloSaga(){
    console.log('Hello Sagas!')
} 

export default function* rootSaga() {
    yield all([
        call(helloSaga),
        call(watchIncrementAsync),
    ])
}