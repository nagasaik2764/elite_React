import React from 'react';
import IIT from '../assets/IIT.jpeg';
import Biology from '../assets/Biology.jpeg';
import Physics from '../assets/Physics.jpeg';
import Chemistry from '../assets/Chemistry.jpeg';
import Maths from '../assets/Maths.jpeg';
import ScrollAnimation from 'react-animate-on-scroll';

function PopularBooks() {
    const books = [IIT, Biology, Physics, Chemistry, Maths];
    const repeatedBooks = [...books, ...books, ...books,...books]; // Repeat the array three times
    return (
        <ScrollAnimation animateIn="animate__fadeIn" duration={2} delay={500} initiallyVisible={false}>
        <section className="popular-books-section">
            <h2 className="popular-books-heading text-center text-uppercase text-secondary mb-0 animated">Popular Books</h2>
            <div className="popular-books-divider animated fade-up">
                <div className="divider-line"></div>
                <div className="divider-icon"><i className="fas fa-star"></i></div>
                <div className="divider-line"></div>
            </div>
            <div className="popular-books-marquee-container">
                <div className="popular-books-marquee-content">
                    {repeatedBooks.map((book, index) => (
                        <img key={index} src={book} alt={`Book ${index + 1}`} className="popular-books-image" />
                    ))}
                </div>
            </div>
        </section>
        </ScrollAnimation>
    );
}

export default PopularBooks;
