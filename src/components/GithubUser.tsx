import React from 'react'
import "../App.css"

interface User{
    userData: any,
}

const GithubUser: React.FC<User> = ({ userData }) => {
    const { avatar_url, name, followers, following, bio, public_repos, login } = userData;
    return (
        <div className="body">
            <img src={avatar_url} alt="avatar" id="img"/>
            <div className="card">
            <section className="card-details">
                <p id="name">{name}</p>
                <small id="login">&lt;{login} /&gt;</small>
                <p id={bio}>{bio}</p>
            </section>
            <section className="stats">
                <p id="followers">Followers <br/>{followers}</p>
                <p id="following">Following <br />{following}</p>
                <p id={public_repos}>Repos <br />{public_repos}</p>
            </section> 
        </div>
        </div>
        
    )
};

export default GithubUser;
