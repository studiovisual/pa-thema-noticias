class CardAuthor extends window.Slim {

  constructor() {
    super();

    if(!this.author)
        return;

    this.parseAvatar();
  }

  parseAvatar() {
    if(!this.author.hasOwnProperty('avatar') || 
        !this.author.avatar.hasOwnProperty('sizes') || 
        !this.author.avatar.sizes.hasOwnProperty('medium'))
        return;

    this.author.avatar = this.author.avatar.sizes.medium;
  }

}
  
CardAuthor.useShadow = false;
CardAuthor.template = /*html*/ `
    <div class="pa-author-item mb-3">
        <a href="{{ this.author.link }}" title="{{ this.author.name }}">
            <div class="row">
                <div class="{{ this.author.avatar ? 'col-auto' : 'd-none' }}">
                    <div class="ratio ratio-1x1">
                        <figure class="figure m-xl-0">
                            <img *if="{{ this.author.avatar }}" src="{{ this.author.avatar }}" class="figure-img img-fluid rounded m-0 h-100 w-100" alt="{{ this.author.name }}" />
                        </figure>	
                    </div>
                </div>

                <div class="col">
                    <div class="{{ this.author.featured_media_url['pa-block-render'] ? 'card-body p-0' : 'card-body ps-4 pe-0 py-4 border-start border-5 pa-border' }}">
                        <h3 class="fw-bold h6 mt-xl-2">{{ this.author.name }}</h3>

                        <p class="d-none d-xl-block m-0 pa-truncate-3">{{ this.author.excerpt.rendered }}</p>
                    </div>
                </div>
            </div>
        </a>
    </div>
`;
  
customElements.define('card-author', CardAuthor);
