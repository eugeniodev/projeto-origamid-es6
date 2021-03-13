import "whatwg-fetch";
import 'core-js/stable';
import 'regenerator-runtime/runtime';
import ScrollSuave from './modules/link-scroll.js';
import Accordion from './modules/acordionlist.js';
import TabNav from './modules/navtab.js';
import Modal from './modules/modal.js';
import Tooltip from './modules/tooltip.js';
import ScrollAnima from './modules/anime-scroll.js';
import DropDown from './modules/dropdown.js';
import MenuMobile from './modules/menumobile.js';
import Funcionamento from './modules/funcionamento.js';
import fetchAnimais from './modules/fetch-animais.js';
import fetchBitcoin from './modules/fetch-bitcoin.js';


const scrollSuave = new ScrollSuave('[data-anime="menu"] a[href^="#"]');
scrollSuave.init();

const acordion = new Accordion('[data-animate="acordion"] dt');
acordion.init();

const tabNav = new TabNav('[data-tab="menu"] li', '[data-tab="content"] section');
tabNav.init();

const modal = new Modal('[data-modal="abrir"]', '[data-modal="fechar"]', '[data-modal="conatiner"]');
modal.init();

const tooltip = new Tooltip('[data-toolTip]');
tooltip.init();

const scrollAnima = new ScrollAnima('[data-anime="scroll"]');
scrollAnima.init();

const dropDown = new DropDown('[data-dropdown]');
dropDown.init();

const menuMobile = new MenuMobile('[data-menu="button"]', '[data-menu="list"]');
menuMobile.init();

const funcionamentoHorario = new Funcionamento('[data-semana]', 'aberto');
funcionamentoHorario.init();

fetchAnimais('../js/animaisapi.json', '.numeros-grid');
fetchBitcoin('https://blockchain.info/ticker', '.btc-preco');