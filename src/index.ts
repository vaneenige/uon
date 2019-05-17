function uon(callback: Function) {
  // Observe native navigation
  addEventListener('popstate', () => {
    callback(location.pathname);
  });
  // Observe manual navigation
  ['push', 'replace'].map(type => {
    const state = `${type}State`;
    const historyState = history[state];
    history[state] = function() {
      callback(arguments[2]);
      return historyState.apply(history, arguments);
    };
  });
}

export default uon;
