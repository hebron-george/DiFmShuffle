// Saves options to chrome.storage
function save_options() {
  var data_permission = document.getElementById('data_permission').value;
  chrome.storage.sync.set({
    send_data: data_permission
  }, function() {
    // Update status to let user know options were saved.
    var status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

// Restores select box and checkbox state using the preferences
// stored in chrome.storage.
function restore_options() {
  // Use default value send_data = 'yes'.
  chrome.storage.sync.get({
    send_data: 'yes'
  }, function(items) {
    document.getElementById('data_permission').value = items.send_data;
  });
}
document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('save').addEventListener('click',
    save_options);