//fix mobile toggle aria-label to switch open and close
window.addEventListener("load",e=>{
    let mobileToggle = document.querySelector("a[aria-label='open menu']")
    if(mobileToggle) {
        mobileToggle.addEventListener("click", function (e) { 
            if (mobileToggle.getAttribute("aria-expanded") == "false") {
                mobileToggle.setAttribute("aria-label", "open menu")
            } else {
                mobileToggle.setAttribute("aria-label", "close menu")
            }
        })

        mobileToggle.addEventListener("keydown", function (e) {
            if (event.keyCode, "Tab" != e.key) { 
                if (mobileToggle.getAttribute("aria-expanded") == "false") {
                    mobileToggle.setAttribute("aria-label", "open menu")
                } else {
                    mobileToggle.setAttribute("aria-label", "close menu")
                }
            }
        })
    }
})