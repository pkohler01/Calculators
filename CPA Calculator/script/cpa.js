function calcCPC() {
	var clicks = document.getElementById('clicks').value;
	var cost = document.getElementById('cost').value;
	var budget = document.getElementById('budget').value;
		
    //math
    result = cost/clicks;
    document.getElementById('budget').value = result;
    document.getElementById('cpcformula').style.display = 'block';
    document.getElementById('budget').style.display = 'block';         
}
    
function calcClear() {
    document.getElementById('budget').style.display = 'none';
	document.getElementById('cpcformula').style.display = 'none';
	document.getElementById('clicks').value = '';
	document.getElementById('cost').value = '';
	document.getElementById('budget').value ='';


}

