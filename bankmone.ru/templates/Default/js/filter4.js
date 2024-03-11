$(document).ready(function(card){
	$("#slider_debet_card").slider({
		range: "min",
		value: 0,//Значение, которое будет выставлено слайдеру при загрузке
		min: 0,//Минимально возможное значение на ползунке
		max: 30,//Максимально возможное значение на ползунке
		step: 1,//Шаг, с которым будет двигаться ползунок
		slide: onSlide,
		stop : function() {
			$('.block-kol').fadeTo(0,1)
		}
		
	});
	
	function onSlide(e, ui) {
		$('.block-kol').fadeTo(0, 0.5);
		$(this).closest('.filter-block-card').find('.right-nomer-value').html(ui.value);
		setTimeout(showItems);
	}
	
	function showItems() {   
		const
		price = $('#slider_debet_card').slider('value');

	$('.card-offer').each(function() {
		const $this = $(this);
		$this.toggle(
			price <= parseInt($this.find('.cach').text().replace(/\D/g, '')) 
		);
	});

	$('.no-offer').toggle(!$('.card-offer:visible').length);
}

showItems();
});