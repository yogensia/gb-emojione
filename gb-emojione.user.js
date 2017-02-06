// ==UserScript==
// @name         GameBanana Emoji
// @namespace    http://gamebanana.com/members/1328950
// @version      0.01
// @description  Adds EmojiOne emojis to GameBanana
// @author       Yogensia
// @match        http://*.gamebanana.com/*
// @grant        GM_getResourceURL
// @require      https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js
// @require      https://cdn.jsdelivr.net/emojione/2.2.7/lib/js/emojione.min.js
// @resource     emojiCSS https://cdn.jsdelivr.net/emojione/2.2.7/assets/css/emojione.min.css
// ==/UserScript==

// Licensed under MIT License, for more info:
// https://raw.githubusercontent.com/yogensia/gb-emoji/master/LICENSE

// DOCUMENT OUTLINE
// 1. SETUP
// 2. CSS INIT
// 3. EMOJIONE



// SETUP
// ==================================================================

// variables
var GBUIT_VERSION = '0.01'; // script version
var GBUIT_EDGECSS = true; // use development version of CSS

console.log("GBEmoji: INIT");



// CSS INIT
// ==================================================================

// DOM ready
$(function() {

    // add CSS
	var emojiCSS = GM_getResourceURL('emojiCSS');
    $("head").append('<link rel="stylesheet" href="'+emojiCSS+'">');

});



// EMOJIONE
// ==================================================================

// use SVG
// emojione.imageType = 'svg';

// do not ignore ASCII smileys like :)
emojione.ascii = true;

$(function() {

	$('.RichText').each(function() {
        var source = $(this).html().replace(/<br>/g, '\n<br>').replace(/<div/g, '\n<div').replace(/<ul class="PostStamps/g, '\n<ul class="PostStamps');
        var preview = emojione.toImage(source);
        $(this).html(preview).addClass('GBEmoji');
	});

    console.log('GBEmoji: Processed '+$('.RichText').length+' .RichText elements.');

});