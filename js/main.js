import '../css/style.css'
import {createProfileSection} from "./components/photo-profile";
import {createNameSection} from "./components/name";
import {createLangsSection} from "./components/languages";
import {createExperienceSection} from "./components/experience";
 

document.querySelector('#app').innerHTML =[
  createProfileSection(),
  createNameSection(),
  createLangsSection(),
  createExperienceSection()
].join('\n')