# breaking_bread
# 🥖 Breaking Bread :bread: 

![](https://media.giphy.com/media/VWYtDQMcYLRuw/giphy.gif)
### An app to help organise Wednesday's community lunch at Space4!

## 💾 Instructions to run app
1. In your terminal:
    ```git clone git@github.com:fac-15/breaking_bread.git```
2. Make sure you are on the staging branch
3. Run server by typing ```npm run dev``` in your terminal
4. Open up chrome and navigate to  ```http://localhost:5001```  
5. Create a config.env file in the root directory and add key posted in Gitter.

## 📝 Planning:
![](https://lh3.googleusercontent.com/qCuGt3Jq6bsbi0v1XYC_PbcrF1974r6WvC1hBquWv3OO6GAW5dQ7Wb98310cg5Z8d8xvEIX6_LeCPzfcAdLlCTHWp6He0mPAvgKvYEk1EI74HCZaYupyG6rbA2BdFa_tqvIkYa6jz1wdV6o8ycHl459Xlni6D59bTLh9Y-9zjkeFQLGohdJ9TsYMxCz7tclhkKBGpzYHVg-alyKP_JmVaXxGziWQ2z-jRxue9vMsELak-JS33gOSsBNMAJSgtji-5eENLpGKSC5JUiibxb7QGCHbQvdtmR9CH7SNx5XhhPxY3madk0r03Q4GQWrMXF0P1jSU6Ro647djNbYfyZMfzJmju-MLbxUs4s9rXKoL2ct2Fw23An8xsaDffgyo2OSt-lcMkV4e8HYiZALEOmykuKKMvsQvzg7bLMn__n9EMXbcjzH1RD7RI3-tijccWI6e6SbRhi7rt_zHs6TpWD_fqtAnhm24biVJMcgCTxEF_2K8Pa9vQfHuBMxHUNIbawMBp-oPnzdngzfgatJUOnhF-0xl3R0DQWARrJt0YG1iYJPZjuTP_OXRtCf7Ac5LkDJgBcuk4mRH02KSvP0-k34jCY0NKynX5bRQh2BAWy74hmHB96fuhlxFjoAVrbojXTU0ORUfAbEKS8ibm6wisuU2mc96ew=w2444-h1374-no)



## :clipboard:Process 

**1.** Decided on concept 🤨

**2.** Created entity table relationship diagram/schema
![ENT Diagram](https://i.imgur.com/LUEL4P6.png)
--- :one: --- --- --- --- --- --- --- ♾ **MANY** ♾ --- --- --- --- --- --- --- :one: ---

**3.** :notebook: Set up file structure _(note that we have not yet added test files in this diagram)_;
![](https://i.imgur.com/TVPisHG.jpg)

**4.** :mag_right: Searched and found typos _(front and back end)_ and got the server running and all files communicating!

**5.** ❓Set up our testing database ❌🔜✅
- We first set up local server & then got confused and tried to host a test database on Heroku
- test databases DO NOT need to be hosted on Heroku!

**6.** 

## 🥴 Problems:

* Working out what our schema relationships were.
* Getting our tests up and running with confidence we weren't about to <span style="color:red;">**ERASE EVERYTHING**</span>!
* Creating the test database. 
    * First we tried to create our test db on Heroku however we could not excute the test script due to errors, we changed tactics and made one locally. 
    * We had missed out the ssl and user keys in the options object within our connection.js file. 
* We also ran into trouble testing the date format as it would print the date,time & time zone.
* Our XMLhtml response request did not return data from our databases
* Linking our databases together to auto populate the FK columns according to primary key (foreign key)
* 


## 💬 Stretch goals: 

**1.** Multiple upcoming dates. ✅

**2.** Eventually we will need to filter lunches displayed to only show upcoming dates!

**3.** Carosel form display.

**4.** Votes for upcoming cuisine.
* _(Would involve creating another table.)_

**5.** On form completion, show the lunch you have booked and who is going.

**6.** 
