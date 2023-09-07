document.addEventListener("DOMContentLoaded", function() {
    var saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", saveSettings);
    
    loadSettings();
  });
  
  function saveSettings() {
    var commitSHA = document.getElementById("commitSHA").value;
    var lineDate = document.getElementById("lineDate").value;
    
    chrome.storage.sync.set({
      "commitSHA": commitSHA,
      "lineDate": lineDate
    }, function() {
      alert("Информация сохранена! Обновите страницу!");
      window.close();
    });
  }
  
  function loadSettings() {
    chrome.storage.sync.get(["commitSHA", "lineDate"], function(result) {
      document.getElementById("commitSHA").value = result.commitSHA || "";
      document.getElementById("lineDate").value = result.lineDate || "";
    });
  }