const FollowToggle = require("./follow_toggle.js");

document.addEventListener("DOMContentLoaded", () => {
    console.log("document event listener start");
    let $followButtons = $("button.follow-toggle");
    // $followButtons.each( el => {
    //     debugger
    //     let followButton = new FollowToggle(el);       // save these to an array?
    // })
    console.log("document event listener end");
})