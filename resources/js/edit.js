/**
 * Block edit.
 *
 * @author    Justin Tadlock <justintadlock@gmail.com>
 * @copyright Copyright (c) 2022, Justin Tadlock
 * @link      https://github.com/x3p0-dev/x3p0-comments-title
 * @license   http://www.gnu.org/licenses/old-licenses/gpl-2.0.html
 */

// External dependencies.
import classnames from 'classnames';

// WordPress dependencies.
import {
	AlignmentControl,
	BlockControls,
	InspectorControls,
	useBlockProps,
} from '@wordpress/block-editor';

import { PanelBody, ToggleControl } from '@wordpress/components';

import { __, sprintf } from '@wordpress/i18n';

/**
 * Exports the block edit function.
 *
 * @since 1.0.0
 */
export default function Edit( {
	attributes: {
		textAlign,
		showPostTitle
	},
	setAttributes
} ) {
	const blockProps = useBlockProps( {
		className: classnames( {
			[ `has-text-align-${ textAlign }` ]: textAlign,
		} )
	} );

	const blockControls = (
		<BlockControls group="block">
			<AlignmentControl
				value={ textAlign }
				onChange={ ( value ) =>
					setAttributes( { textAlign: value } )
				}
			/>
		</BlockControls>
	);

	const inspectorControls = (
		<InspectorControls>
			<PanelBody title={ __( 'Title settings', 'x3p0-comments-title' ) }>
				<ToggleControl
					label={ __( 'Show post title', 'x3p0-comments-title' ) }
					checked={ showPostTitle }
					onChange={ ( value ) =>
						setAttributes( { showPostTitle: value } )
					}
				/>
			</PanelBody>
		</InspectorControls>
	);

	return (
		<>
			{ blockControls }
			{ inspectorControls }
			<h2 { ...blockProps }>
				{ sprintf(
					showPostTitle
						? __( '%s replies to "Post Title"', 'x3p0-comments-title' )
					 	: __( '%s replies', 'x3p0-comments-title' ),
					3
				) }
			</h2>
		</>
	);
}
