(function() {

//-------constructor---//
	Calculator = function (el) {
		that = this;
		this.input1 = null;
		this.input2 = null;
		this.operator = null
		that.display = 0;
		that.init(el);
	};

//------prototype------//
	Calculator.prototype = {
		displayScreen:function () {
			$('input', '.display').val(that.display);
		},

//---checking if screen value = 0---------//
//--------methods-------------//
		updateDisplayInput:function (input) {
			if (this.operator === null) {
				(this.input1 === null) ? that.display = input : that.display = that.display + '' + input1;
			} else {
				(this.input2 === null) ? that.display = input : that.display = that.display + '' + input2;
			}

			if (input === 'clear') {
				that.display = 0;
			} else if(input === 'backspace') {
				that.display = $('input', '.display').val().slice(0,-1);
				if ($('input', '.display').val() === '') {
					that.display = 0;
				}
			}
			that.displayScreen();
		},
		setOperator: function (operator) {
            if ((operator === '/' && this.operand1 === '0') || (operator === '/' && this.operand2 === '0')) {
                return('-E-');
            } else if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
                this.operator = operator;
            } else if (operator === '=') {
                return this.calculation();
            } else {
                return('-E-');
            }
        },

		/*calculation: function {
					switch (this.operator) {
				case '+':
					answer = this.input1 + this.input2;
					break;
				case '-':
					answer = this.operator1 - this.operator2;
					break;
				case '/':
					answer = this.operator1 / this.operator2;
					break;
				case '*':
					answer = this.operator1 * this.operator2;
					break;
			}
			that.displayScreen(answer);
		},*/

		init:function (el) {
			$('button', el).click(function () {
				if ($('button').val != '=') {
				that.updateDisplayInput(this.value);
				}
				that.displayScreen();
			});
		},
	}
}());

$(document).ready(function () {

	//----- created new object-----//
	var $el =$('#calculator');
	 Calc = new Calculator($el);
});
