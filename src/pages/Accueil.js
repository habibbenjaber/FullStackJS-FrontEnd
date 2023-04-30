import React, { useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import Navbar from '../components/navbar/Navbar';

const Accueil = () => {

    // Verifier login password
    async function selectEtudiants() {
        let apiURL = "http://127.0.0.1:8080/etudiants"
        console.warn(apiURL)
        let result = await fetch(
            apiURL, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            }
        })

        result = await result.json();
        console.warn(JSON.stringify(result));


        // Erreur HTTP
        if (result.message != "") {
            return false;
        }

        // Erreur applicatif
        if (result.result.status != "") {
            return false;
        }

        result = result.result;
    }




    const navigate = useNavigate();

    useEffect(() => {
        selectEtudiants()
    }, [])

    return (
        <>
            <Navbar />
            <h1>Page d'accueil</h1>
        </>
    );
};

export default Accueil;