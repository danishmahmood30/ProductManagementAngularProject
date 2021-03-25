import { ProductManagementAngularProjectPage } from './app.po';

describe('product-management-angular-project App', () => {
  let page: ProductManagementAngularProjectPage;

  beforeEach(() => {
    page = new ProductManagementAngularProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
