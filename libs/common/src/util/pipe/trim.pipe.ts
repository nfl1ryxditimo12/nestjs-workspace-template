import { ArgumentMetadata, PipeTransform } from '@nestjs/common';

export class TrimPipe implements PipeTransform {
  public transform = (values: any, _: ArgumentMetadata) => {
    Object.keys(values).forEach((key) => {
      if (typeof values[key] === 'string') {
        values[key] = values[key].trim();
      }
    });
    return values;
  };
}
