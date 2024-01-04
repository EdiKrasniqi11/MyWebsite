import "./CV.css";

const CV = () => {
  return (
    <>
      <div className="curriculumFotoDiv">
        <h2 className="web-view curriculum">
          <a href="../">Home</a> {">"} Curriculum Vitae
        </h2>
        <h3 className="web-view curriculum">My experience in Programming</h3>
        <a href="Edi Krasniqi 2023 CV.pdf" download>
          <button className="downloadButton">Download CV</button>
        </a>
      </div>
    </>
  );
};

export default CV;
