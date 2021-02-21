import './style.scss';
import { home } from './pages/home';
import { contacts } from './pages/contacts';
import { federicaBuzzi } from './pages/federicaBuzzi';
import { codingProjects } from './pages/codingProjects';
import { curatorialProjects } from './pages/curatorialProjects';
import { writing } from './pages/writing';

home();

document.body.addEventListener('click', (e) => {
  if (e.target.matches('#toHome')) {
    e.preventDefault();
    home();
  } else if (e.target.matches('#toContacts')) {
    e.preventDefault();
    contacts();
  } else if (e.target.matches('#toFedericaBuzzi')) {
    e.preventDefault();
    federicaBuzzi();
  } else if (e.target.matches('#toCodingProjects')) {
    e.preventDefault();
    codingProjects();
  } else if (e.target.matches('#toCuratorialProjects')) {
    e.preventDefault();
    curatorialProjects();
  } else if (e.target.matches('#toWriting')) {
    e.preventDefault();
    writing();
  } else if (e.target.matches('.chevronHome')) {
    e.preventDefault();
    home();
  } else if (e.target.matches('.backSign')) {
    e.preventDefault();
    home();
  } else if (e.target.matches('#icon')) {
    if (document.body.style.backgroundColor !== 'white') {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      const blackText = document.querySelectorAll(
        '#toFedericaBuzzi, #toCodingProjects, #toCuratorialProjects, #toWriting, #icon, #toContacts',
      );
      for (let i = 0; i < blackText.length; i++) {
        blackText[i].style.color = 'black';
      }
      const blackRunningText = document.getElementsByClassName(
        'runningTextContacts',
      );
      blackRunningText[0].style.backgroundColor = 'black';
      blackRunningText[0].style.color = 'white';
    } else if (document.body.style.backgroundColor !== 'black') {
      document.body.style.backgroundColor = 'black';
      const whiteText = document.querySelectorAll(
        '#toFedericaBuzzi, #toCodingProjects, #toCuratorialProjects, #toWriting, #icon, #toContacts',
      );
      for (let i = 0; i < whiteText.length; i++) {
        whiteText[i].style.color = 'white';
      }
      const whiteRunningText = document.getElementsByClassName(
        'runningTextContacts',
      );
      whiteRunningText[0].style.backgroundColor = 'white';
      whiteRunningText[0].style.color = 'black';
    }
  }
});

document.body.addEventListener('mouseover', (e) => {
  if (e.target.matches('#toFedericaBuzzi, #toCodingProjects, #toCuratorialProjects, #toWriting')) {
    document.body.style.backgroundColor = 'black';
    const whiteText = document.querySelectorAll(
      '#toFedericaBuzzi, #toCodingProjects, #toCuratorialProjects, #toWriting, #icon, #toContacts',
    );
    for (let i = 0; i < whiteText.length; i++) {
      whiteText[i].style.color = 'white';
    }
    const whiteRunningText = document.getElementsByClassName(
      'runningTextContacts',
    );
    whiteRunningText[0].style.backgroundColor = 'white';
    whiteRunningText[0].style.color = 'black';
  }
});
