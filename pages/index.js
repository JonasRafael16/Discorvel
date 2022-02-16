function Title(arg1, arg2) {
    console.log(arg1.children);
    return (
        <>
            <h1>{arg1.children}</h1>
            <style jsx>{`
            h1 {
                color: red;
                background-color: #000;
                padding: 20px;
                border-radius: 5px;
                margin: 20px;
            }
        `}</style>
 
        </>
    )
}





function HomePage() {
    // JSX
    return (
        <div>
            <Title>Bem vindo </Title>


           
        </div>




    )
}

export default HomePage