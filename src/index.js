const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;

registerBlockType( 'gtcb-blocks/custom-block', {

	attributes: {
		fullName: {
			type: 'array',
			source: 'children',
			selector: 'p'
		},
	},

	title: __( 'Custom Block', 'gutenberg-workshop' ),
	icon: 'megaphone',
	category: 'common',

	edit: ( props ) => {
		let { attributes , setAttributes, className } = props;

		const onChangeFullName = ( event ) => ( setAttributes( { fullName: event.target.value } ) );

		return ( <p onChange={ onChangeFullName }/>{ attributes.fullName }</p> );
	},
	save: () => ( <div>Hello World</div> )
} );
