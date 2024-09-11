const screen = document.querySelector(".calcu-screen input");
const buttons = document.querySelector(".buttons");
let solve = "";
let screenSolve = "";
let answer = "";

function clickButton(e) {
    try {
        if (e.target.classList.contains("numbers") && answer !== "") {
            solve = "";
            answer = "";
            screenSolve = "";
        } else if (e.target.classList.contains("operator") && answer !== "") {
            solve = answer;
            screenSolve = answer;
            answer = "";
        }
    
        if (e.target.classList.contains("numbers") || e.target.classList.contains("operator")) {
            button = e.target.innerHTML;
            solve = solve + button;
            screenSolve = screenSolve + button;
            console.log(solve);
    
            if (e.target.classList.contains("numbers")) {
                screen.value = screenSolve;
            } else {
                screen.value = screenSolve.substring(0, screenSolve.length - 1);
                screenSolve = "";
            }
    
        } else if (e.target.classList.contains("equals")) {
            console.log(eval(solve));
            screen.value = eval(solve);
            answer = eval(solve);
    
        } else if (e.target.classList.contains("ac")) {
            solve = "";
            screenSolve = "";
            console.log("reset")
            screen.value = 0;
    
        } else if (e.target.classList.contains("de")) {
            if (answer == "") {
                solve = solve.substring(0, solve.length - 1);
                console.log(solve);
                screenSolve = screenSolve.substring(0, screenSolve.length - 1);
                screen.value = screenSolve;
            } else {
                screen.value = 0;
            }
        }
    } catch {
        console.log("theres something wrong");
        solve = "";
        screenSolve = "";
        screen.value = "Error";
    }

}

buttons.addEventListener("click", clickButton);