object = [];
status = "";



function setup()
{
    canvas = createCanvas(380, 380);
    canvas.center();
    video = createCapture(VIDEO);
    video.size(380, 380);
    video.hide();
}


function modelLoaded()
{
  console.log("Modelo Carregado!")
  status = true;
}


function start()
{
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detectando Objetos";
    objectName = document.getElementById("objectName").value;
}


function gotResult(error, results)
{
    if (error) {
        console.log(error);
    }
    console.log(results);
    objects = results;
}