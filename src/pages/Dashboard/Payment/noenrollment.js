import styled from 'styled-components';

export default function NoEnrollment() {
  return (
    <>
      <Title>Ingresso e Pagamento</Title>
      <AlertWrapper>
        <p>Você precisa completar sua inscrição antes de prosseguir pra escolha de ingresso</p>
      </AlertWrapper>
    </>
  );
}

const Title = styled.div`
  & {
    font-size: 34px;
    line-height: 40px;

    margin-bottom: 30px;
  }
`;

const AlertWrapper = styled.div`
  & {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  p {
    width: 50%;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    text-align: center;
  }
`; 

