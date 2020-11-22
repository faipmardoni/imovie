import superagent from 'superagent';

type Method = 'get' | 'post' | 'put' | 'patch' | 'delete'

export default function ApiCall() {
  const methods: Method[] = ['get', 'post', 'put', 'patch', 'delete'];
  const caller: any = {};

  methods.forEach((method) => {
    caller[method] = ({
      payload = {},
      qs = '',
      shuttleUrl = '',
      headers = {},
    } = {}) => new Promise((resolve, reject) => {
      const request = superagent[method](shuttleUrl);

      if (!!headers && typeof headers === 'object') {
        Object.entries((headers)).forEach(([key, value]) => {
          request.set(key, value as string);
        });
      }

      if (qs) {
        request.query(qs);
      }

      if (!!payload && Array.isArray(payload)) {
        request.send(payload);
      }

      if (payload) {
        request.send({
          ...payload,
        });
      }

      const cbRequest = (err: any, response: any) => {
        const { body, text } = err || response;
        if (err) {
          const tempBody = body || err;
          const respText = text ? JSON.parse(text) : text;
          const rejectValue = {
            ...tempBody,
            ...respText,
          };

          return reject(rejectValue);
        }

        return resolve(body);
      };

      request.end(cbRequest);
    });
  });

  return caller;
}
