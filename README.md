#Your search over!

* Do you need a **fast** and **seriously** cryptography?
* Do you think that **MD6 is too old** (*and poor*) and want something like the **finalists of the CHAC** (Cryptographic Hash Algorithm Competition) of NIST for **SHA3**?
* Do you use the **NodeJS**, knows that there is good libraries out there, but what you **really want** is something **cutting edge**?

So **relax**, because your dream **was realized**! :)

## What's **insanehash?**
The **lastest SHA3 cryptographic hash algorithm from NIST Hash Competition** [1](http://www.nist.gov/itl/csd/sha-100212.cfm) [2](http://csrc.nist.gov/groups/ST/hash/sha-3/winner_sha-3.html) based on [**Chris Drost implementation**](https://github.com/drostie/sha3-js) writed in **Javascript** and for **NodeJS**

## Algorithms

* **BLAKE**, by Aumasson, Henzen, Meier, and Phan
* **BMW (Blue Midnight Wish)**, by Gligoroski, Klima, Knapskog, El-Hadedy, Amundsen, and Mjølsnes
* **CubeHash**, by Dan Bernstein.
* **Keccak**, by Bertoni, Daemen, Peeters, and van Assche
* **Shabal**, by Bresson, Canteaut, Chevalier-Mames, Clavier, Fuhr, Gouget, Icart, Misarsky, Plasencia, Paillier, Pornin, Reinhard, Thuillet, and Videau
* **Skein**, by Bellare, Callas, Ferguson, Kohno, Lucks, Schneier, Walker, and Whiting
* **Half Skein**, a 32-bit Skein-256-256 (non-compliant) version

##How to use?

### Requiring the module:

1. `npm install insanehash --save`
2. `var ih = require('insanehash');`
3. Calling each algorithm will return the hash:
  * `ih.blake32('Hi!');` returns 'ceb42cb8ab21fe511b85ecd74933b9f4aafa4d1c67da0778b69e375245942314'
  * `ih.shabal('Hi!');` returns '0427065214b9a8ea2d79c73a1a2d02ea3f9c4f71d4c73a30ad2c0bc8b1c172d9'
  * `ih.bmw('Hi!');` returns '44fe7f399277b09b8e892a80522b833703abacd5fc7f71da6db96999ca4bdb06'
  * `ih.skein('Hi!');` returns '6dbe952ab5ec3bf45a82887953953e3220e1eab7ae9069ae548ac8561691378993210ca0cb0666656614ef858fca9893a9bb6fe149dca792c910d6518aecdd30'
  * `ih.cubehash('Hi!');` returns 'a206bffa3c77a6410270f061e6b264fd79d1a997c06d444ee1bba42cff2b66d3'
  * `ih.halfskein('Hi!');` returns '39edf053bf6be95f1af2476f83fbf9b71fa0e3188361def18c879a9f09370f8a'
  * `ih.keccak('Hi!');` returns '22dd5d47d9cb35a05e3022a7bac1a39547da7b303aba89cbe9205046d1f0762c'

### Installing globally:

_Note: Use **single quotes** for the text!_

1. `npm install -g insanehash`
2. `insanehash -h` check all available options
3. `insanehash -b 'Hi!'` returns 'ceb42cb8ab21fe511b85ecd74933b9f4aafa4d1c67da0778b69e375245942314'
4. `insanehash --blake32 'Hi!'` returns 'ceb42cb8ab21fe511b85ecd74933b9f4aafa4d1c67da0778b69e375245942314'

## What's about tests?

Clone this repository, so:

- To run both CLI and package tests: `make test` or `npm run test`
- To run only CLI tests: `make testCLI` or `npm run test:cli`
- To run only package tests: `make testPackage` or `npm run test:package`

_Notes:_

- _test.sh should be **755**. If don't just run `chmod a+x test.sh`_
- _make requires GNU Make_