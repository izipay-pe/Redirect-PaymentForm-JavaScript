//Formato UTC, la fecha UTC es la fecha actual + 5 horas 
var utcDate = new Date().toISOString().replace(/T/, '').replace(/\..+/, '').replace(/-/, '').replace(/-/, '').replace(/:/, '').replace(/:/, '')
document.formulario.campo8.value = utcDate.replace(/ /g, "");    

  function procesar() {                         

      campo1=document.getElementById('campo1').value;
      campo2=document.getElementById('campo2').value;
      campo3=document.getElementById('campo3').value;
      campo4=document.getElementById('campo4').value;
      campo5=document.getElementById('campo5').value;
      campo6=document.getElementById('campo6').value;
      campo7=document.getElementById('campo7').value;
      campo8=document.getElementById('campo8').value;
      campo9=document.getElementById('campo9').value;
      campo10=document.getElementById('campo10').value;
      llave=document.getElementById('key').value;
      
      
      final = campo1+"+"+campo2+"+"+campo3+"+"+campo4+"+"+campo5+"+"+campo6+"+"+campo7+"+"+campo8+"+"+campo9+"+"+campo10+"+"+llave;
      key = llave;

      hash = CryptoJS.HmacSHA256(final, key); 

      hashInBase64 = CryptoJS.enc.Base64.stringify(hash);

      document.getElementById('campo11').value = hashInBase64;
      console.log("Cadena String64= "+hashInBase64)

      document.forms.ejemplo.submit();
  }