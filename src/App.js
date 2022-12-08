import Button from "./components/Button";
// import { ReactComponent as ArrowIcon } from "./assets/icons/arrow.svg";

function App() {
  return (
    <>
      <Button color="primary">
        Primary Button
      </Button>
      <Button color="primary" size="large">
        Primary large button
      </Button>
      <Button color="secondary">
        Secondary button
      </Button>
      <Button color="primary" disabled>
        Disabled button
      </Button>
    </>
  );
}

export default App;
