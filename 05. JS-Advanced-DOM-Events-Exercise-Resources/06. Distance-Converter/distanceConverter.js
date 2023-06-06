function attachEventsListeners() {
    
    let convertButton = document.querySelector("input[value=Convert]")
    convertButton.addEventListener("click",changeUnits)

    function changeUnits (){
        let inputDistanceInM =(Number)(document.getElementById("inputDistance").value)
        let units = document.getElementById("inputUnits")
        if(units.value==="km"){
             inputDistanceInM= inputDistanceInM * 1000;
        }else if(units.value==="m"){
            inputDistanceInM= inputDistanceInM * 1;
        }else if(units.value==="cm"){
            inputDistanceInM= inputDistanceInM * 0.01;
        }else if(units.value==="mm"){
            inputDistanceInM= inputDistanceInM * 0.001;
        }else if(units.value==="mi"){
            inputDistanceInM= inputDistanceInM * 1609.34;
        }else if(units.value==="yrd"){
            inputDistanceInM= inputDistanceInM * 0.9144;
        }else if(units.value==="ft"){
            inputDistanceInM= inputDistanceInM * 0.3048;
        }else if(units.value==="in"){
            inputDistanceInM= inputDistanceInM * 0.0254;
        }

        let outputDistanceInM =document.getElementById("outputDistance")
        let unitsOutput = document.getElementById("outputUnits")

        if(unitsOutput.value==="km"){
            outputDistanceInM.value=inputDistanceInM / 1000;
       }else if(unitsOutput.value==="m"){
           outputDistanceInM.value= inputDistanceInM / 1;
       }else if(unitsOutput.value==="cm"){
           outputDistanceInM.value= inputDistanceInM / 0.01;
       }else if(unitsOutput.value==="mm"){
           outputDistanceInM.value= inputDistanceInM / 0.001;
       }else if(unitsOutput.value==="mi"){
           outputDistanceInM.value= inputDistanceInM / 1609.34;
       }else if(unitsOutput.value==="yrd"){
           outputDistanceInM.value= inputDistanceInM / 0.9144;
       }else if(unitsOutput.value==="ft"){
           outputDistanceInM.value= inputDistanceInM / 0.3048;
       }else if(unitsOutput.value==="in"){
           outputDistanceInM.value= inputDistanceInM / 0.0254;
       }

    }
    
}