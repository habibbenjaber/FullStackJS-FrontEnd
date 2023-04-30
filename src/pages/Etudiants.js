import React, { useState, useEffect } from 'react';
//import { useNavigate } from "react-router-dom";

import Navbar from '../components/navbar/Navbar';
import Table from 'react-bootstrap/Table';


const Etudiants = () => {
    var [listEtudiants, setListEtudiant] = useState([]);
    //var listEtudiants = []
    //let listEtudiants = [];
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
        //console.warn(JSON.stringify(result));
        setListEtudiant(result.data);
        console.warn('bbbbbbbbbbb')
        //listEtudiants = result.data
        console.warn(JSON.stringify(listEtudiants));

        // Erreur HTTP
        if (result.message !== "") {
            return false;
        }

        // Erreur applicatif
        if (result.status !== "") {
            return false;
        }



    }




    //const navigate = useNavigate();

    useEffect(() => {
        selectEtudiants()
    }, [])

    return (
        <>
            <Navbar />
            <h1>Admimistration des etudiants</h1>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Nom</th>
                        <th>Prenom</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {listEtudiants.map((item, index) => {
                        return (
                            <tr>
                                <td>{item.Nom}</td>
                                <td>{item.Prenom}</td>
                                <td>{item.Email}</td>
                            </tr>

                        );
                    })}
                </tbody>
            </Table>
        </>
    );
};

export default Etudiants;