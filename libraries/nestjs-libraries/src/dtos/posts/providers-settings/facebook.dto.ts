import { IsIn, IsOptional, ValidateIf, IsUrl, IsString } from 'class-validator';

export class FacebookDto {
  @IsOptional()
  @ValidateIf(p => p.url)
  @IsUrl()
  url?: string;

  @IsIn(['post', 'story'])
  @IsOptional()
  post_type?: 'post' | 'story';

  // Place tag nativo (Page id de localização). Declarado p/ não ser descartado
  // pelo whitelist do class-validator.
  @IsOptional()
  @IsString()
  location_id?: string;
}
