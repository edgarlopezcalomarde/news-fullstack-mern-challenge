import toast from "react-hot-toast";

export function useToast() {
  function onError(msg?: string) {
    toast.error(msg ? msg : "Internal Error");
  }
  function onSuccess(msg?: string) {
    toast.success(msg ? msg : "Success");
  }

  return { onError, onSuccess };
}
