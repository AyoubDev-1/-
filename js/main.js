const inputs = document.querySelectorAll(".input");


function addcl(){
	let parent = this.parentNode.parentNode;
	parent.classList.add("focus");
}

function remcl(){
	let parent = this.parentNode.parentNode;
	if(this.value == ""){
		parent.classList.remove("focus");
	}
}


inputs.forEach(input => {
	input.addEventListener("focus", addcl);
	input.addEventListener("blur", remcl);
});
 

  

function myfunction(){
	var Un= document.forms["myform"]["Uname"].value;
	var pass=document.forms["myform"]["pass"].value;

	if(Un=="ayoub" && pass=="1234"){
		window.location.href="index.html";
	}
	else if(Un==""  )
	{
		window.alert("مطلوب اسم المستخدم ");
	}
	else if(pass=" ")
	{
		window.alert("مطلوب  كلمة المرور ");

	}
	
}