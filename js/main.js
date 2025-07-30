import '../css/style.css'
import {createProfileSection} from "./components/photo-profile";
import {createNameSection} from "./components/name";
 

document.querySelector('#app').innerHTML =[
  createProfileSection(),
  createNameSection()
].join('\n')