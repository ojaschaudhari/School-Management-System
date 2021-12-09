import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from 'react-router-dom';
import Menu from './Component/Menu';
import Home from './Component/Home';
import Admin from './Component/Admin/Admin';
import Clerk from './Component/Clerk/Clerk';
import Student from './Component/Student/Student';
import Teacher from './Component/Teacher/Teacher';
import Footer from './Component/Footer';
import AdminPage from './Component/Admin/AdminPage';
import ClerkPage from './Component/Clerk/ClerkPage';
import StudentPage from './Component/Student/StudentPage';
import TeacherPage from './Component/Teacher/TeacherPage';
import Gallery from './Component/Gallery';
import MStudent from './Component/Admin/MStudent';
import MTeacher from './Component/Admin/MTeacher';
import MStaff from './Component/Admin/MStaff';
import ModifyStudentList from './Component/Clerk/ModifyStudentList';
import MAdmission from './Component/Clerk/MAdmission';
import MGallery from './Component/Clerk/MGallery';
import UploadResult from './Component/Teacher/Result';
import UploadSyllabus from './Component/Teacher/Syllabus'
import Timetable from './Component/Teacher/Timetable';
import GetResult from './Component/Student/Result';
import GetSyllabus from './Component/Student/Syllabus';
import GetTimetable from './Component/Student/Timetable';
import AdCards from './Component/AdCards';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header"> */}

      <Menu></Menu>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/clerk" element={<Clerk />} />
        <Route path="/student" element={<Student />} />
        <Route path="/teacher" element={<Teacher />} />

        <Route path="/admin/adminpage" element={<AdminPage />} />
        <Route path="/admin/managestudent" element={<MStudent />} />
        <Route path="/admin/manageteacher" element={<MTeacher />} />
        <Route path="/admin/managestaff" element={<MStaff />} />

        <Route path="/clerk/clerkpage" element={<ClerkPage />} />
        <Route path="/clerk/clerkstudentlist" element={<ModifyStudentList />} />
        <Route path="/clerk/clerkadmission" element={<MAdmission />} />
        <Route path="/clerk/managegallery" element={<MGallery />} />
        
        <Route path="/student/studentpage" element={<StudentPage />} />
        <Route path="/student/getresult" element={<GetResult />} />
        <Route path="/student/getsyllabus" element={<GetSyllabus />} />
        <Route path="/student/gettimetable" element={<GetTimetable />} />

        <Route path="/teacher/teacherpage" element={<TeacherPage />} />
        <Route path="/teacher/uploadresult" element={<UploadResult />} />
        <Route path="/teacher/uploadsyllabus" element={<UploadSyllabus />} />
        <Route path="/teacher/managetimetable" element={<Timetable />} />
      </Routes>
      <AdCards></AdCards>
      <Footer></Footer>
      {/* </header> */}
    </div>
  );
}

export default App;
