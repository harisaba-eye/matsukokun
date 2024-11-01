var quiz = [

  ["マツコの犬種はは？", "フレンチブルドッグ", "ロットワイラー", "ビーグル", "チワワ", 1, ],
    ["前のかけるの土曜日で最後に行った場所", "和カフェ ", "プラスロシェ", "水鳥の浜公園", "安佐動物園",  3],
    ["勤労感謝の日はいつ？", "11月13日", "11月23日", "11月25日","11月5日", 2 ],
    ["マツコはサツマイモが好きでしょうか？", "かなり好き", "普通", "1微妙", "興味ない", 1],
    ["マツイチ新聞の作成で使うソフトはなんですか", "Photoshop", "Googleスプレットシート", "Blender", "word", 4],
  ];
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
