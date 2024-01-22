import React from 'react'
import "./TeamCard.css"

const team_card_obj = [
    {
        img: "src/assets/boy.png",
        name: "Aman Kar",
        team_name: "Developer's Team",
        paragraph: "Coding Buddies"

    },
    {
        img: "src/assets/boy.png",
        name: "Aman Kar",
        team_name: "Developer's Team",
        paragraph: "Coding Buddies"

    },
    {
        img: "src/assets/boy.png",
        name: "Aman Kar",
        team_name: "Developer's Team",
        paragraph: "Coding Buddies"

    },
    {
        img: "src/assets/boy.png",
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
                    <img src={value.img} />
                </div>
                <div className='team-card-txt'>
                    <div className="team-card-name">{value.name}</div>
                    <div className="team-card-teamName">{value.team_name}</div>
                    <div className="text-white text-3xl font-normal font-['Alice'] text-center team-card-paragraph">{value.paragraph}</div>
                </div>
                <div className='team-card-link'>
                    <div className="team-card-icons" >
                        <img src="src\assets\LinkedIn1.png" alt="" />
                    </div>
                    <div className="team-card-icons" >
                        <img src="src\assets\Email.png" alt="" />
                    </div>
                    <div className="team-card-icons" >
                        <img src="src\assets\Instagram Circle.png" alt="" />
                    </div>

                </div>
            </div>
        ))





    )
}
