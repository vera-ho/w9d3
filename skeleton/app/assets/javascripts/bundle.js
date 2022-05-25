/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./frontend/follow_toggle.js":
/*!***********************************!*\
  !*** ./frontend/follow_toggle.js ***!
  \***********************************/
/***/ ((module) => {

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

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*****************************!*\
  !*** ./frontend/twitter.js ***!
  \*****************************/
const FollowToggle = __webpack_require__(/*! ./follow_toggle.js */ "./frontend/follow_toggle.js");

document.addEventListener("DOMContentLoaded", () => {
    console.log("document event listener start");
    let $followButtons = $("button.follow-toggle");
    $followButtons.each( (idx, el) => {
        let followButton = new FollowToggle(el);
    })
    console.log("document event listener end");
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map