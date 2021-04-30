import { AnswerEventProps } from "@infinitas/app-player";
import { useEffect, useState } from "react";

export const withSlimStampen = (
  WrappedComponent: React.FunctionComponent<{
    item: any;
    onNext: () => void;
    onSubmitAnswer: (props: AnswerEventProps) => void;
  }>
) => (props: any) => {
  const [slimStampenState, setSlimStampenState] = useState(0);

  useEffect(() => {
    console.log("Component mounted");
    console.log(slimStampenState);
    setSlimStampenState(() => 1);
  }, [slimStampenState]);

  const handleOnSubmitAnswer = (props: AnswerEventProps) => {
    console.log("handleSubmit");
    console.log(slimStampenState);
    setSlimStampenState(() => 2);
  };

  const handleOnNext = () => {
    console.log("handleNext");
    console.log(slimStampenState);
    setSlimStampenState(() => 3);
  };

  console.log("function body");
  console.log(slimStampenState);

  return (
    <WrappedComponent
      item={props.item}
      onNext={handleOnNext}
      onSubmitAnswer={handleOnSubmitAnswer}
    />
  );
};
