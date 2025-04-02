import ErrorBoundaryFallback from "./components/error-boundary-fallback";

import { ErrorBoundary } from "react-error-boundary";
import { BrowserRouter, Navigate, Route, Routes } from "react-router";
import { lazy, Suspense } from "react";
import Loading from "./components/loading";
import { QueryErrorResetBoundary } from "@tanstack/react-query";

const NewsPage = lazy(() => import("./modules/news/page"));

function App() {
  return (
    <QueryErrorResetBoundary>
      {({ reset }) => (
        <ErrorBoundary fallbackRender={ErrorBoundaryFallback} onReset={reset}>
          <Suspense fallback={<Loading className="w-screen h-screen" />}>
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
