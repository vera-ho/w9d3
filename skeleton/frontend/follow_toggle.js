function FollowToggle(el) {
    this.el = el;
    this.userId = $(this.el).attr("data-userid");
    this.followState = $(this.el).attr("data-followstate");

    this.render();
    $(this.el).on("click", (e) => {
        debugger
        console.log("clicked")
        this.handleClick(e);
    })
    // $(this.el).on("submit", (e) => { this.handleClick(e) })
    console.log("FollowToggle constructed");
    debugger
}

FollowToggle.prototype.render = function() {
    if(this.followState === "unfollowed") {
        this.el.textContent = "Follow!";
    } else if(this.followState === "followed"){
        this.el.textContent = "Unfollow!";
    } else {
        this.el.textContent = "Error!";
    }
    console.log("Button rendered");
}

FollowToggle.prototype.handleClick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    console.log("beep boop");
    if(this.followState === "unfollowed") {
        console.log("heyoooo")
        return ftUtil.newFollow();
    } else {
        return ftUtil.unfollow();
    }
}

const ftUtil = {
    newFollow: function() {
        return $.ajax({
            url: user_follow(this.userId),
            method: "POST"
        })
    }, 

    unfollow: function() {
        return $.ajax({
            url: user_follow(this.userId),
            method: "DELETE"
        })
    }
}

module.exports = FollowToggle;