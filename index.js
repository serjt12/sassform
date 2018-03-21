$(document).ready(function() {


  $('section').on('click', '.checkmarkp', function() {
    var input = $(this);
    input.addClass('checked')
    $('.checkmarkd').removeClass('checked')
    input.closest('section').find('.card-info').addClass('hide')
    $('.btn').addClass('hide')
    $('.btnpal').removeClass('hide')
    $('#errorcn').removeClass('error_show')
    $('#errorex').removeClass('error_showex')
    $('#errorcvc').removeClass('error_showcvc')
    $('#errorlength').removeClass('error_showlength')
  })
  $('section').on('click', '.checkmarkd', function() {
    var input = $(this);
    input.addClass('checked')
    $('.checkmarkp').removeClass('checked')
    input.closest('section').find('.card-info').removeClass('hide')
    $('.btn').removeClass('hide')
    $('.btnpal').addClass('hide')
  })
  $('.zone1').on('blur', '.cn', function() {
    var input = $(this)
    var cn = input.val()

    if (cn.length == 0) {
      input.closest('.zone1').find('#errorcn').addClass('error_show')
      input.closest('.zone1').find('#errorlength').addClass('error_showlength')
    }
    if (cn.length > 0 && cn.length <= 14) {
      input.closest('.zone1').find('#errorcn').removeClass('error_show')
      input.closest('.zone1').find('#errorlength').removeClass('error_showlength')
      console.log(cn.length)
      input.val(function(i, v) {
        var v = v.replace(/[^\d]/g, '').match(/.{1,4}/g);
        return v ? v.join('-') : '';
      });
    }
    if (cn.length > 14) {
      input.closest('.zone1').find('#errorlength').addClass('error_showlength')
    }
  })
  $('.zone2').on('blur', '#expire', function() {
    var input = $(this)
    var ex = input.val()

    if (ex.length == 0) {
      input.closest('.exp').find('#errorex').addClass('error_showex')
    }
    if (ex.length > 0) {
      input.closest('.exp').find('#errorex').removeClass('error_showex')
      var split = ex.split('/')
      var mm = +split[0]
      var yy = +split[1]

      if (mm.length==2 && yy.length==2) {
        console.log(split, mm, yy)
        input.val(function(i, v) {
          var v = v.replace(/[^\d]/g, '').match(/.{1,2}/g);
          return v ? v.join('\/') : '';
        })
      }


    }



  })
  $('.zone2').on('blur', '#cv', function() {
    var input = $(this)
    var cvc = input.val()

    if (cvc.length == 0) {
      input.closest('.cvc').find('#errorcvc').addClass('error_showcvc')
    } else {
      input.closest('.cvc').find('#errorcvc').removeClass('error_showcvc')
    }


  })
  $('body').on('click', '.btn', function(e) {
    e.preventDefault()
    var input = $(this);
    var cn = input.closest('body').find('.cn').val()
    var ex = input.closest('body').find('#expire').val()
    var cvc = input.closest('body').find('#cv').val()
    if (cn.length == 0) {
      input.closest('body').find('#errorcn').addClass('error_show')

    }

    if (ex.length == 0) {
      input.closest('body').find('#errorex').addClass('error_showex')
    }

    if (cvc.length == 0) {
      input.closest('body').find('#errorcvc').addClass('error_showcvc')
    }

  })

})
