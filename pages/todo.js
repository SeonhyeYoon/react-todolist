import router from "next/router";

import { useAuth } from "libs/hooks/useAuth";
import { AppBar } from "components/appbar";
import { Title } from "ui/title";
import {PageLayout, PageHeader} from 'layouts/loginpage'
import { Button } from "ui/buttons";

function ToDoPage(props) {
    const user = useAuth();

    function homeButtonHandler (){
      router.push('/');
      
    }

    if (!user){
      return (
        <>
          <AppBar />
          <Title>You are not a member</Title>
          <Button onClick={homeButtonHandler}>Home</Button>
        </>
      )
    }
    return (
      <>
        <AppBar />
        <PageLayout>
          <PageHeader>
            <Title>TO DO LIST</Title>
          </PageHeader>
        </PageLayout>
      </>
    )
  
}

export default ToDoPage;