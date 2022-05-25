function FollowToggle(el) {
    this.el = el;
    this.userId = $(this.el).attr("data-userid");
    this.followState = $(this.el).attr("data-followstate");

    this.render();
    $(this.el).on("click", (e) => {
        console.log("clicked")
        this.handleClick(e);
    })
}

FollowToggle.prototype.render = function() {
    if(this.followState === "unfollowed") {
        this.el.textContent = "Follow!";
    } else if(this.followState === "followed"){
        this.el.textContent = "Unfollow!";
    } else {
        this.el.textContent = "Error!";
    }
}

FollowToggle.prototype.handleClick = function(e) {
    e.preventDefault();
    e.stopPropagation();
    debugger
    
    if(this.followState === "unfollowed") {
        ftUtil.follow(this.userId);
    } else {
        ftUtil.unfollow(this.userId);
    }
    this.render();
}

const ftUtil = {
    follow: function(userId) {
        debugger
        $.ajax({
            url: `/users/${ userId }/follow`,
            method: "POST"
        })
    }, 

    unfollow: function() {
        $.ajax({
            url: `/users/${ userId }/follow`,
            method: "DELETE"
        })
    }
}

module.exports = FollowToggle;