if(document.querySelector("#btn")){
	var btn = document.querySelector("#btn")
	console.dir(btn)

	btn.addEventListener("click", function(){
	alert("You were succesfully registered")
	})
}


if(document.querySelector(".photo")){
	var photo = document.querySelector(".photo")
	console.dir(photo)
	var i = 0
	photo.children[i].style.display = "block"
	var next = document.querySelector("#next")
	next.addEventListener("click", function(){
		photo.children[i].style.display = "none"
		if(i>=2){
			i= 0
		} else[
			i++
		]
		
		photo.children[i].style.display = "block"
		
	})
	var back = document.querySelector("#backward")
	back.addEventListener("click", function(){
		photo.children[i].style.display = "none"
		if(i<=0){
			i= 2
		} else[
			i--
		]
		
		photo.children[i].style.display = "block"
	})
}




