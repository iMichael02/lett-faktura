import { Suspense, useEffect } from "react";
import "./App.css";
import { ErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./components/shared/errorFallback";
import { Provider } from "react-redux";
import { persistor, store } from "./redux/store";
import { PersistGate } from "redux-persist/integration/react";
import AppRouter from "./components/routes";
import { changeLanguage } from "i18next";

const App = () => {
    useEffect(() => {
        changeLanguage("se");
    }, []);
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary FallbackComponent={ErrorFallback}>
                <Provider store={store}>
                    <PersistGate loading={null} persistor={persistor}>
                        <AppRouter />
                    </PersistGate>
                </Provider>
            </ErrorBoundary>
        </Suspense>
    );
};

export default App;
