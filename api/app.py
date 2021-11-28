import pprint

import pokebase as pb
from flask import Flask, jsonify

app = Flask(__name__)


@app.route('/')
def index():
    return 'Hello World'


@app.route('/api/<species>')
def hello_world(species):
    species_info = pb.pokemon_species(species)
    pprint.pprint(species_info)
    flavor_text = species_info.results[0].flavor_text_entries[0].flavor_text

    return jsonify({
        "text": flavor_text
    })


@app.route("/healthz")
def healthy():
    return jsonify(), 200
