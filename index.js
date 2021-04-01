function xmas(h) {
    for(var i=0; i<=h; i++){
      var star = "";
        for(var k = 1; k <= h - i; k++){
        star += " ";
      };
        for(var j=0; j<=i; j++) {
        star += " *";
      };

      console.log(star);
    };
  };
  
  xmas (prompt('Введите число, которое будет высотой елочки'));


