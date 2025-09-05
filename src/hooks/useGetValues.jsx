import { useState } from "react";

export const useGetValues = (initialState) => {
  const [formData, setFormData] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return { formData, handleChange, setFormData };
};
