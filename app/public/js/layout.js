
  // ========================================================== //
 //               Front-End Javascript functions               //
// ========================================================== //

$('document').ready(function() {
    // Hidden elements on load
   
    $('#completeFields').hide(); 
    $(".match_details").hide();
    $("#survey").hide();
    // $('#find_my_match').hide();
    $('#user_details').show();
    // Materialize functions 
    $('.carousel').carousel();
    $('.modal').modal();
    $('select').formSelect();
    // Materialize character counter 
    // $('input#name, input#last_name').characterCounter();

    // On Click functions 
    $('#start').on("click", function(event){
      event.preventDefault();
        validateInput() 
    });
    
    function validateInput() {
    
      if ($('#first_name').val() && $('.pawfilePhoto') && $('#last_name')){
        $('#user_details').hide();
        $("#survey").show();
      } else {
        $('#completeFields').show(); 
        setTimeout(function(){
        $('#completeFields').fadeOut('slow'); 
      }, 2000);
      }
      
    }
    $('#find_my_match').on("click", function(event) {
      event.preventDefault(); 
      setTimeout(function(){
        $(".fetching").hide();
      }, 2000);

      $(".match_details").delay(2000).fadeIn(500);

        var newPawfile = {
          first_name: $('#first_name').val(),
          last_name: $('#last_name').val(),
          photo: $('#photo').val(),
          scores:  [
              $('#q_1').val(),
              $('#q_2').val(),
              $('#q_3').val(),
              $('#q_4').val(),
              $('#q_5').val(),
              $('#q_6').val(),
              $('#q_7').val(),
              $('#q_8').val(),
              $('#q_9').val(),
              $('#q_10').val(),
            ]
      };

      $.post("/api/friends", newPawfile, function(data){
        console.log(data.first_name)
        var bestMatch = data.first_name

        $('#newMatch').html(bestMatch);
        $('#newMatchImg').attr('src', data.photo)
 
        console.log(data.user_name)
        var userName = data.user_name.toUpperCase()
        $('#userName').prepend(userName)
        $('#userImg').attr(data.user_pic)
       
      })

      })

}) 

