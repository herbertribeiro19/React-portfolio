import axios, { AxiosResponse } from 'axios';

export interface Repository{
    id: number;
    name: string;
    description: string;
    html_url: string;
}

export interface User{
    name: string;
    bio?: string;
    company?: string;
    avatar_url:string;
}

const GitHubService = {


}