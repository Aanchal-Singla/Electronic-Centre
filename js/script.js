let sideBar=document.querySelector('.sidebar');
document.querySelector('#menu-btn').onclick = () =>{
	sideBar.classList.toggle('active');
} 	
document.querySelector('#close-side-bar').onclick = () =>{
	sideBar.classList.remove('active');
}

function display()
{
	document.getElementById("contentFaq0").style="display:block";	
}
function display1()
{
	document.getElementById("contentFaq1").style="display:block";

	
}
function display2()
{
	document.getElementById("contentFaq2").style="display:block";	
}
function display3()
{
	
	document.getElementById("contentFaq3").style="display:block";
	
}
function display4()
{
	document.getElementById("contentFaq4").style="display:block";
	
}