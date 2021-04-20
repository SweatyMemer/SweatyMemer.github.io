   view = "newgrass"; 
   ts = 1000;         // interval spacing in milliseconds
   tsrandom = 20;  // random interval in milliseconds
   var timecount = 0;
   var timeend = 900000;
   imageoffline = "offline-temporarily.jpg";
   imagenewgrass = "https://webcamb1.watching-grass-grow.com/current.jpg";
   imageoldgrass = "https://webcamb2.watching-grass-grow.com/current.jpg";
   image=imagenewgrass;
   function RefreshImage() {
    timecount = timecount + ts;
    tsrand = Math.floor(tsrandom*Math.random());
    tmp = new Date();
    tmp = "?wgg"+tmp.getTime(); 
    if (view == "alternate") {
        if ( image == imageoldgrass ) { 
            image = imagenewgrass;
        } else { 
            image = imageoldgrass;
        }
    } else if (view == "oldgrass") {
        image = imageoldgrass;
    } else if (view == "newgrass") {
        image = imagenewgrass;
    } else {
        view = grass;
        image = imageoldgrass;
    }
    if (timecount>timeend) {
        image = "/mow-lawn-break.jpg";
        ts = 900000;
    }
    document.images["webcam"].src = image+tmp; 
    setTimeout("RefreshImage()", (ts+tsrand));
}
function Start() {
    setTimeout("RefreshImage()", 500);
}
function alternatewebcam(string){
    view = "alternate";
}
function oldgrasswebcam(string){
    view = "oldgrass";
}
function newgrasswebcam(string){
    view = "newgrass";
}
Start();
