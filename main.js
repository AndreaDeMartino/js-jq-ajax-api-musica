$(document).ready(function() {

// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.

$.ajax({
	url: 'https://flynn.boolean.careers/exercises/api/array/music',
	method: 'GET',
	success: function(data){
		var self = data.response;
		for (var i = 0; i < self.length; i++){

			var source = $('#cd-template').html();
			var template = Handlebars.compile(source);
			var cdContainer = $('.cds-container');

			var cd = ({
				poster: self[i].poster,
				title: self[i].title,
				author: self[i].author,
				year: self[i].year
			})

			var html = template(cd);
			cdContainer.append(html);
		}
	},
	error: function(){
		console.log('Api in errore');
	}
})

// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.
// Endpoint API
// https://flynn.boolean.careers/exercises/api/array/music

























});