# dataphile
open source code for dataphile.org

- NodeJS app, with Nginx proxy, as per here:
https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-14-04

- Using the following to add to init.d:
https://github.com/chovy/node-startup

- .gitignore settings copied from:
https://github.com/github/gitignore/blob/master/Node.gitignore

- Getting started with express using:
http://cwbuecheler.com/web/tutorials/2013/node-express-mongo/ and
http://cwbuecheler.com/web/tutorials/2014/restful-web-app-node-express-mongodb/

- You'll need to install dependencies via npm when first starting up:
```
npm install
```

- Also, will need to install mongodb, grunt via npm
```
npm install -g grunt-cli
// cd path/to/app/directory
// npm install grunt --save-dev
```

- using the following grunt modules:
```
grunt-contrib-sass
grunt-contrib-handlebars / ember-templates / compile-handlebars // need to play with Ember first before deciding
grunt-shell
grunt-contrib-watch
grunt-contrib-cssmin
grunt-contrib-nodeunit
grunt-contrib-yuidoc
grunt-easy-mongo-fixture
grunt-express / grunt-express-server // will need to see which works better
```

- using swig as the template, rather than jade, because it most closely resembles twig
