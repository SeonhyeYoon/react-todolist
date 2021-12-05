import { useState, useEffect } from 'react'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from 'libs/firebase'

function useAuth() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    // Component mounts
    const authChange = onAuthStateChanged(auth, (clientCredential)=>{
      if(clientCredential){
        setUser(clientCredential)
      } else {
        setUser(null)
      }
    });

    // Component unmount
    return ()=> authChange()
  }, [])

  return user;
}

export { useAuth }

