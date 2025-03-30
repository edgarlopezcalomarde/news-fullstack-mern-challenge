function LoadingBar({ className }: { className?: string }) {
  return (
    <div
      className={`fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-blue-500 to-transparent animate-loading ${className}`}
    />
  );
}

export default LoadingBar;
