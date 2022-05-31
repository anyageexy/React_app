import {createSlice} from '@reduxjs/toolkit';

//изначальное состояние
//как будет выглядеть пользователь
const initialState = {
  email: null,
  token: null,
  id: null
};


const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser(state, action){//Добавление юзера
      //в качестве action прелоадера придут данные из initialState
      state.email = action.payload.email;
      //в свойстве payload лежат все данные, которые передаются вместе с действием

      state.token = action.payload.token;
      state.id = action.payload.id;

    },
    removeUser(state){//удаление юзера - все сбрасываем на начальные значения - все обнуляем
      state.email = null;
      state.token = null;
      state.id = null;
    }
  },
    
});


//экспортируем константы которые хранят userSlice actions
export const{setUser, removeUser} = userSlice.actions;
export default userSlice.reducer;