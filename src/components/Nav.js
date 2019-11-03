import Form from './Form';
import Items from './Items';

const handleChange = () => {
  const input = document.getElementsByName('search-input')[0];
  input.addEventListener('change', () => {
    localStorage.setItem('query', input.value);
    Items.update();
  });

  const status = document.getElementsByName('select-status')[0];
  status.addEventListener('change', () => {
    localStorage.setItem('status', status.options[status.selectedIndex].value);
    Items.update();
  });

  const priority = document.getElementsByName('select-priority')[0];
  priority.addEventListener('change', () => {
    localStorage.setItem('priority', priority.options[priority.selectedIndex].value);
    Items.update();
  });
};

const createButtonHandler = () => {
  const button = document.getElementsByName('create-button')[0];
  button.addEventListener('click', () => {
    Form.setVisible(true);
    Form.update();
  });
};

const Nav = {
  render: () => {
    const view = `
          <nav>
            <div class="search-input-wrap">
              <input class="search-input" type="search" name="search-input" value="" placeholder="Type your query">
            </div>
            <div class="select-status-wrap">
              <select class="select-status" name="select-status">
                <option value="all" selected>all</option>   
                <option value="open">open</option> 
                <option value="done">done</option>
              </select>
            </div>
            <div class="select-priority-wrap">
              <select class="select-priority" name="select-priority">
                <option value="all" selected>all</option>   
                <option value="high">high</option>
                <option value="normal">normal</option>
                <option value="low">low</option>
              </select>
            </div>
            <div class="create-button-wrap">
              <button name="create-button">Create</button>
            </div>
          </nav>
        `;
    return view;
  },
  afterRender: () => {
    handleChange();
    createButtonHandler();
  },
};

export default Nav;
