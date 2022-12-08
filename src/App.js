import GlobalFonts from "./assets/fonts/fonts";

// import Button from "./components/Button";
// import { ReactComponent as ArrowIcon } from "./assets/icons/arrow.svg";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  const [isOpenedAlert, setOpenedAlert] = useState(false);

  const handleOpen = () => setOpenedAlert(true);

  const handleClose = () => setOpenedAlert(false);

  return (
    <>
      <GlobalFonts />
      {/* <Button color="primary">
        Primary Button
      </Button>
      <Button color="primary" size="large">
        Primary large button <ArrowIcon/>
      </Button>
      <Button color="secondary">
        Secondary button
      </Button>
      <Button color="primary" disabled>
        Disabled button
      </Button> */}

      <>
        <button onClick={handleOpen}>Open alert</button>
        {isOpenedAlert && (
          <Alert color="primary" onClose={handleClose}>
            Some text
          </Alert>
        )}
        <button onClick={handleOpen}>Open alert</button>
        {isOpenedAlert && (
          <Alert color="error" onClose={handleClose}>
            Some text
          </Alert>
        )}
        <button onClick={handleOpen}>Open alert</button>
        {isOpenedAlert && (
          <Alert color="warning" onClose={handleClose}>
            Some text
          </Alert>
        )}
      </>
    </>
  );
}

export default App;
