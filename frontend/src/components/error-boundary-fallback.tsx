import { Button } from "./ui/button";
import { FallbackProps } from "react-error-boundary";

function ErrorBoundaryFallback(props: FallbackProps) {
  return (
    <div className="flex flex-col gap-2">
      <Button onClick={props.resetErrorBoundary}>Reintentar</Button>
      <pre>{props.error.message}</pre>
    </div>
  );
}

export default ErrorBoundaryFallback;
