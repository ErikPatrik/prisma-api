import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';

@Module({
    imports: [ConfigModule.forRoot()],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {}

/*

ConfigModulo.forRoot: utiliza-se para variáveis de ambiente, só criar o arquivo .env e no main alterar a porta

*/
