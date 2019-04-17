    $(document).ready(function(){

      $('.tab-changer').click(function(){

        var tab_id = $(this).attr('data-tab');

        $('.tab-content').removeClass('current');
        $('.tab-changer').removeClass('f-yellow');
        $('.tab-changer').addClass('f-grey');
        $('.tab-changer').removeClass('svg-effect');
        $('.tab-changer').removeClass('tab-changer-active');


        $(this).addClass('current');
        $(this).removeClass('f-grey');
        $(this).addClass('f-yellow');
        $(this).addClass('svg-effect');
        $(this).addClass('tab-changer-active');


        $("#"+tab_id).addClass('current');
      });

    });

