var restclient = require('node-restclient');
var Twit = require('twit');
var app = require('express').createServer();

app.get('/', function(req, res){
    res.send('Hello world.');
});
app.listen(process.env.PORT || 3000);




// insert your twitter app info here
var T = new Twit({
  consumer_key:         '', 
  consumer_secret:      '',
  access_token:         '',
  access_token_secret:  ''
});



var getQuoteURL = "http://api.forismatic.com/api/1.0/?method=getQuote&format=text&lang=en&key=457653";

function getQuote() {
    
    restclient.get(
      getQuoteURL,
      function(data) {
        
        console.log(data);
        T.post('statuses/update', { status: data}, function(err, reply) {
          console.log("error: " + err);
          console.log("reply: " + reply);
        });
      }    
    ,"text");
 
}

function favRTs () {
  T.get('statuses/retweets_of_me', {}, function (e,r) {
    for(var i=0;i<r.length;i++) {
      T.post('favorites/create/'+r[i].id_str,{},function(){});
    }
    console.log('Got some RTs'); 
  });
}

// every 1 hour, create motivation tweet
// wrapped in a try/catch in case Twitter is unresponsive, don't really care about error
// handling. it just won't tweet.
setInterval(function() {
  try {
    getQuote();
  }
 catch (e) {
    console.log(e);
  }
},3600000);

// every 5 hours, check for people who have RTed a quote, and favorite that quote
setInterval(function() {
  try {
    favRTs();
  }
 catch (e) {
    console.log(e);
  }
},60000*60*5);
