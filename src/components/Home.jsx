import React, { useContext } from 'react';
import { AuthContext} from '../providers/AuthProviders';


const Home = () => {
    const {user} = useContext(AuthContext)
// console.log(user);
    return (
        <div>
            <h5>hello {user && <span>{user.displayName}</span> }</h5>
        </div>
    );
};

export default Home;