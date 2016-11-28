import { WalkrAppPage } from './app.po';

describe('walkr-app App', function() {
  let page: WalkrAppPage;

  beforeEach(() => {
    page = new WalkrAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
