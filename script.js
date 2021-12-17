
let popup=document.getElementById('popup');
let submit=document.getElementById('search');
let closebtn=document.getElementById('closebtn');

submit.addEventListener('click', showpop);
closebtn.addEventListener('click', hidepop);

function showpop(){
	popup.style.display="block";
}
function hidepop(){
	popup.style.display="none";
}