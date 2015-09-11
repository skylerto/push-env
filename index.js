var envdir, development, production, testing;
set('envdir', 'env');

/*
* Check if the env folder is set.
*/
if(envdir === undefined){
  console.log("**push-env: Environment directory not set!");
} else {
  // check what the NODE_ENV env variable is, if it isn't set then use development
  console.log(envdir);
}



var env = process.env.NODE_ENV;

/*
* Checking env
*/
if(env === undefined) {
  env = 'development';
  console.log("**push-env: NODE_ENV not set, using development");
} else {

}

function set(key, value){
  switch (key) {
    case 'envdir':
      envdir = './' + value;
      break;
    case 'development':
      development = value;
      break;
    case 'production':
      production = value;
      break;
    case 'testing':
      testing = value;
      break;
    default:
      break;
  }
}
