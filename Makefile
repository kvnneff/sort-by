M = node_modules/.bin/mocha
D = node_modules/.bin/duo
T = node_modules/.bin/duo-test
SRC = index.js

build: node_modules
	mkdir -p build
	@$(D) --stdout index.js > build/build.js

build-test: node_modules build
	@$(D) --stdout test/index.js > test/build.js

node_modules:
	npm install

test: test-node

test-node:
	 @$(M) test/index.js --reporter spec

test-browser: node_modules
	$(MAKE) build-test
	@$(T) -B build/test.js -c 'make build-test' browser

clean:
	rm -rf test/tests.js build.js components node_modules

.PHONY: clean test clean test build
