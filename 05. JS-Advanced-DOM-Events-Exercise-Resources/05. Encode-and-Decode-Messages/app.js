function encodeAndDecodeMessages() {
    let encodeButton = document.querySelector("button");
    let decodeButton = Array.from(document.querySelectorAll("button"))[1];
  
    encodeButton.addEventListener("click", encodeMessage);
    decodeButton.addEventListener("click", decodeMessage);
  
    function encodeMessage() {
      let message = document.querySelector("textarea").value;
      let receiverTextarea = document.querySelector(
        'textarea[placeholder="No messages..."]'
      );
  
      let encodedMessage = "";
  
      for (let i = 0; i < message.length; i++) {
        let code = message.charCodeAt(i);
        encodedMessage += String.fromCharCode(code + 1);
      }
  
      receiverTextarea.value = encodedMessage;
      document.querySelector("textarea").value = "";
    }
  
    function decodeMessage() {
      let receiverTextarea = document.querySelector(
        'textarea[placeholder="No messages..."]'
      );
      let encodedMessage = receiverTextarea.value;
  
      let decodedMessage = "";
  
      for (let i = 0; i < encodedMessage.length; i++) {
        let code = encodedMessage.charCodeAt(i);
        decodedMessage += String.fromCharCode(code - 1);
      }
  
      receiverTextarea.value = decodedMessage;
    }
  }
  