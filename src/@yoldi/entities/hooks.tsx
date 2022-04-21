import AuthHolder from "./AuthHolder";
import { useEffect } from "react";
import { isBrowser } from "@yoldi/utils/helpers";

export const useAuthGuard = (authHolder: AuthHolder, fn: (authHolder: AuthHolder) => void) => {
  const onChange = () => fn(authHolder);

  useEffect(() => authHolder.subscribe(onChange));

  if (isBrowser()) onChange();
};
