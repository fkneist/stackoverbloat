// ==UserScript==
// @name         stackoverbloat
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://stackoverflow.com/questions/*
// @match        https://askubuntu.com/questions/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    document.body.style.background = "white";

    if (document.getElementsByTagName('header')) {
        console.log('sidebar')
        document.getElementsByTagName('header')[0].style.visibility = 'hidden';
    }

    if (document.getElementById('left-sidebar')) {
        document.getElementById('left-sidebar').style.visibility = 'hidden';
    }

    if (document.getElementById('sidebar')) {
        document.getElementById('sidebar').style.visibility = 'hidden';
    }

    if(document.querySelector('#question-header > div > a')){
       document.querySelector('#question-header > div > a').style.visibility = 'hidden';
    }

    var avatars = document.getElementsByClassName('gravatar-wrapper-32')
    for(var i = 0; i < avatars.length; i++){
        console.log(avatars[i])
        avatars[i].innerHTML = "";
        avatars[i].style.backgroundColor = "#eff0f1"
    }

})();
