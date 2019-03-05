function Display(e)
{
  var reader = new FileReader();
  // var canv1 = document.getElementById('Q1');
  // var ctx1 = canv1.getContext('2d');

  var canv2 = document.getElementById('Q2');
  var ctx2 = canv2.getContext('2d');

  var canv3 = document.getElementById('Q3');
  var ctx3 = canv3.getContext('2d');

  reader.onload = function(event)
  {
    var img = new Image();
    img.onload = function()
    {
      // ctx1.drawImage(img,0,0, canv1.width, canv1.height);
      ctx2.drawImage(img,0,0, canv2.width, canv2.height);
      ctx3.drawImage(img,0,0, canv3.width, canv3.height);
      toggle();

    }
    img.src = event.target.result;
  }
  reader.readAsDataURL(e.files[0]);
}


function toggle()
{
  var canvas1=document.getElementById('Q2');
  var canvas2=document.getElementById('Q3');

  // alert("Toggle");
  if(canvas2.style.visibility=='visible')
  {
    canvas2.style.visibility='hidden';
    // canvas2.style.visibility='visible';
  }
  else
  {
    canvas2.style.visibility='visible';
    // canvas2.style.visibility='hidden';
  }
}





