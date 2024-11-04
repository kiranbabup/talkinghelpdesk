import { SpeechSynthesisProvider } from "./components/createContextCodes/SpeechSynthesisContext";
import CustomRoutes from "./CustomeRoutes";

function App() {
  return (
    <SpeechSynthesisProvider>
      <CustomRoutes />
    </SpeechSynthesisProvider>
  );
}

export default App;
