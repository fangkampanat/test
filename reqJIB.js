// ==UserScript==
// @name JIB-Auto-Buy
// @namespace Script Runner Pro
// @match https://jib.co.th/web/product/product_list/* 
// @match https://www.jib.co.th/web/product/product_list/* 
// @grant none
// ==/UserScript==
window.onload = function afterWebPageLoad() {
    setInterval(autoBuy, 1000);
    function autoBuy() {
        if (window.location.href.indexOf("jib.co.th/web/product/product_list/") > -1) {
            if (document.querySelectorAll('a.buy_promo.btn-orange.text-capitalize.hidden').length > 0) {
                    document.querySelectorAll('a.buy_promo.btn-orange.text-capitalize.hidden')[0].click();
            }      
        } else if (window.location.href.indexOf("jib.co.th/web/cart/confirm/") > -1) {
            if (document.querySelectorAll('a#next_refer_confirm.btn.btn-success.btn-md').length > 0) {
                    document.querySelectorAll('a#next_refer_confirm.btn.btn-success.btn-md')[0].click();
            } 
        }
    }
};
