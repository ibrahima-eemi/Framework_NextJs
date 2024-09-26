# Mon Blog - Next.js Project

## Description

***Ceci est un projet de blog réalisé avec Next.js****, stylisé avec **TailwindCSS** et utilisant **Prisma** pour la gestion des bases de données.  
**Il comporte une page d'accueil, une page de contact avec formulaire, ainsi qu'une page listant des articles.**
**Le projet est entièrement responsive et conçu pour être évolutif.**

## Fonctionnalités

- 🏠 **Page d'accueil : Présentation du blog.**
- 📝 **Page Articles : Liste des articles avec titre, description et date de publication.**
- 📬 **Page de Contact : Formulaire ergonomique pour contacter le site.**
- 🗄️ **Gestion des bases de données avec Prisma et PostgreSQL (à intégrer).**

## Prérequis

- **Node.js (version recommandée : >= 18.x)**
- **npm ou yarn**
- **PostgreSQL (si vous utilisez Prisma pour la base de données)**

## Installation

<<<<<<< HEAD
### Clonez le projet sur votre machine locale
=======
### Clonez le projet sur votre machine locale:
>>>>>>> d331414fe36c5862baa69c71e9678f839d4aa58b

```bash
git clone https://github.com/votre-utilisateur/mon-blog.git
cd mon-blog
```

<<<<<<< HEAD
## Installez les dépendances
=======
## Installez les dépendances:
>>>>>>> d331414fe36c5862baa69c71e9678f839d4aa58b

```bash
npm install
```

## Configuration de Prisma

<<<<<<< HEAD
### Si vous utilisez Prisma pour gérer la base de données, suivez ces étapes

## Configurez votre base de données PostgreSQL et mettez à jour le fichier .env
=======
### Si vous utilisez Prisma pour gérer la base de données, suivez ces étapes:

### Configurez votre base de données PostgreSQL et mettez à jour le fichier .env:

>>>>>>> d331414fe36c5862baa69c71e9678f839d4aa58b

```bash
DATABASE_URL="postgresql://<username>:<password>@localhost:5432/<dbname>"
```

<<<<<<< HEAD
## Exécutez les migrations Prisma pour initialiser la base de données
=======
## Exécutez les migrations Prisma pour initialiser la base de données:
>>>>>>> d331414fe36c5862baa69c71e9678f839d4aa58b

```bash
npx prisma migrate dev --name init
```

<<<<<<< HEAD
## Générez le client Prisma
=======
## Générez le client Prisma:
>>>>>>> d331414fe36c5862baa69c71e9678f839d4aa58b

```bash
npx prisma generate
```

## Démarrage du projet

<<<<<<< HEAD
### Pour démarrer le serveur de développement
=======
### Pour démarrer le serveur de développement:
>>>>>>> d331414fe36c5862baa69c71e9678f839d4aa58b

```bash
npm run dev
```

<<<<<<< HEAD
**Le site sera disponible surhttp://localhost:3000.**
=======
**Le site sera disponible sur http://localhost:3000.**
>>>>>>> d331414fe36c5862baa69c71e9678f839d4aa58b

## Structure du projet

**src/app/ : Contient les pages principales du projet (accueil, articles, contact).**
**src/components/ : Composants réutilisables comme la barre de navigation et le formulaire de contact.**
**src/app/page.tsx : Page d'accueil.**
**src/app/articles/page.tsx : Page listant les articles.**
**src/app/contact/page.tsx : Page de contact avec formulaire**
**prisma/schema.prisma : Schéma de la base de données Prisma (à configurer selon votre base de données).**
**tailwind.config.js : Configuration de TailwindCSS.**

## Scripts disponibles

**npm run dev : Démarre le serveur de développement.**
**npm run build : Compile le projet pour la production.**
**npm run start : Démarre le serveur Next.js en production.**
**npm run lint : Exécute ESLint pour vérifier les erreurs dans le code.**
**npm run prisma:generate : Génère le client Prisma.**
**npm run prisma:migrate : Applique les migrations Prisma.**

## Technologies utilisées

**Next.js : Framework React pour les applications web modernes.**
**TailwindCSS : Framework CSS pour un design rapide et réactif.**
**Prisma : ORM pour gérer la base de données.**
**PostgreSQL : Base de données relationnelle.**
**TypeScript : Superset de JavaScript pour un typage statique.**

## Comment ajouter un article (données statiques)

**Pour ajouter des articles statiques, modifiez simplement le tableau articles dans src/**
**app/articles/page.tsx :**

```tsx
const articles = [
  {
    id: 1,
    title: "Nouvel article",
    description: "Description de l'article",
    date: "2024-09-09",
  },
  // Ajouter d'autres articles ici
];
<<<<<<< HEAD

```

## Remarques
=======
```


### Remarques
>>>>>>> d331414fe36c5862baa69c71e9678f839d4aa58b

**🛠️ PostgreSQL : Assurez-vous que votre instance PostgreSQL est en cours d'exécution si vous utilisez Prisma.**
**💡 Alias @ : L'alias @ est configuré pour mapper src/ dans tsconfig.json. Utilisez-le pour les imports des composants.**

## Prochaines étapes (facultatif)

**Ajouter l'intégration avec Prisma pour afficher les articles de la base de données.**
**Améliorer le design en personnalisant les classes Tailwind ou en ajoutant des animations.**
**Déployer le projet sur un service d'hébergement (Vercel, Netlify, etc.).**

## Licence

**Ce projet est sous licence MIT.**
