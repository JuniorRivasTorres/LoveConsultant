import React, { Component } from 'react'
import styled from 'styled-components'

const Section = styled.section`

    
    padding: 250px 0;
    color: #fff;
    background-size: cover;
    background-image: url(https://www.bostoneveningtherapy.com/wp-content/uploads/2018/04/portrait_smile_felicidade_happiness_vida_alegria_sorriso-768x512.jpg) 
    
    `
    const Header = styled.header`
    color: #fff;
    font-weight:700;
    font-size:50px;
    line-height:52px;
    `
    const Subhead =styled.p`
    font-size:28px;
    font-weight:500;
    `
    const Button = styled.a`
    display: inline-block;
    text-decoration: non;
    text-align: center;
    font-weight: bold;
    cursor: pointer;
    border-radius: 50px;
    background: #fff;
    width: 8rem;
    padding: 0.5rem;
    color: #333 !important;
    
    `


const Jumbotron =  () => {
    return (
       
        <Section className="home-section--1">
            <div className="container">
                <div className="row">
                    <div className="col col-sm-12 col-md-5">
                        <div className="pt-4 mt-4">
                            <Header>React on rails i got this</Header>
                            <Subhead>Cuando jugamos fortnite </Subhead>
                            <div className="cta-wrapper">
                             <Button className="outline-primary" size="lg" >Avis Gratuit</Button>
                            </div>
                        </div>       
                    </div>   
                    <div className="col col-sm-12 col-md-7">
                        <div className="pt-4 mt-4 text-center">
                        <iframe width="550" height="314" src="https://www.youtube.com/embed/FjU_x1106pg" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                        </div>
                    </div>   
                </div>    
            </div>
        </Section>  
    )
}

export default Jumbotron