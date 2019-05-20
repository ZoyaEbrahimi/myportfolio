function weatherCheck() {
	//alert("Text: " + $("#show").text());
	const cityName = $('#city').val();
	const myKey = '&appid=03e1fe22cd0d8984c45cafd9c30cf32b';
	const weatherAPILink = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + myKey;
	fetch(weatherAPILink)
		.then(response => response.json())
		.then(data => {
			console.log(data);
			let temparature =  data.main.temp - 273.15;
			htmlData = "Temparature is now: " + temparature + " Degree celcious";
			$('#show').html(htmlData);
		});
		window.onclick = myFunction;

		function myFunction() {
		  document.getElementsByTagName("BODY")[0].style.backgroundColor = "lightblue";
		}
}