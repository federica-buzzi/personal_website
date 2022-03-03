export const UXProjects = () => {
  const contentUXProjects = ` 
  <div class="running-text marquee">
    <span>
      UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;UX research&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
    </span>  
  </div>
   <div class="page-container">
    <nav class="fixed-menu">
      <ul>
        <li>
          <a href="#">Coming soon</a>
        </li>
      </ul>
    </nav>
    <div class="content-container">
      <button class="back-sign backSign"><<</button>
      <section>
        <div class="coming-soon">Coming soon ! ⌛</div>
      </section>
    </div>`;
  document.querySelector('main').innerHTML = contentUXProjects;
};
