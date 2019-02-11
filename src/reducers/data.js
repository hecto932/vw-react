import ApiClient from '../services/client';

function data(state, action) {
  console.log('action', action.payload);
  switch (action.type) {
    case 'SAVE_JOB': 
      return {
        ...state,
        thereIsResult: action.payload.thereIsResult,
        job: action.payload.job,
      }
    case 'AUTOCOMPLETE_LIST':
      return {
        ...state,
        ...action.payload
      }
    default:
      return state;
    
  }
}

export default data;