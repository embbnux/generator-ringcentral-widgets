const Generator = require('yeoman-generator');

module.exports = class extends Generator {
  prompting() {
    return this.prompt([{
      type: 'input',
      name: 'name',
      message: 'Your project name',
      default: this.appname // Default to current folder name
    }, {
      type: 'input',
      name: 'appName',
      message: 'Your app name',
      default: 'RingCentral Widgets App'
    }]).then(props => {
      this.props = props;
    });
  }

   writing() {
    this.fs.copyTpl(
      this.templatePath('package.json'),
      this.destinationPath('package.json'),
      {
        name: this.props.name.replace(/\s/g, '')
      }
    );
    this.fs.copy(
      this.templatePath('babelrc.default'),
      this.destinationPath('.babelrc')
    );
    this.fs.copy(
      this.templatePath('env.default'),
      this.destinationPath('.env')
    );
    this.fs.copy(
      this.templatePath('eslintrc.default'),
      this.destinationPath('.eslintrc')
    );
    this.fs.copy(
      this.templatePath('gitignore.default'),
      this.destinationPath('.gitignore')
    );
    this.fs.copy(
      this.templatePath('postcss.config.js'),
      this.destinationPath('postcss.config.js')
    );
    this.fs.copyTpl(
      this.templatePath('README.md'),
      this.destinationPath('README.md'),
      {
        name: this.props.name
      }
    );
    this.fs.copy(
      this.templatePath('webpack-dev-server.config.js'),
      this.destinationPath('webpack-dev-server.config.js')
    );
    this.fs.copy(
      this.templatePath('webpack-production.config.js'),
      this.destinationPath('webpack-production.config.js')
    );
    this.fs.copyTpl(
      this.templatePath('src/brand.js'),
      this.destinationPath('src/brand.js'),
      {
        appName: this.props.appName
      }
    );
    this.fs.copy(
      this.templatePath('src/favicon.ico'),
      this.destinationPath('src/favicon.ico')
    );
    this.fs.copyTpl(
      this.templatePath('src/index.html'),
      this.destinationPath('src/index.html'),
      {
        appName: this.props.appName
      }
    );
    this.fs.copy(
      this.templatePath('src/index.js'),
      this.destinationPath('src/index.js')
    );
    this.fs.copyTpl(
      this.templatePath('src/prefix.js'),
      this.destinationPath('src/prefix.js'),
      {
        name: this.props.name.replace(/\s/g, '-')
      }
    );
    this.fs.copy(
      this.templatePath('src/proxy.html'),
      this.destinationPath('src/proxy.html')
    );
    this.fs.copy(
      this.templatePath('src/proxy.js'),
      this.destinationPath('src/proxy.js')
    );
    this.fs.copy(
      this.templatePath('src/redirect.html'),
      this.destinationPath('src/redirect.html')
    );
    this.fs.copy(
      this.templatePath('src/redirect.js'),
      this.destinationPath('src/redirect.js')
    );
    this.fs.copy(
      this.templatePath('src/theme.scss'),
      this.destinationPath('src/theme.scss')
    );
    this.fs.copy(
      this.templatePath('src/components/.keep'),
      this.destinationPath('src/components/.keep')
    );
    this.fs.copy(
      this.templatePath('src/containers'),
      this.destinationPath('src/containers')
    );
    this.fs.copy(
      this.templatePath('src/modules/Phone/index.js'),
      this.destinationPath('src/modules/Phone/index.js')
    );
  }

  install() {
    this.installDependencies({
      bower: false,
      npm: false,
      yarn: true
    });
  }
};
