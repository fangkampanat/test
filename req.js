// ==UserScript==
// @name AutoBuyThisshop
// @namespace Script Runner Pro
// @match https://thisshop.com/item/detail* 
// @match https://thisshop.com/app/shopcart/*
// @grant none
// ==/UserScript==
//https://www.thisshop.com/app/shopcart/confirm.html?cc=<itemId>&cq=1
window.onload = function afterWebPageLoad() {
	var isBuyNow = false;
    var isChangePM = false;
	var isBuyComplete = false;
    setInterval(autoBuy, 500);
    function autoBuy() {
        if (window.location.href.indexOf("https://thisshop.com/item/") > -1) {
            if (!isBuyNow) {
                    document.querySelector('button#buyNow.button.orange').click();
                    isBuyNow = true;
            }
        } else if (window.location.href.indexOf("https://thisshop.com/app/shopcart/") > -1) {
           /* if (!isChangePM && document.getElementsByClassName('stage-term icofont ').length > 0) {
                    document.querySelectorAll('div.stage-term.icofont')[6].click();
                    isChangePM = true;
            } else { */
                if (!isBuyComplete) {
                    document.querySelectorAll('div.order-submit-btn.js-buy')[0].click();
                    isBuyComplete = true;
                }
            //}
        }
    }
};
