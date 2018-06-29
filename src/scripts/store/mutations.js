export default {
    setActiveScreen: (state, screen) => {
        state.activeScreen = screen;
    },
    incrementCounterCount: state => {
        state.counter.count += 1;
    },
    resetCounterCount: state => {
        state.counter.count = 0;
    }
};