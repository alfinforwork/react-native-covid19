exports.custom_json = (status = null, message = null, data = null) => {
  return {
    status: status,
    message: message,
    data: data,
  };
};
exports.custom_json_token = (
  status = null,
  message = null,
  data = null,
  token = null,
  refresh_token = null,
) => {
  return {
    status: status,
    message: message,
    data: data,
    token: token,
    refresh_token: refresh_token,
  };
};
exports.not_found = this.custom_json(false, '404 Not Found');
