chrome.storage.sync.get(["commitSHA", "lineDate"], function(result) {
    var commitSHA = result.commitSHA;
    var lineDate = result.lineDate;
    
    if (commitSHA && lineDate) {
      var commits = document.querySelectorAll(".commit-sha-group .label");
      
      for (var i = 0; i < commits.length; i++) {
        if (commits[i].textContent.trim() === commitSHA) {
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
  