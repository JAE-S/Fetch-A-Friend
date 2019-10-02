

$('document').ready(() => {
  $("#survey").hide();
  $('#user_details').show();

  
  $('.modal').modal();
  $('select').formSelect();
  // $('input#name, input#last_name').characterCounter();

  $('#start').on("click", () => {
      $('#user_details').hide();
      $("#survey").show();
  });

  $('#find_my_match').on("click", () => {
      // function validate() {
      //     var isValid = true; 
      //     $('.validate').each(() => {
      //         if($(this).val() === " "){
      //             isValid = false; 
      //             console.log("please complete all of the questions to continue");
      //         }
      //     });
      // }

      event.preventDefault(); 
      var newCharacter = {

          first_name: $("").val.trim(),
          last_name: $("").val.trim(),
          photo: $("").val().trim(),
          score: [
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
      }

      $.post('/api/friends', newFriend).then((results) => {
          console.log('survey.html', results);
          alert("Creating your profile!")
      })
  })

});
        