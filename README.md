# Portfolio

Ce projet est un portfolio personnel créé avec React et TypeScript. Il présente une série de pages permettant de découvrir les informations à propos de l'auteur, ses compétences, ses projets, ainsi que ses informations de contact. Le site utilise également React Router pour gérer les différentes routes entre les pages.

## Table des matières

- [Portfolio](#portfolio)
  - [Table des matières](#table-des-matières)
  - [Prérequis](#prérequis)
  - [Installation](#installation)
  - [Structure du projet](#structure-du-projet)
  - [Composants principaux](#composants-principaux)
  - [Fonctionnalités](#fonctionnalités)
  - [Auteurs](#auteurs)

## Prérequis

Avant de commencer, assurez-vous d'avoir installé les éléments suivants sur votre machine :

- Node.js (version 14 ou supérieure)
- npm ou yarn (gestionnaire de paquets)

## Installation

Suivez ces étapes pour installer et démarrer le projet en local :

1. Clonez le repository :

```bash
git clone https://github.com/josephDelnord/portfolio.git
```

2. Accédez au dossier du projet :

```bash
cd portfolio
```

3. Installez les dépendances via npm ou yarn :

```bash
npm install
# ou
yarn install

```

4. Lancez le serveur de développement local :

```bash
npm run dev
# ou
yarn run dev


```

Cela ouvrira l'application dans votre navigateur à l'adresse http://localhost:3000.


## Structure du projet

Voici la structure des fichiers du projet :

```plaintext
portfolio/
├── src/
│   ├── components/          # Composants React
│   │   ├── Header.tsx       # En-tête du site
│   │   ├── Home.tsx         # Page d'accueil
│   │   ├── About.tsx        # Page "À propos"
│   │   ├── Careers.tsx      # Page "Carrières"
│   │   ├── Skills.tsx       # Page "Compétences"
│   │   ├── Projects.tsx     # Page "Projets"
│   │   ├── Contact.tsx      # Page "Contact"
│   │   └── Footer.tsx       # Pied de page
│   ├── assets/              # Dossier des ressources statiques (images, icônes, etc.)
│   │   └── img/
│   │       └── hero.webp    # Image de fond
│   └── App.tsx              # Composant principal
└── public/
    └── index.html           # Fichier HTML principal

```
## Composants principaux

Le projet comprend plusieurs composants principaux qui sont décrits ci-dessous :

- `Header` : Contient le menu de navigation qui permet de se déplacer entre les différentes sections du portfolio.
- `Home` : La page d'accueil qui présente un résumé et une introduction personnelle.
- `About` : Cette page contient une présentation détaillée de mon parcours, mes objectifs et mes motivations professionnelles.
- `Careers` : Présente mon expérience professionnelle et les entreprises pour lesquelles j'ai travaillé.
- `Skills` : Liste des technologies, langages et outils que je maîtrise.
- `Projects` : Une galerie interactive présentant mes projets passés, incluant des démonstrations et des liens vers des GitHub repos.
- `Contact` : Un formulaire permettant aux visiteurs de me contacter directement.

En utilisant ces composants, vous pouvez créer une interface utilisateur dynamique et attrayante pour votre portfolio.

## Fonctionnalités

Ce portfolio offre diverses fonctionnalités pour améliorer l'expérience utilisateur :

- **Navigation fluide** : Navigation entre les différentes sections du site grâce à React Router.
- **Réactivité** : Le site est entièrement responsive et s'adapte à tous les types d'écrans.
- **Design moderne** : Utilisation de Tailwind CSS pour créer une interface élégante et fonctionnelle.
- **Contact facile** : Un formulaire de contact pour échanger rapidement avec moi.

## Auteurs
Joseph Delnord - Développeur web passionné par la création d'applications Web modernes et intuitives.