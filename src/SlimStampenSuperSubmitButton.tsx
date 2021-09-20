import { Button, Typography } from "@material-ui/core";
import React from "react";

import { SuperSubmitButtonProps } from "@infinitas/app-player";

export const SlimStampenSuperSubmitButton: React.FC<SuperSubmitButtonProps> = ({
  next,
  submitAnswer,
  isSubmitted,
}) => {
  return (
    <Button
      variant="contained"
      color="primary"
      onClick={isSubmitted ? next : submitAnswer}
    >
      <Typography variant="button">
        {isSubmitted ? "NEXT" : "SUBMIT"}
      </Typography>
    </Button>
  );
};
