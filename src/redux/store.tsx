import { configureStore } from "@reduxjs/toolkit";
import {
    FLUSH,
    REHYDRATE,
    PERSIST,
    PURGE,
    persistReducer,
    persistSotre,
} from 'redux-persist';
import reduxStorage from "./storage";
import rootReducer from "./rootReducer";
import storage from "redux-persist/lib/storage";

const persistConfig = {
    key: 'root',
    storage: reduxStorage,
    blacklist: [],
    whitelist: ['chat'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore