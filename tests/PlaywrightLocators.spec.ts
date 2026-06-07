 import test from "@playwright/test";
    
    test('Learning Playwright Locators',async({page})=>{
        await page.goto('https://login.salesforce.com/')
        /* await page.getByRole('textbox',{name : 'Username'}).fill('dilipkumar.rajendran@testleaf.com')
        await page.getByRole('textbox',{name :'Password'}).fill('TestLeaf@2025')
        await page.getByRole('button',{name : 'Log In'}).click() */

        /* await page.getByLabel('Username').fill('dilipkumar.rajendran@testleaf.com')
        await page.getByLabel('Password').fill('TestLeaf@2025')
        await page.getByRole('button',{name : 'Log In'}).click() */

        await page.getByText('Username' ,{exact : true}).fill('dilipkumar.rajendran@testleaf.com')
        await page.getByText('Password' ,{exact : true}).fill('TestLeaf@2025')
        await page.getByRole('button',{name : 'Log In'}).click()//its available inside input tag and att button
        //await page.waitForTimeout(3000)
       await page.waitForLoadState('domcontentloaded')
        await page.getByTitle('App Launcher',{exact : true}).click()
        await page.getByLabel('View All Applications',{exact : true}).click()
        await page.getByPlaceholder('Search apps or items...',{exact : true}).fill('Lead')

        
    })