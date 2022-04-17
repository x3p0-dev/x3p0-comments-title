<?php
/**
 * Block class.
 *
 * Registers and renders the block type on the front end.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2022, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-comments-title
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

namespace X3P0\CommentsTitle;

use WP_Block;

class Block
{
        /**
         * Sets up object state.
         *
         * @since 1.0.0
         */
        public function __construct( protected string $path ) {}

        /**
         * Boots the component, running its actions/filters.
         *
         * @since 1.0.0
         */
        public function boot(): void
        {
                add_action( 'init', [ $this, 'register' ] );
        }

	/**
	 * Registers the block with WordPress.
	 *
	 * @since 1.0.0
	 */
        public function register(): void
        {
                register_block_type( $this->path . '/public', [
                        'render_callback' => [ $this, 'render' ]
                ] );
        }

	/**
	 * Renders the block on the front end.
	 *
	 * @since 1.0.0
	 */
        public function render( array $attr, string $content, WP_Block $block ): string
        {
		// Gets the post ID from the Comments Query Loop parent block.
                $post_id = absint( $block->context['postId'] );

        	$attr = wp_parse_args( $attr, [
                        'textAlign' => '',
			'showPostTitle' => true
        	] );

		// Get comments number.
		$number = absint( get_comments_number( $post_id ) );

		$text = _n( 'One reply', '%1$s replies', $number, 'x3p0-comments-title' );

		if ( $attr['showPostTitle'] && 0 === $number ) {
			$text = __( 'No replies to "%2$s"', 'x3p0-comments-title' );
		} elseif ( 0 === $number ) {
			$text = __( 'No replies', 'x3p0-comments-title' );
		} elseif ( $attr['showPostTitle'] ) {
			$text = _n( 'One reply to "%2$s"', '%1$s replies to "%2$s"', $number, 'x3p0-comments-title' );
		}

		// Get text.
		$text = sprintf( $text, number_format_i18n( $number ), get_the_title( $post_id ) );

		// Get text alignment class.
                $align = empty( $attr['textAlign'] )
                         ? ''
                         : "has-text-align-{$attr['textAlign']}";

		// Return the formatted block output.
                return sprintf(
                        '<h2 %s>%s</h2>',
                        get_block_wrapper_attributes( [
                                'class' => esc_attr( $align )
                        ] ),
			esc_html( $text )
                );
        }
}
