export enum MyEnum {
  ENEM = 4
}

export function teste(a: number, b: number): number{
  if(a + b == 6) {
    return a + b;
  }
  return 0;
}

export class Classe {
  private readonly t: number = 5;
}