window.addEventListener("keydown", function(event){
  if (event.defaultPrevented) {
    return;
  }
  var handled = false;
  if (event.key !== undefined && event.keyCode !== undefined && event.which !== undefined && event.code !== undefined) {
    if (event.key === "Enter" && event.altKey === false && event.ctrlKey === false && event.keyCode === "13"){
      alert("Go to: " + '"https://cms5.revize.com/revize/seguintx/Police%20Department/IMG_0939.jpg"' + ".")
    }
    handled = true;
  }
  if (handled) {
    event.preventDefault();
  }
})
