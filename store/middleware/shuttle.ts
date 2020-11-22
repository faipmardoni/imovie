export default function shuttleMiddleware(host: string) {
  return () => (next: Function) => (action: any) => {
    const {
      nextAction, shuttle, ...rest
    } = action;

    if (!shuttle || (shuttle && !shuttle.method)) {
      return next(action);
    }

    const {
      headers = {},
      path = '',
      payloads: payload = null,
      qs = null,
      method = '',
    } = shuttle;

    const shuttleUrl = host + path;

    const apiParams = {
      qs,
      payload,
      headers,
      shuttleUrl,
    };

    const nextParams = {
      ...rest,
      promise: (api: any) => api[method.toLowerCase()](apiParams),
      nextAction,
    };

    return next(nextParams);
  };
}
