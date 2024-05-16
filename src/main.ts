import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger'
import { SwaggerTheme, SwaggerThemeNameEnum } from 'swagger-themes';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port = process.env.PORT;

  const config = new DocumentBuilder()
    .setTitle('Brain Agriculture')
    .setDescription('Documentação em Swagger para o projeto Brain Agriculture')
    .setContact("Renan Campos", "https://www.linkedin.com/in/reenan-campos/", "reenan.campos@gmail.com")
    .setVersion('1.0')
    .addTag('dashboard')
    .addTag('produtor-rural')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  const theme = new SwaggerTheme();
  const envTheme = process.env.SWAGGER_THEME || "CLASSIC";
  let swaggerTheme = SwaggerThemeNameEnum.CLASSIC;
  if(envTheme === "DARK") swaggerTheme = SwaggerThemeNameEnum.DARK;
  if(envTheme === "DRACULA") swaggerTheme = SwaggerThemeNameEnum.DRACULA;
  
  const options = {
    explorer: true,
    customCss: theme.getBuffer(swaggerTheme)
  };
  
  SwaggerModule.setup('api', app, document, options);

  await app.listen(port);
  console.log(`NestJS Application is running on: http://localhost:${port}`);
  console.log(`Swagger documentation is running on: http://localhost:${port}/api`);
}
bootstrap();
