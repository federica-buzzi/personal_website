import './style.scss';
import { home } from './pages/home';
import { federicaBuzzi } from './pages/federicaBuzzi';
import { UXProjects } from './pages/UXProjects';
import { designProjects } from './pages/designProjects';
import { curatorialProjects } from './pages/curatorialProjects';
import { writing } from './pages/writing';

home();

document.body.addEventListener('click', (e) => {
  if (e.target.matches('#toHome')) {
    e.preventDefault();
    home();
  } else if (e.target.matches('#toFedericaBuzzi')) {
    e.preventDefault();
    federicaBuzzi();
  } else if (e.target.matches('#toUXProjects')) {
    e.preventDefault();
    UXProjects();
  } else if (e.target.matches('#toDesignProjects')) {
    e.preventDefault();
    designProjects();
  } else if (e.target.matches('#toCuratorialProjects')) {
    e.preventDefault();
    curatorialProjects();
  } else if (e.target.matches('#toWriting')) {
    e.preventDefault();
    writing();
  } else if (e.target.matches('.backSign')) {
    e.preventDefault();
    home();
  }
});
