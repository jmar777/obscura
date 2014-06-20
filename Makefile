src_files = $(shell find src -type f)
app_dest = /tmp/obscura.nw
jsx_bin = build/node_modules/.bin/jsx
stylus_bin = build/node_modules/.bin/stylus
traceur_bin = build/node_modules/.bin/traceur

run: build
	@rm -f $(app_dest)
	cd build && zip -rq $(app_dest) *
ifeq ($(shell uname), Linux)
	`which nw` $(app_dest)
else
	open -n -a node-webkit $(app_dest)
endif

build: $(src_files)
	@mkdir -p build
	@rsync -a \
		--exclude '*.jsx' --exclude 'view/third-party/' --exclude 'view/css/' \
		src/ build/
	@npm --prefix ./build install ./build
	@mkdir -p build/view/components
	@cat src/view/components/* | $(jsx_bin) > build/view/components/compiled.js
	@find build -type f -name '*.js' \
		! -path 'build/node_modules/*' ! -path 'build/.module-cache/*' \
		-exec $(traceur_bin) --out {} --script {} \;
	@mkdir -p build/view/third-party
	@cat src/view/third-party/*\.js > build/view/third-party/compiled.js
	@mkdir -p build/view/css
	@$(stylus_bin) -I src/view/css --include-css < src/view/css/obscura.styl > build/view/css/obscura.css

clean:
	rm -rf build

.PHONY: build clean run
