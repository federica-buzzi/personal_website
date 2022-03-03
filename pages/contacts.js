export const contacts = () => {
  const contentContacts = `
  <div class="running-text running-text-contacts marquee">
    <span>
      connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;
    </span>
    <span>
      &nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;connect&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
    </span>  
  </div>
  <button class="back-sign back-sign-black backSign"><<</button>
  <nav class="main-nav contacts-nav">
    <ul>
      <li>
        <a href="mailto:infofedericabuzzi@gmail.com" >
          ✉&nbsp;&nbsp;&nbsp;&nbsp;Mail
        </a>
      </li>
      <li>
        <a href="https://www.linkedin.com/in/federica-buzzi" target="_blank">
          💬&nbsp;&nbsp;&nbsp;&nbsp;Linkedin
        </a>
      </li>
      <li>
        <a href="https://github.com/federica-buzzi" target="_blank">
          🐙&nbsp;&nbsp;&nbsp;&nbsp;GitHub
        </a>
      </li></br>
    </ul>
  </nav>`;
  document.querySelector('main').innerHTML = contentContacts;
};
