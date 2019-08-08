const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gtcb-blocks/custom-block', {
	title: __( 'Custom Block', 'gutenberg-workshop' ),
	icon: 'megaphone',
	category: 'common',

	edit: () => ( <div>Hello World</div> ),
	save: () => ( <div>Hello World</div> )
} );
