import '../css/style.css'
import {createProfileSection} from "./components/photo-profile";
 

document.querySelector('#app').innerHTML =[
  createProfileSection()
].join('\n')