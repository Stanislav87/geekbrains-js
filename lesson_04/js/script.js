(function($){
    $(function(){      
        $('li').eq(0).addClass('active');
        $('p').hide();
        $('p').eq(0).show();

        $('li').click(function(event){
            var i = $('li').index(event.target);
            $('p').hide();
            $('p').eq(i).show();
            $('li').removeClass('active');
            $(this).addClass('active');
        });
    });
})(jQuery);