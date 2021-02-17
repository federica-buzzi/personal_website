export const contacts = () => {
  const contentContacts = `
  <a href="#" class="runningTextContacts marquee">
      I'm looking for an internship starting in May
      2021&nbsp;~&nbsp;get in touch&nbsp;~&nbsp; I'm looking for an internship starting in May 2021 &nbsp;~&nbsp;get in
      touch&nbsp;~&nbsp;I'm looking for an internship starting in May to the 2
      July 2021 &nbsp;~&nbsp;get in touch&nbsp;~&nbsp; I'm looking for an
      internship starting in May 2021 &nbsp;~&nbsp;get in
      touch&nbsp;~&nbsp; I'm looking for an internship starting in May 2021 &nbsp;~&nbsp;get in touch&nbsp;~&nbsp;
    </a>
  <section id="paragraphContacts">
       You can find me on <a  href="https://www.linkedin.com/in/federica-buzzi/" target="_blank">Linkedin</a> or write me an
        <a href="mailto:infofedericabuzzi@gmail.com">email</a>.</br> My code is on <a href="https://github.com/federica-buzzi" target="_blank">GitHub</a> and
        <a href="https://glitch.com/" target="_blank">Glitch</a>. <br/> <br/>
        <a href="#" id="toHome"><<</a>
      </section>`;
  document.querySelector('main').innerHTML = contentContacts;
  function changeColorBody() {
    document.body.style.backgroundColor = 'white';
  }
  changeColorBody();
};
