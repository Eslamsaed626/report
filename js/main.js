$(function () {

  $("#userPicture").change(function () {
    filename = this.files[0].name;
    $(".pic-val").text(filename);
    console.log(filename);
  });

  // show salary required 
  $(document).on('click', '#sal-ng', function (e) {
    $(this).attr('aria-checked', true)
    $('#sal-ng2').attr('aria-checked') == false;
    $('.salary-amount').removeClass('d-none')
  });
  $(document).on('click', '#sal-ng2', function (e) {
    $(this).attr('aria-checked', true)
    $('#sal-ng').attr('aria-checked') == false;
    $('.salary-amount').addClass('d-none')
  });

  $('.form-user input').attr('disabled', 'disabled')
  $('.form-user select').attr('disabled', 'disabled')
  $('.form-user textarea').attr('disabled', 'disabled')
  $('.form-user button').attr('disabled', 'disabled')

  $(document).on('click', '#edit', function () {
    $('.form-user input').attr('disabled', false)
    $('.form-user select').attr('disabled', false)
    $('.form-user textarea').attr('disabled', false)
    $('.form-user button').attr('disabled', false)
    $(this).addClass('save-info btn-success');
    $(this).removeClass(' btn-info')
    $(this).text("حفظ");
  })
  $(document).on('click', '.save-info', function () {
    $('.form-user input').attr('disabled', 'disabled')
    $('.form-user select').attr('disabled', 'disabled')
    $('.form-user textarea').attr('disabled', 'disabled')
    $('.form-user button').attr('disabled', 'disabled')
    $(this).addClass('save-info  btn-info');
    $(this).text("تعديل");
    $(this).removeClass(' btn-success save-info')
  })

  $(document).on('mouseover', '.text-req', function () {
    $(this).tooltip(
      {
        container: 'body',
        trigger: 'hover'
      }
    )

  });
  $(document).on('mouseleave', '.text-req', function () {
    $('.tooltip').remove();
  });
  $('[data-toggle="tooltip"]').tooltip(
    {
      container: 'body',
      trigger: 'hover'
    }
  )
  
});