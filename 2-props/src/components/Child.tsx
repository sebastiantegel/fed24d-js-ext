type ChildProps = {
  name: string;
};

export const Child = (props: ChildProps) => {
  return <>Child: {props.name}</>;
};
