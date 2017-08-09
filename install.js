var _ = require('lodash');
var exec = require('child_process').execSync;
var fs = require('fs');
var commandExists = require('command-exists');

var installCommand = 'yarn';

var excludedDirectories = ['css', 'dist','node_modules','webdriver-java','images'];

// yarn causes too many build failures - I'm giving up.
// commandExists('yarn', function(err, commandExists) {

//	installCommand = commandExists ? 'yarn' : 'npm install';

	_.each(fs.readdirSync('.'), function(name) {
		if(fs.statSync(name).isDirectory() && name[0] !== '.' && excludedDirectories.indexOf(name)==-1) {
			console.log("Executing "+installCommand+" in "+name);
			exec(installCommand, {
				cwd: name,
				stdio: 'inherit'
			});
		}
	});
// });
