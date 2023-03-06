import { useMemo, useCallback } from "react";
import { useSubmitFormMutation, useGetFormsDataQuery } from "../api";

const useFormsData = (formName) => {
  // Get form data
  const { data, isLoading, isError, isSuccess } =
    useGetFormsDataQuery(formName);

  const formData = useMemo(() => {
    if (!isSuccess) return null;

    const items = data["Items"];
    const parsedItems = [];

    items.forEach((item) => {
      const newItem = {};
      newItem["date"] = item["Date"]["S"];

      if ("FormData" in item)
        for (const [key, value] of Object.entries(item["FormData"]["M"]))
          newItem[key] = value["S"];

      parsedItems.push(newItem);
    });

    return parsedItems;
  }, [data, isSuccess]);

  // Submit form data
  const [submitForm, submitFormResponse] = useSubmitFormMutation();

  const submit = useCallback(
    (data) => {
      submitForm(data);
    },
    [submitForm]
  );

  return {
    data: formData,
    isLoading,
    isError,
    isSuccess,
    submit,
    submitFormResponse,
  };
};

export default useFormsData;
