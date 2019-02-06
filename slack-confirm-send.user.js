// ==UserScript==
// @name slack-confirm-send
// @namespace https://github.com/kotarac
// @description confirm before sending messages
// @include https://*.slack.com/**
// @version 1
// @grant none
// ==/UserScript==

const submit = TS.view.submit

function patch () {
  TS.view.submit = function () {
    confirm('confirm send') && submit()
  }
}

patch()

setInterval(patch, 1000)
