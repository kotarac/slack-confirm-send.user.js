// ==UserScript==
// @name slack-confirm-send
// @namespace https://github.com/kotarac
// @description confirm before sending messages
// @include https://*.slack.com/**
// @version 1
// @grant none
// ==/UserScript==

const submit = TS.view.submit
const clear = TS.view.clearMessageInput

function patch () {
  TS.view.submit = function () {
    const confirmed = confirm('confirm send')
    if (confirmed) {
      submit()
    } else {
      clear()
    }
  }
}

patch()

setInterval(patch, 1000)
