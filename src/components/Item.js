
const Item = (props) => {
  const state = {
    id: 0,
  };
  const update = () => {
    state.item = JSON.parse(localStorage.getItem('items'));
    document.getElementsByClassName('items')[0].outerHTML = Item.render();
    this.after_render();
  };
  const render = () => {
    const view = `
          <article class="item" id="${props.id}">
            <h2 class="item-title">${props.title}</h2>
            <p class="item-description">${props.description}</p>
            <span class="item-priority">${props.priority}<span>
            <div class="item-button-wrap">
              <button name="item-done-button">done</button>
              <button name="item-edit-button">edit</button>
              <button name="item-delete-button">delete</button>
            </div>
          </article>
        `;
    return view;
  };
  const after_render = () => {

  };

  return render();
};

export default Item;
