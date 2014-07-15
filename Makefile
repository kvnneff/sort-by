build: components index.js
	@component build --dev

components: component.json
	@component install --dev

test:
	@./node_modules/mocha/bin/mocha --reporter spec

dist-build:
	@component build -s sortBy -o dist -n sort-by

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
	rm -fr build components

.PHONY: clean test build dist