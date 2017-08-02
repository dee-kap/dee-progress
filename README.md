## Progress Bars demo
This application is deployed on a S3 bucket. It can be accessed at 

[http://dee-react-progress.s3-website-ap-southeast-2.amazonaws.com](http://dee-react-progress.s3-website-ap-southeast-2.amazonaws.com)

After cloing the repository install modules

``` npm install ```
or
``` yarn ```

To run the application

```npm start```

To run tests

```npm test```

This application is written in JavaScript. It is built on React (the most awsome front-end framwork) and Redux. 

Requirements of this application are very simple and the code may seem a bit overkill. Because the code was written to demonstrate knowledge of React and Redux, I took the liberty to structure it as a serious application. 

Things you may find are unneccesary:

1. Routing. 
2. Structuring middleware, routes, containers, reducers into their own folders.

Remember that the idea is not to implement a product but to demonstrate skills.

Other than the standard React and Redux libraries, I have used axios for http and lodash. from lodash I am only using the clone function in a reducer.

### Next Steps
If I was to continue developing this application, these are the things I will do:

1. Create a production build. Uglifying the bundle will reduce it's size
2. Test action creators by mocking the store
3. Better styles
4. Different webpack configurations for development and production environment

### Time it took
This excercise was spread over two days. Between making tea, selecting the right music for coding, writing code, writing tests and this readme file, it took me approximately 3 hours.
