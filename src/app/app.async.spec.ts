import { waitForAsync } from '@angular/core/testing';

describe('async testzone', () => {
  it('can be simplified', waitForAsync(() => {
    setTimeout(() => {
      expect(true).toBeTruthy();
    }, 500);
  }));
});


describe('async tests jasmine', () => {
  it('require a signal that execution has been finished', (done) => {
    setTimeout(() => {
      expect(true).toBeTruthy();
      done();
    }, 500);
  });

  it('can return Promises', () => {
    const awaitTimeout = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));
    return awaitTimeout(500).then(() => {
      expect(true).toBeTruthy();
    });
  });

  it('can be awaited', async () => {
    const awaitTimeout = (delay: number) => new Promise(resolve => setTimeout(resolve, delay));
    await awaitTimeout(500);
    expect(true).toBeTruthy();
  });
});