import { Angular2FirstAppPage } from './app.po';

describe('angular2-first-app App', function() {
  let page: Angular2FirstAppPage;

  beforeEach(() => {
    page = new Angular2FirstAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
