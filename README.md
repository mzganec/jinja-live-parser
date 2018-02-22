# Live parser for Jinja

Live parser for Jinja is a web application which fills a template with values specified in YAML format. The resulting rendering is updated dynamically as the user types. A running demo is available at [http://jinja.quantprogramming.com/](http://jinja.quantprogramming.com/).

For more information about Jinja visit the official website at [http://jinja.pocoo.org/](http://jinja.pocoo.org/).

## Installation

Run `docker-compose up` from the root directory of the project.

Open [http://localhost/](http://localhost/) in your web browser and you're ready to roll.

## Implementation details

Live parser for Jinja is comprised of two custom Docker containers: 
* Flask microservice in the app directory and
* nginx server in the web directory.

The Flask microservice serves GET and POST requests on port 5000. Two parameters are expected in each request:
* `template` a template and
* `values` a set of key-value pairs specified in YAML format.

The nginx server acts as a reverse proxy for the Flask microservice and serves static HTML, JavaScript, and CSS files.

Dynamic update is implemented as a keystroke listener on `template` and `values` inputs. A single request is sent to the server by each key press.

This implementation is inspired by [https://github.com/qn7o/jinja2-live-parser](https://github.com/qn7o/jinja2-live-parser).

## Motivation

At the time writing this implementation, a running live parser for Jinja was not readily available online. [This StackOverflow answer](https://stackoverflow.com/questions/20145709/looking-for-a-jinja-online-or-at-least-live-parser/25852297#25852297) provides a working solution which was further developed here. The improvements include dynamic update of result as the user types and nginx server serving static files and acting as a reverse proxy. This solution is reported as [another answer](https://stackoverflow.com/a/48907913/9391289) to the same question on StackOverflow.
