// 400 ms
const DEFAULT_THROTTLE_TIME = 400;

const throttle = (fn, time = DEFAULT_THROTTLE_TIME) => {
  let running = false;
  return (...args) => {
    if (running) {
      return Promise.reject();
    }
    
    running = true;
    setTimeout(() => {
      running = false;
    });
    return Promise.resolve().then(fn(...args));
  };
};

export default throttle;