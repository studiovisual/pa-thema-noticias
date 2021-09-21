function paLoadMore() {
	var results = document.getElementById('load-more-results');

	if(!results)
		return;

	var args = results.dataset.args;

	if(args.length == 0)
		return;

	var url = new URL('http://localhost/wp-json/wp/v2/' + args);

	observer(url, results);
}

function observer(url, results) {
	new IntersectionObserver(
		function(entries) {
			if(entries[0].isIntersecting === true) {
				url.searchParams.set('page', url.searchParams.has('page') ? url.searchParams.get('page') + 1 : 2);
	
				loadMoreData(url, results);
			}
		}, 
		{ threshold: [0] }
	).observe(document.getElementById('load-more-trigger'));
}

function loadMoreData(url, results) {
	var request = new XMLHttpRequest();

	request.open('GET', url.href, true);
	request.responseType = 'json';
	request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

	request.onload = function() {
		if(this.status >= 200 && this.status < 400) {
			results.innerHTML += this.response.results;

			if(this.response.more_pages)
				observer(url, results);
		}
	};

	request.send();
}