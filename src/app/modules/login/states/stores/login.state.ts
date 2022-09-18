import { Action, Selector, State, StateContext } from "@ngxs/store";
import { catchError, tap, throwError } from "rxjs";
import { LoginService } from "src/app/core/services/login.service";
import { Login, Logout } from "../actions/login.state";

export class AuthStateModel {
    token: string;
    username: string;
}

@State<AuthStateModel>({
    name: 'auth',
    defaults: {
        token: '',
        username: ''
    }
})
export class AuthState {

    @Selector() static token(state: AuthStateModel) { return state.token }

    constructor(private loginService: LoginService) { }

    @Action(Login)
    login({ patchState }: StateContext<AuthStateModel>, { payload }: Login) {
        return this.loginService.login(payload)
            .pipe(tap((result: {
                token: string
            }) => {
                patchState({ token: result.token, username: payload.username });
            }));
    }

    @Action(Logout)
    logout({ setState, getState }: StateContext<AuthStateModel>) {
        const { token } = getState();
        setState({
            username: '',
            token: ''
        })
    }
}