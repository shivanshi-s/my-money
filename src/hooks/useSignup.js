import { useState } from "react"
import { projectAuth } from '../firebase/config';
import { useAuthContext } from './useAuthContext';

export const useSignup = () => {
   // states for error and loading
   const [error, setError] = useState(null)
   const [isPending, setIsPending] = useState(false)
   // destructor dispatch function
   const { dispatch } = useAuthContext()

   // function to sign users up with the properties listed in fb
   const signup =  async (email,password, displayName) => {
      setError(null)
      setIsPending(true)


      try {
         // siugnup user using async await, using auth-> creates user and stores email and pwrd
        const res = await projectAuth.createUserWithEmailAndPassword(email,password)
        //console.log(res.user) //user it just created

        if(!res) {
         throw new Error('Could not complete Sign up')
        }

      // add display name to user since auth doesnt do that for us takes in an object
      await res.user.updateProfile({displayName})

      // dispatch login action
      dispatch( { type : 'LOGIN', payload : res.user})


      setIsPending(false)
      setError(null)

      }
      catch(err) {
         console.log(err.message);
         setError(err.message);
         setIsPending(false)
      }
   }
   return { error, isPending, signup}
}