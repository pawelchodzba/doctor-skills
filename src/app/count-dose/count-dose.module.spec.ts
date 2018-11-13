import { CountDoseModule } from './count-dose.module';

describe('CountDoseModule', () => {
  let countDoseModule: CountDoseModule;

  beforeEach(() => {
    countDoseModule = new CountDoseModule();
  });

  it('should create an instance', () => {
    expect(countDoseModule).toBeTruthy();
  });
});
