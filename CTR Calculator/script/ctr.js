function calcCPM() {
	var impressions = document.getElementById('impressions').value;
	var clicks = document.getElementById('clicks').value;
	
	if (impressions == '' || clicks == ''){
		document.getElementById('warning').style.display = 'block';
	} else {
		document.getElementById('warning').style.display = 'none';
		
		//math
		result = clicks / impressions;
		document.getElementById('ctr').value = result;
		document.getElementById('ctr').style.display = 'block';
	}            
}

function calcClear() {
	document.getElementById('impressions').value = '';
	document.getElementById('clicks').value = '';
	document.getElementById('ctr').value = '';
	document.getElementById('warning').style.display = 'none';
	document.getElementById('ctr').style.display = 'none';
}
