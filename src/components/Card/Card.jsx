import React from 'react'
import "./Card.css"

const cardObj = [
    {
        img: "src/assets/Kubernetes.png",
        main_txt: "Kubernetes",
        pargraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing"
    },
    {
        img: "src/assets/Kubernetes.png",
        main_txt: "Kubernetes",
        pargraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing"
    },
    {
        img: "src/assets/Kubernetes.png",
        main_txt: "Kubernetes",
        pargraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing"
    },
    {
        img: "src/assets/Kubernetes.png",
        main_txt: "Kubernetes",
        pargraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing"
    },
    {
        img: 'src/assets/Kubernetes.png',
        main_txt: "Kubernetes",
        pargraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing"
    },
    {
        img: "src/assets/Kubernetes.png",
        main_txt: "Kubernetes",
        pargraph: "Lorem ipsum dolor sit amet, consectetuer adipiscing"
    },
]
    
function Card() {

    return (

        cardObj.map((value, index)=>(
            <div className="card" key={index}>
                <div className="card-Img">
                    <img src={value.img} />
                </div>
                <div className="card-txt">
                    <div className="card-main-txt">{value.main_txt}</div>
                    <div className="card-paragraph">Lorem ipsum dolor sit amet, consectetuer adipiscing</div>
                </div>
        </div>
        ))
        
    )
}

export default Card