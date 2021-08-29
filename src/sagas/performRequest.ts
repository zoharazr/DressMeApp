import axios, {AxiosRequestConfig} from 'axios';

const axiosService = axios.create({
  timeout: 10000,
  headers: {'Content-Type': 'application/json'},
});

export const performRequest = async ({
  url,
  data,
  method = 'GET',
  ...props
}: AxiosRequestConfig) => {
  try {
    const response = await axiosService({
      url,
      method,
      ...(method !== 'GET' && {data}),
      ...props,
    });
    if (response.status !== 200) {
      throw new Error(response.status.toString());
    }
    return response;
  } catch (err) {
    throw new Error(err);
  }
};
