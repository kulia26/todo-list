
import Items from './Items';


const Form = {
  state: {
    item: {
      status: 'high',
    },
    visible: false,
    type: 'create',
  },
  setVisible: (visible) => {
    Form.state.visible = visible;
  },
  setItem: (item) => {
    Form.state.item = item;
  },
  setType: (type) => {
    Form.state.type = type;
  },
  dropItem: () => {
    Form.state.item = { status: 'high' };
  },
  update: () => {
    document.getElementsByClassName('form-wrap')[0].outerHTML = Form.render();
    Form.afterRender();
  },
  render: () => {
    const view = `
    <div class="form-wrap" style="display:${Form.state.visible ? 'block' : 'none'}">
        <div class="form">
        <h2 class="form-title">${Form.state.type === 'create' ? 'Create' : 'Edit'}</h2>
          <p>Title:<input type="text" name="title" value="${Form.state.type === 'create' ? '' : Form.state.item.title}"></p>
          <p>Description:<input type="text" name="description" value="${Form.state.type === 'create' ? '' : Form.state.item.description}"></p>
          <p>Priority
            <select class="form-priority" name="form-select-priority">
              <option value="high" ${(Form.state.item.priority === 'high' || Form.state.type === 'create') ? 'selected' : ''}>high</option>
              <option value="normal" ${Form.state.item.priority === 'normal' ? 'selected' : ''}>normal</option>
              <option value="low" ${Form.state.item.priority === 'low' ? 'selected' : ''}>low</option>
            </select> 
          </p>
          <div class="form-buttons-wrap">
            <div class="form-button-wrap">
            <button name="cancel-button">Cancel</button>
            </div>
            <div class="form-button-wrap">
                <button name="save-button">Save</button>
            </div>
          </div>
        </div>
      </div>
        `;
    return view;
  },
  cancelButtonHandler: () => {
    const button = document.getElementsByName('cancel-button')[0];
    button.addEventListener('click', () => {
      localStorage.setItem('form-visible', JSON.stringify(false));
      Form.setVisible(false);
      Form.dropItem();
      Form.update();
    });
  },
  saveButtonHandler: () => {
    const button = document.getElementsByName('save-button')[0];
    button.addEventListener('click', () => {
      const priorityEl = document.getElementsByName('form-select-priority')[0];
      const items = JSON.parse(localStorage.getItem('items'));

      if (Form.state.type === 'edit') {
        for (let i = 0; i < items.length; i += 1) {
          if (items[i].id === Form.state.item.id) {
            items[i].title = document.getElementsByName('title')[0].value;
            items[i].description = document.getElementsByName('description')[0].value;
            items[i].priority = priorityEl.options[priorityEl.selectedIndex].value;
            items[i].status = 'open';
          }
        }
      } else {
        const item = {
          title: document.getElementsByName('title')[0].value,
          description: document.getElementsByName('description')[0].value,
          priority: priorityEl.options[priorityEl.selectedIndex].value,
          id: `f${(+new Date()).toString(16)}`,
          status: 'open',
        };
        items.push(item);
      }

      localStorage.setItem('items', JSON.stringify(items));
      localStorage.setItem('form-visible', JSON.stringify(false));
      Form.setVisible(false);
      Form.dropItem();
      Form.update();
      Items.update();
    });
  },
  afterRender: () => {
    Form.cancelButtonHandler();
    Form.saveButtonHandler();
  },
};

export default Form;
