import Button from "./components/Button";
import { ReactComponent as ArrowIcon } from "./assets/icons/arrow.svg";

function App() {
  return (
    <>
      <Button color="primary">
        <ArrowIcon>Primary button</ArrowIcon>{" "}
      </Button>
      <Button color="primary" size="large">
        Primary large button
      </Button>
      <Button color="secondary">
        <ArrowIcon>Secondary button</ArrowIcon>
      </Button>
      <Button color="primary" disabled>
        <ArrowIcon>Disabled button</ArrowIcon>
      </Button>
    </>
  );
}

export default App;
