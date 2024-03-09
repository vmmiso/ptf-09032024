import axios from 'axios';
import md5 from 'md5';

export const api = axios.create({ baseURL: 'https://gateway.marvel.com/v1' });

export const getCredentials = () => {
  const apikey = 'd20131bc7707c02324ec158386bf2711';
  const privatekey = '37d04fe6bf0192c7824785f4928efc7f198a0510';
  const ts = new Date().getTime();
  const stringToHash = ts + privatekey + apikey;
  const hash = md5(stringToHash);

  const params = {
    ts,
    apikey,
    hash,
  };
  return params;
};
