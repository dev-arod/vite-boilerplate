import './main.scss';
import r2devLogo from '/src/img/logo-red.png';
import smallPic from '/src/img/photosmall.png';
import Alpine from 'alpinejs';

window.Alpine = Alpine;
Alpine.start();

import './navigation.js';
import './loop.js';

const photoSmall = document.getElementById('smallpic');
photoSmall.src = smallPic;
photoSmall.style.width = '200px';
