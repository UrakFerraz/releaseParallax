// elementos que serão animados
var rectangle = document.querySelector('#rectangle');
var header = document.querySelector('.header');


// função que encontra a posição do topo dos elementos que serão animados
function findTop(element) {
  var rec = element.getBoundingClientRect();
  return rec.top;
};


// função que mantém o elemento no topo ao scrollar
function fixedPosition(el) {
	el.style.top = 0;
	el.style.position = 'fixed';
};



let container = document.querySelector('.container');


// variáveis contadoras
let x = 0;
let y = 0;
eixoZ = 20;
let checkScrollPos = 0;



// checa a posição do scroll a cada 500ms, somente para ocultar e mostrar o header
setInterval(checkScrollPosition, 1000);
function checkScrollPosition() {
	checkScrollPos = y;
	console.log(checkScrollPos);
};


// ações do evento scroll
window.addEventListener('scroll', function() {
	var photoOneTop = findTop(rectangle);
	y = window.scrollY || document.documentElement.scrollTop;
	console.log('coordenadas' + photoOneTop);
	if (photoOneTop <= 40) {
		rectangle.style.position = 'fixed';
		rectangle.style.top = 0;
		rectangle.style.background = 'green';
		rectangle.style.zIndex = eixoZ;
		console.log('glue');
		if(x === 0) {
			x = window.scrollY || document.documentElement.scrollTop;
		} else {
			console.log('let x' + x);
		};
	};
	if(y > checkScrollPos) {
		header.style.top = '-100px';
	} else {
		header.style.top = '0px';
	}
	if (y < x) {
		rectangle.style.position = 'relative';
		rectangle.style.background = 'lightgreen';
		console.log(rectangle);
	};
	console.log('tela:' + window.scrollY || document.documentElement.scrollTop);
	fixedPosition(document.querySelector('.heroSection'));
});



