import {configureStore} from '@reduxjs/toolkit';
import userReducer from './slices/userSlice';

//создаем store? используя метод configureStore
//настраиваем через объект
export const store = configureStore({
  reducer: {
    user: userReducer
  }
});