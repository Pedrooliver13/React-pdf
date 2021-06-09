import { PDFViewer } from "@react-pdf/renderer";

import Quixote from "./pages/Quixote";

import GlobalStyled from "./styles/global";

function App() {
  return (
    <>
      <GlobalStyled />
      <PDFViewer>
        <Quixote />
      </PDFViewer>
    </>
  );
}

export default App;
