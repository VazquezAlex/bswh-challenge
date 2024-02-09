// Core imports.
import React from 'react';
import {SectionList, View} from 'react-native';

// Local imports.
import useUsersList from './useUsersList';
import {UserItem} from '../UserItem';
import {ListSeparator} from '../../../shared/ListSeparator';
import {AlbumItem} from '../../Albums/AlbumItem';

const UsersList = (): JSX.Element => {
    const {users} = useUsersList();

    return (
        <View>
            <SectionList
                sections={users}
                keyExtractor={item => item.id}
                renderItem={({item}) => <AlbumItem item={item} />}
                renderSectionHeader={({section: {title}}) => (
                    <UserItem name={title} />
                )}
                ItemSeparatorComponent={() => <ListSeparator />}
            />
        </View>
    );
};

export default UsersList;
