# Matomo DatoCMS Plugin

Datocms plugin that provides a link to [Matomo](https://matomo.org/) for the current record on the sidebar

## Setup

### Adding the plugin from the marketplace

In your DatoCMS project, go to Settings -> Plugins -> Add new (plus sign at the bottom) -> From Marketplace -> Search for Matomo -> Install this plugin.

### Adding as a private plugin

In your DatoCMS project, go to Settings -> Plugins -> Add new (plus sign at the bottom) -> Create new plugin -> Enter the following configuration:

- **Plugin Name:** Matomo

- **Small Description:** Provides sidebar links to Matomo

- **Entry Point URL:** https://datocms-plugin-matomo.netlify.app/

![Plugin Settings](./docs/plugin-settings-01.png)

Then click on Save plugin settings

## Plugin parameters

After installing the plugin, in the new settings form we must enter the parameters for our Matomo project.

- **Matomo Host:** The name of our host in matomo,  
  ex: mysite

- **Matomo Site:** The name of our site in matomo,  
  ex: www.mysite.com

- **Matomo Site ID:** The id of our site in matomo,  
  ex: 1

Then for each model, we'll have the following fields:

- **[DATOCMS MODEL] URL Pattern:** The pattern used to construct the Matomo URL for the specified model,  
  ex: index.php?module=CoreHome&action=index&idSite=1&period=day&date=yesterday#?idSite=1&period=year&date=2022-02-07&segment=&category=General_Actions&subcategory=General_Pages&popover=RowAction$3ATransitions$3Aurl$3Ahttps$3A$2F$2F

- **[DATOCMS MODEL] Slug Field:** The field of the specified model that will be used as slug,  
  ex: First Name

The combination of the 5 parameters will be later used by the plugin to create a link.

![Plugin Parameters](./docs/plugin-settings-02.png)

Then click on Save Settings

## Plugin

After the setup is complete, we can navigate to content and select a record from one our models.  
The plugin will show up in the sidebar.

![Plugin Link](./docs/plugin-link.png)

## Development

Clone the repo -> `$ yarn install` -> `$ yarn start` -> In your DatoCMS project, settings -> plugins -> Matomo -> Edit private plugin -> Change the Entry Point URL to http://localhost:3000
