import { AppPage } from './app.po';
import { browser, $, $$ } from 'protractor';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Book Rating!');
  });

  it('should render 2 book widgets', () => {
    browser.get('/');
    const elementCount = page.getBooksCount();

    browser.sleep(5000);

    expect(elementCount).toBe(2);
  });
});
