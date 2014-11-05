M = node_modules/.bin/mocha
D = node_modules/.bin/duo
T = node_modules/.bin/duo-test
TESTS = $(filter-out test/tests.js, $(wildcard test/*.js))
SRC = index.js

build.js: test/tests.js
	@$(D) --root . --type js < $< > $@

test/tests.js: $(SRC) $(TESTS)
	@echo '// GENERATED FILE: DO NOT EDIT!' > $@
	@$(foreach test, $(TESTS), echo 'require("./$(test)");' >> $@;)

test: test-browser

test-node:
	 @$(M) test/index.js --reporter spec

test-browser: build.js
	@$(T) browser

dist: dist-build dist-minify

dist-build:
	@$(D) -v -g sortBy index.js > dist/sort-by.js

dist-minify: dist/sort-by.js
	@curl -s \
		-d compilation_level=SIMPLE_OPTIMIZATIONS \
		-d output_format=text \
		-d output_info=compiled_code \
		--data-urlencode "js_code@$<" \
		http://closure-compiler.appspot.com/compile \
		> $<.tmp
	@mv $<.tmp dist/sort-by.min.js

clean:
	rm -rf test/tests.js build.js components

.PHONY: clean test test-phantomjs test-browser