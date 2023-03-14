import { createContext, useState } from 'react';

const HotelContext = createContext();
export default HotelContext;

export function HotelProvider({ children }) {
  const [hotelSelected, setHotelSelected] = useState({
    hotelId: 0,
    name: '',
    image: '',
    Rooms: [],
    accommodationTypes: 'Em construção',
    vacancies: 'Em construção',
  });

  const [roomSelected, setRoomSelected] = useState({
    roomId: 0,
    name: '',
  });

  const [booking, setBooking] = useState({
    bookingId: 0,
  });
  console.log(booking);

  return (
    <HotelContext.Provider value={{ hotelSelected, setHotelSelected, roomSelected, setRoomSelected, booking, setBooking }}>
      {children}
    </HotelContext.Provider>
  );
}
