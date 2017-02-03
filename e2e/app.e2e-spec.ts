import { SpringNg2Page } from './app.po';

describe('spring-ng2 App', function() {
  let page: SpringNg2Page;

  beforeEach(() => {
    page = new SpringNg2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
