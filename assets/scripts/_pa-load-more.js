function paLoadMore() {
	var page = 1;
	var btn = document.getElementById('load-more-trigger');

	// $(window).scroll(function() {

	//     if($(window).scrollTop() + $(window).height() >= $(document).height()) {

	//         page++;

	//         loadMoreData(page);

	//     }

	// });

	btn.addEventListener('click', function(event) {
		event.preventDefault();
		
		loadMoreData(page);
	});
}

function loadMoreData(page) {
	var request = new XMLHttpRequest();
	var params = {
		action: 'load_more',
	};

	request.open('POST', pa.ajaxurl, true);
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

	request.onload = function() {
		if(this.status >= 200 && this.status < 400) {
			console.log('success');
		} 
		else {
			// Response error
			console.log('error');
		}
	};

	request.onerror = function() {
		// Connection error
		console.log('error');
	};

	request.send(serializeObject(params));
}

function serializeObject(obj) {
    var serialized = [];

    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            serialized.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }

    return serialized.join('&');
};