// ==UserScript==
// @name AutoBuyThisshop
// @namespace Script Runner Pro
// @match https://thisshop.com/item/detail* 
// @match https://www.thisshop.com/item/detail* 
// @match https://thisshop.com/app/shopcart/*
// @match https://www.thisshop.com/app/shopcart/*
// @grant none
// ==/UserScript==
//https://www.thisshop.com/app/shopcart/confirm.html?cc=<itemId>&cq=1
window.onload = function afterWebPageLoad() {
    setInterval(autoBuy, 500);
    function autoBuy() {
        if (window.location.href.indexOf("thisshop.com/app/shopcart/") > -1) {
                    document.querySelectorAll('div.order-submit-btn.js-buy')[0].click();
        }
    }
};
