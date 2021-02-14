import { addTabAction } from "../actions/tabs";

export const initialState = {
  tabs: [{
    name: 'script.js', 
    id: 0,
    code: 'function name (param) {return param;}'
  }]
}

const tabReducer = (state, {type, payload}) => {
  switch(type) {
    case 'SET_TABS':
      return {
        ...state,
        tabs: payload
      } 
    case 'ADD_TAB': 
      const lastTabId = state.tabs[state.tabs?.length-1]?.id;
      return {
        ...state,
        tabs: [...state.tabs, { 
          name: `newScript${lastTabId+1}.js`, 
          id: lastTabId+1,
          code: '/* This is an empty tab.*/' 
        }]
      };

    case 'REMOVE_TAB': return {
      ...state, tabs: state.tabs.filter(tab => tab.id !== payload)
    }

    case 'APPLY_CODE': return {
      ...state,
      tabs: state.tabs.map(({name, id, code}) => ({
        name,
        id,
        code: payload.id === id ? payload.code : code
      }))
    }

    default: return state;
  }
};

export default tabReducer;