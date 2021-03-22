function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function epilepsy()
{
    for (i=1;i<1000;i++){
    document.getElementById('epil').style.backgroundColor = getRandomColor();
    }
}

