# Magnolia Nuxt3 Startkit

This startkit is a basic setup of Magnolia CMS and Nuxt3 app.

## Pages and Components

The startkit contains:

- Basic page template
- Contact page template

- Header component
- Paragraph component
- Image component
- List component
- Item component (available inside List component)
- Expander component

- Navigation component

# Setup

## Requirements

- Java (JDK)

- [Magnolia CLI](https://www.npmjs.com/package/@magnolia/cli) installed ([installation documentation](https://documentation.magnolia-cms.com/display/DOCS/Magnolia+CLI+v3))

- Node

## Install Magnolia with Magnolia CLI

In a terminal, navigate to the `magnolia` directory and run:

```
mgnl jumpstart
```

Choose `magnolia-community-demo-webapp` or `magnolia-dx-core-demo-webapp` as the version to download.

> Note: If you want to try the personalization feature - you will need `dx-core`. To get `dx-core` you will need an enterprise account, please contact Magnolia Sales team if you do not have one.
> Additionally you will need the version 2.1.0 higher of the [personalization modules](https://docs.magnolia-cms.com/product-docs/6.2/Modules/List-of-modules/Personalization-module.html).

(Magnolia is downloaded.)

## Add the demo light modules to Magnolia

Nothing to do here!
(The Magnolia instance is pre-configured to access the existing 'light-modules' directory.)

## Start Magnolia
From root folder start Magnolia with:

```
npm run mgnl
```

or within the `magnolia` folder start Magnolia with:

```
mgnl start
```

Once the terminal shows `Server startup in X ms`

In your browser, open Magnolia at: http://localhost:8080/magnoliaAuthor/

## Accessing Magnolia

You can log in to Magnolia using the credentials **_username: `superuser`,
password: `superuser`._**
This will give you complete access to all content and configuration.

To access the apps that are mentioned in these instructions use the grid icon at the top of the page, to the right of the search bar.

## Configuring REST and DAM security

### Content endpoint permissions

The app has anonymous access to Magnolia REST endpoints with no additional configuration because:

- "Web access" is allowed, because the restEndpoint files are under the `/delivery` path
- "Access contol list" access is allowed, beause the restEndponts have the `bypassWorkspaceAcls` property.

**NOTE** Allowing anonymous access may not be suitable for a production environment where you wish to keep data private.

### DAM

In order for images to be displayed:
Open the Security app, open the `Roles` tab, edit the `rest-anonymous` role, go to `Web access` tab, `Add new` with this path `/dam/*` set to GET.

![Image Access for Anonymous](magnolia/_dev/README-security-anonymous-dam.png)

In `Access control lists` tab modify `Dam` workspace by allowing `Read-only` access to `Selected and sub nodes` to `/`.

# Create Sample Content

**_Either_** import some content, or create it manually.

### Import:

**_In the Pages app_**, Use the 'Import' action (with nothing selected) and select the website.app.yaml file from `/magnolia/_dev/content-to-import/`.

### Manually:

Open the `Pages` app in Magnolia and **_click Add Page_**  and add a `Index` **_template_** and name it `Home`

Then add components into the `Main` or `Extras` area of the page.
You can also add additional pages as children of that page.