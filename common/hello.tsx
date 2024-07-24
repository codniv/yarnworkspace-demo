export const hello = (args: string) => {
  console.log(args, "common");

  return args;
};

export const temp = () => {
  console.log("temp called");

  return "temp";
};
