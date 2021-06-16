import { browser, by, element } from 'protractor';

export class AppPage {
  async navigateTo(): Promise<unknown> {
    return browser.get(browser.baseUrl);
  }

  async getTitleText(): Promise<string> {
    return element(by.css('app-root .content span')).getText();
  }

  async NavigateToSignPageAfterLoginButtonClick():Promise<any>{
    await browser.driver.findElement(by.id('headerLogin')).click();
    await browser.sleep(5000);
    return element.all(by.id('signInLogin')).getText();
  }
  
  async NavigatingToTheHomeAfterGivingCredentials():Promise<any>{
    await browser.driver.findElement(by.id('headerLogin')).click();

    await browser.driver.findElement(by.id('UserName')).sendKeys('kate');
    await browser.sleep(5000);
    await browser.driver.findElement(by.id('Password')).sendKeys('Kate@123');
    await browser.sleep(5000);
    await browser.driver.findElement(by.id('signInLogin')).click();
    await browser.sleep(3000);
    return element(by.id('title11')).getText();
  }
  async NavigatingToAboutPage():Promise<any>{
    await browser.driver.findElement(by.id('about')).click();
    await browser.sleep(5000);
    return element.all(by.id('aboutUsPage')).getText();
  }
  async NavigatingToContactPage():Promise<any>{
    await browser.driver.findElement(by.id('contact')).click();
    await browser.sleep(5000);
    return element.all(by.id('ContactUs')).getText();
  }
  async NavigatingToTheRegistrationPage():Promise<any>{
    await browser.driver.findElement(by.id('headerLogin')).click();
    await browser.driver.findElement(by.id('signup')).click();
    await browser.sleep(3000);
    return element.all(by.id('UserName')).getText();
  }









}
