import "whatwg-fetch";
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ScrollSuave from './modules/link-scroll.js';
import Accordion from './modules/acordionlist.js';
import TabNav from './modules/navtab.js';
import initModal from './modules/modal.js';
import initTooltip from './modules/tooltip.js';
import initdropDown from './modules/dropdown.js';
import initMenuMobile from './modules/menumobile.js';
import initFuncionamento from './modules/funcionamento.js';
import initFetchAnimais from './modules/fetch-animais.js';
import initFetchBitcoin from './modules/fetch-bitcoin.js';
import initScroll from './modules/anime-scroll.js';

const scrollSuave = new ScrollSuave('[data-anime="menu"] a[href^="#"]');
scrollSuave.init();

const acordion = new Accordion('[data-animate="acordion"] dt');
acordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

initModal();
initTooltip();
initdropDown();
initMenuMobile();
initFuncionamento();
initFetchAnimais();
initFetchBitcoin();
initScroll();
