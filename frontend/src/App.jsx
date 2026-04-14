import { Fragment } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DefaultLayout from "./components/layouts/DefaultLayout";
import { publicRoutes } from "./routes";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {publicRoutes.map((route) => {
            const Page = route.component;
            let Layout = DefaultLayout;

            if (route.layout === null) {
              Layout = Fragment;
            } else if (route.layout) {
              Layout = route.layout;
            }

            return (
              <Route
                key={route.path}
                path={route.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            );
          })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
