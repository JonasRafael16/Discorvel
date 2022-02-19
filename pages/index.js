import appConfig from '../config.json';

function GlobalStyle() {
    return (
      <style global jsx>{`
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
      }
      body {
        font-family: 'Open Sans', sans-serif;
      }
      /* App fit Height */ 
      html, body, #__next {
        min-height: 100vh;
        display: flex;
        flex: 1;
      }
      #__next {
        flex: 1;
      }
      #__next > * {
        flex: 1;
      }
      /* ./App fit Height */ 
    `}</style>
    );
  }



function Title(arg1, arg2) {
    console.log(arg1.children);
    var Tag = arg1.tag;
    return (
        <>
            <Tag>{arg1.children}</Tag>
            <style jsx>{`
            ${Tag} {
                color: ${appConfig.theme.colors.neutrals['000']};
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
            <GlobalStyle />
            <Title tag="h2">Bem vindo </Title>

           
        </div>




    )
}

export default HomePage