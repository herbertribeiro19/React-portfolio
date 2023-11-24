import axios, { AxiosResponse } from 'axios';

export interface Repository {
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export interface User {
    name: string;
    bio?: string;
    company?: string;
    avatar_url: string;
}

const GitHubService = {
    getUser: aSync(username: string) Promise=User > => {
    try {
        const response: AxiosResponse<User> = await axios.get('https://api.github.com/users/${}')
    }
    }

}   