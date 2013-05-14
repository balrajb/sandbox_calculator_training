//Custom Javascript File for BUILDING A CALCULATOR

/*
Write some javascript in your normal style to and the follwing functionality.
1. 	When clicking an operand button (number) update the display with that buttons value.
2. 	When clicking another operand update the display with that buttons value and the previous value.
3. 	When clicking the clear button clear the display and reset it to 0.
4. 	When clicking the backspace button update the display value removing the last digit,
	Repeatedly cliking the backspace button will remove another single digit at a time.
*/
/*$(document).ready(function(e) {
	var input = $('input');
	var button =$('button').val();


	$('button').click(function() {
		var value = $(this).val();
		if(input.val() == 0) {
			input.val(value);
		}
		else {
			input.val(input.val()+value);
		}
	});
	$('#backspace').click(function() {
			input.val(input.val().slice(0,-1));
		if(input.val() == '') {
			input.val(0);
		}
	});
	$('#addition').click(function(){

	}

});*/



	$(document).ready(function(){
		$('button').click(function(event) {
			var input = $('input').val();
			var value = $(this).val();

			if($('input').val() == 0) {
				$('input').val(value);
			}
			else if(event.target.value == 'clear') {
				$('input').val(0);
			}
			else if (event.target.value == '=') {
				$('input').val(eval(input));
			}
			else {
				$('input').val(function(index,val){
					return val+event.target.value;
				});
			}
		});
		$('#backspace').click(function() {
			$('input').val($('input').val().slice(0,-1));
			if($('input').val() == '') {
				$('input').val(0);
			}
		});
	})
