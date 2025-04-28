import React from 'react'
import Navbar from './Nav'
// import './App.css'   
import '../styles/About.css'

export default function About() {
    return (
        <div>
            <Navbar />
            <div className='container'>
                <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
                    <div class="carousel-inner">
                        <div class="carousel-item active">
                            <img class="d-block w-100" src="./src/assets/images/caraousel/IMG-20250424-WA0013.jpg" alt="First slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./src/assets/images/caraousel/IMG-20250413-WA0020.jpg" alt="Second slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./src/assets/images/caraousel/IMG-20250424-WA0009.jpg" alt="Third slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./src/assets/images/caraousel/IMG-20250424-WA0011.jpg" alt="Fourth slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./src/assets/images/caraousel/IMG-20250424-WA0012.jpg" alt="Fifth slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./src/assets/images/caraousel/IMG-20250424-WA0010.jpg" alt="Sixth slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./src/assets/images/caraousel/IMG-20250424-WA0014.jpg" alt="Seventh slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./src/assets/images/caraousel/IMG-20250424-WA0015.jpg" alt="Eighth slide" />
                        </div>
                        <div class="carousel-item">
                            <img class="d-block w-100" src="./src/assets/images/caraousel/IMG-20250424-WA0016.jpg" alt="Ninth slide" />
                        </div>
                    </div>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                    <p>From Strangers to Brothers
                        We started off as just a bunch of boys — from different cities, different states, and totally different walks of life. What brought us together was something simple: shared curiosity, a love for creating, and the need to belong somewhere that felt like home.

                        Back then, it was clumsy plans, and endless inside jokes. We didn’t know where things would lead — we just knew we had something special. Over time, those random chats turned into ideas, those ideas turned into dreams, and those dreams… we chased them together.

                        Through all the ups and downs — the fights, the failures, the moments we wanted to give up — we held on. We grew. We matured. We became men who had each other's backs, no matter what. Not just friends anymore, but brothers in every way that matters.

                        Today, this journey is bigger than any one of us. It’s about us, as a unit — rooted in loyalty, trust, and a whole lot of love. This page, this project, this bond… it’s living proof that real brotherhood isn’t found. It’s built.

                        Here's to how far we’ve come — and to the even greater stories we’ll write together.</p>
                </div>

            </div>




        </div>
    )
}
