// salesRecordActions.js

// Action types
export const FETCH_SALES_RECORD = 'FETCH_SALES_RECORD';
export const DELETE_SALES_RECORD = 'DELETE_SALES_RECORD';

// Action creators
export const fetchSalesRecord = (data) => {
  return {
    type: FETCH_SALES_RECORD,
    payload: data,
  };
};

export const deleteSalesRecord = (id) => {
  return {
    type: DELETE_SALES_RECORD,
    payload: id,
  };
};
