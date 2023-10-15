import { all, delay, fork, put, takeLatest, call } from 'redux-saga/effects';
import { MAINPAGE_MESSAGE_REQUEST, MAINPAGE_MESSAGE_SUCCESS, MAINPAGE_MESSAGE_FAILURE

} from '@/reducer/contact';
import axios from 'axios';


function mainpageMessageAPI(data) {
    return axios.post('/contact/')
}

function* mainpageMessage(action) {
    // yield call(mainpageMessageAPI, action.data);
    yield delay(1000);
    try{
        yield put({
            type: MAINPAGE_MESSAGE_SUCCESS,
            data: action.data,
        })
    } catch (err) {
        console.error(err);
        yield put({
            type:MAINPAGE_MESSAGE_FAILURE,
            error:err.response.data,
        })
    }
}

function* watchMainpageMessage() {
    yield takeLatest(MAINPAGE_MESSAGE_REQUEST, mainpageMessage);
}

function* contactReducer() {
    yield all([
        fork(watchMainpageMessage),
    ])
}

export default contactReducer;