export function Profile({ user }) {
    return (
        <div className="profile" >

            <div className="user-name">
                <img width={200} className="profile-image" src={user.profileImage} alt="" />
                <div>
                    <h1>{user.name}</h1>
                    <p>{user.userName}</p>
                </div>
            </div>
            <div className="user-place">
                <p> Born in : {user.place}</p>
                <p> Lives is {user.bornIn} </p>
                <p> Joined {user.joined} </p>
            </div>
            <div className="follower">
                <p> {user.following} Following </p>
                <p> {user.followers} Followers </p>
            </div>

        </div>
    )
}