import React, { useState } from 'react';
import _ from 'lodash';
import { usersFind } from '../../../api/users';
import { Search as SearchInput, Image } from "semantic-ui-react";
import { Link } from 'react-router-dom';

export const Searchbar = () => {

    const [ isLoading, setIsLoading ] = useState(false);
    const [ query, setQuery ] = useState('');
    const [ searchQuery, setSearchQuery ] = useState('');
    const [ users, setUsers ] = useState([]);

    const onChangeSearch = e => {
        setQuery(e.target.value);
        const search = _.debounce(findUsers, 700);
        setSearchQuery(prevSearch => {
            if (prevSearch.cancel) {
              prevSearch.cancel();
            }
            setIsLoading(true);
            return search;
        });
        search(e.target.value);
    };

    const findUsers = async(value) => {
        try {
            const foundUsers = await usersFind(value)
            setUsers(foundUsers);
            setIsLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <>
            <SearchInput
                className="header__filtered-user"
                fluid
                input={{ icon: "search", iconPosition: "left" }}
                loading={ isLoading }
                value={ query }
                onSearchChange={ onChangeSearch }
                results={ users }
                resultRenderer={(user) => <UserResult key={user._id} user={ user } /> }
            />
        </>
    )
}

function UserResult({ user }) {
    return (
        <Link 
            className="header__filtered-user__item" 
            to={`/profile/${user.username}`}
        >
            <Image src={ user.imageUrl } />
            <div>
                <p>{ user.username }</p>
            </div>
        </Link>
    );
}


