Webcam.set({
    width: 350,
    height:300,
    image_format: 'png',
    png_quality: 90
    });
    
    camera = document.getElementById("camera");
    
    Webcam.attach("#camera")
    
    
    function takesnapshot()
    {
    Webcam.snap(function (data_uri){
    document.getElementById("result").innerHTML = '<imd id="captured_image" src="'+data_uri+'">';
    });
    }
    
    console.log('ml5.verson', ml5.verson)
    
    classyfier = imageclassyfier('https://teachablemachine.withgoogle.com/models/Wg3KFg_OU/model.jason', modelLoded);
    
    function modelLoded()
    {
        console.log('Model Loded!')
    }
    
    function speak()
    {
    var synth = window.speechSynthesis;
    speak_data_1 = "The first prediction is " + prediction_1;
    speak_data_2 = "The second prediction is " + prediction_2;
    var utterThis = new SpeechSynthesisUtterance(speak_data_1, speak_data_2);
    synth.speak(utterThis)
    }
    

