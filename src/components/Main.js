import Header from './Header';
import Nav from './Nav';
import Form from './Form';
import Items from './Items';

const Main = {

  render: () => {
    const view = `
            ${Header.render()}
            ${Nav.render()}
            <section class="main">
                ${Form.render()}
            </section>
            ${Items.render()}
        `;
    return view;
  },
  after_render: () => {
    Nav.after_render();
    Form.after_render();
    Items.after_render();
  },

};

export default Main;
