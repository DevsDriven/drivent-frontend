import styled from 'styled-components';

export default function ReserveConfirm({ value }) {
  let renderReserveConfirm = false;

  return (
    <>
      {
        renderReserveConfirm ?
          <div>
            <SubmitContainer>
              <p>
                <span>Fechado! O total ficou em </span>
                <PriceSpan>{`R$ ${value}`}</PriceSpan>
                <span>. Agora é só confirmar:</span>
              </p>
              <button >
                RESERVAR INGRESSO
              </button>
            </SubmitContainer>
          </div>
          :
          <></>
      }
    </>
  );
}

const SubmitContainer = styled.div`
  margin-top: 40px!important;
  width: 100%!important;

  > button {
    width: 162px;
    height: 37px;
    margin-top: 15px !important;
    background: #E0E0E0;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
  > p {
    font-family: 'Roboto';
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 23px;

    color: #9C9C9C;
  }
`;

const PriceSpan = styled.span`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 400;
  font-size: 20px;
  line-height: 23px;

  color: black
`;
