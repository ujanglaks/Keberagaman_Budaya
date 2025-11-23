function ExecuteScript(strId)
{
  switch (strId)
  {
      case "5kliNH5XESA":
        Script1();
        break;
  }
}

function Script1()
{
  var audio = document.getElementById('bgSong');
audio.src="musical.mp3";
audio.load();
audio.play();
}

