import { useEffect, useState } from 'react';
import { onAuthStateChanged, User } from 'firebase/auth';

import { Auth } from '@config/Firebase';

const getAuts = Auth;

const useAuthentication = ()=>{

    const [user, setUser] = useState<User>();

    useEffect(() => {
        const unsubscribeFromAuthStatuChanged = 
        onAuthStateChanged(getAuts, (user) => {
            if (user) {
                setUser(user);
            } else {
                setUser(undefined);
            }
        });

        return unsubscribeFromAuthStatuChanged;
        }, []
    );

    return {
        user
    };
}

export default useAuthentication;