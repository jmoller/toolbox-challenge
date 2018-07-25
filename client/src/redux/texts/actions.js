import { POST_TEXTS } from "./types";

export const postTexts = ({ message }) => {
  return {
    type: POST_TEXTS,
    message
  };
};
