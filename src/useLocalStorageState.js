import { useState, useEffect } from "react";

export const useLocalStorageState = (keyName, initialValue) => {

    const [state, setState] = useState(
        JSON.parse(localStorage.getItem(keyName))
        || initialValue
    );

    useEffect(() => {
        localStorage.setItem(keyName, JSON.stringify(state));
    }, [keyName, state]);

    return [state, setState];
};