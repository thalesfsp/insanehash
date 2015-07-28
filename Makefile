### Run tests for insanehash
# Author: Thales Pinheiro
# Since: 07/28/2015
# Basic usage:
#  make testCLI
#  make testPackage
#  make test

ifneq (,)
This makefile requires GNU Make.
endif

testCLI:
	./test.sh

testPackage:
	./node_modules/mocha/bin/mocha test.js

test:
	./test.sh && ./node_modules/mocha/bin/mocha test.js

.PHONY: test testPackage testCLI
