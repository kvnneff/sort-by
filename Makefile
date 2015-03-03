TESTS := ./test
BIN := ./node_modules/.bin

build: node_modules
	mkdir -p build
	@$(BIN)/duo --stdout lib/index.js > build/index.js

node_modules:
	npm install

build-test: build
	@$(BIN)/duo --stdout test/index.js > build/test.js

test: node_modules
	$(MAKE) build-test
	@$(BIN)/duo-test -B build/test.js -c 'make build-test' browser

clean:
	rm -rf test/tests.js build components node_modules

.PHONY: clean test build build-test