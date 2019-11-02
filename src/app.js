import Main from './components/Main';

const app = () => {
  const root = document.getElementById('root');
  root.innerHTML = Main.render();
};
app();
