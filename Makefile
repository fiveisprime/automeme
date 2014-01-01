SRC = index.js lib/automeme.js $(wildcard spec/*.js)

test: $(SRC)
	@node node_modules/.bin/jshint $^ \
	--verbose
	@NODE_ENV=test node node_modules/.bin/mocha \
	--require should \
	--reporter spec \
	spec
