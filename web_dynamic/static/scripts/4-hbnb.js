// script that is executed only when DOM is loaded using JQuery

let checked_box = {};
$(document).ready(function () {
    $('input:checkbox').change(function () {
	if ($(this).is(':checked_box')) {
	    checked_box[$(this).data('id')] = $(this).data('name');
	}
	else {
	    delete checked_box[$(this).data('id')];
	}
	$('div.amenities h4').html(function () {
	    let amenities = [];
	    Object.keys(checked_box).forEach(function (key) {
		amenities.push(checked_box[key]);
	    });
	    if (amenities.length === 0) {
		return ('&nbsp');
	    }
	    return (amenities.join(', '));
	});
	let post_data = {
		"Content-Type": "application/json";
		"post_data": "{}";
	}
	$.post("http://0.0.0.0:5001/api/v1/places_search/", post_data, function (data) {
	    //loop through the resuts
	    for (place in data.places)
		$(".places").add("article").text(place);
	});
	$('button').click(function () {
            $.post("http://0.0.0.0:5001/api/v1/places_search/", $('button').val(), function (data) {
               // display the returned data
	       $("places").text(data);
	    });
	});
    });
});
