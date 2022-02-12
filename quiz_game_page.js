
  player1_name = localStorage.getItem("player1_name");
  player2_name = localStorage.getItem("player2_name");

  player1_score = 0;
  player2_score = 0;

  document.getElementById("player1_name").innerHTML = player1_name+" : ";
  document.getElementById("player2_name").innerHTML = player2_name+" : ";
  
  document.getElementById("player1_score").innerHTML = player1_score;
  document.getElementById("player2_score").innerHTML = player2_score;

  function send(){

    number1 = document.getElementById("number1_input").value;
    number2 = document.getElementById("number2_input").value;
    actual_answer = parseInt(number1)*parseInt(number2);

    question_number = "<h4> Question: "+number1+" X "+number2;
    input_box = "<br><input id='check_input_box' type='text'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check()'>Check</button>";

    row = question_number + input_box + check_button;

    document.getElementById("output").innerHTML = row;

    document.getElementById("number1_input").value = "";
    document.getElementById("number2_input").value = "";

   }