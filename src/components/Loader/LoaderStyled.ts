import styled from "styled-components";

const LoaderStyled = styled.div`
  background-color: ${(prop) => prop.theme.color.darkLight};
  opacity: 0.5;

  .custom-loader {
    width: 80px;
    height: 40px;
    color: #62fe78;
    --c: linear-gradient(currentColor 0 0);
    background: var(--c), var(--c), var(--c), var(--c), var(--c), var(--c),
      var(--c);
    background-repeat: no-repeat;
    animation: l4-1 1.5s infinite, l4-2 1.5s infinite;
  }

  @keyframes l4-1 {
    0% {
      background-size: 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0, 0 4px;
    }
    7.14% {
      background-size: 25% 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0, 0 4px;
    }
    14.29% {
      background-size: 25% 4px, 4px 50%, 0 4px, 4px 0, 0 4px, 4px 0, 0 4px;
    }
    21.43% {
      background-size: 25% 4px, 4px 50%, 25% 4px, 4px 0, 0 4px, 4px 0, 0 4px;
    }
    28.57% {
      background-size: 25% 4px, 4px 50%, 25% 4px, 4px 100%, 0 4px, 4px 0, 0 4px;
    }
    35.71% {
      background-size: 25% 4px, 4px 50%, 25% 4px, 4px 100%, 25% 4px, 4px 0,
        0 4px;
    }
    42.86% {
      background-size: 25% 4px, 4px 50%, 25% 4px, 4px 100%, 25% 4px, 4px 50%,
        0 4px;
    }
    49%,
    51% {
      background-size: 25% 4px, 4px 50%, 25% 4px, 4px 100%, 25% 4px, 4px 50%,
        25% 4px;
    }
    57.14% {
      background-size: 0 4px, 4px 50%, 25% 4px, 4px 100%, 25% 4px, 4px 50%,
        25% 4px;
    }
    64.29% {
      background-size: 0 4px, 4px 0, 25% 4px, 4px 100%, 25% 4px, 4px 50%,
        25% 4px;
    }
    71.43% {
      background-size: 0 4px, 4px 0, 0 4px, 4px 100%, 25% 4px, 4px 50%, 25% 4px;
    }
    78.57% {
      background-size: 0 4px, 4px 0, 0 4px, 4px 0, 25% 4px, 4px 50%, 25% 4px;
    }
    85.71% {
      background-size: 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 50%, 25% 4px;
    }
    92.86% {
      background-size: 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0, 25% 4px;
    }
    100% {
      background-size: 0 4px, 4px 0, 0 4px, 4px 0, 0 4px, 4px 0, 0 4px;
    }
  }
  @keyframes l4-2 {
    0%,
    49.9% {
      background-position: 0 50%, bottom 20px left 16px, 20px 0, 50% 0,
        40px 100%, bottom 0 right 16px, 60px 50%;
    }
    50%,
    100% {
      background-position: right 60px top 50%, 16px 0, right 40px top 0,
        50% 100%, right 20px bottom 0, right 16px top 20px, 100% 50%;
    }
  }
`;

export default LoaderStyled;
