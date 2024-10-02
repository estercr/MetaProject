import { createSlice } from "@reduxjs/toolkit";

const initialState = {
 chats: [],
 currenceChatid: '' ,  
}

export const chatSlice = createSlice({
    name: 'chat',
    initialState,
    reducers: {
        clearAllChats: state => {
            state.chats=[]
        }
    }
})

export const {clearAllChats} = chatSlice.actions;

export const selectChats = state => state.chat.chats;
export const selectCurrenteChatId = state => state.chat.currentChatId;

export default chatSlice.reducer;