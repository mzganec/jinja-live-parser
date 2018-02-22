#!/usr/bin/env python

from yaml import load
from flask import Flask, request, render_template_string

app = Flask(__name__)

@app.route('/render_template', methods=['GET', 'POST'])
def render_template():
    template = request.values.get('template', '')
    values = request.values.get('values', '')
    try:
        values = load(values)
    except Exception as e:
        return 'Error: values need to be in YAML format.\n{}'.format(e)
    values = values or dict()
    try:
        return render_template_string(template, **values)
    except Exception as e:
        return 'Error: template rendering failed.\n{}'.format(e)

if __name__ == '__main__':
    app.run(debug=False, host='0.0.0.0')

