import { FIELDS } from "@/consts/fields";
import { TOKEN } from "@/consts/token";
import { IUser, IUserInititalState } from "@/models/consts/user";
import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import $ from 'jquery';

export const fetchUsers = createAsyncThunk(
  "user/fetchUsers",
  async (users_ids: string) => {
    const code = `var users = API.users.get({"user_ids": ${users_ids},"fields": '${FIELDS.user}'}); return users;`
    const result: IUser[] = [];
    const ajaxSettings: JQueryAjaxSettings = {
      url: `https://api.vk.com/method/execute`,
      method: 'GET',
      data: {
        code,
        access_token: TOKEN,
        v: '5.131'
      },
      dataType: 'jsonp',
      success: (data: any) => {
        result.push(data.response);
      },
    };

    await $.ajax(ajaxSettings);
    return result;
  }
);

const initialState: IUserInititalState = {
  users: [],
  status: '',
  error: ''
};

const user = createSlice({
  name: "user",
  initialState,
  reducers: {

  },
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.status = 'pending'
      state.error = ''
    });
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.status = 'fulfilled'
      state.error = ''
      state.users = action.payload
    });
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.status = 'error'
      state.error = action.error.message
    });
  },
});

export const userReducer = user.reducer;
