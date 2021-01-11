import { SHOW_MODAL, HAS_PREV_URL, POSTLIKES, POSTUNLIKE, POST_DATA } from 'action/generalAction'

const initialState = {
    modalData: {},
    hasPrevUrl: false,
    postLikes: [],
    postData: []
};

export default (state = initialState, action) => {
    switch (action.type) {

        case SHOW_MODAL:
            return {
                ...state,
                modalData: action.payload
            }
        case HAS_PREV_URL:
            return {
                ...state,
                hasPrevUrl: action.payload
            }
        case POSTLIKES:
            return {
                ...state,
                postLikes: action.payload
            }
        case POSTUNLIKE:
            return {
                ...state,
                postLikes: action.payload
            }
        case POST_DATA:
            return {
                ...state,
                postData: action.payload
            }
        default:
            return state;
    }
};