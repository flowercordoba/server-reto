



export class TaskDto {

    private constructor(
      public readonly name: string,
      public readonly available: boolean,
    ) {}
  
  
    static create( object: { [key: string]: any } ):[string?, TaskDto?] {
  
      const { name, available = false } = object;
      let availableBoolean = available;
  
      if ( !name ) return ['Missing name'];
      if ( typeof available !== 'boolean' ) {
        availableBoolean = ( available === 'true' )
      }
  
      return [undefined, new TaskDto(name, availableBoolean)];
  
    }
  
  
  }