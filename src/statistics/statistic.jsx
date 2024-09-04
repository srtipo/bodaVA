export function Statistic(object) {
    const stadistic = object.stadistic
    const {total,list} = stadistic
    return (
        < >
        {list.map((person,index) => (
                    <p key={person.id} style={{color:"var(--dark-color)", marginBlock:"1%", marginLeft:'10%'}}>{`${index+1}. ${person.name}`}</p>
                ))}
        </>
                

    );
}