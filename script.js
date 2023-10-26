let word;
let string = "";

function dictionary() {
    if(document.getElementById('newWord') != null) {
        word = document.getElementById('newWord').value;
        string = string + word + " ";
    }
}

function searchWord() {
    if(document.getElementById('existWord') != null) {
        word = document.getElementById('existWord').value;
        if(string.indexOf(word) !== -1) {
            alert("This word can be found in the dictionary!")
        } else {
            alert("This word is not found in the dictionary!")
        }
    }
}

function resetInput() {
    let getValue= document.getElementById("newWord");
    if (getValue.value !="") {
        getValue.value = "";
    }   
    let getValue2 = document.getElementById("existWord");
    if (getValue2.value !="") {
        getValue2.value = "";
    } 
}
