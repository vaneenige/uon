import updateOnNavigate from '../../src/index';

const buttons = document.querySelectorAll('button');

buttons[0].addEventListener('click', () => {
  history.pushState({}, null, '/' + Math.random());
});

buttons[1].addEventListener('click', () => {
  history.replaceState({}, null, '/' + Math.random());
});

function handleRoute(route) {
  document.querySelector('.current span').textContent = route;
  document.querySelector('.history span').textContent = history.length;
}

// Observe route changes
updateOnNavigate(handleRoute);

// Handle route on initial load
handleRoute(location.pathname);
