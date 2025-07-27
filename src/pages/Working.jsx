import Action from "../components/Action";
import Header from "../components/Header";
import WorkingMainBody from "../components/WorkingMainBody";
import "../CSS/Working.css";

const Working = () => {
  return (
    <div className="working">
      <Header pageNum={2} />
      <Header pageNum={2} sticky={true} />
      <WorkingMainBody />
      <Action />
    </div>
  );
};

export default Working;
