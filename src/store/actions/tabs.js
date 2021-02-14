export const setTabAction = (tabs) => ({type: 'SET_TABS', payload: tabs})

export const addTabAction = () => ({type: 'ADD_TAB'});

export const removeTabAction = (id) => ({type: 'REMOVE_TAB', payload: id});

export const applyCodeAction = (code, id) => ({type: 'APPLY_CODE', payload: {id, code}});
