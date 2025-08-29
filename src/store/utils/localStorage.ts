export function loadState<T>(): T | undefined {
    try {
        const serializedState = localStorage.getItem("reduxState");
        if (!serializedState) return undefined;
        return JSON.parse(serializedState) as T;
    } catch (err) {
        console.error("Could not load state", err);
        return undefined;
    }
}

export function saveState<T>(state: T): void {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem("reduxState", serializedState);
    } catch (err) {
        console.error("Could not save state", err);
    }
}