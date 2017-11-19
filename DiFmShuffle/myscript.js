insert_shuffle_button();
get_list_of_channels();

function insert_shuffle_button() {
	var script = document.createElement('script');
	script.setAttribute("type", "text/javascript");
	script.setAttribute("async", true);
	script.setAttribute("src", chrome.extension.getURL("injectButton.js")); //Assuming your host supports both http and https
	var head = document.head || document.getElementsByTagName( "head" )[0] || document.documentElement;
	head.insertBefore(script, head.firstChild)
}

function get_list_of_channels() {
	var audio_addict_api = 'https://api.audioaddict.com/v1/di/channels.json';
	$.getJSON(audio_addict_api, function(data, status){
		if (status == "success"){
			var channel_ids = get_channel_ids_from_raw_list(data);		
			store_channel_ids(channel_ids);	
		}
	})
}

function get_channel_ids_from_raw_list(channels) {
	return channels.map(function(channel){
		return channel.id
	});
}

function store_channel_ids(ids_to_store) {
	chrome.storage.sync.set({'channel_ids': ids_to_store}, function() {
		console.log('Channel list updated -- DiFmShuffle -- d[^_^]b');
	})
}