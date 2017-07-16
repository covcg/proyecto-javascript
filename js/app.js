var Calculadora = {
	keys: {
		0: '0',
		1: '1',
		2: '2',
		3: '3',
		4: '4',
		5: '5',
		6: '6',
		7: '7',
		8: '8',
		9: '9',
		punto: '.',
		sign: 's',
		mas: '+',
		menos: '-',
		por: '*',
		dividido: '/',
		raiz: 'r',
		igual: '=',
		on: 'o'
	},
	pantallaGuardada: '',
	operacionActual: '',
	pantalla: document.getElementById('display').textContent,
	teclas: {
		t0: document.getElementById('0'),
		t1: document.getElementById('1'),
		t2: document.getElementById('2'),
		t3: document.getElementById('3'),
		t4: document.getElementById('4'),
		t5: document.getElementById('5'),
		t6: document.getElementById('6'),
		t7: document.getElementById('7'),
		t8: document.getElementById('8'),
		t9: document.getElementById('9'),
		tpunto: document.getElementById('punto'),
		tsign: document.getElementById('sign'),
		tmas: document.getElementById('mas'),
		tmenos: document.getElementById('menos'),
		tpor: document.getElementById('por'),
		tentre: document.getElementById('dividido'),
		traiz: document.getElementById('raiz'),
		tigual: document.getElementById('igual'),
		ton: document.getElementById('on')
	},
	init: function() {
		this.teclas.t0.onclick = this.manejadorClick;
		this.teclas.t1.onclick = this.manejadorClick;
		this.teclas.t2.onclick = this.manejadorClick;
		this.teclas.t3.onclick = this.manejadorClick;
		this.teclas.t4.onclick = this.manejadorClick;
		this.teclas.t5.onclick = this.manejadorClick;
		this.teclas.t6.onclick = this.manejadorClick;
		this.teclas.t7.onclick = this.manejadorClick;
		this.teclas.t8.onclick = this.manejadorClick;
		this.teclas.t9.onclick = this.manejadorClick;
		this.teclas.tpunto.onclick = this.manejadorClick;
		this.teclas.tsign.onclick = this.manejadorClick;
		this.teclas.tmas.onclick = this.manejadorClick;
		this.teclas.tmenos.onclick = this.manejadorClick;
		this.teclas.tpor.onclick = this.manejadorClick;
		this.teclas.tentre.onclick = this.manejadorClick;
		this.teclas.traiz.onclick = this.manejadorClick;
		this.teclas.tigual.onclick = this.manejadorClick;
		this.teclas.ton.onclick = this.manejadorClick;
		document.onkeypress = this.manejadorTeclado;
	},
	manejadorTeclado: function(e) {
		Calculadora.manejarEvento(e.key);
	},
	manejadorClick: function(e) {
		Calculadora.manejarEvento(Calculadora.keys[e.target.id]);
	},
	manejarEvento: function(key) {
		console.log(key);
	},
	suma: function() {
		if (this.pantallaGuardada != '' && this.pantalla != '') {
		} else if (this.pantallaGuardada != '') {
		} else if (this.pantalla != '') {
		}
	},
	resta: function() {
		if (this.pantallaGuardada != '' && this.pantalla != '') {
		} else if (this.pantallaGuardada != '') {
		} else if (this.pantalla != '') {
		}
	},
	multiplica: function() {
		if (this.pantallaGuardada != '' && this.pantalla != '') {
		} else if (this.pantallaGuardada != '') {
		} else if (this.pantalla != '') {
		}
	},
	divide: function() {
		if (this.pantallaGuardada != '' && this.pantalla != '') {
		} else if (this.pantallaGuardada != '') {
		} else if (this.pantalla != '') {
		}
	},
	raiz: function() {
		if (this.pantallaGuardada != '' && this.pantalla != '') {
		} else if (this.pantallaGuardada != '') {
		} else if (this.pantalla != '') {
		}
	}
};

Calculadora.init();