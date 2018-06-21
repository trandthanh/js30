function challenge12() {
  const pressed = [];
  const secretCode = 'thanh';

  window.addEventListener('keyup', (e) => {
    console.log(e.key);
    pressed.push(e.key);
    // Start from the end
    pressed.splice(-secretCode.length -1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)) {
      console.log('DING DING!');
      cornify_add();
    }
    console.log(pressed);
  })
}

export { challenge12 }
