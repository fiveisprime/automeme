SRC = index.js lib/automeme.js $(wildcard spec/*.js)

test: $(SRC)
	@node node_modules/.bin/jshint $^ \
	--verbose
	@NODE_ENV=test node node_modules/.bin/mocha \
	--require should \
	--reporter spec \
	spec

coverage:
	@istanbul cover node_modules/.bin/_mocha -R spec

.PHONY: coverage