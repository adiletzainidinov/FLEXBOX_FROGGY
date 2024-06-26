import { Box, styled } from "@mui/material";

export const BoxMui = styled(Box)`
  display: flex;
  margin-left: 1.25rem;
  .numberBox {
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.625rem 0.3125rem;
    background-color: #999999;
    color: #d9ecda;
    font-size: 1.25rem;
    border-bottom-left-radius: 0.3125rem;
    border-top-left-radius: 0.3125rem;
    p {
      margin-bottom: 0.125rem;
    }
  }
  .inputBox {
    background-color: #e0e0e0;
    padding: 1.25rem 0.625rem;
    border-top-right-radius: 0.3125rem;
    border-bottom-right-radius: 0.3125rem;
    p {
      color: #999999;
      font-size: 1.25rem;
    }
    .flex {
      margin-left: 1.25rem;
      margin-top: 0.3125rem;
      margin-bottom: 0.3125rem;
    }
    .figure {
      margin-top: 0.3125rem;
    }
    .input {
      margin-left: 1.25rem;
    }
    button {
      margin-left: 34.6875rem;
      margin-top: 74px;
    }
  }
  .nextButton {
    @keyframes slidein {
      from {
        transform: scale(1);
      }

      to {
        transform: scale(0.9);
      }
    }
    animation: slidein 1s ease-in-out infinite alternate;
  }
`;