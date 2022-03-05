export const home = () => {
  const contentHome = `
  <div class="running-text running-text-contacts marquee runningTextContacts">
    <span>
      front-end developer &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      brussels &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      front-end developer &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      brussels &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      front-end developer &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      brussels &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      front-end developer &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      brussels &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      front-end developer &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
      brussels &nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
    </span>
  </div>  
  <nav>
    <ul class="main-nav">
      <li>
          <a id="toFedericaBuzzi">
            ☄&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Federica Buzzi 
          </a>
      </li>
      <li>
        <a href="https://github.com/federica-buzzi" target="_blank">
          { }&nbsp;&nbsp;Code
        </a>
      </li>
      <li>
        <a id="toUXProjects">
          🔎&nbsp;&nbsp;&nbsp;&nbsp;UX research
        </a>
      </li>
      <li>
        <a id="toDesignProjects">
          🖼&nbsp;&nbsp;&nbsp;&nbsp;Design
        </a>
      </li>
      <li>
        <a id="toWriting">
          ✎&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Writing
        </a>
      </li>
      <li>
        <a id="toCuratorialProjects">
          📘&nbsp;&nbsp;&nbsp;&nbsp;Curating
        </a>
      </li>
      <li>
        <a id="toContacts">
          🗩&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Connect
        </a>
      </li>
    </ul>
  </nav>
  <p class="credits">
    <a href= "http://velvetyne.fr/fonts/vg5000/"> typeface: VG5000</a>
  </p>`;
  document.querySelector('main').innerHTML = contentHome;
};
