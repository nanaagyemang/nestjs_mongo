import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { User, UserSchema } from "src/schemas/user.schema";
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { Settings,  settingsSchema } from "src/schemas/userSettings.schema";


@Module({
    imports :[
        MongooseModule.forFeature([
            {
                name: User.name,
                schema:UserSchema
            },
            { 
                name: Settings.name,
                schema: settingsSchema
            }
        ])
    ],
    providers: [UsersService],
    controllers: [UsersController]
})

export class UsersModule {}