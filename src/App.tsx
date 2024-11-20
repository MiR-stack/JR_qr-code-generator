import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import QrCodeGenerator from "./pages/qr-code-genarator";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<QrCodeGenerator />} />
      </Routes>
    </Router>
  );
}

export default App;
