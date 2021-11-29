import { useState } from 'react';
import { useRouter } from 'next/dist/client/router';
import {useSWR} from 'swr'
import styled from "styled-components"
import { Button } from "ui/buttons";
import { List, ListItem } from 'classcomp/Present'

const Wrapper = styled.div`
  padding: 6rem 0 0;
  text-align: center;
  button {
      width: 40%;
  }
  p{
    font-size: 1.25rem;
  }
`;

// Dumb presentational
// tempating  render data+temp
// Smart logic
// template render data+temp  code  listeners

const fetcher = (...args) => fetch(...args).then(res => res.json());

function index(props){
  const [isValidUser, setValidUser] = useState(false);
  const router = useRouter();

  function onRequestSignIn (){
    // firebase login logic promise
    // user, error
    // user dashboard protected route
    setValidUser(true);
  }

  if (isValidUser){
    router.push('http://www.apple.ca');
  }

  return (
    <Wrapper>
      
      <Button onClick={onRequestSignIn}>Login</Button>
    </Wrapper>
  )
  
}

export default index