//Importo toda la información:

import React from "react";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import Card from "./Card";
import rigoImage from "../../img/rigo-baby.jpg";

//Creo la función para generar la información:
const Home = () => {
	    const cards = [
        {
            img: rigoImage,
            title: "El Rigo título",
            text: "Este texto es un elemento super útil para el ejercicio",
            buttonLabel: "Aprende React",
            buttonUrl: "#"
        },
        {
            img: rigoImage,
            title: "El Rigo título v.1",
            text: "Este texto es un elemento super útil para el ejercicio",
            buttonLabel: "Aprende React",
            buttonUrl: "#"
        },
        {
            img: rigoImage,
            title: "El Rigo título v.2",
            text: "Este texto es un elemento super útil para el ejercicio",
            buttonLabel: "Aprende React",
            buttonUrl: "#"
        },
        {
            img: rigoImage,
            title: "El Rigo título v.3",
            text: "Este texto es un elemento super útil para el ejercicio.",
            buttonLabel: "Aprende React",
            buttonUrl: "#"
        }
    ];

	return (
        <div>
            <Navbar />
            <div className="container mt-4">
            <Jumbotron />
            <div className="row justify-content-center">
                {cards.map((card, index) => (
                    <div className="col-md-3" key={index}>
                        <Card
                            img={card.img}
                            title={card.title}
                            text={card.text}
                            buttonLabel={card.buttonLabel}
                            buttonUrl={card.buttonUrl}
                        />
                    </div>
                    ))}
        	</div>
			<footer className="bg-dark text-white text-center py-4 mt-5">
          			<p className="mb-0"> Copyright © Erica 2025</p>
        	</footer>
        	</div>
        </div>
    );
};

export default Home;