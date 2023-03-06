import { useCallback } from "react";
import { useSubmitFormMutation } from "../api";

const useSubmitForm = () => {
  // Submit form data
  const [submitForm, submitFormResponse] = useSubmitFormMutation();

  const submit = useCallback(
    (data) => {
      submitForm(data);
    },
    [submitForm]
  );

  return {
    submit,
    submitFormResponse,
  };
};

export default useSubmitForm;
