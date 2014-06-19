src_files = $(shell find src -type f)
app_dest = /tmp/obscura.nw
jsx_bin = build/node_modules/.bin/jsx
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
	@rsync -a --exclude '*.jsx' --exclude 'view/third-party/' src/ build/
	@npm --prefix ./build install ./build
	@$(jsx_bin) -x jsx src/ build/tmp
	@cat build/tmp/view/* > build/view/components.js
	@rm -rf build/tmp
	@find build -type f -name '*.js' \
		! -path 'build/node_modules/*' ! -path 'build/.module-cache/*' \
		-exec $(traceur_bin) --out {} --script {} \;
	@cat src/view/third-party/* > build/view/third-party.js

clean:
	rm -rf build

.PHONY: build clean run
