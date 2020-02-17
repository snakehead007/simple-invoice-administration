# Invoice-administration

[![Codacy Badge](https://api.codacy.com/project/badge/Grade/999b1f235964441b98dfccc5eef26217)](https://app.codacy.com/manual/snakehead007/invoice-administration?utm_source=github.com&utm_medium=referral&utm_content=snakehead007/invoice-administration&utm_campaign=Badge_Grade_Settings)


This program is mainly used for managing and administrating invoices and generating them into .pdf format

Version 2.0(beta) is out. We are still improving and adding things on a daily basis.
This is not a finished product, but you can still contribute and/or test it out.
Check out the projects > core functionalities. for the current progess.

This project is translated in 2 languages, Dutch and English.

This program is created and maintained for [www.mdsart.be/](https://www.mdsart.be/)

demo
---
If you want to test it out and help make this program better, you can contact me so I can whitelist you.
After that, you'll be able to go to [account.karel.be](https://account.karel.be/) and use it.

about
--

Functionalities:
  - Add contacts, invoices, quotations, offers, materials
  - A yearly chart (automatically updated);
  - Downloadable pdfs for Invoices, quotations and offers
  - Upload your logo to use on the pdf's. 
  - Your profile can be edited
  - All documents have a switch, to keep that it has been payed or not.
  - Calculations (inch to cm, precentages, using your materials calculating how much something costs, ...) (currenlty in progress)
  - A search function (currently in progress)
  - 5 different themes
  - Logging on using Google Connect Id
  - changeable text for the pdf's
  - 2 languages: English and Dutch

### How to Install locally or host

 - local:
 
   `docker-compose up --build`
 
 - synology/hub.docker:
   
   start container [mongo](https://hub.docker.com/_/mongo) first.
  
   start container [invoice-administration](https://hub.docker.com/repository/docker/snakehead007/invoice-administration) second, with link to mongo container as 'mongo'.

### About (technical)
All data is kept locally by mongodb.

(Changing from computer, you will have to export and import all data manually,for now.)

The front end view is handled by 'pug' and the backend is runned by 'nodejs'.

All the request are run with 'Express'.

For more information about all the packages that are used in this project check the [wiki](https://github.com/snakehead007/simple-invoice-administration/wiki) .

Screenshots
-

![Profile edit page](screenshots/1.png)

![Settings page](screenshots/2.png)

![index page](screenshots/3.png)

![pdf generated invoice ](screenshots/4.png)

![contacts page](screenshots/5.png)

![Invoices and others of 1 contact](screenshots/6.png)

![the chart](screenshots/7.png)

Future plans
-
* In the future the view engine, Pug, will be replace by React.
* When this project comes out of beta, you'll be able to create an account  for a monthly fee.
