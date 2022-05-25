const FollowToggle = require("./follow_toggle.js");

document.addEventListener("DOMContentLoaded", () => {
    console.log("document event listener start");
    let $followButtons = $("button.follow-toggle");
    $followButtons.each( (idx, el) => {
        let followButton = new FollowToggle(el);
    })
    console.log("document event listener end");
})