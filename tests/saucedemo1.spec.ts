import {test, expect} from '@playwright/test';


test('sauce',async({page}) =>{
   
   await page.goto("https://www.saucedemo.com/")

   await page.getByRole('textbox', { name: 'Username' }).fill("standard_user")
   await page.getByRole('textbox', { name: 'Password' }).fill("secret_sauce")
   await page.getByRole('button', { name: 'Login' }).click()
   await page.getByRole('button', { name: 'Add to cart', exact: true }).first().click()
   await page.getByText('1', { exact: true }).click()
   await page.getByRole('button', { name: 'Checkout' }).click()
   await page.getByRole('textbox', { name: 'First Name' }).fill("Shivanand")
   await page.getByRole('textbox', { name: 'Last Name' }).fill("Miraje")
   await page.getByRole('textbox', { name: 'Zip/Postal Code' }).fill("416410")
   await page.getByRole('button', { name: 'Continue' }).click()
   await page.getByRole('button', { name: 'Finish' }).click()
   



})