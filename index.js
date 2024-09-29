//display content inside the calculator screen

function displayContent(content){
    result.value += content
}

// clear calculator screen

function clearCalcScreen(){
    result.value = ""
}

//display result

function displayResult(){
    result.value = eval(result.value)
}

function clearContent(){
    result.value = result.value.slice(0,-1)
}

