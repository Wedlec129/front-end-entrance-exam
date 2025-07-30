import '../css/style.css'
import {createProfileSection} from "./components/photo-profile";
import {createNameSection} from "./components/name";
import {createLangsSection} from "./components/languages";
import {createExperienceSection} from "./components/experience";
import {createToolsSection} from "./components/tools";
import {createEduSection} from "./components/education";
import {createInterestsSection} from "./components/interests";
import {createContactSection} from "./components/contact";
import {createTopBar} from "./components/bar";

import {setEditableListener} from "./utils";
import {initSavePDFButton} from "./utils/save-pdf.js";

document.querySelector('#app').innerHTML =[
  createProfileSection(),
  createNameSection(),
  createLangsSection(),
  createExperienceSection(),
  createToolsSection(),
  createEduSection(),
  createInterestsSection(),
  createContactSection(),
  createTopBar()
].join('\n')

setEditableListener();
initSavePDFButton('#save-pdf')