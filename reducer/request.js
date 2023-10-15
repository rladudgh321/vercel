import { produce } from "immer";

const initialState = {
    infoR: null,
    requestLoading: false,
    requestDone: false,
    requestError: null,
}
//selectedButton, 
//selectedBuyTypeButton, eumpmeon, li, address, price, 
//selectedLandTypeButton, name, title, contact, 
//textDetail
const dummyRequest = (data) => ({
    selectedButton:data.selectedButton,
    selectedBuyTypeButton:data.selectedBuyTypeButton,
    eumpmeon:data.eumpmeon,
    li:data.li,
    address:data.address,
    price: data.price,
    selectedLandTypeButton: data.selectedLandTypeButton,
    name: data.name,
    title: data.title,
    contact: data.contact,
    textDetail: data.textDetail
});

export const REQUEST_REQUEST = 'REQUEST_REQUEST';
export const REQUEST_SUCCESS = 'REQUEST_SUCCESS';
export const REQUEST_FAILURE = 'REQUEST_FAILURE';

const requestReducer = (state = initialState, action) => produce(state, (draft => {
    switch(action.type) {
        case REQUEST_REQUEST :
            draft.requestLoading = true;
            draft.requestDone = false;
            draft.requestError = null;
            break;
        case REQUEST_SUCCESS :
            draft.requestLoading = false;
            draft.requestDone = true;
            draft.infoR = action.data;
            break;
        case REQUEST_SUCCESS :
            draft.requestLoading = false;
            draft.requestError = action.error;
            break;
        default :
            break;
    }    
}));

export default requestReducer;