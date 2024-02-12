function calculate(){
    var p=parseFloat($('#investmentInput').val());
    var r= parseFloat($('#interestRate').val());
    var n=parseFloat($('#years').val());
    var result= p * Math.pow((1+r),n);
    var finalResult=result.toFixed(2);
    //alert(finalResult);        
    $('#finalValues') .val(finalResult);  
    return false;                //Display the result
};



$('input[placeholder]').blur(function(){
            $(this).closest('.form-group').removeClass('has-error');
            $('div.error').remove();
            if($(this).val()===''){
                $(this).closest('.form-group').addClass('has-error');
                $(this).after("<div class='error'>This field is required!</div>")
                $(this).focus();
            }//close if
        });