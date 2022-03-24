function ColorChange() {
    var rgbR = Math.floor(Math.random() * 1000);
    var rgbG = Math.floor(Math.random() * 1000);
    var rgbB = Math.floor(Math.random() * 1000);
    if(rgbB === 0 && rgbR === 0 && rgbG === 0) {
      Math.floor(Math.random() * 1000);
    }
    var FinalRgb = rgbR + "," + rgbG + "," + rgbB;
    document.getElementById("Color-Changer-Box"). style. backgroundColor = 'rgb('+FinalRgb+')';
  }