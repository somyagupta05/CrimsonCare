import {} from '@reduxjs/toolkit'

const store= configureStore({
  reducer:{
    reducer:{
      auth:authSlice.reducer,
    }
  }
})
export default store