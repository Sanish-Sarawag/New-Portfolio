import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Python Developer</h4>
                <h5>IBV Technologies Pvt. Ltd.</h5>
              </div>
              <h3>2025-2026</h3>
            </div>
            <p>
              Built some machine learning models. Designed some Dashboard
              with the help of PowerBi & Tableau. I also designed some 2d desings 
              using the AutoCAD.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer Intern</h4>
                <h5>REGex Software Services</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Built 2 complete applications using React.js. Integrated backend
              authentication using Node.js & MongoDB. Created responsive UI/UX
              and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Frontend Developer</h4>
                <h5>Grras Solutions Pvt. Ltd.</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Building Solid, a proprietary low-code platform using React,
              TailwindCSS & NodeJS. Delivering production-ready CMS-based projects
              including e-commerce, CRM, and import-export automation systems.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
