# Image Docker json-server
# Projet json-server Docker

## Présentation

Ce projet contient un serveur JSON Dockerisé qui peut être utilisé 
pour créer de fausses API pour des tests de développement. 

Il comprend deux fichiers principaux : `Dockerfile` et `start.sh`.

## Dockerfile

Le fichier `Dockerfile` définit l'image Docker qui sera construite. 
Il contient les instructions pour créer une image Docker qui peut 
exécuter json-server.

## start.sh

`start.sh` est un script Shell utilisé pour démarrer le serveur 
json-server. Les paramètres de démarrage peuvent être modifiés en 
modifiant ce fichier.

## Utilisation

Pour construire l'image Docker à partir du Dockerfile, exécutez 
la commande suivante :

```zsh
docker run -d -p 3000:3000 json-server:latest
```
Cela démarrera le serveur json-server en arrière-plan, 
accessible sur le port 3000.

ou 

```zsh
docker buildx build -t json-server:latest .
```

## Publication

```zsh
docker tag json-server:latest last3lier/json-server:latest
docker push last3lier/json-server:latest
```

## Contributions

Les contributions à ce projet sont les bienvenues. 
Assurez-vous de respecter les conventions de codage existantes et de tester votre code avant de soumettre un pull request.

## Licence

Ce projet est distribué sous la licence MIT. 
Voir le fichier `LICENSE` pour plus de détails.