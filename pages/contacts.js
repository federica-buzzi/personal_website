export const contacts = () => {
  const contentContacts = `
  <p class="runningTextContacts marquee">
      I'm looking for an internship starting in May
      2021&nbsp;~&nbsp; I'm looking for an internship
      starting in May 2021 &nbsp;~&nbspI'm looking for an internship starting in May 2021&nbsp;~&nbsp; I'm looking for an internship
      starting in May 2021 &nbsp;~&nbspI'm looking for an internship starting in May 2021&nbsp;~&nbsp; I'm looking for an internship
      starting in May 2021 &nbsp;~&nbsp
    </p>
  <section id="paragraphContacts">
    <span><a href="mailto:infofedericabuzzi@gmail.com" >infofedericabuzzi.at.gmail.com</a></span><br/>
    <span><a  href="https://www.linkedin.com/in/federica-buzzi/" target="_blank">Linkedin</a></span><br/>
    <span><a href="https://github.com/federica-buzzi" target="_blank">GitHub</a></span><br/> <br/>
    <span><a href="https://glitch.com/@federica-buzzi" target="_blank">Glitch</a></span><br/> <br/>
    <a href="#" id="toHome"><<</a>   
  </section>`;
  document.querySelector('main').innerHTML = contentContacts;
  function changeColorBody() {
    document.body.style.backgroundColor = 'white';
  }
  changeColorBody();
};
