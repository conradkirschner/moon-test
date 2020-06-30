describe('testing infrastructure', () => {
    it('should have the right title', () => {
        browser.url('https://aerokube.com/')
        expect(browser).toHaveTitle('Aerokube | Efficient Selenium Testing Infrastructure');
    })
})