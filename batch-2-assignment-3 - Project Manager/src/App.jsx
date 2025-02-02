import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import DashboardLayout from "./DashboardLayout/DashboardLayout";
import TaskBoardMain from "./components/TaskBoard/TaskBoardMain";
import DarkModeProvider from "./providers/DarkModeProvider";
import TaskProvider from "./providers/TaskProvider";
function App() {
  return (
    <TaskProvider>
      <DarkModeProvider>
        <DashboardLayout>
          <TaskBoardMain />
          <ToastContainer />

          {/*
         near future, add conditional rendering here based on the selected menu
        item path.
        */}
        </DashboardLayout>
      </DarkModeProvider>
    </TaskProvider>
  );
}

export default App;
