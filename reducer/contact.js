import { produce } from "immer";

const initialState = {
    mainpageMessageLoading:false,
    mainpageMessageDone:false,
    mainpageMessageError:null,
    info: null,
}

export const mainInfoDummy = (data) => ({
    HP:data.mainContact,
    content:data.mainText,
});

export const MAINPAGE_MESSAGE_REQUEST = 'MAINPAGE_MESSAGE_REQUEST';
export const MAINPAGE_MESSAGE_SUCCESS = 'MAINPAGE_MESSAGE_SUCCESS';
export const MAINPAGE_MESSAGE_FAILURE = 'MAINPAGE_MESSAGE_FAILURE';

const contactReducer = (state=initialState, action) => produce(state, (draft => {
    switch(action.type) {
        case MAINPAGE_MESSAGE_REQUEST :
            draft.mainpageMessageLoading = true;
            draft.mainpageMessageDone = false;
            draft.mainpageMessageError = null;
            break;
        case MAINPAGE_MESSAGE_SUCCESS :
            draft.mainpageMessageLoading = false;
            draft.mainpageMessageDone = true;
            draft.info = mainInfoDummy(action.data);
            break;
        case MAINPAGE_MESSAGE_FAILURE :
            draft.mainpageMessageLoading = false;
            draft.mainpageMessageError = action.error;
            break;
        default :
            break;
    }
}));

export default contactReducer;