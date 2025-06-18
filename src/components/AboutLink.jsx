const AboutLink = ({ linkRef = "", imgSrc = "", title = "" }) => {
  return (
    <div className="about-link">
      <a href={linkRef}>
        <img src={imgSrc} />
        <h3>{title}</h3>
      </a>
    </div>
  );
};

export default AboutLink;
