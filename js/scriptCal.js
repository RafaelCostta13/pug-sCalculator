expressao = [];
result = null;
count = 0;
function numeros(value) {
	var i = expressao.length;
	if (parseInt(value) || parseFloat(value) || value == '.' || value == 0) {
		if (i == 0) {
			expressao[i] = value;
			document.getElementById('result').value = expressao.join('');
			console.log('indice : ' + i + ' valor expressao : ' + expressao[i]);
		} 
		if (i >= 1 && parseInt(expressao[i-1])) {
			expressao[i - 1] = expressao[i - 1] + '' + value;
			document.getElementById('result').value = expressao.join('');
			console.log('indice : ' + i + ' valor expressao : ' + expressao[i - 1]);
		}
		if (expressao[i-1] == '+' || expressao[i-1] == 'x' || expressao[i-1] == '%' || expressao[i-1] == '-') {
			expressao[i] = value;
			document.getElementById('result').value = expressao.join('');
			console.log('indice : ' + i + ' valor expressão : ' + expressao[i]);
		}
	} 
	if (value == '+' || value == 'x' || value == '%' || value == '-') {
		if (expressao[i-1] == '+' || expressao[i-1] == 'x' || expressao[i-1] == '%' || expressao[i-1] == '-') {
			expressao[i-1] = value;
			document.getElementById('result').value = expressao.join('');
		} else {
			expressao[i] = value;
			document.getElementById('result').value = expressao.join('');
			console.log('Indice : ' + i + ' valor:' + expressao[i]);
		}
	}
	count = count + 1;
	if (count >= 15) {
		console.log('dentro do IF');
		document.getElementById('result').style.fontSize = 'small'; 
	}
	console.log('Tamanho do array: ' + expressao.length + ' Expressao : ' + expressao);
}
	
function igual(){
	for (var i = 0; i <= expressao.length; i++) {
		if (expressao[i] == 'x') {
			var t = parseFloat(expressao[i-1]);
			var t2 = parseFloat(expressao[i+1]);
			result = t * t2;
			expressao[i-1] = result;
			expressao.splice(i, i+1);
			console.log('resultado : ' + result + ' Array : ' + expressao); 
			if (expressao.length > 1) {
			igual();
			console.log('chamando a funcao');
			}
		}
		if (expressao[i] == '%') {
			var t = parseFloat(expressao[i-1]);
			var t2 = parseFloat(expressao[i+1]);
			result = t / t2;
			expressao[i-1] = result;
			expressao.splice(i, i+1);
			console.log('resultado : ' + result); 
			if (expressao.length > 1) {
			igual();
			console.log('chamando a funcao');
			}
		}	
		if (expressao[i] == '+') {
			var t = parseFloat(expressao[i-1]);
			var t2 = parseFloat(expressao[i+1]);
			result = t + t2;
			expressao[i-1] = result;
			expressao.splice(i, i+1);
			console.log('resultado : ' + result); 
			if (expressao.length > 1) {
			igual();
			console.log('chamando a funcao');
			}
		}
		if (expressao[i] == '-') {
			var t = parseInt(expressao[i-1]);
			var t2 = parseInt(expressao[i+1]);
			result = t - t2;
			expressao[i-1] = result;
			expressao.splice(i, i+1);
			console.log('resultado : ' + result); 
			if (expressao.length > 1) {
			igual();
			console.log('chamando a funcao');
			}
		}
		console.log('Tamanho Array ' + expressao.length);
		console.log(expressao);
		document.getElementById('result').value = expressao.join();
	}	
}

function limpar() {
	expressao = [];
	count = 0;
	console.log(expressao);
	document.getElementById('result').value = 0;
}

function back(){
	expressao.pop();
	count = count - 1;
	document.getElementById('result').value = expressao.join();
}
