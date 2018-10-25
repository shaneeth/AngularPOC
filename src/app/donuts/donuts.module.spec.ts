import { DonutsModule } from './donuts.module';

describe('DonutsModule', () => {
  let donutsModule: DonutsModule;

  beforeEach(() => {
    donutsModule = new DonutsModule();
  });

  it('should create an instance', () => {
    expect(donutsModule).toBeTruthy();
  });
});
