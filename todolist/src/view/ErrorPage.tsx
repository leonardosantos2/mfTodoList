import { isRouteErrorResponse, useRouteError } from 'react-router';

const getErrorMsg = (error: unknown): string => {
  if (isRouteErrorResponse(error)) {
    return `${error.status} ${error.statusText}`;
  } else if (error instanceof Error) {
    return error.message;
  } else if (typeof error === 'string') {
    return error;
  }

  console.error(error);
  return 'Unknown error';
};

const ErrorPage = () => {
  const errorObj = useRouteError();
  console.error(errorObj);

  const error = getErrorMsg(errorObj);

  return (
    <>
      <h1>404 Not Found</h1>

      <p>
        <i>{`${error}`}</i>
      </p>
    </>
  );
};

export default ErrorPage;
