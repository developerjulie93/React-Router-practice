import React from 'react';
const data ={
    Developer:{
        name: 'juheeKang',
        description: 'Jihoon Wife and Front End Developer'
    },
    Guardian:{
        name: 'jihoonLim',
        description: 'Guardian who love Juhee'
    }
};

const Profile=({match})=>{
    const {username} = match.params;
    const profile = data[username];
    if(!profile){
        return <div>This is not our user.</div>;
    }
    return(
        <div>
            <h3>{username}({profile.name})</h3>
            <p>{profile.description}</p>
        </div>
    );
};
export default Profile;