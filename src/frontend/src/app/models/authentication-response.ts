export class AuthenticationResponse {
    id: number = 0;
    userName: string = '';
    fullName: string = '';
    roles: string[] = [];
    claimList: string[] = [];
    jwToken: string = '';
    refreshToken: string = '';
    userAvatar: string = '';
}
