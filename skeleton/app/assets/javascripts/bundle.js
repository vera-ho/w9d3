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
    let $followButtons = $("button.follow-toggle");
    $followButtons.each( (idx, el) => {
        let followButton = new FollowToggle(el);
    })
})
})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map