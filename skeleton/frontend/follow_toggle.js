function FollowToggle(el) {
    this.el = el;
    this.userId = $(el).attr("data-userid");
    this.followState = $(el).attr("data-followstate");
    this.render();
    console.log("FollowToggle constructed");
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
            url: user_follow(this.userID),
            method: "POST"
        })
    }, 

    unfollow: function() {
        return $.ajax({
            url: user_follow(this.userID),
            method: "DELETE"
        })
    }
}

module.exports = FollowToggle;