let startBtn = document.getElementById('start'); 
let stopBtn = document.getElementById('stop'); 
let resetBtn = document.getElementById('reset'); 

let hour = 0; 
let minute = 0; 
let second = 0; 
let count = 0; 

function stopWatch() { 
	if (timer) { 
		count++; 
		if (count == 100) { 
			second++; 
			count = 0; 
		} 

		if (second == 60) { 
			minute++; 
			second = 0; 
		} 

		if (minute == 60) { 
			hour++; 
			minute = 0; 
			second = 0; 
		} 

		let hrString = hour; 
		let minString = minute; 
		let secString = second; 
		let countString = count; 

		if (hour < 10) { 
			hrString = "0" + hrString; 
		} 

		if (minute < 10) { 
			minString = "0" + minString; 
		} 

		if (second < 10) { 
			secString = "0" + secString; 
		} 

		if (count < 10) { 
			countString = "0" + countString; 
		} 

		document.getElementById('hr_txt').innerHTML = hrString; 
		document.getElementById('min_txt').innerHTML = minString; 
		document.getElementById('sec').innerHTML = secString; 
		document.getElementById('count').innerHTML = countString; 
		setTimeout(stopWatch); 
	} 
}
// ----------start button code------------
startBtn.addEventListener('click', function () {
	timer = true; 
document.getElementById('hr').style.display = 'none'; 
document.getElementById('hr_txt').style.display = '';
document.getElementById('min').style.display = 'none'; 
document.getElementById('min_txt').style.display = '';
	stopWatch(); 
}); 

function calculateFutureTime() {
	const selectedHours = document.getElementById("hr").value;
	const selectedMinutes = document.getElementById("min").value;
	const now = new Date();
	// Calculate the new time
	const newTime = new Date(
	  now.getTime() + selectedHours * 3600000 + selectedMinutes * 6000
	);
  
	// Format the new time in a user-friendly format
	const formattedTime = newTime.toLocaleTimeString("en", {
	  hour: "2-digit",
	  minute: "2-digit",
	  hour12: true
	});
	document.getElementById("note_time").textContent = `Timer is:  ${formattedTime}`;
	
  }
// ----------stop button code------------
  stopBtn.addEventListener('click', function () { 
    timer = false; 
    document.getElementById('note_time').innerHTML = "Timer Is Stop..."; 

}); 
// ----------reset button code------------
resetBtn.addEventListener('click', function () { 
    timer = false; 
    hour = 0; 
    minute = 0; 
    second = 0; 
    count = 0; 
    document.getElementById('hr').innerHTML = "00"; 
    document.getElementById('min').innerHTML = "00"; 
    document.getElementById('sec').innerHTML = "00"; 
    document.getElementById('count').innerHTML = "00"; 
    document.getElementById('note_time').innerHTML = "Timer Is Clear..."; 

}); 
























stopBtn.addEventListener('click', function () { 
	timer = false; 
}); 

resetBtn.addEventListener('click', function () { 
	timer = false; 
	hour = 0; 
	minute = 0; 
	second = 0; 
	count = 0; 
	document.getElementById('hr_txt').innerHTML = "00"; 
	document.getElementById('min_txt').innerHTML = "00"; 
	document.getElementById('sec').innerHTML = "00"; 
	document.getElementById('count').innerHTML = "00"; 
}); 


