/*  Code by André Tamane */

var bgcolors = ['#FE647B', '#FEDC8A', '#6ED7FD', '#f39c12', '#9FEF7A', '#FEA2F9'];
var $frase = '', $autor = '';
function openURL(url){
  window.open(url, 'Share', 'width=550, height=400, toolbar=0, scrollbars=1 ,location=0 ,statusbar=0,menubar=0, resizable=0');
}

function novaFrase(){
	$.ajax({
		headers: {
			"X-Mashape-Key": "ughRI7dKNumshqJ9uryzRqbcSN88p1QCFMrjsnMofkNV7Dgjny",
			"Content-Type": "application/x-www-form-urlencoded",
			Accept: "application/json"
		},
		url: 'https://andruxnet-random-famous-quotes.p.mashape.com/?cat=famous&count=1',
		success: function(resp){
			$frase = resp.quote;
			$autor = resp.author;
			
			$('#frase').text($frase);
			$('#autor').text($autor);
			
			//tweet the quote
			$('#tweethis').attr('href', 'https://twitter.com/intent/tweet?hashtags=freecodecamp&related=freecodecamp&text=' + encodeURIComponent('"' + $frase + '" ' + $autor));
			
			//change background color
			var cor = Math.floor(Math.random() * bgcolors.length);
			
			$("html body").animate({ backgroundColor: bgcolors[cor]}, 1000);
			
		}
		

	});
}

$('#novaFrase').on('click', novaFrase);

$(document).ready(function() {
	
	novaFrase();
	
	$('#tweethis').on('click', function() {
    
      openURL('https://twitter.com/intent/tweet?hashtags=freecodecamp&related=freecodecamp&text=' + encodeURIComponent('"' + $frase + '" ' + $autor));
    
  });
	
});