import { tokentype } from "../helpTypes/tokenType";


export interface AuthResponse {
    tokens: tokentype;
    sessionLimitExceeded: boolean;
    username: string;
    email: string;
    roles: string[];
}
