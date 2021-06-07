import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root{
    --red:#e52e4d;
    --blue:#5429CC;
    --green:#33cc95;
    
    --blue-light:#6933ff;

    --text-title:#363F5F;
    --text-body:#969CB2;

    --background:#f0f2f5;
    --shape:#ffffff;

  }

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html{
    
    @media(max-width:1070px){
      font-size: 93.75%;
    }

    @media(max-width:720px){
      font-size: 87.5%;
    }
  }

  body{
    background: var(--background);
    -webkit-font-smoothing: antialiased;
  }

  body, input, textarea{
    font-family: "Poppins", sans-serif;
    font-weight: 400;
  }

  h1,h2,h3,h4,h5,h6,strong{
    font-weight: 600;
  }

  button{
    cursor: pointer;
  }

  [disabled]{
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay{
    background: rgba(0,0,0,.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center; 
  }

  .react-modal-content{
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: .25rem;
  }

  .react-modal-close{
    position: absolute;
    right: 1.5rem;
    top: 1.5rem;
    border: 0;
    background: transparent;
    transition: filter .2s;

    &:hover{
      filter: brightness(.8);
    }
  }
`

export const TransactionTypeContainer = styled.div`
  margin: 1rem 0;
  display: flex;
  
  button{
    flex: 1;
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: .25rem;
    background: transition;
    display: flex;
    align-items: center;
    justify-content:center;

    &+button{
    margin-left: .5rem;
  }

  transition: border-color .4s;

  &:hover{
      border-color: #aaa;
    }

  img{
    width: 20px;
    height: 20px;
  }

  span{
    display: inline-block;
    margin-left: 1rem;
    font-size: 1rem;
    color: var(--text-title);
  }
  }
`