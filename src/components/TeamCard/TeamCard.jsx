import React from 'react'
import "./TeamCard.css"

const team_card_obj = [
    {
        img: "https://i.ibb.co/s18nVfT/boy.png",
        name: "Aman Kar",
        team_name: "Developer's Team",
        paragraph: "Coding Buddies"

    },
    {
        img: "https://i.ibb.co/s18nVfT/boy.png",
        name: "Aman Kar",
        team_name: "Developer's Team",
        paragraph: "Coding Buddies"

    },
    {
        img: "https://i.ibb.co/s18nVfT/boy.png",
        name: "Aman Kar",
        team_name: "Developer's Team",
        paragraph: "Coding Buddies"

    },
    {
        img: "https://i.ibb.co/s18nVfT/boy.png",
        name: "Aman Kar",
        team_name: "Developer's Team",
        paragraph: "Coding Buddies"

    },
]

export default function TeamCard() {
    return (
        team_card_obj.map((value, index) => (
            <div className='Team-Card' key={index}>
                <div className='team-card-img'>
                    <a href="#"><img src={value.img} alt="boy" border="0" /></a>
                </div>
                <div className='team-card-txt'>
                    <div className="team-card-name">{value.name}</div>
                    <div className="team-card-teamName">{value.team_name}</div>
                    <div className="text-white text-3xl font-normal font-['Alice'] text-center team-card-paragraph">{value.paragraph}</div>
                </div>
                <div className='team-card-link'>
                    <div className="team-card-icons" >
                        <a href="#"><img src="https://i.ibb.co/Ryw5J68/Linked-In1.png" alt="Linked-In1" border="0" /></a>
                    </div>
                    <div className="team-card-icons" >
                        <a href="#"><img src="https://i.ibb.co/sWJZW0J/Email.png" alt="Email" border="0" /></a>
                    </div>
                    <div className="team-card-icons" >
                        <a href="#"><img src="https://i.ibb.co/TrpSGyh/Instagram-Circle.png" alt="Instagram-Circle" border="0" /></a>
                    </div>

                </div>
            </div>
        ))





    )
}
