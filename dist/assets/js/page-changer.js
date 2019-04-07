    $(document).ready(function(){

      $('.tab-changer').click(function(){

        var tab_id = $(this).attr('data-tab');

        $('.tab-changer').removeClass('current');
        $('.tab-changer').removeClass('f-yellow');
        $('.tab-changer').addClass('f-grey');
        $('.tab-content').removeClass('current');

        $(this).addClass('current');
        $(this).removeClass('f-grey');
        $(this).addClass('f-yellow');

        $("#"+tab_id).addClass('current');
      })

    })