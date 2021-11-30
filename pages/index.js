import router from "next/router"

import { AppBar } from "components/appbar"
import { GoogleProvider } from "components/authentication/providers"
import { Title } from "ui/title"
import { Spacer } from "ui/spacers"
import {UserLogin} from "components/authentication/user-login"
import { Legal, HighLight } from "ui/legal"
import {PageLayout, PageHeader, PageFooter, PageBody} from 'layouts/loginpage'
import { Button } from "ui/buttons"

function index (){
    function loginButtonHandle (){
        router.push('/login')
    }
    function signinButtonHandle (){
        router.push('/signin')
    }

    return(
        <>
            <AppBar/>
            <PageLayout>
                <PageHeader>
                <Title>Home Page</Title>
                </PageHeader>
                <PageBody>
                    <Button onClick={loginButtonHandle}>Log In</Button>
                    <Spacer />
                    <Button onClick={signinButtonHandle}>Sign In</Button>
                </PageBody>             
                <PageFooter>
                        <Legal>Legal Stuff  <HighLight>terms and conditions</HighLight></Legal>
                </PageFooter>
            </PageLayout>
        </>
    )
}

 

export default index