function lockedProfile() {
    Array.from(document.querySelectorAll(".profile button")).forEach((button) =>
     button.addEventListener("click", onClick))

    function onClick(event){

        const parent=event.target.parentElement;
        const unlocked = parent.querySelector('input[value="unlock"]')

        if(unlocked.checked){
            const hiddenDiv = parent.querySelector("div")
            hiddenDiv.style.display = hiddenDiv.style.display === "block" ? "none" : "block";

            event.target.textContent = event.target.textContent === "Show more" ? "Hide it" : "Show more";
        }
    }
}