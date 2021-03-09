export const home = () => {
  const contentHome = `
  <p class="runningTextContacts marquee">
      I'm looking for an internship starting in May
      2021&nbsp;~&nbsp; I'm looking for an internship
      starting in May 2021 &nbsp;~&nbspI'm looking for an internship starting in May 2021&nbsp;~&nbsp; I'm looking for an internship
      starting in May 2021 &nbsp;~&nbspI'm looking for an internship starting in May 2021&nbsp;~&nbsp; I'm looking for an internship
      starting in May 2021 &nbsp;~&nbsp;
  </p>
  <section id="paragraphIntro">
    Hi there!<br />
    I'm <a href="#" id="toFedericaBuzzi">Federica Buzzi</a>,<br/> a junior web developer based in Brussels. Check out my
    <a href="#" id="toCodingProjects">coding</a> projects and some of my <a href="#" id="toWriting">writing</a> and <a href="#" id="toCuratorialProjects">curatorial</a> projects.<br />
    Let's <a href="#" id="toContacts">connect</a>?<br /><br />
    <a href="#"><i class= "fas fa-adjust" id="icon"></a></i> 
  </section>
  <div class="credits">
    ©2021 Federica Buzzi<a href= "https://github.com/raphaelbastide/Terminal-Grotesque"> ~ typeface: Terminal Grotesque</a>
  </div>`;
  document.querySelector('main').innerHTML = contentHome;
  function changeBodyColor() {
    document.body.style.backgroundColor = 'white';
  }
  changeBodyColor();
};
