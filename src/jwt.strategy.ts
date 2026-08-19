
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {
  constructor() {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: "e80d9dd9b0eb94ccb12f4a9b7e6c53f4a0cb51b936fc57638dc650b314752ca8",
    });
  }

  async validate(payload: any) {
    return { userId: payload.sub, email: payload.email };
  }
}