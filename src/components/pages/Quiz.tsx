import React, { Fragment, useState } from "react";
import { useParams } from "react-router-dom";
import { IOption } from "../../models/option";
import Answers from "../Answers";
import Miniplayer from "../Miniplayer";
import ProgessBar from "../ProgessBar";

const Quiz = () => {
  const [currentQuestion] = useState(0);

  const { youtubeId } = useParams<{ youtubeId: string }>();
  const videoTitle = "here is the title";

  const options: IOption[] = [
    { title: "with var", correct: true, checked: false },
    { title: "with let", correct: true, checked: false },
    { title: "with const", correct: true, checked: false },
    { title: "with variable", correct: false, checked: false },
    { title: "with declare", correct: false, checked: false },
    { title: "with new", correct: false, checked: false },
    { title: "with number", correct: false, checked: false },
    { title: "with string", correct: false, checked: false },
    { title: "with boolean", correct: false, checked: false },
    { title: "with nothing", correct: false, checked: false }
  ];

  const prevQuestion = () => {};

  const nextQuestion = () => {};

  const submit = async () => {};

  const percentage = 4 > 0 ? Math.floor(((currentQuestion + 1) / 4) * 100) : 0;
  return (
    <Fragment>
      <h1>How to declare JavaScript variables?</h1>
      <h4>Question can have multiple answers</h4>
      <Answers
        useAnalysis={false}
        options={options}
        onChangeAnswer={() => {}}
      />
      <ProgessBar
        prev={prevQuestion}
        next={nextQuestion}
        submit={submit}
        progress={percentage}
      />
      <Miniplayer videoId={youtubeId} title={videoTitle} />
    </Fragment>
  );
};

export default Quiz;
