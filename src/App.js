import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import Mypage from "./pages/Mypage";
import MyPage1 from "./pages/MyPage1";
import Search2 from "./pages/Search2";
import Community from "./pages/Community";
import Search1 from "./pages/Search1";
import Component from "./pages/Component";
import Component1 from "./pages/Component1";
import Component2 from "./pages/Component2";
import Component3 from "./pages/Component3";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/my-page":
        title = "";
        metaDescription = "";
        break;
      case "/search-2":
        title = "";
        metaDescription = "";
        break;
      case "/community":
        title = "";
        metaDescription = "";
        break;
      case "/search-1":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/1":
        title = "";
        metaDescription = "";
        break;
      case "/2":
        title = "";
        metaDescription = "";
        break;
      case "/3":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<Mypage />} />
      <Route path="/my-page" element={<MyPage1 />} />
      <Route path="/search-2" element={<Search2 />} />
      <Route path="/community" element={<Community />} />
      <Route path="/search-1" element={<Search1 />} />
      <Route path="/" element={<Component />} />
      <Route path="/1" element={<Component1 />} />
      <Route path="/2" element={<Component2 />} />
      <Route path="/3" element={<Component3 />} />
    </Routes>
  );
}
export default App;
