export default function promiseMiddleware(api: any) {
  return () => (next: Function) => (action: any) => {
    const {
      nextAction,
      promise,
      type,
      ...rest
    } = action;

    if (!promise) {
      return next(action);
    }

    const [REQUEST, SUCCESS, FAILURE] = type;

    next({ ...rest, type: REQUEST });

    function success(res: any) {
      next({ ...rest, payload: res, type: SUCCESS });
      if (nextAction) {
        nextAction(res, null);
      }
    }

    function error(err: any) {
      next({ ...rest, payload: err, type: FAILURE });
      if (nextAction) {
        nextAction(null, err);
      }
    }

    return promise(api)
      .then(success, error)
      .catch(error);
  };
}
