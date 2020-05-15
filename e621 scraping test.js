// ==UserScript==
// @name         e621 scraping test
// @namespace    http://tampermonkey.net/
// @version      0.1.1
// @description  try to take over the world!
// @author       AyOne
// @grant        none
// @require      https://code.jquery.com/jquery-3.5.1.min.js
// @include      https://e621.net/*
// ==/UserScript==


const testing_url = "https://e621.net/posts?tags=rating%3Aq";


(function() {
    $.ajax({ url: testing_url, success: function(data) {

    }});
})();