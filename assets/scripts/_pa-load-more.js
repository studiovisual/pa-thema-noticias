function paLoadMore() {
	var btn = document.getElementById('load-more-trigger');
	var results = document.getElementById('load-more-results');
	var args = {};

	for(var i = 0; i < results.attributes.length; i++)
		if(results.attributes[i].name != 'id')
			args[results.attributes[i].name] = results.attributes[i].nodeValue.startsWith('[') ? JSON.parse(results.attributes[i].nodeValue) : results.attributes[i].nodeValue;

	// $(window).scroll(function() {

	//     if($(window).scrollTop() + $(window).height() >= $(document).height()) {

	//         page++;

	//         loadMoreData(page);

	//     }

	// });

	btn.addEventListener('click', function(event) {
		event.preventDefault();
		
		args.paged++;
		loadMoreData(args);
	});
}

function loadMoreData(args) {
	var request = new XMLHttpRequest();
	var params = {
		action: 'load_more',
		args: args,
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

function serializeObject(element, key, list) {
	var list = list || [];

	if(typeof(element) == 'object') {
	  for(var idx in element)
	  	serializeObject(element[idx], key ? key + '[' + idx + ']' : idx, list);
	}
	else
	  list.push(key + '=' + encodeURIComponent(element));
	
	return list.join('&');
}