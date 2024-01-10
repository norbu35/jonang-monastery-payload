import buildSite from "../hooks/buildSite";

const style = {
  width: "4rem",
  height: "2rem",
  borderRadius: "0.5rem",
  padding: "0.5rem",
};

const PublishButton: React.FC = () => {
  return <button style={style} onClick={() => buildSite()}>Publish</button>;
};

export default PublishButton;
