export const loadPersistantStorage = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        return serializedState ? JSON.parse(serializedState) : '';
    }
    catch (err) {
        return undefined;
    }
};

export const savePersistantStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
};