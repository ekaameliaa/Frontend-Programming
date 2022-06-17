import styled from "styled-components";

const StyledHero = styled.div`
  div {
      margin: 1rem;
      flex-basis: 60% 100%;
  }
 
  section {
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
  }
  
  h2 {
    color: #4361ee;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #b5179e;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  img {
    border: none;
    border-radius: 25px;
  }

  a {
    text-decoration: none;
  }

  @media (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;

  section {
    margin: 0 1rem;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: left;
  }
}
`;

export default StyledHero;