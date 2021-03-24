import { CreateHitDTO } from './dto/hit.dto';
import { Body, Controller, Get, Post, Delete, Param } from '@nestjs/common';
import { ApiImplicitParam, ApiOperation, ApiUseTags } from '@nestjs/swagger';
import { HitsService } from './hits.service';
import { Hit } from './model/hit.model';


@Controller('hits')
export class HitsController {

    constructor(private service: HitsService) { }

    @ApiUseTags('Hits')
    @Get('all')
    async GetAll() {
        return await this.service.getAll();
    }
    
    @Post('add')
    async Add(@Body() hit: CreateHitDTO) {
        await this.service.add(hit);
    }
    
    @Post('update')
    async Update(@Body() hit: Hit) {
        await this.service.update(hit);
    }
    
    @ApiUseTags('Hits')
    @ApiOperation({ title: 'Detele one Hit' })
    @ApiImplicitParam({ name: 'id', required: true, type: 'number' })
    @Delete('delete/:id')
    async Delete(@Param('id') id: number) {
        await this.service.delete(id);
    }
}