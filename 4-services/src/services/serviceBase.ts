export const get = async <T>(url: string) => {
  const response = await fetch(url);
  return (await response.json()) as T;
};

export const post = async () => {};
export const put = async () => {};
export const remove = async () => {};
