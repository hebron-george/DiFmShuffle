function randChan() {
   if (typeof AudioAddict != "undefined"){
      /*
         Stats
      */
      var option;
      chrome.storage.sync.get("send_data", function(items) {option = items.send_data; });
      if (currentlyPlayingSong != "undefined" && option){
       
         var formData = {channel_id: currentlyPlayingSong.channel_id, title:currentlyPlayingSong.title};
         chrome.extension.sendRequest({method:"getStats", data:formData}, function(response){
            console.log(response);
         });
      }
      /*
         Shuffle to next channel
      */
      var channels = AudioAddict.WP.channels.map(function(chan) { return chan.key });
      channel = channels[Math.floor(Math.random()*channels.length)];
      di.app.webplayer.app.commands.execute("webplayer:play:channel", channel)
   } else {
      console.log("AudioAddict is not defined!");
   }
}

/*
	This is where the button is created
*/ 	
var shuffleButtonLI = document.createElement("li");
shuffleButtonLI.className += "menu-item";
var shuffleButtonA = document.createElement("a");
shuffleButtonA.innerHTML = '<i class=""></i><span><span class=":before"></span>Shuffle</span>';
shuffleButtonLI.onclick = function () {randChan();};
shuffleButtonLI.appendChild(shuffleButtonA);
var nav = document.getElementById('side-nav').getElementsByTagName('ul')[0];
nav.appendChild(shuffleButtonLI);

/* Allows capture of log data about currently playing track */
$.log = function(x, y) { if (x.indexOf("playing") === -1) return; window.currentlyPlayingSong = y; }
