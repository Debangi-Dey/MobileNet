Webcam.set({
    width: 310, height: 300, image_format:'png', png_quality:90, constraints:{facingMode: "enviorment"}
})
cam=document.getElementById("cam")
Webcam.attach('#cam')

function Take_Shot(){
Webcam.snap(function(data_uri){
    document.getElementById("result").innerHTML='<img id="capturedImg" src="'+data_uri+'"/>'
})
}console.log("ml version ", ml5.version)
var classifier=ml5.imageClassifier("MobileNet",modelLoaded)

function modelLoaded(){
console.log("Model Loaded")
}

function check(){
    var img=document.getElementById("capturedImg")
    classifier.classify(img, gotResult)
}

function gotResult(error, results){
if (error) {
    console.error(error)
}
else {
    console.log(results)
    document.getElementById("objName").innerHTML=results[0].label
}
}