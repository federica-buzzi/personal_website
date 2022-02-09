export const contacts = () => {
  const contentContacts = `
  <div class="runningTextContacts marquee">
    <span>
      connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
    </span>  
    </div>
  <section id="paragraphContacts">
    <span><a href="mailto:infofedericabuzzi@gmail.com" >infofedericabuzzi.at.gmail.com</a></span><br/>
    <span><a  href="https://www.linkedin.com/in/federica-buzzi/" target="_blank">Linkedin</a></span><br/>
    <span><a href="https://github.com/federica-buzzi" target="_blank">GitHub</a></span><br/> <br/>
    <a href="#" id="toHome"><<</a>   
  </section>`;
  document.querySelector('main').innerHTML = contentContacts;
  function changeColorBody() {
    document.body.style.backgroundColor = 'white';
  }
  changeColorBody();
};
