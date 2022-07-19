import { Link, Outlet } from "react-router-dom";

const Welcome = () => {
  return (
    <div>
      <h1>Welcome to welcome page.</h1>
      <Link to ="new-user"> New User </Link>
      <Outlet></Outlet>


      {/*    ======================= NESTED ROUTE IN V5 ============================ 
      <Route path="/welcome/new-user">
        <p>Welcome , New User !!!</p>
      </Route> */}


      {/* ==================== NESTED IN V6 IN DIFFERENT FILE =======================
      <Routes>
        <Route path="new-user" element={<p>Welcome , New User !!!</p>}></Route>
      </Routes> */}


    </div>
  );
};
export default Welcome;
