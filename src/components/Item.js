import Items from './Items';
import Form from './Form';

class Item {
  constructor(item) {
    this.item = item;
    this.doneButtonHandler.bind(this);
    this.deleteButtonHandler.bind(this);
    this.afterRender.bind(this);
    this.editButtonHandler.bind(this);
    this.priotities = {
      high: '🔥',
      normal: '🕐',
      low: '🌊',
      none: '✔️',
    };
  }

  update() {
    document.getElementById(this.item.id).outerHTML = this.render();
    this.afterRender();
  }

  render() {
    const view = `
          <article class="item ${this.item.status}" id="${this.item.id}">
          <span class="item-priority">${this.priotities[this.item.priority]}</span>
            <h2 class="item-title">${this.item.title}</h2>
            
            <p class="item-description">${this.item.description}</p>
            <div class="item-button-wrap">
              <button name="item-done-button" id="item-done-button">done</button>
              <button name="item-edit-button" id="item-edit-button">edit</button>
              <button name="item-delete-button" id="item-delete-button">delete</button>
            </div>
            
          </article>
        `;
    return view;
  }

  doneButtonHandler() {
    const { id } = this.item;
    const button = document.querySelector(`#${id} #item-done-button`);
    button.addEventListener('click', () => {
      const items = JSON.parse(localStorage.getItem('items'));
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].id === id) {
          items[i].status = 'done';
          items[i].priority = 'none';
          this.item = items[i];
        }
      }
      localStorage.setItem('items', JSON.stringify(items));
      this.update();
    });
  }

  deleteButtonHandler() {
    const { id } = this.item;
    const button = document.querySelector(`#${id} #item-delete-button`);
    button.addEventListener('click', () => {
      const items = JSON.parse(localStorage.getItem('items'));
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].id === id) {
          items.splice(i, 1);
        }
      }
      localStorage.setItem('items', JSON.stringify(items));
      Items.update();
    });
  }

  editButtonHandler() {
    const { id } = this.item;
    const button = document.querySelector(`#${id} #item-edit-button`);
    button.addEventListener('click', () => {
      const items = JSON.parse(localStorage.getItem('items'));
      for (let i = 0; i < items.length; i += 1) {
        if (items[i].id === id) {
          Form.setItem(items[i]);
          Form.setVisible(true);
          Form.setType('edit');
          Form.update();
        }
      }
    });
  }

  afterRender() {
    this.doneButtonHandler();
    this.deleteButtonHandler();
    this.editButtonHandler();
  }
}

export default Item;
