# InsaneHash

Since: 10/07/2011   
Author: Thales Pinheiro   

## Abstraction

**InsaneHash** implements the lastest SHA3 cryptographic hash algorithms from NIST Hash Competition[[1]](http://www.nist.gov/itl/csd/sha-100212.cfm) including the winner (**Keccak**)[[2]](http://csrc.nist.gov/groups/ST/hash/sha-3/winner_sha-3.html) based on the **Chris Drost** works.

## Features

* **Fast** algorithms with **low footprint**
* Choose your **flavor**:
	* **Keccak**, by Bertoni, Daemen, Peeters, and van Assche
	* BLAKE, by Aumasson, Henzen, Meier, and Phan
	* BMW (Blue Midnight Wish), by Gligoroski, Klima, Knapskog, El-Hadedy, Amundsen, and Mjølsnes
	* CubeHash, by Dan Bernstein.
	* Shabal, by Bresson, Canteaut, Chevalier-Mames, Clavier, Fuhr, Gouget, Icart, Misarsky, Plasencia, Paillier, Pornin, Reinhard, Thuillet, and Videau
	* Skein, by Bellare, Callas, Ferguson, Kohno, Lucks, Schneier, Walker, and Whiting
	* Half Skein, a 32-bit Skein-256-256 (non-compliant) version

## Installation

* Package `npm install insanehash --save`
* CLI `npm install -g insanehash`

## Utilization

### Package

1. Require the module `var ih = require('insanehash');`
2. Calling each algorithm will return the hash:
  * `ih.blake32('Hi!');` 
      * ceb42cb8ab21fe511b85ecd74933b9f4aafa4d1c67da0778b69e375245942314
  * `ih.shabal('Hi!');`
      * 0427065214b9a8ea2d79c73a1a2d02ea3f9c4f71d4c73a30ad2c0bc8b1c172d9
  * `ih.bmw('Hi!');`
      * 44fe7f399277b09b8e892a80522b833703abacd5fc7f71da6db96999ca4bdb06
  * `ih.skein('Hi!');`
      * 6dbe952ab5ec3bf45a82887953953e3220e1eab7ae9069ae548ac8561691378993210ca0cb0666656614ef858fca9893a9bb6fe149dca792c910d6518aecdd30
  * `ih.cubehash('Hi!');`
      * a206bffa3c77a6410270f061e6b264fd79d1a997c06d444ee1bba42cff2b66d3
  * `ih.halfskein('Hi!');`
      * 39edf053bf6be95f1af2476f83fbf9b71fa0e3188361def18c879a9f09370f8a
  * `ih.keccak('Hi!');`
      * 22dd5d47d9cb35a05e3022a7bac1a39547da7b303aba89cbe9205046d1f0762c

### CLI

1. `insanehash -b 'Hi!'`
	* ceb42cb8ab21fe511b85ecd74933b9f4aafa4d1c67da0778b69e375245942314'
2. `insanehash --blake32 'Hi!'`
	* ceb42cb8ab21fe511b85ecd74933b9f4aafa4d1c67da0778b69e375245942314'

_Notes:_ 

- _Use **single quotes** for the text!_
- _`insanehash -h` check all available options_
- _`insanehash -v` check the version_

## Tests

Clone this repository and choose your flavor (GNU Make, NPM or direct):

- To run both CLI and package tests:
	- `make test`
	- `npm run test`
- To run only CLI tests:
	- `make testCLI`
	- `npm run test:cli`
	- `./test.sh`
	- `sh test.sh`
- To run only package tests:
	- `make testPackage`
	- `npm run test:package`
	- `./node_modules/mocha/bin/mocha test.js`

_Notes:_

- _test.sh should be **755**. If don't just run `chmod a+x test.sh`_
- _make requires [GNU Make](http://www.gnu.org/software/make/)_
- _package test requires [Mocha](https://github.com/mochajs/mocha)_
