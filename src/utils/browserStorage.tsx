const storeToLocalStorage = (key: string, value: string) => {
    try {
        localStorage.setItem(key, JSON.stringify(value));
        console.log(`Value stored to local storage under key: ${key}`);
    } catch (error) {
        console.error('Error storing value to local storage:', error);
    }
}

const getValueFromLocalStorage = (key: string) => {
    try {
        const storedValue = localStorage.getItem(key);
        if (storedValue) {
            return JSON.parse(storedValue);
        } else {
            return null;
        }
    } catch (error) {
        console.error('Error retrieving value from local storage:', error);
        return null;
    }
}

export default { storeToLocalStorage, getValueFromLocalStorage }; 