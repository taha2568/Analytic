/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/docs/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { AnalyticWhereInput } from "./AnalyticWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class AnalyticListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => AnalyticWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticWhereInput)
  @IsOptional()
  @Field(() => AnalyticWhereInput, {
    nullable: true,
  })
  every?: AnalyticWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalyticWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticWhereInput)
  @IsOptional()
  @Field(() => AnalyticWhereInput, {
    nullable: true,
  })
  some?: AnalyticWhereInput;

  @ApiProperty({
    required: false,
    type: () => AnalyticWhereInput,
  })
  @ValidateNested()
  @Type(() => AnalyticWhereInput)
  @IsOptional()
  @Field(() => AnalyticWhereInput, {
    nullable: true,
  })
  none?: AnalyticWhereInput;
}
export { AnalyticListRelationFilter };
