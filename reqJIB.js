// ==UserScript==
// @name JIB-Auto-Buy
// @namespace Script Runner Pro
// @match https://jib.co.th/web/cart* 
// @match https://www.jib.co.th/web/cart* 
// @match https://jib.co.th/web/cart/confirm/* 
// @match https://www.jib.co.th/web/cart/confirm/* 
// @match https://www.jib.co.th/web/cart/pay/*
// @match https://jib.co.th/web/cart/pay/*
// @grant none
// ==/UserScript==
window.onload = function afterWebPageLoad() {
    var isPress1 = false;
    var isPress2 = false;
    var isPress3 = false;
    var isPress4 = false;
    setInterval(autoBuy, 500);
    function autoBuy() {
            if (document.querySelectorAll("a.btn.btn-primary.btn-md.cart-link").length > 0) {
                if (!isPress1) {
                    document.querySelectorAll("a.btn.btn-primary.btn-md.cart-link")[1].click();
                    isPress1 = true;
                }
            } else if (document.querySelectorAll("button#btn_next.btn.btn-primary.normal").length > 0) {
                if (!isPress2) {
                    document.querySelectorAll("button#btn_next.btn.btn-primary.normal")[0].click();
                    isPress2 = true;
                }
            } else if (document.querySelectorAll("input#order_pay_type_sub_10_menu28.order_pay_sub").length > 0) {
                if (!isPress3) {
                    document.querySelectorAll("input#order_pay_type_sub_10_menu28.order_pay_sub")[0].click();
                    document.querySelectorAll("a#next_refer.btn.btn-primary.btn-md")[0].click();
                    isPress3 = true;
                }
            } else if (document.querySelectorAll("span.w_font").length > 0) {
                if (!isPress4) {
                    document.querySelectorAll("span.w_font")[1].click();
                    isPress4 = true;
                }
            }
    }
};
