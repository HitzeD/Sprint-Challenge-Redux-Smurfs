import { FETCH_SMURFS_START, FETCH_SMURFS_SUCCESS, FETCH_SMURFS_FAILURE } from "../actions";
import { ADD_NEW_SMURF_START, ADD_NEW_SMURF_SUCCESS, ADD_NEW_SMURF_FAILURE } from '../actions';
import { DELETE_SMURF_START, DELETE_SMURF_SUCCESS, DELETE_SMURF_FAILURE } from '../actions';
/*
  Be sure to import in all of the action types from `../actions`
*/


 const initialState = {
   smurfs: [],
   fetchingSmurfs: false,
   addingSmurf: false,
   updatingSmurf: false,
   deletingSmurf: false,
   error: null
 }

 const smurfsReducer = (state = initialState, action) => {
   switch(action.type){
      case FETCH_SMURFS_START:
        return {
          ...state,
          fetchingSmurfs: true,
          error: '',
        }
      case FETCH_SMURFS_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          fetchingSmurfs: false,
          error: null,
        }
      case FETCH_SMURFS_FAILURE:
        return {
          ...state,
          fetchingSmurfs: false,
          error: action.payload,
        }
      case ADD_NEW_SMURF_START:
        return {
          ...state,
          addingSmurf: true,
        }
      case ADD_NEW_SMURF_SUCCESS:
       return {
         ...state,
         smurfs: action.payload,
         addingSmurf: false,
       }
      case ADD_NEW_SMURF_FAILURE:
       return {
         ...state,
         addingSmurf: false,
         error: action.payload
       }
      case DELETE_SMURF_START:
        return {
          ...state,
          deletingSmurf: true,
        }
      case DELETE_SMURF_SUCCESS:
        return {
          ...state,
          smurfs: action.payload,
          deletingSmurf: false,
        }
      case DELETE_SMURF_FAILURE:
        return {
          ...state,
          deletingSmurf: false,
          error: action.payload,
        }
     default:
      return state;
   }
 }

 export default smurfsReducer;


/*
  You'll only need one smurf reducer for this project.
  Feel free to export it as a default and import as rootReducer. 
  This will guard your namespacing issues.
  There is no need for 'combineReducers' in this project.
  Components can then read your store as, `state` and not `state.fooReducer`.
*/
