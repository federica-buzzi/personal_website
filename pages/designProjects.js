export const designProjects = () => {
  const contentDesignProjects = ` 
  <div class="running-text marquee">
      design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;design&nbsp;&nbsp;&nbsp;~&nbsp;&nbsp;&nbsp;
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
  document.querySelector('main').innerHTML = contentDesignProjects;
};
