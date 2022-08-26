export function Lists({ lists }) {
    return (
        <div className="list">
            <h1>Discover new lists</h1>
            {lists.map(list => (

                <div className="list-items" key={list.id}>
                    <div>
                        <img className="list-image" width={50} src={list.image} alt="" />
                    </div>
                    <div>
                        <h2>{list.name}</h2>
                        <p> {list.discription} </p>
                    </div>
                </div>
            ))}
        </div>
    )
}