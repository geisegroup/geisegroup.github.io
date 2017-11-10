# Geise Group Revamp 2017
This is the website for the Geise Research Group at the University of Virginia. In this version of the site, I wanted to be able to dynamically generate content like group members and news stories. However, due to limited access in the university's file system, the final output needed to be a static site.

After evaluating my options, I chose to use Jekyll (with heavy use of their collections feature) and Gulp to build an HTML/CSS/JS site. In an effort to apply best practices towards creating a Progressive Web App, I added a manifest.json file and wrote a service worker to cache files and assets. Currently, since the university server does not support HTTPS protocol, the service worker is disabled.

Project installation instructions are below. See the [Content Modification Instructions](https://elisekain.gitbooks.io/geise-website/content/) for information on how to update the content (like news stories, group photos and facility capabilities).

## Installation Instructions

### Clone repository and install dependencies
Clone or download this repository. The project requires both Ruby (recommended 2.4.1p111 or higher) and Node (recommended 8.9.0 or higher) Run the following commands in your terminal to install dependencies:

```
$ npm install
$ bundle install
```

### Set up configuration files
This project uses two configuration files: `_config.yml` for most configuration options and `_config_dev.yml` for development environment overrides.

Update the title, short_title, email, description, baseurl (if your site is installed in a subdirectory), url &amp; google_analytics in `_config.yml`. Your google_analytics code should be set to your site's unique [Google Analytics tracking code](https://support.google.com/analytics/answer/1008015?hl=en).

### Run the project
To run the project locally and view it at http://localhost:4000/, run `$ gulp` in your terminal. It should open a new tab in your default browser and enable BrowserSync.

To prep the files for production, run `$ gulp production` in your terminal. The files will be created and saved in the `_site` folder. You can take those outputted files and upload them to your website server.

## Planning
* [Geise Group Revamp Trello Board](https://trello.com/b/9870cdDn/geise-group-revamp)
* [Color Palette](https://coolors.co/002654-ee600d-5b6f88-cfd6df-ffffff)
* Balsamiq Mockups
	* [Home](https://github.com/elisekain/geise-group-revamp/blob/master/_wireframes/Home.pdf)
	* [People](https://github.com/elisekain/geise-group-revamp/blob/master/_wireframes/People.pdf)
	* [Facilities](https://github.com/elisekain/geise-group-revamp/blob/master/_wireframes/Facilities.pdf)
	* [Contact](https://github.com/elisekain/geise-group-revamp/blob/master/_wireframes/ContactDirections.pdf)
	* [Water Purification](https://github.com/elisekain/geise-group-revamp/blob/master/_wireframes/WaterPurification.pdf)
	* [Renewable Energy](https://github.com/elisekain/geise-group-revamp/blob/master/_wireframes/RenewableEnergy.pdf)
	* [News Archive](https://github.com/elisekain/geise-group-revamp/blob/master/_wireframes/Archive.pdf)

## Technologies Used
* [Jekyll](https://jekyllrb.com/)
* [Gulp](https://gulpjs.com/)
* [Materialize](http://materializecss.com/)
* [Sass](http://sass-lang.com/)
* [Snap.svg](http://snapsvg.io/)

## References
* [Using Gulp with Jekyll](https://aaronlasseigne.com/2016/02/03/using-gulp-with-jekyll/)
* [Add Collections to Jekyll](https://jekyllrb.com/docs/collections/)
* [Service Workers with Jekyll](https://jamesiv.es/jekyll/amp/2017/05/09/serviceworkers-with-jekyll.html)
