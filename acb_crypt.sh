#!/bin/bash
#Cryptage des credentials
#zf170417.1528

gpg2 -c ../app_crendential_box.credentials.js
mv ../app_crendential_box.credentials.js.gpg .
rm -R ../.gnupg
