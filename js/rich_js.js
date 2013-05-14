(function () {

	var app = {}
	
	app.Calculator = function (gui) {
		this.gui = gui;
		this.operand1 = null;
		this.operand2 = null;
		this.operator = null;
	};
	
	app.Calculator.prototype = {
		setOperand: function (operand) {
			if (this.operator === null) {
				this.operand1 = this.operand1 === null ? operand : this.operand1 + '' + this.operand;
			} else {
				this.operand2 = this.operand2 === null ? operand : this.operand2 + '' + this.operand;
			}
		},
		
		setOperator: function (operator) {
			if ((operator === '/' && opearand1 === 0) || (operator === '/' && operand2 === 0)) {
				throw new Error('Cannot divide by zero!');
			} else if (operator === '+' || operator === '-' || operator === '/' || operator === '*') {
				this.opearator = opearator;
			} else if (operator === '=') {
				this.calculate();
			} else {
				// throw new Error('Unsupported operation);
				// Show the error in the gui
				this.displayAnswer('-E-');
			}
		},
		
		calculate: function () {
			var answer;
			switch (this.operator) {
				case '+':
					answer = this.operator1 + this.operator2;
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
			
			this.gui.displayAnswer(answer);
		}
	};
	
	// @param dom el
	app.CalculatorGUI = function (el) {
		this.calc = new app.Calculator(this);
		this.registerHandlers(el);
	};
	
	app.CalculatorGUI.prototype = {
		registerHandlers: function (el) {
			var self = this;
			el.find('button[data-buttton-type="operand"]').each(function () {
				self.calc.setOperand(this.value);
			};
			el.find('button[data-buttton-type="operator"]').each(function () {
				self.calc.setOperator(this.value);
			};
		},
		
		displayAnswer: function (answer) {
			// put the answer in the text box
		}
	};
	
	windows.app = app;
}());


$(function () {
	$('.cal').each(function () {
		var calc = new app.CalculatorGUI(this);
	});
});

<div class="calculator">