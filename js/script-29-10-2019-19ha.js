// elementos que serão animados
var rectangle = document.querySelector('#rectangle');
var header = document.querySelector('.header');
var socialShareWrapper = document.querySelector('.socialShareWrapper');
var rightSideImgToFixed = document.querySelector('.rightSideImgToFixed');

// função que encontra a posição do topo dos elementos que serão animados
function findTop(element) {
  let rec = element.getBoundingClientRect();
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

	var photoOneTop = findTop(rightSideImgToFixed);

	y = window.scrollY || document.documentElement.scrollTop;

	console.log('coordenadas' + photoOneTop);

	if (photoOneTop <= 40) {
		rightSideImgToFixed.style.position = 'fixed';
		rightSideImgToFixed.style.top = 0;
		// rightSideImgToFixed.style.background = 'green';
		// rightSideImgToFixed.style.zIndex = eixoZ;
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
	};

	if (y < x) {
		rightSideImgToFixed.style.position = 'relative';
		// rightSideImgToFixed.style.background = 'lightgreen';
		console.log(rightSideImgToFixed);
	};

	// esconde e mostra social share bar on scroll
	if(y > 200) {
		socialShareWrapper.style.left = '80px';
	} else {
		socialShareWrapper.style.left = '-80px';
	};

	// esconde e mostra hero section on scroll
	if(y > 1500) {
		document.querySelector('.heroSection').style.display = 'none';
	} else {
		document.querySelector('.heroSection').style.display = 'grid';
	}

	console.log('tela:' + window.scrollY || document.documentElement.scrollTop);
	fixedPosition(document.querySelector('.heroSection'));

});



