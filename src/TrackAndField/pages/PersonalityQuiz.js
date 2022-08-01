import { useState } from "react";

function PersonalityQuiz() {
  const [quizSelections, setQuizSelections] = useState({
    question1: "",
    question2: "",
    question3: "",
  });

  const [personality, setPersonality] = useState("");

  const handleChange = (event) => {
    setQuizSelections({
      ...quizSelections,
      [event.target.name]: event.target.value,
    });
  };

  function selectPersonality() {
    const selectionMap = {};
    let max = 0;
    let maxChar = "";
    console.log(quizSelections);

    for (let answer of Object.values(quizSelections)) {
      if (selectionMap[answer]) {
        selectionMap[answer]++;
      } else {
        selectionMap[answer] = 1;
      }
    }

    const valueCheck = Object.values(selectionMap).every(
      (value) => value === 1
    );

    if (valueCheck) {
      return setPersonality(
        "You are no one. You are none of these people. Nothing. You are nothing. "
      );
    }

    for (let answer in selectionMap) {
      if (selectionMap[answer] > max) {
        max = selectionMap[answer];
        maxChar = answer;
      }
    }

    console.log(maxChar, selectionMap);
  }

  const getQuizResults = () => {};

  return (
    <div>
      <h1>Personality Quiz</h1>
      <fieldset>
        <input
          onChange={handleChange}
          type="radio"
          name="question1"
          id="petey"
          value="petey"
        />
        <label htmlFor="petey">Petey</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question1"
          id="julia"
          value="julia"
        />
        <label htmlFor="julia">Julia</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question1"
          id="fudgeman"
          value="fudgeman"
        />
        <label htmlFor="fudgeman">Fudgeman</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question1"
          id="coach"
          value="coach"
        />
        <label htmlFor="coach">Coach P</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question1"
          id="fogle"
          value="fogle"
        />
        <label htmlFor="fogle">Fogle</label>
      </fieldset>

      <fieldset>
        <input
          onChange={handleChange}
          type="radio"
          name="question2"
          id="petey"
          value="petey"
        />
        <label htmlFor="petey">Petey</label>
        <input
          onChange={handleChange}
          type="radio"
          name="question2"
          id="julia"
          value="julia"
        />
        <label htmlFor="julia">Julia</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question2"
          id="fudgeman"
          value="fudgeman"
        />
        <label htmlFor="fudgeman">Fudgeman</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question2"
          id="coach"
          value="coach"
        />
        <label htmlFor="coach">Coach P</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question2"
          id="fogle"
          value="fogle"
        />
        <label htmlFor="fogle">Fogle</label>
      </fieldset>

      <fieldset>
        <input
          onChange={handleChange}
          type="radio"
          name="question3"
          id="petey"
          value="petey"
        />
        <label htmlFor="petey">Petey</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question3"
          id="julia"
          value="julia"
        />
        <label htmlFor="julia">Julia</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question3"
          id="fudgeman"
          value="fudgeman"
        />
        <label htmlFor="fudgeman">Fudgeman</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question3"
          id="coach"
          value="coach"
        />
        <label htmlFor="coach">Coach P</label>

        <input
          onChange={handleChange}
          type="radio"
          name="question3"
          id="fogle"
          value="fogle"
        />
        <label htmlFor="fogle">Fogle</label>
      </fieldset>

      <button onClick={selectPersonality}>Get Results!</button>
    </div>
  );
}

export default PersonalityQuiz;
