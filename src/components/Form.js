
import Items from './Items';
const Form = {
  state: {
    type: 'create',
    visible: false,
  },
  update: () => {
    Form.state.visible = JSON.parse(localStorage.getItem('form-visible'));
    document.getElementsByClassName('form')[0].outerHTML = Form.render();
    Form.after_render();
  },
  render: () => {
    const view = `
        <div class="form" style="display:${Form.state.visible ? 'block' : 'none'}">
          Title:<input type="text" name="title" value=${Form.state.type === 'create' ? 'Title' : 'none'}>
          Title:<input type="text" name="description" value=${Form.state.type === 'create' ? 'Description' : 'none'}>
          <select class="form-priority" name="form-select-priority">
            <option value="high" selected>high</option>
            <option value="normal">normal</option>
            <option value="low">low</option>
          </select> 
          <div class="form-button-wrap">
              <button name="cancel-button">Cancel</button>
          </div>
          <div class="form-button-wrap">
              <button name="save-button">Save</button>
          </div>
        <div>
        `;
    return view;
  },
  cancelButtonHandler: () => {
    const button = document.getElementsByName('cancel-button')[0];
    button.addEventListener('click', () => {
      localStorage.setItem('form-visible', JSON.stringify(false));
      Form.update();
    });
  },
  saveButtonHandler: () => {
    const button = document.getElementsByName('save-button')[0];
    button.addEventListener('click', () => {
      const priorityEl = document.getElementsByName('form-select-priority')[0];
      const item = {
        title: document.getElementsByName('title')[0].value,
        description: document.getElementsByName('description')[0].value,
        priority: priorityEl.options[priorityEl.selectedIndex].value,
        id: `f${(+new Date()).toString(16)}`,
        status: "open",
      };
      const items = JSON.parse(localStorage.getItem('items'));
      items.push(item);
      localStorage.setItem('items', JSON.stringify(items));
      localStorage.setItem('form-visible', JSON.stringify(false));
      Form.update();
      Items.update();
    });
  },

  after_render: () => {
    Form.cancelButtonHandler();
    Form.saveButtonHandler();
  },
};

export default Form;
