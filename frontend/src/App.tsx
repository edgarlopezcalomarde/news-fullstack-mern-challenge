import ErrorBoundaryFallback from "./components/error-boundary-fallback";

import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";

const NewsPage = lazy(() => import("./modules/news/page"));

function App() {
  return (
    <ErrorBoundary fallbackRender={ErrorBoundaryFallback}>
      <Suspense fallback={<Loading className="w-screen h-screen" />}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Navigate to="/news" />} />
            <Route path="/news" element={<NewsPage />} />
          </Routes>
        </BrowserRouter>
      </Suspense>
    </ErrorBoundary>
  );
}

export default App;
