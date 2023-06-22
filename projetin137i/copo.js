var ad=''

function setup(){
        canvas=createCanvas(500,300)
        luffy=ml5.objectDetector('cocossd',modelLoaded)
    }
    

        function draw(){
            canvas.position(windowWidth/2-250,200)
            image(img,0,0,500,300)
            fill('red')
            if(detectado){
                textSize(20)
                stroke('#0066CC')
                strokeWeight(3);
                fill('#0066CC')
                noFill()
                for(var i in objeto){
                    fill('#0066CC')
                ad=objeto[i]  
            text(ad.label,ad.x,ad.y+25)
            noFill()
            rect(ad.x,ad.y,ad.width,ad.height)
                }
            }
        }
         function preload(){
                img=loadImage('download.jpg')
            }

           
 
                function modelLoaded()
                {
                    console.log('GOMU GOMU NO PISTOOOON')
                    luffy.detect(canvas,gotR)

                }
                var objeto=[]
                var detectado=false
                function gotR(erro,result){
                    if(erro){
                        console.log(erro)
                    }else{
                     objeto=result
                     detectado=true; 
                    }
                    

                }