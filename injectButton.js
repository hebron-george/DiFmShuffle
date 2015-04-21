function randChan() {
   if (typeof AudioAddict != "undefined"){
         var channels = AudioAddict.WP.channels.map(function(chan) { return chan.key });
         channel = channels[Math.floor(Math.random()*channels.length)];
         di.app.webplayer.app.commands.execute("webplayer:play:channel", channel)
   } else {
      console.log("AudioAddict is not defined!");
   }
}

var channel;
var shuffleButtonLI = document.createElement("li");
shuffleButtonLI.className += "menu-item";
var shuffleButtonA = document.createElement("a");
shuffleButtonA.innerHTML = '<i class=""></i><span><span class=":before"></span>Shuffle</span>';
shuffleButtonLI.onclick = function () {randChan();};
shuffleButtonLI.appendChild(shuffleButtonA);
var nav = document.getElementById('side-nav').getElementsByTagName('ul')[0];
nav.appendChild(shuffleButtonLI);
