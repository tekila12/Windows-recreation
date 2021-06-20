
const reducer = (state, action) => {  
    if (action.type === 'REMOVE') {
      return {
        ...state,
        icons: state.icons.filter((windowsIcons) => windowsIcons.id !== action.payload),
      }
    }
}

export default reducer
