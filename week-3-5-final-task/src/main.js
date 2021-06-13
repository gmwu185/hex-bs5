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

import 'images/hezuo.svg';
import 'images/icon_good01.svg';
import 'images/icon_good02.svg';
import 'images/icon_good03.svg';
import 'images/icon_good04.svg';
import 'images/icon_heart.svg';
import 'images/img.jpg';
import 'images/news01.jpg';
import 'images/news02.jpg';
import 'images/news03.jpg';
import 'images/p1.jpg';
import 'images/p2.jpg';
import 'images/plan_img.jpg';
import 'images/produt_image.jpg';
import 'images/store_img.jpg';
import 'images/user_img01.jpg';
import 'images/user_img02.jpg';

/* 手機版贊助專案按鈕 ---------------------------------------------------------------- */
/** 參考資料
 * https://www.notion.so/js-a7767ef2caf24ee3af3ef5a29df80118
 */
let sponsorBtn = document.getElementById('sponsorBtn');
window.addEventListener("scroll",triggerSponsorBtn);
function triggerSponsorBtn(){
  if(window.pageYOffset > 400 && window.pageYOffset < 1500){
    sponsorBtn.classList.remove('d-none');
  }else{
    sponsorBtn.classList.add('d-none');
  }
}
/* 手機版贊助專案按鈕 ---------------------------------------------------------------- */
