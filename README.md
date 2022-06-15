
Once you have created a new repo, run `git clone` on your local system

```shell
git clone <repo url/ssh key>
```

Then, install all necessary dependencies. This project uses `yarn` as its package manager.

```shell
yarn
```

Now you're ready to start building a website! Guides on how to use the UI Library to create a Gatsby or NextJS site are
available within the Storybook:

## Running Storybook

The Storybook contains a set of useful guide docs, design system definitions, live demos, and documentation for all
components included in the UI Library.

To run Storybook locally, simply run

```shell
yarn storybook
```

## Committing

This repository uses commit message linting to enforce
[Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). The basic commit structure is:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

If you are not familiar with the Conventional Commit types you can find them
[here](https://github.com/angular/angular/blob/22b96b9/CONTRIBUTING.md#type).

## Features

The UI Library offers several features that make it easier to build new websites with. Full guides on them exist in the
Storybook.

1. **Atoms**: These are a code implementation of a design system. Values can be replaced easily and used across the
   project via quarks.
2. **Quarks**: These are essentially fully-featured [styled-components](https://styled-components.com/) that implement
   atom values via React props.
3. **Molecules**: These are small React components mostly built using [Material-UI](https://mui.com/) that give you a
   head-start in building out your new site.
4. **Linting**: Fully fleshed out [ESLint](https://eslint.org/) and [Prettier](https://prettier.io) rulesets are
   included which run on each commit via [Husky](https://typicode.github.io/husky) and
   [lint-staged](https://www.npmjs.com/package/lint-staged).
5. **Documentation**: Every item in the UI Library is displayed on Storybook for easy demonstration for non-coders and
   includes an explanation of functionality.
6. **Type-safety**: The UI Library takes full advantage of Typescript and all types should be defined and used
   correctly.

## Versions

- 1.00 - Completes atoms, quarks, molecules, and documentation
Contribution: 2022-06-14 20:00

Contribution: 2022-06-14 20:01

