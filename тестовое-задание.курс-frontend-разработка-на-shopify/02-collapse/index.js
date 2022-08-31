var btn = document.querySelector('button[type=button]');
var text = document.querySelector('.collapsible__content');
var el = document.querySelector('.collapsible__button');
el.innerHTML = "Скрыть содержимое";
btn.onclick = function()
{
	if (el.innerHTML == "Скрыть содержимое"){
		appearance (1, 0);
		el.innerHTML = "Показать содержимое";}
	else 
	{
		appearance (0, 1);
		el.innerHTML = "Скрыть содержимое";}
}	

function appearance(opacityStart, opacityEnd){
	animation = text.animate([
		{opacity: opacityStart}, {opacity: opacityEnd}
	],{
		duration: 100,
		easing: 'linear',
		fill: 'forwards',
	},
	);
}