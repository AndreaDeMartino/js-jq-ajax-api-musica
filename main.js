// Attraverso una chiamata ajax all’Api di boolean avremo a disposizione una decina di dischi musicali. 
// Servendoci di handlebars stampiamo tutto a schermo.
// In questo momento non è importante la parte grafica.
// Bonus: Creare una select con i seguenti generi: pop, rock, metal e jazz. In base a cosa scegliamo nella select vedremo i corrispondenti cd.

$(document).ready(function() {
	var select = $('#selection');
	var cdContainer = $('.cds-container');

	// Change Values on Selection item
	select.change(function(){
		var genre = $(this).val();
		// Reset cds container
		cdContainer.children().remove();
		// Call Api
		$.ajax({
			url: 'https://flynn.boolean.careers/exercises/api/array/music',
			method: 'GET',
			success: function(data){
				var self = data.response;
				for (var i = 0; i < self.length; i++){
					if (self[i].genre == genre){
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
						cdContainer.append(html).hide().fadeIn(200);
					}
					
				}
			},
			error: function(){
				console.log('Api in errore');
			}
		})
	})

});