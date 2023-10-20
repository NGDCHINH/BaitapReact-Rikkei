const ShowTime = ()=>{
    const time = new Date()

    return <h2>
        {time.toString()}
    </h2>
}

export default ShowTime