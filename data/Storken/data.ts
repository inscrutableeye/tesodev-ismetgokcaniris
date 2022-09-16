import { createStorken, Storken } from "storken";

export const {
  useStorken,
  useLoading,
  usePlugin,
  Storken: GlobalStorken,
} = createStorken({
  initialValues: {
    getData: "asdf" as string,
  },
});
export const getStorken = Storken;
export const setStorken = Storken;
