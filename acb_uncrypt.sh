#!/bin/bash
#Décryptage des credentials
#zf170417.1528

gpg2 app_crendential_box.credentials.js.gpg
mv app_crendential_box.credentials.js ../.
rm -R ../.gnupg
