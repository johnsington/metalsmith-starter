var 	harmonize	= require('harmonize')(),
	Metalsmith 	= require('metalsmith'),
	markdown	= require('metalsmith-markdown'),
	templates	= require('metalsmith-templates'),
	permalinks	= require('metalsmith-permalinks'),
	collections	= require('metalsmith-collections')

Metalsmith(__dirname)
	.use(collections({
		posts: {
			pattern: 'posts/*.md'
			}
	}))
	.use(markdown())
	.use(templates({
		engine: 'jade'
	}))
	.destination('./build')
	.build(function (err) {if(err) console.log(err)})
