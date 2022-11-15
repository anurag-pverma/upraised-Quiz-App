import React from "react";
import { useState, useEffect } from "react";
import Answer from "./Answer";
import Question from "./Question";
import axios from "axios";

function Quiz({onFinish, onResult,}) {
  const [question, setQuestion] = useState(null);
  const [count , setCount] = useState(0)
  const [score , setScore]  = useState(0)
  
  useEffect(() => {
    const getApi = () => {
      axios
        .get(
          "http://localhost:8080/results"
        )
        .then((res) => {
          setQuestion(res.data);
        })
        .then((err) => {
          console.log(err);
        });
    };
    if (!question) {
      getApi();
    }
    console.log(question)
  },[question, count, score]);

  if(!question) return <p>Question is  loding....</p>

  const answer = [...question[count].incorrect_answers, question[count].correct_answer]
  const result = answer.sort(()=> Math.random()-0.5);

  const checkAnswer = (answer)=>{
    if(answer=== question[count].correct_answer){
        setScore(score+1)
    }
    if(count<question.length-1){
        
        setCount(count+1)
    }else{
        onFinish(true)
        onResult(score)
    }

  }
  return (
    <div>
      <div>
        <Question  question= {question[count].question} />
      </div>
      <div style={{ backgroundColor: "red", width: "400px" }}>

        {
            result.map((answer, index)=>(
                
                      <Answer answer={answer}
                      key={index}
                      onAnswer={(answer)=> checkAnswer(answer)}
                      
                      />
                
            ))
        }
  
      </div>
    </div>
  );
}

export default Quiz;
