function create(words) {
   let content = document.getElementById("content");

   for(let i=0; i<words.length; i++){
      let div = document.createElement("div");
      let p = document.createElement("p");
      content.appendChild(div)
      div.appendChild(p)
      p.style.display="none"

      p.innerText=words[i];

      div.addEventListener('click', function() {
         p.style.display = "block";
      });


   }

  
  };



   



