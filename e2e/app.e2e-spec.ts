import { ContactPage } from './app.po';

describe('contact App', () => {
  let page: ContactPage;

  beforeEach(() => {
    page = new ContactPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
