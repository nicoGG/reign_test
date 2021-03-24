import { ApiModelProperty } from '@nestjs/swagger';

export class CreateHitDTO {
    @ApiModelProperty()
    readonly story_id: number;
    
    @ApiModelProperty()
    readonly objectID: number;
    
    @ApiModelProperty()
    readonly story_title: string;

    @ApiModelProperty()
    readonly story_text: string;

    @ApiModelProperty()
    readonly story_url: string;

    @ApiModelProperty()
    readonly title: string;

    @ApiModelProperty()
    readonly parent_id: number;

    @ApiModelProperty()
    readonly url: string;

    @ApiModelProperty()
    readonly author: string;

    @ApiModelProperty()
    readonly points: string;

    @ApiModelProperty()
    readonly comment_text: string;

    @ApiModelProperty()
    readonly num_comments: number;

    @ApiModelProperty()
    readonly created_at: string;

    @ApiModelProperty()
    readonly created_at_i: string;
}