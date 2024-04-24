import puppeteer from 'puppeteer';
import { fork } from 'child_process';

jest.setTimeout(30000);

describe('Page start', () => {
  let browser;
  let page;
  let server;

  beforeAll(async () => {
    server = fork(`${__dirname}/e2e.server.js`);

    await new Promise((resolve, reject) => {
      server.on('error', reject);
      server.on('message', (message) => {
        if (message === 'ok') {
          resolve();
        }
      });
    });

    browser = await puppeteer.launch({
    });

    page = await browser.newPage();

  });

  test('is body exists', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('body');
  });
  
  test('Form should render on page start', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.popover');
  });


  test('Show popover', async () => {
    await page.goto('http://localhost:9000');

    await page.waitForSelector('.popover');

    const btn = await page.$('.btn');
    await btn.click();

    await page.waitForSelector('.visible');
  });

  test('Hide popover', async () => {

    await page.goto('http://localhost:9000');

    await page.waitForSelector('.popover');

    const btn = await page.$('.btn');
    await btn.click();
	await btn.click();
	const popover = await page.$('.visible');
	expect(popover).toBeNull();

  });
  
  
  afterAll(async () => {
    await browser.close();
    server.kill();
  });  
  
});