import { browser, logging } from 'protractor';
import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
    browser.driver.manage().window().setSize(1280, 1024);
  });

  // it('should display welcome message', async () => {
  //   await page.navigateTo();
  //   expect(await page.getTitleText()).toEqual('Project-Angular app is running!');
  // });

  it('testing whether Navigating To Display sigin Page after clicking on Login button ', async () => {
    await page.navigateTo();
    expect(await page.NavigateToSignPageAfterLoginButtonClick()).toContain('Login')
  });
  it('testing whether Navigating To about page after clicking on the about ', async () => {
    await page.navigateTo();
    expect(await page.NavigatingToAboutPage()).toContain('About Us Page')
  });
  it('testing whether Navigating To contact page after clicking on the contact ', async () => {
    await page.navigateTo();
    expect(await page.NavigatingToContactPage()).toContain('Contact Us')
  });
  it('testing whether Navigating To registeration page after clicking on the signup button ', async () => {
    await page.navigateTo();
    expect(await page.NavigatingToTheRegistrationPage()).toContain('Username')
  });



  afterEach(async () => {
    // Assert that there are no errors emitted from the browser
    const logs = await browser.manage().logs().get(logging.Type.BROWSER);
    expect(logs).not.toContain(jasmine.objectContaining({
      level: logging.Level.SEVERE,
    } as logging.Entry));
  });
});
