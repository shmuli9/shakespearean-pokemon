import pokebase as pb
from flask import jsonify, Blueprint

api = Blueprint("routes", __name__, url_prefix="/api")
base_routes = Blueprint("base", __name__, url_prefix="")


@base_routes.route('/')
def index():
    return 'Hello World'


@api.route('/<species>')
def species_flavor(species):
    species_info = pb.pokemon_species(species)
    flavor_text = species_info.results[0].flavor_text_entries[0].flavor_text

    return jsonify({
        "text": flavor_text
    })


@base_routes.route("/healthz")
def healthy():
    return jsonify(), 200
