const { __ } = wp.i18n;
const { registerBlockType } = wp.blocks;
const { RichText } = wp.editor;

registerBlockType( 'gtcb-blocks/custom-block', {

	title: __( 'Custom Block', 'custom-blocks' ),
	icon: 'megaphone',
	category: 'common',

	attributes: {
		fullName: {
			type: 'array',
			source: 'children',
			selector: 'div'
		},
	},

	edit: ( props ) => {
		console.warn( 'props.attributes.fullName', props.attributes.fullName );
		let { attributes: { fullName } , setAttributes, className } = props;
		return (
			<RichText
				tagName="div"
				placeholder={ __( 'Full Name', 'custom-blocks' ) }
				value={ fullName }
				onChange={ ( value ) => setAttributes( { fullName: value } ) }
				className={ className }
			/>
		)
	},
	save: ( props ) => {
		console.warn( 'save', props );
		let { attributes: { fullName }, className } = props;
		return (
			<RichText.Content
				tagName="div"
				value={ fullName }
				className={ className }
			/>
		)
	}

} );
