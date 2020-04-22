function calculateBill(){
	var costForCall = 0;
	var costForSms = 0;
	var exceed20 = 0;
	var exceed30 = 0;
	var  = 0;


	function setTheCallCost(callPrice){
		costForCall = callPrice;

	}
	function getTheCallCost(){
		return costForCall;
	}
	function setTheSmsCost(smsPrice){
		costForSms = smsPrice;
	}
	function getTheSmsCost(){
		return costForSms;
	}
	function setTotalFor20(orange){
		exceed20 = orange;
	}
	function getTotalFor20(){
		return exceed20;
	}
	function setTotalFor30(red){
		exceed30 = red;
	}
	function getTotalFor30(){
		return exceed30;
	}
	function mainTotal(){
		return costForCall + costForSms;
	}
	
	}
	return {
		setTheCallCost,
		getTheCallCost,
		setTheSmsCost,
		getTheSmsCost,
		setTotalFor20,
		getTotalFor20,
		setTotalFor30,
		getTotalFor30,
		mainTotal
	}

}