$(function() { //shorthand document.ready function
    var $form = $('[name=contactForm]');
    var $messageSuccess = $('#contactSuccess'),
        $messageError = $('#contactError');
    
    //Contact
    $('[name=contactForm]').submit( function(e){
        e.preventDefault();
        
		var ferror = false,
		emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;
        
        //CORREGIR
        var f = $(this).find('.form-group');
        f.each( function() { $(this).css('color','#a94442'); });
        
        //Alertas de envío
        $messageSuccess.addClass('hidden');
        $messageError.addClass('hidden');
        
        //Validar formulario
        $("#contact-form :input").each( function(){
            var i = $(this); // current input
            var rule = i.attr('data-rule');

			if( rule !== undefined ){
			var ierror=false; // error flag for current input
			var pos = rule.indexOf( ':', 0 );
			if( pos >= 0 ){
				var exp = rule.substr( pos+1, rule.length );
				rule = rule.substr(0, pos);
			}else{
				rule = rule.substr( pos+1, rule.length );
			}
            
            switch( rule ){
                case 'required':
                if( i.val()==='' ){ ferror=ierror=true; i.css('border-color','#a94442');}
                    else 
                break;

                case 'minlen':
                if( i.val().length<parseInt(exp) ){ ferror=ierror=true; i.css('border-color','#a94442');}
                break;

                case 'email':
                if( !emailExp.test(i.val()) ){ ferror=ierror=true; i.css('border-color','#a94442');}
                break;

                case 'checked':
                if( !i.attr('checked') ){ ferror=ierror=true; i.css('border-color','#a94442');}
                break;

                case 'regexp':
                exp = new RegExp(exp);
                if( !exp.test(i.val()) ){ ferror=ierror=true; i.css('border-color','#a94442');}
                break;
            }
                i.next('.validation').html( ( ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '' ) ).show('blind');
                
                i.next('.validation').css('font-size','12px');
                if( !ierror ) i.css('border-color','#CCC');
			}
             
        });
        
        if( ferror ) return false; 
            else {
                var paramArr = $("#contact-form :input").serializeArray();
                var $submitButton = $(this).find('#contact-submit').button('loading');
            }
        console.log(paramArr);
        $.post("php/contact-form.php",
           paramArr,
           function(data, status) {
                if(status == 'success'){
                   $messageSuccess.removeClass('hidden');
                    $messageError.addClass('hidden');

                    // Reset Form
                    $form.find('.form-control')
                        .val('')
                        .blur()
                        .parent()
                        .removeClass('has-success')
                        .removeClass('has-error')
                        .find('label.error')
                        .remove();

                    $('#contact-submit').button('reset');
                    $('[name=contactForm]').each( function() { $(this).css('color','#a94442'); });
                    return;
                    
                } else {
                    $messageError.removeClass('hidden');
                    $messageSuccess.addClass('hidden');

                    $form.find('.has-success')
                        .removeClass('has-success');

                    $('#contact-submit').button('reset');
                }
                showConfirmation_services = true; 
            }           
        );
        return false;
        
        

    });
});



