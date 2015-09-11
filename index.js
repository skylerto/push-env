var envdir;

// check if the env folder is set.
if(envdir === undefined){
  console.log("**push-env: Environment directory not set!");
} else {
  // check what the NODE_ENV env variable is, if it isn't set then use development
}



var env = process.env.NODE_ENV;

if(env === undefined) {
  env = 'development';
  console.log("**push-env: NODE_ENV not set, using development");
}
