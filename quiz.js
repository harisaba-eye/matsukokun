var quiz = [

  ["理科の生物の図で正しい種類は？", "鳥類", "麺類", "犬類", "魚介類", 1],
  ["広島市じゃない場所は", "佐伯区", "中区", "北区", "安佐南区", 3],
  ["Does Mr.wada played tennis yesterdayの意味を答えてください", "和多氏はテニスをします", "和多氏は昨日テニスをしました", "和多氏はテニスをしてる途中です", "元気ですか", 2],
 ["5x -16 = -2x 5は？", "-100", "-21", "76", "3", 4], 
  ];
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
