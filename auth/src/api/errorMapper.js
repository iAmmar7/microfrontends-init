const errorMapper = (errorObject) => {
  const { response: { data } = {}, message: errMessage } = errorObject;

  const message =
    data?.result?.description ||
    data?.error ||
    data?.message ||
    data?.description ||
    errMessage;
  const statusCode =
    data?.code ||
    data?.statusCode ||
    data?.result?.statusCode ||
    errorObject.code;
  const error = {
    data,
    message: message || "Oops! Something went wrong!",
    statusCode,
  };

  return error;
};

export default errorMapper;
