function changeColors() {
    var confirmBgColor = confirm("Do you want to change the background color?");
    var confirmTextColor = confirm("Do you want to change the text color?");
  
    if (confirmBgColor) {
      var bgColor = prompt("Enter background color (e.g., 'red', '#00ff00', 'rgb(255, 0, 255)')", "white");
      document.body.style.backgroundColor = bgColor;
    }
  
    if (confirmTextColor) {
      var textColor = prompt("Enter text color (e.g., 'black', '#ff0000', 'rgb(0, 0, 255)')", "black");
  
      document.body.style.color = textColor;
  
      var paragraphs = document.getElementsByTagName('p');
      for (var i = 0; i < paragraphs.length; i++) {
        paragraphs[i].style.color = textColor;
      }
    }
  
}

window.onload = function() {
    changeColors();
}