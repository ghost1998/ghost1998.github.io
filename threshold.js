function threshold()
{
  var canv2 = document.getElementById("Q2");
  var context2 = canv2.getContext("2d");
  var originalImagedata = context2.getImageData(0, 0, canv2.width, canv2.height);
  var binaryImageData = context2.getImageData(0, 0, canv2.width, canv2.height);


  var red_lo = document.getElementById("S1").value;
  // var red_hi = document.getElementById("S2").value;
  // var blue_lo = document.getElementById("S3").value;
  // var blue_hi = document.getElementById("S4").value;
  // var green_lo = document.getElementById("S5").value;
  // var green_hi = document.getElementById("S6").value;

  var red_hi = 255;
  var blue_lo = 0;
  var blue_hi = 255;
  var green_lo = 0;
  var green_hi = 255;

  var i;
  for (i = 0; i < originalImagedata.data.length; i += 4) 
  {
    // if(originalImagedata.data[i] < red_lo ) originalImagedata.data[i] = 0;
    // if(originalImagedata.data[i] > red_hi ) originalImagedata.data[i] = 0;
    // if(originalImagedata.data[i+1] < blue_lo ) originalImagedata.data[i+1] = 0;
    // if(originalImagedata.data[i+1] > blue_hi ) originalImagedata.data[i+1] = 0;
    // if(originalImagedata.data[i+2] < green_lo ) originalImagedata.data[i+2] = 0;
    // if(originalImagedata.data[i+2] > green_hi ) originalImagedata.data[i+2] = 0;

    if( (originalImagedata.data[i] < red_lo) || (originalImagedata.data[i] > red_hi) || (originalImagedata.data[i+1] < blue_lo) || (originalImagedata.data[i+1] > blue_hi ) 
      || (originalImagedata.data[i+2] < green_lo ) || (originalImagedata.data[i+2] > green_hi) )
    {
      // originalImagedata.data[i] = 0;
      // originalImagedata.data[i+1] = 0;
      // originalImagedata.data[i+2] = 0;
      binaryImageData.data[i] = 255;
      binaryImageData.data[i+1] = 0;
      binaryImageData.data[i+2] = 0;
      binaryImageData.data[i+3] = 255;


    }
    else 
    {
      binaryImageData.data[i] = 0;
      binaryImageData.data[i+1] = 0;
      binaryImageData.data[i+2] = 0;
      binaryImageData.data[i+3] = 0;
    }
  }

  // var canv1 = document.getElementById("Q1");
  // var context1 = canv1.getContext("2d");

  // context1.putImageData(originalImagedata, 0, 0);


  var canv3 = document.getElementById("Q3");
  var context3 = canv3.getContext("2d");

  context3.putImageData(binaryImageData, 0, 0);
  // alert("Done Threshold function");

  // alert("Done Threshold function");

}






window.onload = function() 
{
   var S1 = document.getElementById("S1");
   // var V1 = document.getElementById('V1');
   S1.oninput = function()
   {
    // V1.innerHTML = this.value;
    threshold();
    // thresholdImage("S1", this.value);
   }

   // var S2 = document.getElementById("S2");
   // var V2 = document.getElementById('V2');
   // S2.oninput = function()
   // {
   //  V2.innerHTML = this.value;
   //  threshold();
   //  // thresholdImage("S2", this.value);

   // }


   // var S3 = document.getElementById("S3");
   // var V3 = document.getElementById('V3');
   // S3.oninput = function()
   // {
   //  V3.innerHTML = this.value;
   // }

   // var S4 = document.getElementById("S4");
   // var V4 = document.getElementById('V4');
   // S4.oninput = function()
   // {
   //  V4.innerHTML = this.value;
   // }

   // var S5 = document.getElementById("S5");
   // var V5 = document.getElementById('V5');
   // S5.oninput = function()
   // {
   //  V5.innerHTML = this.value;
   // }

   // var S6 = document.getElementById("S6");
   // var V6 = document.getElementById('V6');
   // S6.oninput = function()
   // {
   //  V6.innerHTML = this.value;
   // }


};

