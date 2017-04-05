# schintacloud

环境准备：npm+yarn
npm修改国内镜像：https://cnodejs.org/topic/4f9904f9407edba21468f31e
yarn：修改为国内镜像：https://my.oschina.net/jiangxinxin/blog/775326

微服务模块：

	1、服务注册器：jhipster-registry
	
	2、用户认证授权：jhipster-UAA
	
	3、网关：jhipster-gateway
	
	4、其他微服务提供者
	

1、服务注册器

服务注册器下载地址：https://github.com/jhipster/jhipster-registry

下载后，运行 mvnw.cmd 启动，默认端口为8761

如果在公司内部环境进行开发，10.172.71.172:8761 已用docker 启动了服务注册，可以直接使用该服务，以节省本地资源。

2、用户认证授权

提供用户的认证和授权的服务，请剪出 git@101.37.16.131:wangyuannan/cqUAA.git 工程

剪出后，运行“yarn install”

运行 mvnw.cmd 启动服务，设置的端口为9090

注明：如果在公司内部环境进行开发，10.172.71.172:9090 已用docker 启动了uaa服务，可以直接使用该服务，以节省本地资源。

3、网关

带有前端界面的网关工程。请剪出 git@101.37.16.131:wangyuannan/cqGateway.git 工程

剪出后，运行“yarn install”，安装工程依赖包。

运行 mvnw.cmd 启动后台服务，设置的端口为9000

在工程根目录下，另起一个控制台，运行“yarn start”，修改本地文件之后会自动编译发布，端口为9001

上述所有数据库均连接的是阿里云的数据库地址，剪出在本地做开发、测试时候，请先改为本地数据库（数据库配置在application-dev.yaml文件中修改）

注：
在yarn install 时候，安装node-sass异常，解决办法如下(https://github.com/lmk123/blog/issues/28):

  set SASS_BINARY_SITE=https://npm.taobao.org/mirrors/node-sass/
  
  npm install node-sass




This application was generated using JHipster 4.0.8, you can find documentation and help at [https://jhipster.github.io/documentation-archive/v4.0.8](https://jhipster.github.io/documentation-archive/v4.0.8).

This is a "gateway" application intended to be part of a microservice architecture, please refer to the [Doing microservices with JHipster][] page of the documentation for more information.

This application is configured for Service Discovery and Configuration with the JHipster-Registry. On launch, it will refuse to start if it is not able to connect to the JHipster-Registry at [http://localhost:8761](http://localhost:8761). For more information, read our documentation on [Service Discovery and Configuration with the JHipster-Registry][].

## Development

Before you can build this project, you must install and configure the following dependencies on your machine:

1. [Node.js][]: We use Node to run a development web server and build the project.
   Depending on your system, you can install Node either from source or as a pre-packaged bundle.
2. [Yarn][]: We use Yarn to manage Node dependencies.
   Depending on your system, you can install Yarn either from source or as a pre-packaged bundle.

After installing Node, you should be able to run the following command to install development tools.
You will only need to run this command when dependencies change in [package.json](package.json).

    yarn install

We use yarn scripts and [Webpack][] as our build system.


Run the following commands in two separate terminals to create a blissful development experience where your browser
auto-refreshes when files change on your hard drive.

    ./mvnw
    yarn start

[Yarn][] is also used to manage CSS and JavaScript dependencies used in this application. You can upgrade dependencies by
specifying a newer version in [package.json](package.json). You can also run `yarn update` and `yarn install` to manage dependencies.
Add the `help` flag on any command to see how you can use it. For example, `yarn help update`.

The `yarn run` command will list all of the scripts available to run for this project.

### Managing dependencies

For example, to add [Leaflet][] library as a runtime dependency of your application, you would run following command:

    yarn add --exact leaflet

To benefit from TypeScript type definitions from [DefinitelyTyped][] repository in development, you would run following command:

    yarn add --dev --exact @types/leaflet

Then you would import the JS and CSS files specified in library's installation instructions so that [Webpack][] knows about them:

Edit [src/main/webapp/app/vendor.ts](src/main/webapp/app/vendor.ts) file:
~~~
import 'leaflet/dist/leaflet.js';
~~~

Edit [src/main/webapp/content/css/vendor.css](src/main/webapp/content/css/vendor.css) file:
~~~
@import '~leaflet/dist/leaflet.css';
~~~

Note: there are still few other things remaining to do for Leaflet that we won't detail here.

For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Using angular-cli

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

    ng generate component my-component

will generate few files:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts

## Building for production

To optimize the schintacloud application for production, run:

    ./mvnw -Pprod clean package

This will concatenate and minify the client CSS and JavaScript files. It will also modify `index.html` so it references these new files.
To ensure everything worked, run:

    java -jar target/*.war

Then navigate to [http://localhost:9000](http://localhost:9000) in your browser.

Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

### Client tests

Unit tests are run by [Karma][] and written with [Jasmine][]. They're located in [src/test/javascript/](src/test/javascript/) and can be run with:

    yarn test


### Other tests

Performance tests are run by [Gatling][] and written in Scala. They're located in [src/test/gatling](src/test/gatling) and can be run with:

    ./mvnw gatling:execute

For more information, refer to the [Running tests page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.
For example, to start a mysql database in a docker container, run:

    docker-compose -f src/main/docker/mysql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/mysql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw package -Pprod docker:build

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`yo jhipster:docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`yo jhipster:ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[JHipster Homepage and latest documentation]: https://jhipster.github.io
[JHipster 4.0.8 archive]: https://jhipster.github.io/documentation-archive/v4.0.8
[Doing microservices with JHipster]: https://jhipster.github.io/documentation-archive/v4.0.8/microservices-architecture/
[Using JHipster in development]: https://jhipster.github.io/documentation-archive/v4.0.8/development/
[Service Discovery and Configuration with the JHipster-Registry]: https://jhipster.github.io/documentation-archive/v4.0.8/microservices-architecture/#jhipster-registry
[Using Docker and Docker-Compose]: https://jhipster.github.io/documentation-archive/v4.0.8/docker-compose
[Using JHipster in production]: https://jhipster.github.io/documentation-archive/v4.0.8/production/
[Running tests page]: https://jhipster.github.io/documentation-archive/v4.0.8/running-tests/
[Setting up Continuous Integration]: https://jhipster.github.io/documentation-archive/v4.0.8/setting-up-ci/

[Gatling]: http://gatling.io/
[Node.js]: https://nodejs.org/
[Yarn]: https://yarnpkg.org/
[Webpack]: https://webpack.github.io/
[Angular CLI]: https://cli.angular.io/
[BrowserSync]: http://www.browsersync.io/
[Karma]: http://karma-runner.github.io/
[Jasmine]: http://jasmine.github.io/2.0/introduction.html
[Protractor]: https://angular.github.io/protractor/
[Leaflet]: http://leafletjs.com/
[DefinitelyTyped]: http://definitelytyped.org/
