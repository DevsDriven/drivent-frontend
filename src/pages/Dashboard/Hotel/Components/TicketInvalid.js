import styled from 'styled-components';

export default function RenderNotValidTicket({ because }) {
  console.log(because);

  return (
    <>
      {because === 'hotelNotInclude' ? (
        <>
          <AlertWrapper>
            <p>Sua modalidade de ingresso não inclui hospedagem</p>
            <p>Prossiga para a escolha de atividades</p>
          </AlertWrapper>
        </>
      ) : (
        <>
          <AlertWrapper>
            <p>Você precisa ter confirmado pagamento antes de fazer a escolha de hospedagem</p>
          </AlertWrapper>
        </>
      )}
    </>
  );
};

const AlertWrapper = styled.div`
  & {
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }
  p {
    width: 60%;
    font-family: 'Roboto', sans-serif;
    font-size: 20px;
    line-height: 23px;
    color: #8e8e8e;
    text-align: center;
  }
`; 
