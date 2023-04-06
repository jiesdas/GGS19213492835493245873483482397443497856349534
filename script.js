function check(){
if(document.getElementById('code').value.toLowerCase() === "jack cole"){
alert('Good, now crack the code.');
setInterval(() => {document.getElementById('chTitle').innerHTML = "GPU 100%";}, 4000);
setInterval(() => {document.getElementById('chTitle').innerHTML = "CPU 100%";}, 3000);
setInterval(() => {document.getElementById('chTitle').innerHTML = "https://www.youtube.com/watch?v=F40Fm_omuww";}, 5000);
}
else{
document.getElementById('wrong').innerText = "Wrong!";
setTimeout(() => {document.getElementById('wrong').style.display = "none"}, 100);
setTimeout(() => {document.getElementById('wrong').style.display = "block"}, 200);
setTimeout(() => {document.getElementById('wrong').style.display = "none"}, 300);
setTimeout(() => {document.getElementById('wrong').style.display = "block"}, 400);
setTimeout(() => {document.getElementById('wrong').style.display = "none"}, 1000);
}
}