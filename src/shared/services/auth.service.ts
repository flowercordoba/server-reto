import { bcryptAdapter } from '../../config/bcrypt.adapter';
import { JwtAdapter } from '../../config/jwt.adapter';
import { UserModel } from '../../data';
import { LoginUserDto, RegisterUserDto } from '../../domain';
import { UserEntity } from '../../domain/entities/user.entity';
import { CustonError } from '../helpers/errors/custom.error';




export class AuthService {

  // DI
  constructor() {}


  public async registerUser( registerUserDto: RegisterUserDto ) {

    const existUser = await UserModel.findOne({ email: registerUserDto.email });
    if ( existUser ) throw CustonError.badRequest('Email already exist');

    try {
      const user = new UserModel(registerUserDto);
      
      // Encriptar la contraseña
      user.password = bcryptAdapter.hash( registerUserDto.password );
      
      await user.save();
      // JWT <---- para mantener la autenticación del usuario

      // Email de confirmación

      const { password, ...userEntity } = UserEntity.fromObject(user);


      return { 
        user: userEntity, 
        token: 'ABC' 
      };

    } catch (error) {
      throw CustonError.internalServer(`${ error }`);
    }

  }


  public async loginUser( loginUserDto: LoginUserDto ) {

    const user = await UserModel.findOne({ email: loginUserDto.email });
    if (!user) throw CustonError.badRequest('Email not exist');

    const isMatching = bcryptAdapter.compare( loginUserDto.password, user.password );
    if ( !isMatching ) throw CustonError.badRequest('Password is not valid');


    const { password, ...userEntity} = UserEntity.fromObject( user );
    
    const token = await JwtAdapter.generateToken({ id: user.id, email: user.email });
    if ( !token ) throw CustonError.internalServer('Error while creating JWT');

    return {
      user: userEntity,
      token: token,
    }



  }


}