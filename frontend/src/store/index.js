import { createStore} from "redux";
import rootReducer from "../redux_store";
import { persisStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";

const persistConfig = {
    key: 'root',
    storage
};

const enhancedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
    const store = createStore(enhancedReducer);
    const persistor = persistStore(store);
    return { store, persistor };
}