
const reducer = (state, action) => {  
    if (action.type === 'REMOVE') {
      return {
        ...state,
        icons: state.icons.filter((data) => data.id !== action.payload),
      }
    }
}

export default reducer
