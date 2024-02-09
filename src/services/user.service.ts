class UserService {
    private apiUrl = 'https://jsonplaceholder.typicode.com';

    constructor() {}

    async getUsers() {
        const users: any[] = [];
        try {
            const response = await fetch(`${this.apiUrl}/users`);
            const data = await response.json();

            if (!Array.isArray(data)) {
                throw new Error('Invalid data');
            }

            for (const user of data) {
                const userAlbums = await this.getAlbumsForUser(user.id);

                users.push({
                    id: user.id,
                    title: user.name,
                    data: userAlbums.map(album => {
                        return {
                            title: album.title,
                            id: album.id,
                        };
                    }),
                });
            }

            return users;
        } catch (err) {
            console.error(err);
        }
    }

    async getAlbumsForUser(id: string) {
        try {
            const userAlbumsResponse = await fetch(
                `${this.apiUrl}/albums?userId=${id}`,
            );
            const userAlbumsData = await userAlbumsResponse.json();

            if (!Array.isArray(userAlbumsData)) {
                throw new Error('Invalid data');
            }

            return userAlbumsData;
        } catch (e) {
            throw new Error('Invalid data');
        }
    }
}

export default new UserService();
