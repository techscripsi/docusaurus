---
sidebar_position: 1
---

import Mermaid from '@theme/Mermaid';

# Tutorial Intro


<Mermaid
  value={`mindmap
  root((   <br>Documentation<br>   ))
      ((tools))
        ((charts&<br>graphs))
        ((source<br>code<br>editors))
        ((migration<br>tools))
        ((office<br>suites))
        ((static<br>site<br>generators))
        ((wiki&<br>knowledge<br>base))
        ((translation<br>memory))
        ((Git))
    ((GILT))
      ((g11n))
      ((i18n))
      ((l10n))      
      ((t10n))      
    ((migration))
    ((distribution))
      ((static<br>site))
      ((wiki&<br>knowledge<br>base))
      ((PDF,<br>DOCX,<br>etc.))
    ((approach))
          ((docs-<br>as-<br>code))
          ((single<br>source)
          ((topic<br>based))
    ((routine))
          ((write&<br>update))
          ((maintain&<br>develop))
          ((automate))
    ((type))
      ((guides))
        ((user<br>admin<br>developer))
        ((migration))
        ((update))
        ((quickstart))
      ((tutorials))
      ((API<br>reference))
      ((knowledgle<br>base))`}
/>

## Getting Started

Get started by **creating a new site**.

Or **try Docusaurus immediately** with **[docusaurus.new](https://docusaurus.new)**.

### What you'll need

- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

## Generate a new site

Generate a new Docusaurus site using the **classic template**.

The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

You can type this command into Command Prompt, Powershell, Terminal, or any other integrated terminal of your code editor.

The command also installs all necessary dependencies you need to run Docusaurus.

## Start your site

Run the development server:

```bash
cd my-website
npm run start
```

The `cd` command changes the directory you're working with. In order to work with your newly created Docusaurus site, you'll need to navigate the terminal there.

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/.

Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.
