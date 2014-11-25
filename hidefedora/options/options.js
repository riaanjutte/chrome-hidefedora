function save_options() {
  var color = document.getElementById('removal-method').value;
    chrome.storage.sync.set({
      removalMethod: color
    }, function() {
  });
}

function restore_options() {
  chrome.storage.sync.get({
    removalMethod: 'hide'
  }, function(items) {
    document.getElementById('removal-method').value = items.removalMethod;
  });
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('removal-method').addEventListener('change', save_options);