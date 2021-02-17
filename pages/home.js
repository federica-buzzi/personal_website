export const home = () => {
  const contentHome = `
  <a href="#" class="runningTextContacts marquee">
      I'm looking for an internship starting in May
      2021&nbsp;~&nbsp;get in touch&nbsp;~&nbsp; I'm looking for an internship
      starting in May 2021 &nbsp;~&nbsp;get in
      touch&nbsp;~&nbsp;I'm looking for an internship starting in May to the 2
      July 2021 &nbsp;~&nbsp;get in touch&nbsp;~&nbsp; I'm looking for an
      internship starting in May 2021 &nbsp;~&nbsp;get in
      touch&nbsp;~&nbsp; I'm looking for an internship starting in May 2021 &nbsp;~&nbsp;get in touch&nbsp;~&nbsp;
    </a>
    <section id="paragraphIntro">
      Hi there!<br />
      I'm <a href="#" id="toFedericaBuzzi">Federica Buzzi</a>,<br/> a web developer based in Brussels. Check out my
      <a href="#" id="toCodingProjects">coding projects</a> and some of my
      <a href="#" id="toCuratorialProjects">curatorial projects</a> and
      <a href="#" id="toWriting">writing</a>.<br /><br />
    <a href="#"><i class= "fas fa-adjust" id="icon"></a></i> 
    </section>
    <div class="credits">
      ©2021 Federica Buzzi </br><a href= "https://github.com/raphaelbastide/Terminal-Grotesque">typeface: Terminal Grotesque</a>
    </div>;`;
  document.querySelector('main').innerHTML = contentHome;
  function changeColorBody() {
    document.body.style.backgroundColor = 'white';
  }
  changeColorBody();
};
