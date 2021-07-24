function calcCPM() {
	var impressions = document.getElementById('impressions').value;
	var cpm = document.getElementById('cpm').value;
	var budget = document.getElementById('budget').value;
	
	if (impressions != '' && cpm != '' && budget !='') {
		document.getElementById('warning').style.display = 'block';
		document.getElementById('warningb').style.display = 'none';
	} else if (impressions == '' && cpm == '' && budget == ''){
		document.getElementById('warningb').style.display = 'block';
		document.getElementById('warning').style.display = 'none';
	} else {
		document.getElementById('warning').style.display = 'none';
		document.getElementById('warningb').style.display = 'none';
		
		//math
		if (budget == '') {
			result = impressions * cpm / 1000;
			document.getElementById('budget').value = '\$' + result;
			document.getElementById('cpmformula').style.display = 'none';
			document.getElementById('impformula').style.display = 'none';
			document.getElementById('budgetformula').style.display = 'block';
		} else if (cpm == '') {
			result = budget/(impressions / 1000);
			document.getElementById('cpm').value = result;
			document.getElementById('cpmformula').style.display = 'block';
			document.getElementById('impformula').style.display = 'none';
			document.getElementById('budgetformula').style.display = 'none';
		} else if (impressions == '') {
			result = 1000 * (budget / cpm);
			document.getElementById('impressions').value = result;
			document.getElementById('cpmformula').style.display = 'none';
			document.getElementById('impformula').style.display = 'block';
			document.getElementById('budgetformula').style.display = 'none';
		}
	}            
}
    
function calcClear() {
	document.getElementById('impressions').value = '';
	document.getElementById('cpm').value = '';
	document.getElementById('budget').value ='';
	document.getElementById('warning').style.display = 'none';
	document.getElementById('warningb').style.display = 'none';
	document.getElementById('cpmformula').style.display = 'none';
	document.getElementById('impformula').style.display = 'none';
	document.getElementById('budgetformula').style.display = 'none';
}


					//<div id="cpmformula" style="display:none;">Formula: CPM = 1000 * Budget / Impressions</div>
					//<div id="impformula" style="display:none;">Formula: Impressions = 1000 * Budget / CPM</div>
					//<div id="budgetformula" style="display:none;">Formula: Budget = Impressions * CPM / 1000</div>