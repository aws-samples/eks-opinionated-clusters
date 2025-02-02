# EKS Opinionated Clusters Workshop - Authoring Content

## Pre-requisites

Please ensure you have the following pre-requisites:

- Access to an AWS account
- Installed locally:
  - Node.js + `yarn`
  - `kubectl`

## Create a working branch

The first step is to fork this repository and create a working branch. Modifications to the workshop will only be accepted via Pull Requests.

## Writing your content

Once you have a working branch on your local machine you can start writing the workshop content. The Markdown files for the content are all contained in the `website/docs` directory of the repository. This directory is structured using the standard [Docusaurus directory layout](https://docusaurus.io/docs/installation#project-structure). It is recommended to use other modules as guidelines for format and structure.

For new ISV product additions, you can use the `templates/isv_template.md` file, as a starting point: create a folder with your company's name under the relevant directory, copy `templates/isv_template.md` as `index.md` into the previously created folder and edit your content.

## Previewing your content

You can preview your updated content by running the following command from the `website` directory:

```bash
npx docusaurus start
```
