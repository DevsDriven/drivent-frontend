import useToken from '../useToken';
import * as bookingApi from '../../services/bookingApi';

export default function useBooking() {
  const token = useToken();

  function postBooking(roomId) {
    const booking = bookingApi.createBooking(token, roomId);
    return booking;
  }

  function getBooking() {
    const booking = bookingApi.listBooking(token);
    return booking;
  }
  return { postBooking, getBooking };
}
