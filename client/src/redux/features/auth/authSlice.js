import {createSlice} from '@reduxjs/toolkit'
import { userLogin } from './authAction';

const initialState={
  loading:false,
  user:null,
  token:null,
  error:null,
};
const authSlice=createSlice({
  name:'auth',
  intialState:{},
  reducers:{},
  extraReducers:(builder)=>{
    builder.addCase(userLogin)
  },
})

export default authSlice