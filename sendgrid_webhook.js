var localtunnel = require('localtunnel');
localtunnel(5000, { subdomain: "huaweilxj" }, function(err, tunnel) {
  console.log('LT running')
});