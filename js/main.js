import '../css/style.css'
import {createProfileSection} from "./components/photo-profile";
import {createNameSection} from "./components/name";
import {createLangsSection} from "./components/languages";
 

document.querySelector('#app').innerHTML =[
  createProfileSection(),
  createNameSection(),
  createLangsSection()
].join('\n')