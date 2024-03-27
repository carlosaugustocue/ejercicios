// Description: Write a function that receives a text and returns the inverted text.
function reverseTextString(text){
    let invertedText = '';
    for (let i = text.length - 1; i >= 0; i--) {
      // console.log(text[i]);
      invertedText += text[i]
    }
    return invertedText
  }
  
  reverseTextString('ISAAC NEWTON')