$(function(){
  $('[data-class="answer"]').hide();

  $('[data-class="question"]').click(function(){
    $(this).next().toggle();
  });
});
