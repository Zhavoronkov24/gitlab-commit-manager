document.addEventListener("DOMContentLoaded", function() {
    var saveButton = document.getElementById("saveButton");
    saveButton.addEventListener("click", saveSettings);
    
    loadSettings();
  });
  
  function saveSettings() {
    var commitName = document.getElementById("commitName").value;
    var lineDate = document.getElementById("lineDate").value;
    
    chrome.storage.sync.set({
      "commitName": commitName,
      "lineDate": lineDate
    }, function() {
      alert("Информация сохранена! Обновите страницу!");
      window.close();
    });
  }
  
  function loadSettings() {
    chrome.storage.sync.get(["commitName", "lineDate"], function(result) {
      document.getElementById("commitName").value = result.commitName || "";
      document.getElementById("lineDate").value = result.lineDate || "";
    });
  }