import * as types from './ActionTypes';

export const testActionCreator = (payload) => {
    return {
        type: types.TEST_ACTION,
        payload: payload
    };
};
