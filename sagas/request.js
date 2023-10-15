import { all, call, delay, fork, put, takeLatest } from 'redux-saga/effects';
import { REQUEST_REQUEST, REQUEST_SUCCESS, REQUEST_FAILURE,

} from '@/reducer/request';
import axios from 'axios';

function requestAPI(data) {
    return axios.post('/request', data)
}

function* request(action) {
    // yield call(requestAPI, action.data);
    yield delay(1000);
    try {
        yield put({
            type: REQUEST_SUCCESS,
            data: action.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type:REQUEST_FAILURE,
            error: err.response.data,
        })
    }
}

function* watchRequest() {
    yield takeLatest(REQUEST_REQUEST, request);
}

function* requestReducer() {
    yield all([
        fork(watchRequest),
    ])
}

export default requestReducer;