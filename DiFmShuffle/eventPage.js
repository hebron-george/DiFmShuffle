$.ajax({
         url : "http://www.hebrongeorge.com/DiFmShuffle/shuffle.php",
         type: "POST",
         data : formData,
         success: function(data, textStatus, jqXHR){},
         error: function (jqXHR, textStatus, errorThrown){console.log("************** " + textStatus + " -- " + errorThrown);}
     });

chrome.runtime.onMessage.addListener(function(request, sender, sendResponse) {
    if (request.method == "getStats")
      sendResponse({status: localStorage['status']});
    else
      sendResponse({}); // snub them.
});