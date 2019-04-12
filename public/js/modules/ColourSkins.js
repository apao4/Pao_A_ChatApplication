function addDefaultMode(){
    var body = document.body.classList.remove("greenMode");
    var body = document.body.classList.remove("rustMode");
    var body = document.body.classList.remove("nightMode");
    var body = document.body.classList.add("defaultMode");
    var body = document.body.classList.remove("pinkMode");
    var body = document.body.classList.remove("sunsetMode");
}

function addNightMode(){
    var body = document.body.classList.remove("greenMode");
    var body = document.body.classList.remove("rustMode");
    var body = document.body.classList.add("nightMode");
    var body = document.body.classList.remove("defaultMode");
    var body = document.body.classList.remove("pinkMode");
    var body = document.body.classList.remove("sunsetMode");
}

function addRustMode(){
    var body = document.body.classList.remove("greenMode");
    var body = document.body.classList.add("rustMode");
    var body = document.body.classList.remove("nightMode");
    var body = document.body.classList.remove("defaultMode");
    var body = document.body.classList.remove("pinkMode");
    var body = document.body.classList.remove("sunsetMode");
}

function addGreenMode(){
    var body = document.body.classList.add("greenMode");
    var body = document.body.classList.remove("rustMode");
    var body = document.body.classList.remove("nightMode");
    var body = document.body.classList.remove("defaultMode");
    var body = document.body.classList.remove("pinkMode");
    var body = document.body.classList.remove("sunsetMode");
}

function addPinkMode(){
    var body = document.body.classList.remove("greenMode");
    var body = document.body.classList.remove("rustMode");
    var body = document.body.classList.remove("nightMode");
    var body = document.body.classList.remove("defaultMode");
    var body = document.body.classList.add("pinkMode");
    var body = document.body.classList.remove("sunsetMode");
}

function addSunsetMode(){
    var body = document.body.classList.remove("greenMode");
    var body = document.body.classList.remove("rustMode");
    var body = document.body.classList.remove("nightMode");
    var body = document.body.classList.remove("defaultMode");
    var body = document.body.classList.remove("pinkMode");
    var body = document.body.classList.add("sunsetMode");
}



addGreenMode.addEventListener('click', myFunction);