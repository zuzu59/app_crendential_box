# app_crendential_box (ACB)

Souvent nous devons utiliser des *credentials* (db password, token API REST) dans des applications NodeJS, il n'est alors plus possible de sauver l'application dans un dépôt publique !

C'est très ennuyeux, car cela complique beaucoup les déploiements automatiques d'applications par la suite si on doit sauvegarder ailleurs les *credentials* utilisés par l'appli.

Pour palier à ce problème, il existe une solution toute simple. Il suffit de mettre dans le dépôt un fichier crypté avec *OpenPGP encryption and signing tool* des *credentials* qui se trouveront juste dans le dossier supérieur au dépôt. Et les charger par la suite directement depuis l'appli NodeJS (../credentials).

Ce petit Hello World en NodeJS pour présenter la mise en oeuvre du principe ACB.

Bien entendu, c'est aussi possible de l'appliquer pour d'autres langages !

### Installation:
**``npm install``**

### Pour crypter les credentials
**``acb_crypt.sh``**

### Pour décrypter les credentials (password utilisé pour cet HelloWorld: toto)
**``acb_uncrypt.sh``**

### Utilisation:
**``nodemon --inspect index.js``**

### Déploiement rapide sur une infra
wget https://raw.githubusercontent.com/zuzu59/publipost_association/master/acb_crypt.sh
wget https://raw.githubusercontent.com/zuzu59/publipost_association/master/acb_uncrypt.sh


<br><br>

### Goodies:
Mon petit [pougnon](https://docs.google.com/document/d/1CP-EEsOogaE4KcsPEG1qbPTEKvbZ45bNC7m_PyXZMx4/edit#heading=h.hs9r2owj8gnm) sur NodeJS.
