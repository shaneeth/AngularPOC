import { BikesWrapModule } from './bikes-wrap.module';

describe('BikesWrapModule', () => {
  let bikesWrapModule: BikesWrapModule;

  beforeEach(() => {
    bikesWrapModule = new BikesWrapModule();
  });

  it('should create an instance', () => {
    expect(bikesWrapModule).toBeTruthy();
  });
});
