
import Item from './Item';

const getItems = () => {
  let items = JSON.parse(localStorage.getItem('items'));
  const query = localStorage.getItem('query');
  const status = localStorage.getItem('status');
  const priority = localStorage.getItem('priority');
  if(!items){
    return [];
  }
  
  return items.filter((item) => {
    if (status === 'all') {
      return true;
    };
    if (status === item.status) {
      return true;
    }else{
      return false;
    }
  })
  .filter((item) => {
    if (priority === 'all') {
      return true;
    };
    if (priority === item.priority) {
      return true;
    }else{
      return false;
    }
  })
  .filter((item) => {
    if(query===''  || query === undefined){
      return true;
    }else{
      return item.title.toLowerCase().includes(query.toLowerCase());
    }
  });
};
const Items = {
  state: {
    items: getItems(),
  },
  update: () => {
    Items.state.items = getItems();
    document.getElementsByClassName('items')[0].outerHTML = Items.render();
    Items.after_render();
  },
  render: () => {
    Items.state.items = getItems();
    const view = Items.state.items.map((item) => `${Item(item)}`).join('\n');
    return `<section class="items">${view}</section>`;
  },
  after_render: () => {

  },

};

export default Items;
