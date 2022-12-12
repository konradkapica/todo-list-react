import { useState, useEffect } from "react";

export const useLocalStorageState = (keyName, initialValue) => {
    const getInitialState = () => {
        const LocalStorageTasks = localStorage.getItem(keyName);
        if (LocalStorageTasks === null) {
            return initialValue;
        }

        return JSON.parse(localStorage.getItem(keyName))
    };

    const [state, setState] = useState(getInitialState);

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [keyName, state]);

    return [state, setState];
};