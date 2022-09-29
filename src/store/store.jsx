// import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from '@/store/moudle/moudle';
//引用持久化插件
import { combineReducers, configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistReducer, persistStore, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'reduxjs-toolkit-persist';
import storage from 'reduxjs-toolkit-persist/lib/storage'
import autoMergeLevel1 from 'reduxjs-toolkit-persist/lib/stateReconciler/autoMergeLevel1';

//配置项
const persistConfig = {
    key: 'root',
    storage: storage,
    stateReconciler: autoMergeLevel1,
};
//加工reducer
const reducers = combineReducers({
    userReducer
});
const _persistedReducer = persistReducer(persistConfig, reducers);

//配置store
const store = configureStore({
    reducer: _persistedReducer,
    middleware: getDefaultMiddleware({
        serializableCheck: {
            /* ignore persistance actions */
            ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER
            ],
        },
    }),
});

const persistor = persistStore(store)
//导出
export {
    store,
    persistor
}