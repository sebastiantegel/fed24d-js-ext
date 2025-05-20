export const ConditionalRendering = () => {
  const x = 900;
  const isLoading = false;

  // Första sättet
  //   if (x >= 100) {
  //     return <div>x är ett stort tal</div>;
  //   } else {
  //     return <div>x är ett litet tal</div>;
  //   }

  return (
    <>
      {isLoading && <div>Loading...</div>}
      {x >= 100 ? <div>x är ett stort tal</div> : <div>x är ett litet tal</div>}
    </>
  );
};
