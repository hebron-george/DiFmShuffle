inject_shuffle_button();

function randChan() {
     chrome.storage.sync.get('channel_ids', function(channels) {
     	console.log("List of channels: " + JSON.stringify(channels));
     	console.log("Number of channels: " + channels['channel_ids'].length);
         channel = channels[Math.floor(Math.random()*channels.length)];
         di.app.WebplayerApp.app.commands.execute("webplayer:play:channel", channel.id);
     });
}

function inject_shuffle_button() {
	var channel;
	var shuffleButtonLI = document.createElement("li");
	shuffleButtonLI.className += "menu-item";
	var shuffleButtonA = document.createElement("a");
	shuffleButtonA.innerHTML = '<i class=""></i><span><span class=":before"></span>Shuffle</span>';
	shuffleButtonLI.onclick = function () {randChan();};
	shuffleButtonLI.appendChild(shuffleButtonA);
	var nav = document.getElementById('side-nav').getElementsByTagName('ul')[0];
	nav.appendChild(shuffleButtonLI);
}

