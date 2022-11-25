

const reducer = (state, action) => {  
  if (action.type === 'REMOVE') {
    return {
      ...state,
      database: {
        ...state.data,  
      icons: state.icons.database.findIndex((data) => data.id !== action.payload),
    }
  }
}
  console.log(state)
}


export default reducer
