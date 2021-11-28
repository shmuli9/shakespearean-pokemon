import pokebase as pb
from flask import jsonify, Blueprint
from flask_cors import CORS

api = Blueprint("routes", __name__, url_prefix="/api")
base_routes = Blueprint("base", __name__, url_prefix="")
CORS(api)
CORS(base_routes)


@api.route('/<species>')
def species_flavor(species):
    species_info = pb.pokemon_species(species)
    flavor_text = species_info.results[0].flavor_text_entries[0].flavor_text

    return jsonify({
        "text": flavor_text
    })


@base_routes.route('/')
@base_routes.route("/healthz")
def healthy():
    return jsonify(), 200
