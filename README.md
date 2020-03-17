# websiterich
Este repositorio contiene el código de la página richit.ai

Cuenta con certificado SSL a partir del año 2020

La página surge de una plantilla http://demo.themefisher.com/demos/?theme=timer
por lo que la mayoría de los css y js ya venían incluidos.

Al hacer cambios en la rama master éstos se generan directamente en el servidor, para que se visualicen los cambios se tiene que acceder al jenkis y hacer los pasos correspondientes.

###### Importante:
Cuando se eliminan o se cambia de nombre un archivo, aunque se hayan hecho en el repositorio, en el servidor se tienen que eliminar directamente.

---

## Contenido del repositorio

> 3.9.0
>> brochures_gob
>>> // contiene los pdf que se descargan en la sección en español de recursos.html
>> canvasInfografia
>>> // contiene las carpetas del canvas comercial sobre rsp
>>> * css
>>> * less
>>> * img
>>> * js
>>> * indexCanvas.html

>> css
>>> * animate.css                       // plantilla por default *
>>> * bootstrap.mincss                  // plantilla por default *
>>> * ionicons.min.css		              // plantilla por default *
>>> * jquery.fancybox.css               // plantilla por default *
>>> * video.css		                      // plantilla por default *
>>> * owl.css		                        // plantilla por default *
>>> * owl.theme.css                     // plantilla por default *
>>> * pricing.css                       // plantilla por default *
>>> * responsive.css                    // plantilla por default *
>>> * slider.css   		                  // plantilla por default *
>>> * main.css	                        // plantilla por default * se ha agregado código
>>> * richit.css	                      // plantilla por default * se ha agregado código
>>> * style_resources.css              //  css agregado para la sección de recursos.html 
>>> * style-landing.css	              //  css agregado para las landing en la sección de plataformas y campañas de google

>> en
>>> // archivos .html - contenido en inglés que no necesariamente es igual al contenido de la versión en español

>> es
>>> // archivos .html - contenido en español que no necesariamente es igual al contenido de la versión en inglés

>> favicon.ico

>> fonts
>>> //fuentes

>> free-license.pdf   //licencia de la plantilla

>> images
>>> //carpetaa de imágenes

>> js
>>> * ...

>> less
>>> * ...

>> php  
>>> // En estos archivos se puede modificar el correo a quienes se les 
     envían los datos de los formularios, así comodesde donde se envían.
>>> * class.phpmailer.php   // 
>>> * contact-form.php
>>> * send-forms.php
>>> * enviar-prueba.php  // este archivo envía los datos del formulario de
                                                               recursos.html al área comercial, aqui se incluye el 
google form de gobierno  de datos 
>>> * SMTP.php  // librería ocupada para envio de archivos por gmail
>>> * PHPMailer.php  // librería ocupada para envio de archivos por gmail
>>> * Exception.php  // librería ocupada para envio de archivos por gmail
>>> * enviar-rsp.php  // este archivo envía los datos del formulario de la sección      
  					de rspC.html de la campaña en capterra al área 
comercial
>>> * enviar-cloudera.php  // este archivo envía los datos del formulario de
                                          cloudera_mexico.html al área comercial
>>> * enviar-dremio.php  // este archivo envía los datos del formulario de 
			       dremio_mexico.html al área comercial
>>> * enviar-elastic.php  // este archivo envía los datos del formulario de 
					      elasticsearch_mexico.html al área comercial
>>> * enviar-kafka.php  // este archivo envía los datos del formulario de 
					      confluent_mexico.html al área comercial
>>> * enviar-rspE.php  // este archivo envía los datos del formulario de 				rspE.html, pág de la sección de retail en inglés    
al área comercial

>> Retail   
>>> // archvios que se usan en la sección en inglés  richit.ai/en/retail.html
>>> * img
>>> * js

>> videos
		
>> gulpfile.js

>> package.json

>> README.md


