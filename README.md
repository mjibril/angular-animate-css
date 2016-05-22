# angular-animate-css
A simple angular directive that wraps around animate.css 

# Installation 

Install  *animate.css* by downloading to your local library and including it or you can use
```html
<link href="https://raw.github.com/daneden/animate.css/master/animate.css" rel="stylesheet" type='text/css'>
```
Then include angular-animate-css javascript file
```html
<script src="angular_animate_css.js"></script>
```
Make sure this is done after including *angular* itself. Finally inject the directive into your angular app like so
```javascript
var myapp=angular.module('myawesomeapp',['animatecss.directive'])
```

# Usage

## Display animation automatically
In your template use (as an example)
```html
<div animate-css="bounceInRight" animate-css-delay="1000">
Hello
</div>
```
This will fire the *bounceInRight* animation from *animate.css* delayed by *1000ms*. For other animations see [animate.css](https://daneden.github.io/animate.css/ ).

## Display animation on event
In your template use (as an example)
```html
<button animate-css="bounceInRight" animate-css-delay="1000" animate-css-duration="500" animate-css-event="click" animate-css-prevent="true">
Hello 
</button>
```
Using *animate-css-event* in the example will create a click listener for the button that will fire the animation. Any DOM event that can be bound to the element should be valid.
The animation class is removed after *animate-css-duration* (in *ms*).
*animate-css-prevent* is used to stop the event from propagating.
## Defaults
*  *animate-css* defaults to *flash*
*  *animate-css-delay* defaults to *800ms*
*  *animate-css-duration* is not activated when no value is given.
*  *animate-css-event* is not activated when no value is given.
*  *animate-css-prevent* defaults to *true* any other value is false.
