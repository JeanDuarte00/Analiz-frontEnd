
import { UserLogin } from '../../shared/model/user/UserLogin';

export class MockDataBase {

    private db: UserLogin[] = [
        {'email': 'jean@gmail.com', 'password': '1234' },
        {'email': 'agnes@gmail.com', 'password': '5678' },
        {'email': 'felix@gmail.com', 'password': '1357' },
        {'email': 'bianca@gmail.com', 'password': '2468' },
        {'email': 'tarcisio@gmail.com', 'password': '1290' },
    ];

    public find (userLogin: UserLogin): UserLogin {

        let userLoging: UserLogin = null;

        this.db.forEach( (user) => {
            if (user.email == userLogin.email && user.password == userLogin.password) {
                userLoging = user;
            }
        } );
        console.log('FOUND: ', userLoging);
        return userLoging;

    }

}
