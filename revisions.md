# Ce document.md sera votre fichier de révision.

## Elle se décompose en plusieurs parties de la matière. Commencez par celle qui vous intéresse.
## ps: Lisez attentivement les consignes jusqu'au bout. Pour chaque partie de la matière, ils vous sera demandé de créer un fichier.js au nom de cette partie et de travailler dedans.


### 1. CONDITIONS ( pour cette partie, créer un nouveau fichier et nommer le 'condition.js'. )
#### Exercice 1
- Via un prompt, demande 3 nombres à l'utilisateur.
- Si les trois valeurs sont égales, tu lui réponds via une console.log : "Les trois variables sont identiques"
- Si seulement deux variables sont identiques, tu lui réponds via une console.log : "Deux des valeurs sont égales"
- Sinon,tu lui réponds via la console.log : "Les trois variables sont différentes"

#### Exercice 2
- Créer un programme qui conseille l'utilisateur sur sa tenue à porter en fonction de la météo
- Via un prompt, demande le temps qu'il fait dehors
- Via l'instruction if...else, tu lui réponds, via une console.log, la tenue à porter
- Ex: "Soleil, sortez en t-shirt"

- Variante: refaire exericie 2 avec un Swtich


### 2. BOUCLE ( pour cette partie, créer un nouveau fichier et nommer le 'boucle.js'. )
#### Exercice 1 (for & foreach)
``let leTableau = [4,"true",true,"bonjour",511,"coding school",{},2020,1 ,"maryam",false,[],13,["salut",13,false],"les tartines c'est délicieux","true et false",1070,478,"hello","top",4000,99,"codeur",45,"javascript",399,"autodidacte","oui",1000,1001,"brainstorming","lol];``
**Attention ce tableau reste toujours rempli, on ne le vide pas pour les exercices ci-dessous**

- (ps: chaque tiret ci-dessous est un mini exercice à travailler à part sur le tableau ci-dessus)

- Créer un programme qui va afficher le type de chaque élément du tableau avec une phrase telle que : l'element ... est de type ...
- Créer trois tableaux "lesIntegers", "lesStrings", "lesAutres" dans les quels vous allez stocker grace a une boucle forEach chaque élément du tableau, afffichez le contenu de chaque tableau avec un console.log
- Créer quatre tableaux "lesGrandsIntegers", "lesPetitsIntegers" ,"lesPetitsStrings", "lesGrandsString" dans les quels vous allez ranger les éléments du tableau "leTableau", pour lesPetitsIntegers ce sont ceux plus petits que 100 et lesGrandsIntegers ce sont ceux plus grand que 100, pour lesPetitsStrings ce sont les mots plus petits que 6 lettres et pour lesGrandsString ce sont ceux qui sont plus grand que 6 lettres
- Créer un programme qui permet a l'utilisateur de stocker des 11 nombres dans deux pots différents, si le nombre est inférieur/égal a 100 il va dans le premier pot et si c'est supérieur à 100 il va dans le second pot, si l'utilisateur rentre des nombres à virgule ils doivent devenir des nombres entier et si le nombre entier est inférieur à 0 alors il recoit une annonce pour lui dire que son chiffre est trop petit et qu'il doit en entrer un autre.

#### Exercice 2 
- Via une boucle while, demandez à l'utilisateur d'entrer la signification de l'abréviation HTML via un prompt. 
- Si l'utilisateur donne la bonne réponse, vous le féliciter. Sinon vous lui reposez la question avec avec le nombre d'essais restants.
- Attention, vous avez droit à trois essaies. Après trois essaies vous arretez la boucle. 

#### Exercice 3
- Créer un tableau avec plusieurs prénom au choix.  
- Via un forEach, affiche les éléments à l'indice pair et si le prénom est plus long que 4 caractères avec uniquement leur premiere lettre en majuscule (il n'y aura qu'une lettre en majuscule par mot)


### 3. FONCTIONS ( pour cette partie, créer un nouveau fichier et nommer le 'fonction.js'. )
#### Exercice 1
- Créé une fonction qui va choisir un nombre au hasard entre 1 et 20. Le joueur a 5 essais pour trouver le nombre.
- Si le joueur est a 5 unités de plus que la réponse, la fonction doit renvoyer "Froid".
- Si le joueur est à 5 unités ou moins de la bonne réponse alors la fonction doit renvoyer "tiède".
- Si le joueur est à 2 unités = "chaud".
- Si le joueur est à 1 unités = "Burlant".
- Si le joueur échoue à trouver le nombre au bout de 5essaies, la fonction indique que la partie est terminée.
- Si le joueur trouve la bonne réponse, la boucle s'arrette et la fonction indique que le joueur a gagné

#### Exercice 2
- Créer un tableau avec différents elements dedans(String,integer,Boolean)
- Créer une fonction qui :
  - met la premier lettre des strings en majuscule et le reste en minuscule.(peu importe comment les noms sont ecris)
  - retourne le carré des integers.
  - retourne le contraire du boolean.

#### Exerice 3 
- Créer une fonction avec deux paramètres (prenom, salaire) qui demande à l'utilisateur de classer différents types de personne en fonction de leurs salaires.
- Créér trois tableaux :
    - "moinMoyenne" pour les salaires en dessous de la moyenne(<1600 euro)
    - "moyenne" pour les salaires dans la moyenne (entre 1600 et 1800 euro)
    - "plusMoyenne" pour les salaires au-dessus de la moyenne (>1800)
- Trie les prénoms des personnes en fonction des salaires et affiche les tableaux.

#### Exercice 4
- Créer une fonction qui va prendre deux paramètres (prenom, age). Pour un concert, vérifie si les personnes, souhaitant participer, sont majeurs. 
- Si OUi, vous les mettez dans un tableau(vide) du nom de 'concert'. Attention le concert est limité à 7 personnes, cause de covid. :( 
- Si NON, elle ne rentre pas. 
- Affichez via une console.log, toutes les personnes présentes au concert avec leur 1er lettre de leurs prénom en majuscule. 

### 4. OBJET ( pour cette partie, créer un nouveau fichier et nommer le 'objet.js'. )
#### Exercice 1
- Créer un objet pour une marque de voiture. Déclare plusieurs propriétés (marque, model, type, color, prix)
- Créer une méthode qui va retourner une phrase du style : "Ma audi a6 est de type break. Elle est grise et vaut 20.000€"

#### Exercice 2
- Créer un Personnage avec plusieurs propriétés ( nom, prenom, argent)
- Créer un objet du nom de 'Article'. Il prendra plusieurs propriétés (nomProduit, prix, stock)
- Créer une méthode propre au personnage qui va permettre d'acheter l'article. (Attention à l'argent et le stock)

#### Exercice 3
- Créer un objet qui représente MolenGeek. Il prendra plusieurs propriétés :
    - nombre d'employés: 0, 
    - patron: {nom, prenom}, 
    - Employe: [],
- Créer une méthode "addEmploye" qui permet d'ajouter des employes dans le array 'Employe'.
- Créer une méthode "DelEmploye" qui permet de supprimer des employes. 
- Créer une méthode "Felicitation" qui va sélectionner au hasard(random) un des employés pour que le patron le félicite et le nomme "employé du mois". Affiche le message via une console.log
- Pour finir, via une console.log, affiche le nombre d'employés!

#### Exercice 4
- Créer un objet Personnage avec des propriétés : 
    - identite:{nom, prenom}
    - argent
    - lieu
    - humeur 
- une méthode propre à l'objet qui va changer son humeur aléatoirement.(Soit positif, soit négatif)
- Créer une fonction (attention ce n'est pas une méthode propre à l'objet mais belle est bien une FONCTION classique) qui va permettre au personnage de changer son lieu. De base, il est chez lui, par la fonction, il se déplacera à son lieu de travail.
- Créer une autre fonction qui va lui permettre de gagner de l'argent. Il gagnera 10€ pour 8 heure si son humeur est négative. Par contre il gagnera 15€ pour 8heures si son humeur est positive. (Une itération vaut 1 heure).
- (Bonus:faite en sorte qu'une itération se fasse tous les 2sec)
- Pour la fonction qui lui permet de gagner de l'argent, si son humeur est positive, tous les 2 heures, il dira via une console.log : "J'aime mon travail", mais par contre si son humeur est négative, il dira "je préfére mon lit"


### 5. CLASS ( pour cette partie, créer un nouveau fichier et nommer le 'class.js'. )
#### Exercice 1
- Créer une class objet "Personnage" avec 4 propriétés : nom, prenom, age, argent
- Créer trois instances de "Personnage"
- Ajoute lui une méthode qui va se présenter lui-même et présenter les deux autre personne

#### Exercice 2 
- Créer une class objet "Molengeek" avec 3 propriétés : nom, prenom, grade.
- Créer 3 instances (trois personnes de l'équipe)
- Créer une méthode qui permet à une personne de grade "admin" de changer les rôles des autres personnes. Sinon tu lui répond via une console.log "vous n'avez pas les droits" en précisant son grade actuel 

#### Exercice 3 
- Créer une class objet "Enfant" qui prend comme propriété : prenom, argent, humeur(neutre), sac(array vide)
- Créer deux instances de "Enfant" (deux enfants).
- Créer une autre classe "Magasin" qui prend comme propriété : produit, prix.
- Créer trois instances de magasin (trois produits)
- Les enfants auront une méthode qui permet de payer le produit et le stocker dans leurs sacs. 
- Créer une instance "maison" qui prend une méthode. La méthode va devoir rendre l'humeur des enfants soit positif, soit négatif via un random.
- Créer une méthode dans l'objet "Enfant". La méthode se base sur l'humeur de l'enfant. Si l'humeur de l'enfant est positif, la méthode renverra via une console.log " enfant1 est hereux, il cuisine pour toute la famille. "
- Sinon il renverra via une console.log "enfant1 n'est pas en forme, il ne cuisinera pas"

Le récit prendra cette forme : 
L'enfant1 a acheter produitA,
l'enfant2 a acheter produitB,
L'enfant1 a est d'humeur positif ou negatif
L'enfant2 a est d'humeur positif ou negatif
L'enfant1 veut bien cuisiner ou non
L'enfant2 veut bien cuisiner ou non

#### Exercice 4 (lisez bien jusqu'au bout)
- Créer une class "LeeGofGeek" avec 4 propriétés : 
    - le nom du personnage, 
    - le nom de son pouvoir, 
    - dégats qu'il produit (en numbre), 
    - santé (en numbre),
    - bonus

- Créer 2 instances de "LeeGofGeek" (2personnages). Chaque personnage à ses propriétés bien défini. C-à-d que son pouvoir a un nom spécifique, les dégats sont précis(max 15points). Sa santé est, par défaut, à 100 points.

- Créer une méthode propre à l'objet et nommé le "attaqueBasic". Une fois cette méthode appelée, il retire des points de vie au personnage attaqué. Ces points de vie retirés sont calculés par rapport à la propriété  "degat" du personnage qui lance l'attaque. 
    - Ex : personnage1 lance une attaque(dégat=15points), personnage2 perd 15points de vie.

- Créer une méthode "attaqueSpecial" qui consiste à mettre des dégats +- important sur l'autre personnage. (-35point). Par contre cette attaque enlève en contre partie -15point à son utilisateur.

- Créer deux méthodes spécial "auto-save" & "joker"
    - la méthode "auto-save", qui une fois lancé permet de rajouter 35 points de vie à son utilisateur, mais en contre partie, lui fait perdre l'accès à la méthode "joker"
    - la méthode "joker" est très particuliere. Elle sera utilisable que si le point de vie de l'utilisateur est à < 15 point. Par contre si vous l'utilisez, vous perdez l'accès à votre méthode autoSave.
        - Cette méthode consiste a appeler un bonus aléatoire prédéfinis dans un array "bonus". Dans ces bonus, il y'a "VieFull" qui permet de revenir à 100 points de vie. l y'a une attaque nommé "dead" qui permet d'eliminer l'ennemie du 1er coup. Il y'a un bonus nommé "null" qui donne aucun pouvoir.

- Autrement dit, c'est soit la méthode "joker" soit la méthode "autoSave"
- Une fois que la vie d'un des personnages tombe à zero, une alert s'affiche pour dire que la partie est terminé.

- Le récit : Vous le faites sans prompt et alert. Tout ce passe manuellement dans le code et chaque message/bout_de_récit est affichée via une console.log.



