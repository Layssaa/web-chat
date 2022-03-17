import {
  BrowserRouter,
  Route,
  Routes,
  Navigate,
  useLocation,
} from "react-router-dom";
import { Form } from "../components/form/form";
import { ChatPage } from "../pages/chat";

function RoutesCustom() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/chat" element={<ChatPage />} isPrivate />)
        <Route exact path="/" element={<Form />} />)
      </Routes>
    </BrowserRouter>
  );
}

export default RoutesCustom;
