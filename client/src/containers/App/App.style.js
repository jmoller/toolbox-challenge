import styled from "styled-components";

const AppHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #5b86e5, #36d1dc);
  width: 37.5rem;
  height: 66.7rem;
  margin: 0 auto;
  font-family: "Titillium Web", sans-serif;

  h2 {
    font-family: inherit;
    color: #ffffff;
    font-weight: 100;
    letter-spacing: 0.1rem;
    margin-bottom: 2rem;
  }

  input[type="text"] {
    background: transparent;
    border: none;
    border-bottom: 1px solid white;
    border-radius: 0;
    outline: none;
    box-shadow: none;
    color: #ffffff;
    transition: border-bottom 0.3s ease-in-out;
  }

  input.has-error {
    border-bottom: 1px solid #c10000;
  }

  input[type="text"]::placeholder {
    color: #ffffff;
    font-weight: 200;
    letter-spacing: 0.1rem;
    opacity: 0.7;
  }

  button[type="submit"] {
    width: 100%;
    height: 5rem;
    font-size: 1.5rem;
    border-radius: 0;
    border-color: #2e6da4;
    transition: all 0.3s ease-in-out;
  }

  button[type="submit"]:hover {
    transform: translateY(-0.5rem);
  }

  .tbLogo {
    width: 200px;
    position: absolute;
    top: 0;
  }

  .alert-success {
    color: #0b9e0e;
    background-color: #acfb8c;
    border-color: #acfb8c;
    border-radius: 0;
  }

  .alert-danger {
    border-color: #f2dede;
    border-radius: 0;
  }
`;

export default AppHolder;
