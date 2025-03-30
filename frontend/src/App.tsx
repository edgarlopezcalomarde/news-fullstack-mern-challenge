import ErrorBoundaryFallback from "./components/error-boundary-fallback";

import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { lazy, Suspense } from "react";
import LoadingBar from "./components/loading-bar";

const NewsPage = lazy(() => import("./modules/news/page"));

function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary onReset={reset} fallbackRender={ErrorBoundaryFallback}>
          <Suspense fallback={<LoadingBar />}>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<Navigate to="/news" />} />
                <Route path="/news" element={<NewsPage />} />
              </Routes>
            </BrowserRouter>
          </Suspense>
        </ErrorBoundary>
      )}
    </QueryErrorResetBoundary>
  );
}

export default App;
