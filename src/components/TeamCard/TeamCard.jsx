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
                    <div className="text-white text-[64px] font-normal font-['Almendra']">{value.name}</div>
                    <div className="text-white text-2xl font-normal font-['Alice'] text-center">{value.team_name}</div>
                    <div className="text-white text-3xl font-normal font-['Alice'] text-center">{value.paragraph}</div>
                </div>
                <div className='team-card-link'>
                    <div className="w-[50px] h-[50px] bg-white border-r border-black" >
                        <img src="src\assets\LinkedIn1.png" alt="" />
                    </div>
                    <div className="w-[50px] h-[50px] bg-white border-r border-black" >
                        <img src="src\assets\Email.png" alt="" />
                    </div>
                    <div className="w-[50px] h-[50px] bg-white border-r border-black" >
                        <img src="src\assets\Instagram Circle.png" alt="" />
                    </div>

                </div>
            </div>
        ))





    )
}
