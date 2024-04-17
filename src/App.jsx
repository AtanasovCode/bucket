import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

//routes
import Dashboard from "./routes/Dashboard";

const App = () => {

  const firebaseConfig = {

    apiKey: "AIzaSyBuhMJm0P4CM-WzWoOr1KD3E1kq66eOkc8",
    authDomain: "bucket-cd9fc.firebaseapp.com",
    projectId: "bucket-cd9fc",
    storageBucket: "bucket-cd9fc.appspot.com",
    messagingSenderId: "77799167543",
    appId: "1:77799167543:web:4ad4efb9fcef4f851291b2",
    measurementId: "G-5F3SCRQR21"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

  const analytics = getAnalytics(app);


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Dashboard />
    },
  ])

  return (
    <div className="w-screen min-h-screen bg-background">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;