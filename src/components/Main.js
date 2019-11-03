import Header from './Header';
import Footer from './Footer';
import Nav from './Nav';
import Form from './Form';
import Items from './Items';

const Main = {

  render: () => {
    const view = `
            ${Header.render()}
            ${Nav.render()}
            ${Form.render()}
            ${Items.render()}
            ${Footer.render()}
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
