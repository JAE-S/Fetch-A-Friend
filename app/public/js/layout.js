
  // ========================================================== //
 //               Front-End Javascript functions               //
// ========================================================== //

$('document').ready(function() {
    // Hidden elements on load
    $(".match_details").hide();
    $("#survey").hide();
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
        $('#user_details').hide();
        $("#survey").show();
    });

    $('#find_my_match').on("click", function(event) {
      event.preventDefault(); 
      setTimeout(function(){
        $(".fetching").hide();
      }, 2000);

      $(".match_details").delay(2000).fadeIn(500);

        // addPawfile();

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
        console.log(data.user_name)
      })

      })

    // function addPawfile(){
      
      // var scoresArray = [];
  

      // var newPawfile = {
      //     first_name: $('#first_name').val(),
      //     last_name: $('#last_name').val(),
      //     photo: $('#photo').val(),
      //     scores:  [
      //         $('#q_1').val(),
      //         $('#q_2').val(),
      //         $('#q_3').val(),
      //         $('#q_4').val(),
      //         $('#q_5').val(),
      //         $('#q_6').val(),
      //         $('#q_7').val(),
      //         $('#q_8').val(),
      //         $('#q_9').val(),
      //         $('#q_10').val(),
      //       ]
      // };
  
    // $('.question').each(function () {
    //   // Parse the input values as integers
    //   scoresArray.push(parseInt( $(this).val())); 
    // })
    // // Counters the async behavior of the .each function 
    // .promise().done(() => {

    //   // Pushes the scores to the newPawfile object 
    //   newPawfile.scores = scoresArray;

      // AJAX Post 
      // $.post("/api/friends", newPawfile, function(data){
      //   console.log(data.first_name)
      //   console.log(data.user_name)
      // })
        // console.log("Pawfile created successfully!", data);
      
    // })
  // }

}) 

