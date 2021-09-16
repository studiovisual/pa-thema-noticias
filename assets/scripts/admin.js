(function(element) {
    const el = element.createElement;

    function customizeTaxonomySelector(OriginalComponent) {
        return function(props) {
            if(props.slug === 'xtt-pa-format')
                return el(window.DropdownTermSelector, { ...props });

            return el(OriginalComponent, { ...props });
        };
    }

    wp.hooks.addFilter('editor.PostTaxonomyType', 'adventistas-videos', customizeTaxonomySelector);
}) (
	window.wp.element,
	window.wp.components,
    window.wp.data,
    window.wp.i18n,
    window.lodash,
);