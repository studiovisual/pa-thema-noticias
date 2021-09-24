class CardPost extends window.Slim {

  constructor() {
    super();

    if(this.post && this.post.hasOwnProperty('excerpt')) {
        this.post.excerpt.rendered = this.post.excerpt.rendered.replace(/(<([^>]+)>)/gi, '');
        this.post.excerpt.rendered = this.post.excerpt.rendered.replace('[&hellip;]', '');
    }
  }

}
  
CardPost.useShadow = false;
CardPost.template = /*html*/ `
    <div class="pa-blog-item mb-3 border-0">
        <a href="{{ this.post.link }}" title="{{ this.post.title.rendered }}">
            <div class="row">
                <div *if="{{ this.post.featured_media }}" class="col-5 col-md-4">
                    <div class="ratio ratio-16x9">
                        <figure class="figure m-xl-0">
                            <img src="{{ this.post.featured_media }}" class="figure-img img-fluid rounded m-0 h-100 w-100" alt="{{ this.post.title.rendered }}">
                        </figure>	
                    </div>
                </div>

                <div class="col">
                    <div class="{{ this.post.featured_media ? 'card-body p-0' : 'card-body ps-4 pe-0 py-4 border-start border-5 pa-border' }}">

                        <h3 class="fw-bold h6 mt-xl-2 pa-truncate-4">{{ this.post.title.rendered }}</h3>

                        <p class="d-none d-xl-block m-0 pa-truncate-3">{{ this.post.excerpt.rendered }}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
`;
  
customElements.define('card-post', CardPost);
