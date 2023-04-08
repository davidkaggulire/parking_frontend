export const calculateRemainingTime = (expirationTime: any) => {
  // get time in milliseconds
  const currentTime = new Date().getTime();

  const adjustedExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjustedExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = (storedToken: string, storedExpirationTime: number) => {
  const remainingTime = calculateRemainingTime(storedExpirationTime);

  if (remainingTime <= 3600) {
    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
  };
};

export default retrieveStoredToken;
