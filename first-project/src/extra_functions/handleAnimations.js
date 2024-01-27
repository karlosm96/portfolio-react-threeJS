function initialStatesAnimations(animationNames, animationActions, conditionClamp, numRepetitions){
    animationNames.forEach(element =>{
        animationActions[element].clampWhenFinished = conditionClamp;
        animationActions[element].repetitions = numRepetitions;
    })
}

function activateAnimation(animationNames, animationActions, index, runCondition){
    //Conditions to activate animations (animationNotRunning && runCondition)
    if(!animationActions[animationNames[index]].isRunning() && runCondition){
        animationNames.forEach(element => {
            animationActions[element].reset().fadeIn(0.5).play();
        })  
    } else{
        animationNames.forEach(element => {
            animationActions[element].reset().fadeOut(1).stop();
        })
    }
}

// True for paused --- False for resume
function resumePausedAnimation(animationNames, animationActions, pauseCondition){
    animationNames.forEach(element => {
        animationActions[element].paused = pauseCondition;
    })
}

export { initialStatesAnimations, activateAnimation, resumePausedAnimation }