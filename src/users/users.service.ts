import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from 'src/schemas/user.schema';
import { CreateUserDto } from './dto/CreateUser.dto';
import { UpdateUserDto } from './dto/UpdateUser.dto';
import { Settings } from 'src/schemas/userSettings.schema';
import * as bcrypt from 'bcrypt'
@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    @InjectModel(Settings.name) private settingModel: Model<Settings>,
  ) {}

  async createUser({ settings, ...createUserDto }: CreateUserDto,password:string) {
    if (settings) {
      const newSettings = new this.settingModel(settings);
      const savedSettings = await newSettings.save();
      const newUser = new this.userModel({
        ...createUserDto,
        settings: savedSettings._id,
      });
      return newUser.save();
    }
    const hashedPassword = await bcrypt.hash(password,10);
    const newUser = new this.userModel(createUserDto,hashedPassword);
    return newUser.save();
  }
  getUsers() {
    return this.userModel.find().populate(['settings','posts']);
  }
  getUserById(id: string) {
    return this.userModel.findById(id).populate('settings');
  }
  updateUser(id: string, updateUserDto: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(id, updateUserDto, { new: true });
  }
  deleteUser(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
