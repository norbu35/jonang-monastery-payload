import buildSite from "../hooks/buildSite";

const PublishButton: React.FC = () => {
  return <button onClick={() => buildSite()}></button>;
};

export default PublishButton;
