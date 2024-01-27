var currentButtonId = 0;

document.querySelectorAll(".button").forEach((btn,index) => {
    const i = index;
    btn.onclick = function() { currentButtonId = i; updateButtons(i); }
})
window.addEventListener("keydown",(e)=>{
    const {key, keyCode, metaKey, shiftKey, altKey, ctrlKey} = e;
    if((key === "ArrowUp" || key === "ArrowLeft") || (key === "Tab" && shiftKey)){
        e.preventDefault();
        if (currentButtonId > 0) {
            currentButtonId--;
        }
        updateButtons(currentButtonId);
    }
    if((key === "ArrowDown" || key === "ArrowRight") || (key === "Tab" && !shiftKey)){
        e.preventDefault();
        if (currentButtonId < 3) {
            currentButtonId++;
        }
        updateButtons(currentButtonId);
    }
});

function updateButtons(currentId) {
    document.querySelectorAll(".button").forEach((btn,index) => {
        if (index === currentId) {
            if (!btn.classList.contains("selected")) {
                btn.textContent = "[ "+btn.textContent+" ]";
                btn.classList.add("selected");
            }
        } else {
            if (btn.classList.contains("selected")) {
                btn.textContent = btn.textContent.replace("[ ","").replace(" ]","");
                btn.classList.remove("selected");
            }
        }
    })
    updateScreens(currentId);
}

function updateScreens(currentId) {
    document.querySelectorAll(".screen").forEach((screen,index) => {
        if (index === currentId) {
            screen.style.display = "block";
        } else {
            screen.style.display = "none";
        }
    })
}



updateButtons(0);
