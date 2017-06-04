import { ProstorsPage } from './app.po';

describe('prostors App', () => {
  let page: ProstorsPage;

  beforeEach(() => {
    page = new ProstorsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
