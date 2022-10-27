import 'slim-js/dist/index';
import 'slim-js/dist/directives/all';
import './load-more';

window.replaceSrc = function(originalSrc) {
    if(window.pa.site_path == '/')
        return originalSrc;

    return `${window.pa.site_path}${originalSrc}`;
};
