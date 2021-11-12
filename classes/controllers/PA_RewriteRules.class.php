<?php

class PaRewriteRules
{
    public function __construct()
    {
        // add_filter( 'do_parse_request', [$this, 'PostRewriteRules'], 3);
        // add_action( 'pre_post_link', [$this,'InitPostUrls'], 3, 3);
        // add_action( 'pre_post_link', [$this,'ReplacePostUrls'], 100, 3);
        add_action('init', [$this, 'LateInitNoticia'], 100);
        add_action('init', [$this, 'LateInitAuthor'], 100);
        add_action('init', [$this, 'reWriteInitAuthor'], 100);
        add_filter('pre_post_link', [$this, 'PrePostLink'], 10, 3);
    }

    public static function PrePostLink($permalink, $post)
    {
        if (is_object($post) && $post->post_type == 'post') {
            $original = get_option('permalink_structure');
            if ($permalink == $original) {
                $editorias = get_the_terms($post->ID, 'xtt-pa-editorias');
                $editoria = $editorias[0]->slug;
                $post_format = get_the_terms($post->ID, 'xtt-pa-format');
                $author = get_the_author_meta('user_login', $post->post_author);

                if ($post_format[0]->slug == 'artigo') {
                    $permalink = str_replace('/%postname%/', '/coluna/' . $author . '/%postname%/', $permalink);
                } else {
                    if ($editoria) {
                        $permalink = str_replace('/%postname%/', '/noticia/' . $editoria . '/%postname%/', $permalink);
                    }
                }
            }
        }

        return $permalink;
    }

    public static function LateInitNoticia()
    {
        $permalink = 'noticia/%editoria%/%postname%/';
        $permalink = str_replace('%editoria%', '([^/]+)', $permalink);
        $permalink = str_replace('%postname%', '([^/]+)', $permalink);
        $permalink .= '?$';
        $rewrite_redirect = 'index.php?name=$matches[2]&xtt-pa-editorias=$matches[1]';
        $permalink = add_rewrite_rule($permalink, $rewrite_redirect, 'top');
        flush_rewrite_rules();
    }

    public static function LateInitAuthor()
    {
        $permalink = 'coluna/%author%/%postname%/';
        $permalink = str_replace('%author%', '([^/]+)', $permalink);
        $permalink = str_replace('%postname%', '([^/]+)', $permalink);
        $permalink .= '?$';
        $rewrite_redirect = 'index.php?name=$matches[2]&author=$matches[1]';
        $permalink = add_rewrite_rule($permalink, $rewrite_redirect, 'top');
        flush_rewrite_rules();
    }

    public static function reWriteInitAuthor()
    {
        $permalink = 'coluna/%author%';
        $permalink = str_replace('%author%', '([^/]+)', $permalink);
        $permalink .= '?$';
        $rewrite_redirect = 'index.php?author_name=$matches[1]';
        $permalink = add_rewrite_rule($permalink, $rewrite_redirect, 'top');
        flush_rewrite_rules();
    }
}
$PaRewriteRules = new PaRewriteRules();
