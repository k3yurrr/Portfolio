import { useEffect, Suspense, lazy } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import LoadingSpinner from "./components/LoadingSpinner";
import { trackPageView } from "./utils/analytics";

// Lazy load pages for code splitting
const Home = lazy(() => import("./pages/HomePage"));
const Project = lazy(() => import("./pages/Projects"));
const Contact = lazy(() => import("./pages/Contact"));
const Privacy = lazy(() => import("./pages/Privacy"));
const NotFound = lazy(() => import("./pages/NotFound"));

const App = () => {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);

    // Track page views for analytics
    if (!import.meta.env.DEV) {
      trackPageView(location.pathname, document.title);
    }
  }, [location.pathname]);
  return (
    <>
      <Toaster position="top-right" />
      <NavBar />
      <Suspense fallback={<LoadingSpinner message="Loading page..." />}>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/projects" element={<Project />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default App;
