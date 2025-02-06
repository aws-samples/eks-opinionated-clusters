# Adding new Labs

If you are an ISV and would like to propose the addition of a new lab about your solution, you can follow the steps below.

## Pre-requisites

Users must be able to complete all labs without having to purchase a license, so your product needs to have at least a trial version that can be temporarily used to evaluate your solution.

You need to have a GitHub organization and be able to create a public repository on that.

## Create an Issue

First of all, please create an issue presenting your product and why you think it fits this workshop.

## Create the Lab

Once you received go-ahead, proceed as explained below.

Create an empty repo in your GitHub organization.

Clone this repo by running:

```bash
git clone git@github.com:aws-samples/eks-opinionated-clusters.git
cd eks-opinionated-clusters
git submodule init
git pull --recurse-submodules
```

This repo uses [Git Submodules](https://git-scm.com/book/en/v2/Git-Tools-Submodules). Every Lab is a submodule with its own separate repository, hosted on an ISV's GitHub organization.

Create a new directory with your Company's name, as a subfolder of `website/docs/{category}`, where `category` is e.g. `observability`: `website/docs/observability`.

Link the directory to your self-hosted repo:

```bash
git submodule add {your repo} ./website/docs/{category}/{your company name}
```

Build your lab by creating the necessary `.md` files in your directory.

**Note**: your repo is hosted under the new directory, so every git command related to your files should be performed from there, e.g. to commit and push:

```bash
git commit -am 'first commit'
git push origin main
```

## Create a Pull Request for this repo

When you are happy with the state of your lab, go the root of this repo in your file system (which should be named `eks-opinionated-clusters`) and run:

```bash
git submodule update --remote {your submodule name}
```

Where `{your submodule name}` is the name of your module as listed in file `.gitsubmodules`, e.g.:

```
[submodule "{your submodule name}"]
```

The command above will update this repo to point to the tip of your `main` branch.

You can now create a PR for your lab. In the future, if you need to update your lab, you will need to create another PR as described in this step.

## If you need to move your submodule

If you need to move your submodule, you can run the following command from the root of this repo and file a PR:

```bash
git rm path/to/old/dir path/to/new/dir
```
