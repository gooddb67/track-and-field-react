import { useState } from "react";

import "./styles/policeReport.scss";

function PoliceReport({ showModal }) {
  const [policeReport, setPoliceReport] = useState({
    name: "",
    age: "",
    whereabouts: "",
    disposition: "",
    charecteristics: "",
  });

  const [policeReportErrors, setPoliceReportErrors] = useState({
    nameError: "",
    ageError: "",
    whereError: "",
    dispositionError: "",
    charecteristicsError: "",
  });

  const [nameErrorCount, setNameErrorCount] = useState(1);
  const [ageErrorCount, setAgeErrorCount] = useState(1);
  const [wherErrorcount, setWhereErrorCount] = useState(1);
  const [dispositionErrorcount, setDispositionErrorCount] = useState(1);
  const [charecteristicsErrorCount, setCharecteristicsErrorCount] = useState(1);

  const handleChange = (event) => {
    setPoliceReport({
      ...policeReport,
      [event.target.id]: event.target.value,
    });
  };

  const validateReport = () => {
    let errors = {
      nameError: "",
      ageError: "",
      whereError: "",
      dispositionError: "",
      charecteristicsError: "",
      completeError: "",
    };

    if (policeReport.name !== "Elliott Murphy") {
      if (nameErrorCount === 1) {
        errors.nameError = "Name Error 1";
        setNameErrorCount(2);
      }
      if (nameErrorCount === 2) {
        errors.nameError = "Name Error 2";
        setNameErrorCount(3);
      }
      if (nameErrorCount === 3) {
        errors.nameError = "Name Error 3";
        setNameErrorCount(3);
      }
    }

    if (policeReport.age !== "11") {
      errors.ageError = "Age Error";
    }

    if (policeReport.whereabouts !== "ranch") {
      errors.whereError = "Where Error";
    }

    if (policeReport.disposition !== "jovial") {
      errors.dispositionError = "Dis Error";
    }

    if (policeReport.charecteristics !== "birthmark") {
      errors.charecteristicsError = "Charectiristics Error";
    }

    return setPoliceReportErrors(errors);
  };

  return (
    <div className="police-report">
      <div className="police-report__body">
        <div className="police-report__header">
          <div>MISSING PERSON REPORT</div>
          <button onClick={() => showModal(false)}>&times;</button>
          <div style={{ color: "red" }}>{policeReportErrors.completeError}</div>
        </div>
        <div className="police-report__content">
          <div className="police-report__body--row">
            <div className="full-input border-right-none">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={policeReport.name}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{policeReportErrors.nameError}</div>
            </div>
            <div className="full-input">
              <label htmlFor="age">Age</label>
              <input
                type="text"
                id="age"
                value={policeReport.age}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>{policeReportErrors.ageError}</div>
            </div>
          </div>
          <div className="police-report__body--row">
            <div className="full-input border-right-none">
              <label htmlFor="whereabouts">Last Known Whereabouts</label>
              <input
                type="text"
                id="whereabouts"
                value={policeReport.whereabouts}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>
                {policeReportErrors.whereError}
              </div>
            </div>
            <div className="full-input">
              <label htmlFor="Disposition">Personality Type/Disposition</label>
              <input
                type="text"
                id="disposition"
                value={policeReport.disposition}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>
                {policeReportErrors.dispositionError}
              </div>
            </div>
          </div>
          <div className="police-report__body--row">
            <div className="full-input border-bottom">
              <label htmlFor="Characteristics">
                Distinguishing Characteristics
              </label>
              <input
                type="text"
                id="charecteristics"
                value={policeReport.charecteristics}
                onChange={handleChange}
              />
              <div style={{ color: "red" }}>
                {policeReportErrors.charecteristicsError}
              </div>
            </div>
          </div>
          <button
            onClick={validateReport}
            className="file-report"
            type="button"
          >
            File Report
          </button>
        </div>
      </div>
    </div>
  );
}

export default PoliceReport;
