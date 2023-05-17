import Sample from "../_assets/sample.json";

const SampleSurvey = () => {

  const Samples = Sample.questions.map((question, i) => {
    console.log(question.stem);
    if (question.stem) {
      return (
        <div>
            <label key={i}>{question.stem}
            {question.type==="mcq" &&
                question.options.map((option, i) => {
                    return ( <input key={i} type="radio" value={option.value} >{option.text}</input>)
                })
            } 
            </label>
        </div>
      );
    }
  });

  return (
    <>
      <h1>Sample Survey</h1>
      {Samples}
    </>
  );
};

export default SampleSurvey;
