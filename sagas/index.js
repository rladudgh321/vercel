import { all, fork } from 'redux-saga/effects';
import user from './user';
import contact from './contact';
import request from './request';

function* rootSaga() {
    yield all([
        fork(request),
        fork(contact),
        fork(user),
    ]);
}

export default rootSaga;