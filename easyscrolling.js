$(document).ready(function(){
    var scrollLink=$('.scroll');
    //Smooth scrolling
    scrollLink.click(function(e){
        e.preventDefault();
      
        $('body,html').animate({
        scrollTop:$(this.hash).offset().top
        },2000); 
    });
    $(window).scroll(function(){
        var scrollbarLoaction=$(this).scrollTop();
        
        scrollLink.each(function(){
            var sectionOffset=$(this.hash).offset().top;
            if(sectionOffset<= scrollbarLoaction){
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
                
                
            };
        });
            
        });
});