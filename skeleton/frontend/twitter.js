const FollowToggle = require("./follow_toggle.js");

document.addEventListener("DOMContentLoaded", () => {
    let $followButtons = $("button.follow-toggle");
    $followButtons.each( (idx, el) => {
        let followButton = new FollowToggle(el);
    })
})