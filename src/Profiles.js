import React from 'react';
import {Link, Route} from 'react-router-dom';
import Profile from "./Profile";

const Profiles=()=>{
    return(
        <div>
            <h3>User List: </h3>
            <ul>
                <li>
                    <Link to="/profiles/Developer">Developer</Link>
                </li>
                <li>
                    <Link to="/profiles/Guardian">Guardian</Link>
                </li>
            </ul>

            <Route
            path="/profiles"
            exact={true}
            render={()=><div>Please choose user</div>}
            />
            <Route path="/profiles/:username" component={Profile} />
        </div>
    );
};
export default Profiles;