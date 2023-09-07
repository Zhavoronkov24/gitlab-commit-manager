chrome.storage.sync.get(["commitName", "lineDate"], function(result) {
    var commitName = result.commitName;
    var lineDate = result.lineDate;
    
    if (commitName && lineDate) {
      var commits = document.querySelectorAll(".item-title");
      
      for (var i = 0; i < commits.length; i++) {
        if (commits[i].textContent.trim() === commitName) {
          var commitElement = commits[i].closest(".commit");
          var line = document.createElement("div");
          line.style.color = "white";
          line.style.margin = "10px";
          line.style.padding = "10px";
          line.style.backgroundColor = "green";
          line.style.borderRadius = '30px';
          line.style.fontWeight = 90;
          line.innerHTML = lineDate + " ✅";
          
          commitElement.appendChild(line);
          break;
        }
      }
    }
  });
  