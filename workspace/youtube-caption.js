var google = require('googleapis');
var key = "AIzaSyAmp76fGTKwSii22qaTaAZSPXwOJ1qasvE";
var getSubtitles = require('youtube-captions-scraper').getSubtitles;
var db = require("./database")
console.log("sdfg");


var id= 'hYSkGKJGBAE'; 
var result = []
getSubtitles({
  videoID: id, // youtube video id
  lang: 'en' // default: `en`
}).then(function(captions) {
  console.log(captions);
  result = captions;
  var string = "";
  for (var i in result)
    string = string + result[i]["text"] + " ";
  console.log(string);
  db.uploadCaption(id, [string, result]);
});

console.log("Done");


/*
credentials = service_account.Credentials.from_service_account_file(
        SERVICE_ACCOUNT_FILE, scopes=SCOPES)


function main () {

  // This method looks for the GCLOUD_PROJECT and GOOGLE_APPLICATION_CREDENTIALS
  // environment variables.
  const auth = await google.auth.getClient({
    // Scopes can be specified either as an array or as a single, space-delimited string.
    scopes: ["https://www.googleapis.com/auth/youtube.force-ssl", "https://www.googleapis.com/auth/youtubepartner"]
  });

  // obtain the current project Id
  const project = await google.auth.getProjectId();

  // Fetch the list of GCE zones within a project.
  const res = await compute.zones.list({ project, auth });
  console.log(res.data);
}

main().catch(console.error);
*/


/*
var getYoutubeSubtitles = require('@joegesualdo/get-youtube-subtitles-node');
 
var videoId = 'M7FIvfx5J10'
 
getYoutubeSubtitles(videoId, {type: 'nonauto'})
.then(subtitles => {
  console.log(subtitles)
})
.catch(err => {
  console.log(err)
})
*/