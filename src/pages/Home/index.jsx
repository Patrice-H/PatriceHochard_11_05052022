import React,{useState,useEffect} from 'react';
import Header from '../../components/Header';
import Banner from "../../components/Banner";
import Thumb from '../../components/Thumb';
import Footer from '../../components/Footer';
import './Home.css';

/**
 * Component that assembles multiple components and returns the home page
 * 
 * @component
 * @see {@link Header}
 * @see {@link Banner}
 * @see {@link Thumb}
 * @see {@link Footer}
 * @returns A function that returns the page
 */
const Home = () => {
    const activePage = 'home';
    const [datas,setDatas]=useState([]);
    const getData=()=>{
        fetch('./datas/accomodations.json')
        .then(response => response.json())
        .then(allData => setDatas(allData))
        .catch(err => console.log('Error : ', err))
    };
    useEffect(()=>{
        getData()
    },[]);

    return (
        <>
            <Header activePage={activePage} />
            <Banner activePage={activePage} />
            <section className='gallery'>
                <ul>
                    {datas && datas.length>0 && datas.map((accomodation) => (
                        <li key={ accomodation.id }>
                            <Thumb 
                                accomodation={accomodation}
                            />
                        </li>
                    ))}
                </ul>
            </section>
            <Footer />
        </>
    );
}

export default Home;