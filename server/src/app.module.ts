import { HitsController } from './hits/hits.controller';
import { hitSchema } from './hits/schemas/hit.schema';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { HitsService } from './hits/hits.service';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://admin:admin@cluster0.63xto.mongodb.net/reign?retryWrites=true&w=majority'),
    MongooseModule.forFeature([{
      name: 'hits',
      schema: hitSchema,
      collection: 'hits'
    }]),
  ],
  controllers: [HitsController],
  providers: [HitsService],
})
export class AppModule {}