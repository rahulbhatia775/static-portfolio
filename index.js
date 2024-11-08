document.getElementById("achievements").style.display = "none";
document.getElementById("fairgaze").style.display = "none";

document.getElementById("home").onclick = ()=>{
    document.getElementById("main").style.display = "block";
    document.getElementById("achievements").style.display = "none";
    document.getElementById("fairgaze").style.display = "none";
}

document.getElementById("ach").onclick = ()=>{
    document.getElementById("main").style.display = "none";
    document.getElementById("achievements").style.display = "block";
    document.getElementById("fairgaze").style.display = "none";
}

document.getElementById("fgz").onclick = ()=>{
    document.getElementById("main").style.display = "none";
    document.getElementById("achievements").style.display = "none";
    document.getElementById("fairgaze").style.display = "block";
}
