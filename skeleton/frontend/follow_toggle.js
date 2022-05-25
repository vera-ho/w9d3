function FollowToggle(el) {
    this.el = el;
    this.userId = $(this.el).attr("data-userid");
    this.followState = $(this.el).attr("data-followstate");

    this.render();
    $(this.el).on("click", (e) => {
        console.log("clicked")
        this.handleClick(e);
    })
    // $(this.el).on("submit", (e) => { this.handleClick(e) })
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
    debugger
    
    if(this.followState === "unfollowed") {
        console.log("click handled - unfollowed");
        ftUtil.follow(this.userId);
    } else {
        console.log("click handled - followed");
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