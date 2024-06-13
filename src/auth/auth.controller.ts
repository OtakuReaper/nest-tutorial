import { Body, Controller, ParseIntPipe, Post } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { AuthDto } from "./dto";

@Controller("auth")
export class AuthController{
    //Nestjs will manage the injection of the service following this arrangement
    //What ever functions or properties(maybe) we create in Auth Service, we can access inside the constructor
    constructor(private authService: AuthService){
    }

    //endpoints
    @Post("signup")
    signup(
        @Body() dto: AuthDto
    ){
        console.log({
            dto,
        })
        return this.authService.signup();
    }

    @Post("signin")
    signin(){
        return this.authService.signin();
    }
}