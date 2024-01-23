import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getBooks } from './redux/bookSlice';
import { getReservations } from './redux/reservationSlice';
import SideNav from './components/Navbar/navbar';
import Login from './components/login';
import Bookform from './components/bookform';
import BookDetail from './components/BookDetail';
import MainPage from './components/MainPage';
import ReservationList from './components/Reservations/ReservationList';
import ReservationForm from './components/Reservations/ReservationForm';
import './App.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getBooks());
    dispatch(getReservations());
  });

  return (
    <>
      <SideNav />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/mainpage" element={<MainPage />} />
        <Route path="/bookform" element={<Bookform/>} />
        <Route path="/books/:name" element={<BookDetail />} />
        <Route path="/myreservations" element={<ReservationList />} />
        <Route path="/newreservation" element={<ReservationForm />} />
        <Route path="/books/:id" element={<BookDetail />} />
      </Routes>
    </>
  );
}

export default App;
