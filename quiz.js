    //0番目：問題、1〜4番目：選択肢、5番目：正解の番号
  　//配列は　[]　でくくる
  　//文字は "" の中に書く、数字は "" 不要
  　//要素と要素の間に , を入れる
  let quiz1 = [
    ["Delicious", "おいしい", "美しい", "楽しい", "難しい", 1],
    ["Swim", "泳ぐ", "歩く", "走る", "飛ぶ", 1],
    ["Weather", "天気", "季節", "気温", "風", 1],
    ["Sunny", "曇り", "晴れ", "雪", "風", 2],
    ["Happy", "幸せ", "悲しい", "怒り", "驚き", 1],
    ["Fast", "遅い", "速い", "高い", "低い", 2],
    ["Dance", "歌う", "踊る", "食べる", "寝る", 2],
    ["Movie", "音楽", "本", "映画", "絵", 3],
    ["Friend", "敵", "友達", "家族", "知人", 2],
    ["Study", "遊ぶ", "勉強する", "働く", "休む", 2]
];
let quiz2 = [
    ["Fascinating", "魅力的な", "危険な", "無駄な", "単調な", 1],
    ["Accomplish", "失敗する", "達成する", "追求する", "開始する", 2],
    ["Incredible", "普通の", "信じられない", "確かな", "効果的な", 2],
    ["Enthusiastic", "無関心な", "熱心な", "悲観的な", "怠惰な", 2],
    ["Conveniently", "不便に", "効果的に", "便利に", "困難に", 3],
    ["Persevere", "諦める", "継続する", "始める", "変える", 2],
    ["Breathtaking", "驚くべき", "普通の", "魅力的な", "危険な", 1],
    ["Vividly", "鮮明に", "混乱して", "無関心に", "穏やかに", 1],
    ["Exaggerate", "誤解する", "詳細に説明する", "大げさに言う", "信じる", 3],
    ["Complicated", "簡単な", "複雑な", "基本的な", "平凡な", 2]
];
let quiz3 = [
    ["Mysterious", "神秘的な", "普通の", "魅力的な", "平凡な", 1],
    ["Achievement", "挑戦", "失敗", "達成", "目標", 3],
    ["Efficient", "無駄な", "非効率的な", "効果的な", "危険な", 3],
    ["Diligent", "怠惰な", "勤勉な", "冷静な", "狡猾な", 2],
    ["Precisely", "大雑把に", "詳細に", "軽率に", "確実に", 2],
    ["Explore", "発見する", "放棄する", "探検する", "予約する", 3],
    ["Stunning", "驚くべき", "危険な", "魅力的な", "平凡な", 1],
    ["Vigorously", "無関心に", "熱心に", "急速に", "静かに", 3],
    ["Moderate", "極端な", "適度な", "不十分な", "平凡な", 2],
    ["Challenge", "挑戦", "撤退", "成功", "妥協", 1]
];
let quiz4 = [
    ["Curious", "知識が豊富な", "好奇心の強い", "無関心な", "自己中心的な", 2],
    ["Simplify", "複雑にする", "単純にする", "解釈する", "増やす", 2],
    ["Persistent", "一時的な", "頑固な", "継続的な", "柔軟な", 3],
    ["Authentic", "真正な", "偽の", "危険な", "珍しい", 1],
    ["Appreciation", "評価", "無視", "賞賛", "非難", 3],
    ["Occasionally", "継続的に", "たまに", "普通に", "急に", 2],
    ["Determination", "疑念", "不確実性", "決意", "ためらい", 3],
    ["Incredible", "普通の", "信じられない", "確かな", "効果的な", 2],
    ["Reputation", "評判", "秘密", "混乱", "決定", 1],
    ["Conveniently", "不便に", "効果的に", "便利に", "困難に", 3]
];
let quiz5 = [
    ["Comprehensive", "偏見のある", "包括的な", "制限された", "平均的な", 2],
    ["Implement", "導入する", "取り消す", "廃止する", "待機する", 1],
    ["Inevitable", "避けられない", "不確かな", "不可能な", "急激な", 1],
    ["Turbulent", "静かな", "穏やかな", "荒れ狂った", "予測可能な", 3],
    ["Competence", "無能力", "能力", "責任", "無責任", 2],
    ["Diligence", "怠惰", "忍耐", "熱心さ", "冷淡さ", 3],
    ["Adaptation", "調整", "適応", "拒絶", "受容", 2],
    ["Enthusiasm", "悲観主義", "熱意", "無関心", "恐怖", 2],
    ["Complication", "単純化", "合併", "複雑化", "簡略化", 3],
    ["Integrity", "正直さ", "不誠実さ", "混乱", "偽善", 1]
];
//問題を順番に表示させるためのカウンター
let i=0
let quiz=[]
let order = 0;
let correct = 0;
let msg = new SpeechSynthesisUtterance();
msg.lang = 'en-US';
let pingpong = new Audio("pingpong.mp3")
let tigau = new Audio("tigau.mp3")
let resultmp3 = new Audio("result.mp3")
let interval
function set(){
    if(document.getElementById("stage").value==1){
        quiz=quiz1;
    }else if(document.getElementById("stage").value==2){
        quiz=quiz2;
    }else if(document.getElementById("stage").value==3){
        quiz=quiz3;
    }else if(document.getElementById("stage").value==4){
        quiz=quiz4;
    }else if(document.getElementById("stage").value==5){
        quiz=quiz5;
    }

    let orderArea = document.getElementById("order");
    let question = document.getElementById("question");
    let answer1 = document.getElementById("answer1");
    let answer2 = document.getElementById("answer2");
    let answer3 = document.getElementById("answer3");
    let answer4 = document.getElementById("answer4");
    
    orderArea.innerHTML = "【第" + (order + 1) + "問】";
    question.innerHTML = quiz[order][0];
    answer1.innerHTML = quiz[order][1];
    answer2.innerHTML = quiz[order][2];
    answer3.innerHTML = quiz[order][3];
    answer4.innerHTML = quiz[order][4];
    msg.text = quiz[order][0]; 
    window.speechSynthesis.speak(msg);    
    document.getElementById("selectmode").style.display="none";
    interval = window.setInterval(inter, 100);
}
function inter(){
    document.getElementById("quizprogress").value = 30 - i
    if(i>=30){
        judge(5);
    }
    i++
}
function judge(num){
    i=0
    clearInterval(interval);
    let result = document.getElementById("result");
    let answer = quiz[order][5];
    if(answer == num){
      correct += 1;
      result.innerHTML = "正解！";
      pingpong.play()
    }
    else{
      result.innerHTML = "不正解...";
      tigau.play()
    }
    order += 1;
    if(order == quiz.length){
        result.innerHTML += 
        "<br>" + quiz.length + "問中" + correct + "問正解！";
        resultmp3.play()
        let rank= ""
        if((100 / quiz.length * correct) >= 100){
            rank="RANK S"
        }else if((100 / quiz.length * correct) > 80){
            rank="RANK A"
        }else if((100 / quiz.length * correct) > 60){
            rank="RANK B"
        }else if((100 / quiz.length * correct) > 40){
            rank="RANK C"
        }else if((100 / quiz.length * correct) > 20){
            rank="RANK D"
        }else if((100 / quiz.length * correct) >= 0){
            rank="RANK E"
        }
        result.innerHTML += "あなたは "+rank+"！"
        document.getElementById("selectmode").style.display="inline-block";
    }
    else{
        set();
    }
}