import Main from './components/Main';

const app = () => {
  if(localStorage.getItem('items')===null){
    localStorage.setItem('items', JSON.stringify([]));
  };
  localStorage.setItem('query', '');
  localStorage.setItem('status', 'all');
  localStorage.setItem('priority', 'all');

  const root = document.getElementById('root');
  root.innerHTML = Main.render();
  Main.after_render();
};
app();
