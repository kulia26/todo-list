import Header from './Header';

const Main = {
  render: () => {
    const view = `
            <section class="main">
                ${Header.render()}
            </section>
        `;
    return view;
  },
  after_render: () => {
    /*
        document.getElementById("myBtn").addEventListener ("click",  () => {
            console.log('Yo')
            alert('Yo')
        })
        */
  },

};

export default Main;
