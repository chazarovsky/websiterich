//Send form confirmation for service Request
var $form = $('[name=contactForm]'),
    $messageSuccess = $('#contactSuccess'),
    $messageError = $('#contactError');

$form.submit(function() {
    var form_data = new FormData(this);
    var $submitButton = $(this.submitButton);
    $messageSuccess.addClass('hidden');
    $messageError.addClass('hidden');
    $submitButton.button('loading');
    
    $.ajax({
        url: 'php/contact-form.php', // point to server-side PHP script 
        dataType: 'text',  // what to expect back from the PHP script, if anything
        cache: false,
        contentType: false,
        processData: false,
        data: form_data,                         
        type: 'post',
        success: function(data, status) {
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

                $submitButton.button('reset');
                
                return;
        },
        error: function(response, status, error){
            $messageError.removeClass('hidden');
            $messageSuccess.addClass('hidden');

            $form.find('.has-success')
                .removeClass('has-success');

            $submitButton.button('reset');
        }
     });
    return false;
});


