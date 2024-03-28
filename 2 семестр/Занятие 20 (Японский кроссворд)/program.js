window.addEventListener("load", program_code, false);
function program_code() {
	var ctx = canvas_example.getContext("2d");
	var w = canvas_example.width;
	var h = canvas_example.height;
	
	var debug = false;

	


	// создание игрового поля
	function create_field_random(n, m) {
		var field = [];
		for (var i = 0; i < n; i++) {
			field[i] = []
			for (var j = 0; j < m; j++) {
				var val = Math.round(Math.random())
				field[i][j] = {'val':val, 'selected':'?'} // ? V X
			}
		}
		return field;
	}
	function create_field_from_raw(field_raw, n, m) {
		var field = [];
		for (var i = 0; i < n; i++) {
			field[i] = []
			for (var j = 0; j < m; j++) {
				var val = field_raw[i][j];
				field[i][j] = {'val':val, 'selected':'?'} // ? V X
			}
		}
		return field;
	}

	var n, m;
	var field, cell_w, cell_h;
	var field_x, field_y, field_w, field_h;
	function create_field(n_problem) {
		var field_raw;
		if (n_problem == 1) {
			field_raw = [
				[1, 1, 0, 0, 0, 1, 1, ],
				[1, 1, 0, 0, 0, 1, 1, ],
				[1, 1, 0, 0, 0, 1, 1, ],
				[1, 1, 1, 1, 1, 1, 1, ],
				[1, 1, 0, 0, 0, 1, 1, ],
				[1, 1, 0, 0, 0, 1, 1, ],
				[1, 1, 0, 0, 0, 1, 1, ],
			]
			// m = field_raw.length;
			// n = field_raw[0].length;
			// field = create_field_from_raw(field_raw, n, m)
		} else if (n_problem == 2) {
			field_raw = [
				[1, 0, 0, 0, 1, 1, 1, ],
				[1, 1, 0, 1, 1, 1, 1, ],
				[1, 0, 0, 0, 1, 1, 1, ],
				[1, 1, 0, 1, 1, 1, 1, ],
				[1, 0, 0, 0, 1, 1, 1, ],
				[1, 1, 0, 1, 1, 1, 1, ],
				[1, 0, 0, 0, 1, 1, 1, ],
			]
			// m = field_raw.length;
			// n = field_raw[0].length;
			// field = create_field_from_raw(field_raw, n, m)
		} else if (n_problem == 3) {
			field_raw = [
				[1, 0, 1, 0, 1, 0, 1, ],
				[0, 1, 0, 1, 0, 1, 0, ],
				[1, 0, 1, 0, 1, 0, 1, ],
				[0, 1, 0, 1, 0, 1, 0, ],
				[1, 0, 1, 0, 1, 0, 1, ],
				[0, 1, 0, 1, 0, 1, 0, ],
				[1, 0, 1, 0, 1, 0, 1, ],
			]

		}
		m = field_raw.length;
		n = field_raw[0].length;
		field = create_field_from_raw(field_raw, n, m);

		// n = 7;	// количество столбцов
		// m = 7; // количество рядов
		// field = create_field_random(n, m);
		[left_label, top_label] = get_label_fields(field);

		// максимальная длина вектора левой подписи
		left_label_max_len = 0
		for (var i = 0; i < left_label.length; i++) {
			var len = left_label[i].length
			if (len > left_label_max_len) left_label_max_len = len;
		}

		// максимальная длина вектора верхней подписи
		top_label_max_len = 0
		for (var i = 0; i < top_label.length; i++) {
			var len = top_label[i].length
			if (len > top_label_max_len) top_label_max_len = len;
		}

		cell_w = w/(n + left_label_max_len)
		cell_h = h/(m + top_label_max_len)
		if (cell_w < cell_h) cell_h = cell_w
		else cell_w = cell_h

		field_x = left_label_max_len*cell_w
		field_y = top_label_max_len*cell_h
		field_w = n*cell_w;
		field_h = m*cell_h;

		canvas_example.width = cell_w * (n + left_label_max_len);
		canvas_example.height = cell_h * (m + top_label_max_len);

		canvas_example.style.display = 'inline'
		button_start1.style.display = 'none';
		button_start2.style.display = 'none';
		button_start3.style.display = 'none';
		draw();
	}
	button_start1.onclick = function() {
		create_field(1)
	}
	button_start2.onclick = function() {
		create_field(2)
	}
	button_start3.onclick = function() {
		create_field(3)
	}


	field = [
		[1, 1, 0, 0, 1, ],
		[0, 0, 1, 1, 1, ],
	]
	button_print_field.onclick = function() {

		var str = '[\n'
		for (var i = 0; i < n; i++) {
			str += '\t['
			for (var j = 0; j < m; j++) {
				var cell = field[i][j]
				if (cell['selected'] == 'V') {
					str += '1, '
				} else {
					str += '0, '
				}
			}
			str += '],\n'
		}
		str += [']']
		console.log(str)
	}



	function get_label(X) {
		var output = [];

		var t = 0;
		for (var i = 0; i < X.length; i++) {
			if (X[i]['val'] == 1) t++;
			if (X[i]['val'] == 0) {
				if (t != 0) {
					output.push(t)
					t = 0;
				}
			}
		}
		if (t != 0) {
			output.push(t)
		}

		return output;
	}

	function get_label_fields(field){

		var left_label = []
		for (var j = 0; j < m; j++) {
			var X = []
			for (var i = 0; i < n; i++) {
				X.push(field[i][j])
			}
			left_label.push(get_label(X))
		}

		var top_label = []
		for (var i = 0; i < n; i++) {
			var X = field[i]
			top_label.push(get_label(X))
		}

		return [left_label, top_label]

	}

	// selected: '?', 'V', 'X'



	
	


	// draw();


	function draw_left_label(label) {
		ctx.font = "24px serif";
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		ctx.fillStyle = '#000000';
		ctx.strokeStyle = '#000000';

		for (var i = 0; i < label.length; i++) {
			for (var j = 0; j < label[i].length; j++) {
				ctx.strokeRect(j*cell_w, field_y + i*cell_h, cell_w, cell_h);
				ctx.fillText(label[i][j], j*cell_w + cell_w/2, field_y + cell_h/2 + i*cell_h)
			}
		}
	}

	function draw_top_label(label) {
		ctx.font = "24px serif";
		ctx.textBaseline = "middle";
		ctx.textAlign = "center";
		ctx.fillStyle = '#000000';
		ctx.strokeStyle = '#000000';

		for (var i = 0; i < label.length; i++) {
			for (var j = 0; j < label[i].length; j++) {
				ctx.strokeRect(field_x + i*cell_w, j*cell_h, cell_w, cell_h);
				ctx.fillText(label[i][j], field_x + cell_w/2 + i*cell_w, j*cell_h + cell_h/2)
			}
		}
	}
	

	
	// рисование поля
	function draw(){
		ctx.clearRect(0, 0, w, h)

		draw_left_label(left_label);
		draw_top_label(top_label);

		// var cell_w = field_w/n;
		// var cell_h = field_h/m;

		for (var i = 0; i < n; i++) {
			for (var j = 0; j < m; j++) {
				var cell = field[i][j];

				var cell_x = field_x+ i*cell_w;
				var cell_y = field_y + j*cell_h;

				if (debug){
					if (cell['val'] == 0) {
						ctx.fillStyle = '#ffffff';
						ctx.fillRect(  cell_x, cell_y, cell_w, cell_h);
					}
					else if (cell['val'] == 1) {
						ctx.fillStyle = '#000000';
						ctx.fillRect(  cell_x, cell_y, cell_w, cell_h);
					}
				} else {
					if (cell['selected'] == '?') {
						ctx.fillStyle = '#ffffff';
						ctx.fillRect(  cell_x, cell_y, cell_w, cell_h);
					} else if (cell['selected'] == 'V') {
						ctx.fillStyle = '#000000';
						ctx.fillRect(  cell_x, cell_y, cell_w, cell_h);
					} else if (cell['selected'] == 'X') {
						ctx.fillStyle = '#000000';
						ctx.beginPath()
						ctx.moveTo(cell_x, cell_y)
						ctx.lineTo(cell_x + cell_w, cell_y + cell_h)
						ctx.stroke()

						ctx.beginPath()
						ctx.moveTo(cell_x + cell_w, cell_y)
						ctx.lineTo(cell_x, cell_y + cell_h)
						ctx.stroke()
					}
				}
				

				ctx.strokeRect(cell_x, cell_y, cell_w, cell_h);
				
			}
		}
	}

	// определить, решил ли игрок кроссворд
	function check_win() {
		for (var i = 0; i < n; i++) {
			for (var j = 0; j < m; j++) {
				// field[i][j] = {'val':val, 'selected':'?'} // ? V X
				var cell = field[i][j]

				if ((cell['val'] == 1) && (cell['selected'] != 'V')) {
					// не закрашена нужная ячейка
					return false
				}
				if ((cell['val'] == 0) && (cell['selected'] == 'V')) {
					// закрашена лишняя ячейка
					return false
				}

			}
		}

		return true;
	}
	

	canvas_example.onmousedown = function(e) {
		var coords = getMousePos(canvas_example, e);
		var x = coords.x;
		var y = coords.y;

		if  (
				(x < field_x)
				|| (y < field_y)
				|| (x > field_x + field_w)
				|| (y > field_y + field_h)
			)
		{
			return
		}

		var cell_x = Math.floor((x - field_x)/field_w*n)
		var cell_y = Math.floor((y - field_y)/field_h*m)

		// console.log(field[cell_x][cell_y]['val'])

		var cell = field[cell_x][cell_y];
		if (e.which == 1) {	  			// ЛКМ
			if (cell['selected'] == 'V') {
				cell['selected'] = '?'
			} else {
				cell['selected'] = 'V';
			}
		} else if (e.which == 3) {   	// ПКМ
			if (cell['selected'] == 'X') {
				cell['selected'] = '?'
			} else {
				cell['selected'] = 'X';
			}
			
		}

		draw();
		var is_win = check_win();
		if (is_win) {
			alert('Congratulations!!!')
		}

		// console.log(field);
	}

	function getMousePos(canvas, evt) {
	    var rect = canvas.getBoundingClientRect();
	    return {
	      x: evt.clientX - rect.left,
	      y: evt.clientY - rect.top
	    };
	}

}

