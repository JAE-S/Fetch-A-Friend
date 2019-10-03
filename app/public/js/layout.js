
  // ========================================================== //
 //               Front-End Javascript functions               //
// ========================================================== //

$('document').ready(() => {
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
    $('#start').on("click", () => {
        $('#user_details').hide();
        $("#survey").show();
    });

    $('#find_my_match').on("click", () => {
      setTimeout(function(){
        $(".fetching").hide();
      }, 2000);

      $(".match_details").delay(2000).fadeIn(500);
        addPawfile();
      })

    function addPawfile(){
      
      var scoresArray = [];
      event.preventDefault(); 

      var newPawfile = {
          first_name: $('#first_name').val(),
          last_name: $('#last_name').val(),
          photo: $('#photo').val(),
          scores: []
      }
  
    $('.question').each(() => {
      // Parse the input values as integers
      scoresArray.push(parseInt( $(this).val())); 
    })
    // Counters the async behavior of the .each function 
    .promise().done(() => {

      // Pushes the scores to the newPawfile object 
      newPawfile.scores = scoresArray;

      // AJAX Post 
      $.post("/api/friends", newPawfile).then((data) => {
        console.log("Pawfile created successfully!", data);
      }); 
    })
  }
}) 

