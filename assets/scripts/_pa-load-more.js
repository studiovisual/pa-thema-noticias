function paLoadMore() {
	var results = document.getElementById('load-more-results');
	var args = {};

	for(var i = 0; i < results.attributes.length; i++)
		args[results.attributes[i].name] = results.attributes[i].nodeValue.startsWith('[') ? JSON.parse(results.attributes[i].nodeValue) : results.attributes[i].nodeValue;
	
	observer(args, results);
}

function observer(args, results) {
	new IntersectionObserver(
		function(entries) {
			if(entries[0].isIntersecting === true) {
				console.log(123);
				args.paged++;
				loadMoreData(args, results);
			}
		}, 
		{ threshold: [0] }
	).observe(document.getElementById('load-more-trigger'));
}

function loadMoreData(args, results) {
	var request = new XMLHttpRequest();
	var params = {
		action: 'load_more',
		args: args,
	};

	request.open('POST', pa.ajaxurl, true);
	request.responseType = 'json';
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

	request.onload = function() {
		if(this.status >= 200 && this.status < 400) {
			results.innerHTML += this.response.results;

			if(this.response.more_pages)
				observer(args, results);
		}
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