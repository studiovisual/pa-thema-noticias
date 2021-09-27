import './card-post';

class LoadMore extends window.Slim {

  constructor() {
    super();
    
    this.posts = [];
    this.totalPages = 0;
    this.args = this.attributes.getNamedItem('args').nodeValue;
    this.url = new URL(`http://localhost/wp-json/wp/v2/${this.args}`);

    this.removeAttribute('args');

    this.loadMoreData();
  }

  onBeforeCreated() {
    this.template = this.attributes.getNamedItem('template').nodeValue;
    this.template = document.getElementById(this.template);

    this.constructor.template = '<div class="position-relative">';

    if(this.template)
      this.constructor.template += this.template.innerHTML;

    this.constructor.template += '<div class="load-more-trigger position-absolute bottom-0 w-100" style="height: 320px;"></div></div>';
  }

  registerObserver() {
    this.trigger = this.querySelector('.load-more-trigger');

    this.observer = new IntersectionObserver(
      (entries) => {
        if(entries[0].isIntersecting === true) {
          this.url.searchParams.set('page', this.url.searchParams.has('page') ? parseInt(this.url.searchParams.get('page')) + 1 : 1);
    
          this.loadMoreData();
        }
      }, 
      { threshold: [0] }
    );
    
    this.observer.observe(this.trigger);
  }

  loadMoreData() {
    const request = new XMLHttpRequest();
  
    request.open('GET', this.url.href, true);
    request.responseType = 'json';
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');

    request.onreadystatechange = () => { 
      if(request.readyState !== 4 || request.status !== 200)
        return;

      request.response.forEach(post => this.posts = [...this.posts, post]);

      if(this.totalPages == 0)
        this.totalPages = parseInt(request.getResponseHeader('X-WP-TotalPages'));
      if(!this.observer)
        this.registerObserver();
      if(this.totalPages == parseInt(this.url.searchParams.get('page')))
        this.observer.unobserve(this.trigger);
    };
  
    request.send();
  }

}
LoadMore.useShadow = false;

customElements.define('load-more', LoadMore);
