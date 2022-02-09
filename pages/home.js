export const home = () => {
  const contentHome = `
  <div class="runningTextContacts marquee">
    <span>
      hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;hello &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
    </span>
  </div>  
  <section id="paragraphIntro">
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
