var btnRep = document.querySelectorAll('.rep');

btnRep.forEach(function(btn){
	btn.addEventListener('click',function(e){
		e.target.parentElement.nextElementSibling.classList.toggle('hienthi');
		return false;
	});	
});
