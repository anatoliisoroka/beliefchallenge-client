import { LOGIN } from 'action/authAction'
import { REDUXDATA } from 'action/authAction'
import { SIGNUP } from 'action/authAction'
import { LOGOUT } from 'action/authAction'
import { UPDATEPROFILE } from 'action/generalAction'

const initialState = {
  authUser: {},
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOGIN:

      return {
        ...state,
        authUser: {
          ...action.payload,
        },
      }
    case SIGNUP:
      return {
        ...state,
        authUser: {
          ...action.payload
        }
      }
    case REDUXDATA:
      return {
        ...state,
        authUser: {
          ...action.payload
        }
      }
    case LOGOUT:
      return {
        ...state,
        authUser: {
        }
      }

    case UPDATEPROFILE:
      return {
        ...state,
        authUser: {
          ...state.authUser,
          fullName: action.payload.fullName,
          email: action.payload.email,
          socialLogin: action.payload.socialLogin
        }
      }

    default:
      return state;
  }
};