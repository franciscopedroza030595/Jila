$("#calendar").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);

$("#calendar_1").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);

$("#calendar_10").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);

$( "input[type='radio']" ).checkboxradio();

$("#fecha_1").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);

$("#fecha_2").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);

$("#fecha_3").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);

$("#fecha_4").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);

$("#FUP").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);

$("#FUR").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);

$("#FUC").datepicker({
   changeMonth:true,
   changeYear:true,
   yearRange: "c-40:c",
    showOn: "both",
}, $.datepicker.regional[ "es" ]);
//--------------------------funcion imc-----------------------------------
function exfi(form){
  var peso=parseFloat(form.Peso.value);
  var talla=(parseFloat(form.Talla.value)/100);
  var resultado= (peso/(talla*talla)).toFixed(2);

  var interpretacion = "";
  form.imc.value=resultado;
  if (resultado < 16){
  interpretacion = "INFRAPESO: Delgadez Severa";
  form.interpreef.value=interpretacion;
  }
  if (resultado >16 && resultado <19.99){
  interpretacion = "INFRAPESO: Delgadez  Moderada";
form.interpreef.value=interpretacion;
  }
  if (resultado >17 && resultado <18.49){
  interpretacion = "INFRAPESO: Delgadez  Aceptable";
  form.interpreef.value=interpretacion;
  }
  if (resultado >18.50 && resultado <24.99){
  interpretacion = "PESO NORMAL";
  form.interpreef.value=interpretacion;
  }
  if (resultado >25 && resultado <29.99){
  interpretacion = "SOBREPESO";
  form.interpreef.value=interpretacion;      
  }
  if (resultado >30 && resultado <34.99){
  interpretacion = "OBESO: Tipo I";
  form.interpreef.value=interpretacion;
  }
  if (resultado >35 && resultado <40){
  interpretacion = "OBESO: Tipo II";
  form.interpreef.value=interpretacion;
  }
  if (resultado >40){
  interpretacion = "OBESO: Tipo III";
  form.interpreef.value=interpretacion;
  }
return;
}
function calculateAge (form) {
      var fecha=(form.fecha.value);
      var fechanam=(form.fechanam.value);

        var dateParts = fecha.split("/");
        var dateParts2 = fechanam.split("/");

        var nacimiento = new Date(dateParts2[2], dateParts2[1] - 1, dateParts2[0]);
        var actual = new Date(dateParts[2], dateParts[1] - 1, dateParts[0]);


      
        var years = (actual.getFullYear() - nacimiento.getFullYear());
        var resultado = 0;

        if(actual.getMonth() < nacimiento.getMonth() || actual.getMonth() == nacimiento.getMonth() && actual.getDate() < nacimiento.getDate()){
           years--;
           }
        resultado = years;
        form.edad.value=resultado;
        return;
    }
