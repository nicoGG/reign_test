import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';
import { Hit } from './model/hit.model';
import { CreateHitDTO } from './dto/hit.dto';


@Injectable()
export class HitsService {
    constructor(@InjectModel('hits') private readonly hitsModel: Model<Hit>) { }

    async getAll() {
        return await this.hitsModel.find();
    }

    async add(hit: CreateHitDTO) {
        const createHit = new this.hitsModel(hit);
        await createHit.save();
    }

    async update(hit: Hit) {
        await this.hitsModel.updateOne({ Hit: hit.story_id }, hit);
    }

    async delete(id: number) {
        await this.hitsModel.deleteOne({ story_id: id });
    }

}