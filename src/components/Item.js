import Items from './Items';

class Item   {
  constructor(item){
    this.item = item;
    this.doneButtonHandler.bind(this);
    this.deleteButtonHandler.bind(this);
    this.after_render.bind(this);
  }
  update(){
    document.getElementById(this.item.id).outerHTML = this.render();
    this.after_render();
  };
  render(){
    const view = `
          <article class="item ${this.item.status}" id="${this.item.id}">
            <h2 class="item-title">${this.item.title}</h2>
            <p class="item-description">${this.item.description}</p>
            <span class="item-priority">${this.item.priority}<span>
            <div class="item-button-wrap">
              <button name="item-done-button" id="item-done-button">done</button>
              <button name="item-edit-button">edit</button>
              <button name="item-delete-button" id="item-delete-button">delete</button>
            </div>
          </article>
        `;
    return view;
  };
  doneButtonHandler(){
    const id  = this.item.id;
    const button = document.querySelector('#'+id+' #item-done-button');
    button.addEventListener('click', () => {
      let items = JSON.parse(localStorage.getItem('items'));
      items = items.map(item=>{
        if(item.id === id){ 
          item.status = 'done';
          this.item = item;
        };
        return item;
      })
      localStorage.setItem('items', JSON.stringify(items));
      localStorage.setItem('form-visible', JSON.stringify(false));
      this.update();
    });
  };
  deleteButtonHandler(){
    const id  = this.item.id;
    const button = document.querySelector('#'+id+' #item-delete-button');
    button.addEventListener('click', () => {
      let items = JSON.parse(localStorage.getItem('items'));
      for(var i = 0; i < items.length; i++) {
        if(items[i].id === id) {
           items.splice(i, 1);
        }
      }
      localStorage.setItem('items', JSON.stringify(items));
      Items.update();
    });
  };
  after_render(){
    this.doneButtonHandler();
    this.deleteButtonHandler();
  };
};

export default Item;
