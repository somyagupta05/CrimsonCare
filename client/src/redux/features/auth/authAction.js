import {createAsyncThunk} from "@reduxjs/toolkit";

export const userLogin=createAsyncThunk(
  'auth/login',
  async ({role,email,password},(rejectWithValue))=>{
    try{
      const{data}=await API
    }
    catch(error){
      if(error.response && error.response.data.message){
        return rejectWithValue(error.response.data.message)
      }
      else{
        return rejectWithValue(error.message)
      }
    }
  }
)