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


/* 手機版贊助專案按鈕 ---------------------------------------------------------------- */
/** 參考資料
 * https://www.notion.so/js-a7767ef2caf24ee3af3ef5a29df80118
 */
let sponsorBtn = document.getElementById('sponsorBtn');
window.onload = triggerSponsorBtn();
window.addEventListener("scroll",triggerSponsorBtn);
function triggerSponsorBtn(){
  if(window.pageYOffset > 400 && window.pageYOffset < 1500){
    sponsorBtn.classList.remove('d-none');
  }else{
    sponsorBtn.classList.add('d-none');
  }
}
/* /手機版贊助專案按鈕 ---------------------------------------------------------------- */


/* 驗證 (Validation) ---------------------------------------------------------- */
/** 自定義樣式
  * https://bootstrap5.hexschool.com/docs/5.0/forms/validation/#custom-styles
*/
(function () {
  'use strict'
  var forms = document.querySelectorAll('.needs-validation')
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
        form.classList.add('was-validated')
      }, false)
    })
})();
/* /驗證 (Validation) ---------------------------------------------------------- */


/* 圖片 ----------------------------------------------------------------------- */
/* url-loader 與 image-webpack-loader 使用圖片 */
/**
 * 已重 Scss 引入圖片
* 使用 image-webpack-loader 引入 webpack，於 Scss 中以 '~' 做為相對路徑處理
* 對應輸出路徑指向 assets/images/xx.xxx
 */
// import 'images/hezuo.svg';
// import 'images/icon_good01.svg';
// import 'images/icon_good02.svg';
// import 'images/icon_good03.svg';
// import 'images/icon_good04.svg';
// import 'images/icon_heart.svg';
// import 'images/img.jpg';
// import 'images/news01.jpg';
// import 'images/news02.jpg';
// import 'images/news03.jpg';
// import 'images/store_img.jpg';
// import 'images/user_img01.jpg';
// import 'images/user_img02.jpg';
// import 'images/plan_img.jpg';
/* /url-loader 與 image-webpack-loader 使用圖片 */

/* HTML 使用不讀取靜態圖片 */
/**
  * 使用 file-loader 直接由 src/assets/static-images/ 搬到 <編譯資料夾>/assets/static-images/
  * 圖片不做壓縮或 base64 優化處理
  * 用於 HTML 結構直接使用文字編輯器提示路徑
*/
// import 'static-images/p1.jpg';
// import 'static-images/p2.jpg';
// import 'static-images/produt_image.jpg';
/* /HTML 使用不讀取靜態圖片 */
/* / 圖片 ----------------------------------------------------------------------- */


/* CSS ---------------------------------------------------------------------- */
import 'scss/main.scss';
/* /CSS ---------------------------------------------------------------------- */
