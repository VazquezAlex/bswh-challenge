// Core imports.
import {useEffect, useState} from 'react';

// Local imports.
import UserService from '../../../../services/user.service';

/**
 * Custom hook to handle the state from the UsersList component.
 */
const useUsersList = () => {
    const [users, setUsers] = useState<any>([]);

    const fetchData = async () => {
        const usersRes = await UserService.getUsers();
        setUsers(usersRes);
    };

    useEffect(() => {
        fetchData();
    }, []);

    return {
        users,
    };
};

export default useUsersList;
