#!/usr/bin/env bash

### Tests for the CLI version of insanehash
# Author: Thales Pinheiro
# Since: 07/28/2015
# Basic usage:
#  sh test
#  ./test
#
# Copyright (c) 2015
#  Thales Pinheiro. All rights reserved.
#
# Copyright terms:
# Redistribution and use in source and binary forms, with or without
# modification, are permitted provided that the following conditions
# are met:
# 1. Redistributions of source code must retain the above copyright
#    notice, this list of conditions and the following disclaimer.
# 2. Redistributions in binary form must reproduce the above copyright
#    notice, this list of conditions and the following disclaimer in the
#    documentation and/or other materials provided with the distribution.
# 3. All advertising materials mentioning features or use of this software
#    must display the following acknowledgement:
#  This product includes software developed by Thales Pinheiro
# 4. The names of the author cannot be used to endorse or promote products
#    derived from this software without specific prior written permission.
# THIS SOFTWARE IS PROVIDED "AS IS" AND
# ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE
# IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE
# ARE DISCLAIMED. IN NO EVENT SHALL THE AUTHOR BE LIABLE
# FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL, EXEMPLARY, OR CONSEQUENTIAL
# DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE GOODS
# OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION)
# HOWEVER CAUSED AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT
# LIABILITY, OR TORT (INCLUDING NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY
# OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF
# SUCH DAMAGE.

# Runs tests for the short version of options

echo 'Using short version of options and hashing "aáâã09!?.,<>":'

IHTB=$(node bin/insanehash.js -b 'aáâã09!?.,<>')
echo "blake32: " $IHTB

IHTM=$(node bin/insanehash.js -m 'aáâã09!?.,<>')
echo "bmw: " $IHTM

IHTC=$(node bin/insanehash.js -c 'aáâã09!?.,<>')
echo "cubehash: " $IHTC

IHTS=$(node bin/insanehash.js -s 'aáâã09!?.,<>')
echo "skein: " $IHTS

IHTK=$(node bin/insanehash.js -k 'aáâã09!?.,<>')
echo "halfskein: " $IHTK

IHTA=$(node bin/insanehash.js -a 'aáâã09!?.,<>')
echo "shabal: " $IHTA

IHTE=$(node bin/insanehash.js -e 'aáâã09!?.,<>')
echo "keccak: " $IHTE

# Runs tests for the long version of options

echo && echo 'Using long version of options and hashing "aáâã09!?.,<>":'

IHTBlake32=$(node bin/insanehash.js --blake32 'aáâã09!?.,<>')
echo "blake32: " $IHTBlake32

IHTBmw=$(node bin/insanehash.js --bmw 'aáâã09!?.,<>')
echo "bmw: " $IHTBmw

IHTCubehash=$(node bin/insanehash.js --cubehash 'aáâã09!?.,<>')
echo "cubehash: " $IHTCubehash

IHTSkein=$(node bin/insanehash.js --skein 'aáâã09!?.,<>')
echo "skein: " $IHTSkein

IHTHalfskein=$(node bin/insanehash.js --halfskein 'aáâã09!?.,<>')
echo "halfskein: " $IHTHalfskein

IHTShabal=$(node bin/insanehash.js --shabal 'aáâã09!?.,<>')
echo "shabal: " $IHTShabal

IHTKeccak=$(node bin/insanehash.js --keccak 'aáâã09!?.,<>')
echo "keccak: " $IHTKeccak

# Comparing the two versions

echo && echo 'Comparing the two versions:'

if [ "$IHTB" == "$IHTBlake32" ]; then
  echo "blake32: OK"
else
  echo "blake32: NOK"
  exit 1
fi

if [ "$IHTM" == "$IHTBmw" ]; then
  echo "bmw: OK"
else
  echo "bmw: NOK"
  exit 1
fi

if [ "$IHTC" == "$IHTCubehash" ]; then
  echo "cubehash: OK"
else
  echo "cubehash: NOK"
  exit 1
fi

if [ "$IHTS" == "$IHTSkein" ]; then
  echo "skein: OK"
else
  echo "skein: NOK"
  exit 1
fi

if [ "$IHTK" == "$IHTHalfskein" ]; then
  echo "halfskein: OK"
else
  echo "halfskein: NOK"
  exit 1
fi

if [ "$IHTA" == "$IHTShabal" ]; then
  echo "shabal: OK"
else
  echo "shabal: NOK"
  exit 1
fi

if [ "$IHTE" == "$IHTKeccak" ]; then
  echo "keccak: OK"
else
  echo "keccak: NOK"
  exit 1
fi
