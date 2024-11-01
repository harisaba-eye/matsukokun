var quiz = [

  ["1+1", "1", "2", "3", "4", 1, ],
  ["日本の首都は？", "博多", "横浜", "東京", "大阪", 3, ],

]
  var counter = 0;
  var score = 0;
  var end = false;

    function set(){
        var order = document.getElementById("order");
        var question = document.getElementById("question");
        order.innerHTML = "【第" + (counter + 1) + "問】";
        question.innerHTML = quiz[counter][0];
  
    
    for(var i = 1; i < 5; i ++){
        var answer = document.getElementById("answer" + i);
        answer.innerHTML = quiz[counter][i];
      }
  }
  function judge(num){
    if(end){
        return;
    }
  var result = document.getElementById("result");
  var answer = quiz[counter] [5];
      if(answer == num){
        result.innerHTML = "正解！";
        score += 1;
      }
      else{
        result.innerHTML = "不正解...";
      }
      if(counter == quiz.length - 1){
        result.innerHTML += quiz.length + "問中" + score + "問正解！";
        end = true;
      }
      else{
        counter += 1;
        set();
      }
    }
