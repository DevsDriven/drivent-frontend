import ReserveConfirm from './Components/ReserveComfirm';

export default function Payment() {
  let price = 0;

  return (<>
    <h4>Pagamento: Em breve!</h4>

    <ReserveConfirm value={price} />
  </>
  );
}
