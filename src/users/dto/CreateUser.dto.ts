import { Type } from "class-transformer";
import { IsBoolean, IsNotEmpty, IsOptional, IsString, IsStrongPassword, ValidateNested, isPassportNumber } from "class-validator";

export class CreateSettingsDto{
    @IsOptional()
    @IsBoolean()
    receiveSMS?:boolean

    @IsOptional()
    @IsBoolean()
    receiveNotifications?:boolean

    
    @IsBoolean()
    receiveEmail?:boolean
}


export class CreateUserDto{
    @IsNotEmpty()
    @IsString()
    username:string;

    @IsString()
    @IsOptional()
    displayName?:string;

    @IsOptional()
    @ValidateNested()
    @Type(()=> CreateSettingsDto)
    settings?:CreateSettingsDto;

    @IsString()
    password:string

}