    function upDate(previewPic){
       let imageDiv = document.getElementById("image");
       imageDiv.style.backgroundImage =`url(${previewPic.src})`;
     
       imageDiv.innerHTML = previewPic.alt;
       console.log("Updated background image and text.");
   
       }
   
    function unDo(){
        let imageDiv = document.getElementById("image");
        imageDiv.style.backgroundImage = "none";
       
        imageDiv.innerHTML = "Hover over an image below to display here.";
        console.log("Restored background image and text to original.");
       }