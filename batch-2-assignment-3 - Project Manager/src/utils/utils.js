//formate date
export const formatDate = (dateString) => {
  const options = { day: "numeric", month: "long", year: "numeric" };
  return new Date(dateString).toLocaleDateString("en-GB", options);
};

//validate error
export const validateError = (formData) => {
  const newErrors = {};

  if (!formData?.title) {
    newErrors.title = "Title is require";
  }
  if (!formData?.description) {
    newErrors.description = "Description is require";
  }
  if (!formData?.date) {
    newErrors.date = "Date is require";
  }

  return newErrors;
};
