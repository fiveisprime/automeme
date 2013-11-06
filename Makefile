SRC = index.js lib/automeme.js spec/automeme-spec.js

test: $(SRC)
	@node node_modules/.bin/jshint $^ \
	--verbose
	@NODE_ENV=test node node_modules/.bin/jasmine-node \
	--verbose \
	--captureExceptions \
	spec
