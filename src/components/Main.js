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
  afterRender: () => {
    Nav.afterRender();
    Form.afterRender();
    Items.afterRender();
  },

};

export default Main;
