T = node_modules/.bin/duo-test
TESTS = $(filter-out test/tests.js, $(wildcard test/*.js))
SRC = index.js

build.js: test/tests.js
	duo --root . --type js < $< > $@

test/tests.js: $(SRC) $(TESTS)
	@echo '// GENERATED FILE: DO NOT EDIT!' > $@
	@$(foreach test, $(TESTS), echo 'require("./$(test)");' >> $@;)

test: test-browser

test-node:
	node_modules/.bin/mocha test/index.js --reporter spec

test-phantomjs: build.js
	@$(T) phantomjs --reporter spec

test-browser: build.js
	@$(T) browser

test-saucelabs: build.js
	@$(T) saucelabs -b safari:6..stable,chrome:35..stable,firefox:29..stable,ie:8..stable

clean:
	rm -rf test/tests.js build.js components

.PHONY: clean test test-phantomjs test-browser