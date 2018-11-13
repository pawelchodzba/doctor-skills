import { SearchDiagnosisModule } from './search-diagnosis.module';

describe('SearchDiagnosisModule', () => {
  let searchDiagnosisModule: SearchDiagnosisModule;

  beforeEach(() => {
    searchDiagnosisModule = new SearchDiagnosisModule();
  });

  it('should create an instance', () => {
    expect(searchDiagnosisModule).toBeTruthy();
  });
});
