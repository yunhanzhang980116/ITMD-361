function init(){
    //add your javascrip between these two lines of code
    
        var eButton = document.getElementById("entrybutton");
        
        document.getElementById("entrybutton").addEventListener("click", function() 
            {
                var tOutput = "Yunhan Zhang: " + document.getElementById('entryinput').value;
                alert(tOutput);
                document.getElementById("textoutput").innerHTML = document.getElementById('entryinput').value;
              });
    
        }
    window.addEventListener('load', init);