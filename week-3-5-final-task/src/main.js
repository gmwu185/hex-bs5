import '@babel/polyfill';

/* bootstrap 5 -------------------------------------------------------------- */
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.js';
window.bootstrap = bootstrap; // 將 bootstrap 指向全域

/** bootstrap 在任何地方啟用彈出提示框
 * https://bootstrap5.hexschool.com/docs/5.0/components/popovers/
 */
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl);
});

/** bootstrap 在任何地方啟用工具提示
 * https://bootstrap5.hexschool.com/docs/5.0/components/tooltips/#example-enable-tooltips-everywhere
 */
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'));
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl);
});
/* /bootstrap 5 -------------------------------------------------------------- */

import 'scss/main.scss';
