import { Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";

@Controller("auth")
export class AuthController{
    //Nestjs will manage the injection of the service following this arrangement
    //What ever functions or properties(maybe) we create in Auth Service, we can access inside the constructor
    constructor(private authService: AuthService){
    }

    //endpoints
    @Post("signup")
    signup(){
        return this.authService.signup();
    }

    @Post("signin")
    signin(){
        return this.authService.signin();
    }
}