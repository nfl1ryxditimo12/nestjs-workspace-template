import { Controller, Post } from '@nestjs/common';

@Controller('auth')
export class AuthController {
  @Post('signup')
  signup() {
    return 'signup';
  }

  @Post('login')
  login() {
    return 'login';
  }

  @Post('logout')
  logout() {
    return 'logout';
  }
}
