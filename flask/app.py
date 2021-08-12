from flask import Flask
from flask_cors import CORS
from nba_api.stats.endpoints import leagueleaders
from player import Player


app = Flask(__name__)
CORS(app)

def get_leader(category):


    # Basic Request
    leaders = leagueleaders.LeagueLeaders(
        per_mode48 = "PerGame",
        stat_category_abbreviation = category,
        season = "2020-21"
    )

    # The API returns a large dictionary
    dict = leaders.get_dict()

    # We filter to the result_set, which gives us another dictionary
    result_set = dict["resultSet"]

    # We filter to the row_set, which gives us a list of lists
    row_set = result_set["rowSet"]

    # The first index of the list is the stat leader for the category
    stat_leader = row_set[0]

    # This if/elif block will get the appropiate stat based on the category
    if category == "PTS":
        stat = stat_leader[len(stat_leader)-2]
    elif category == "AST":
        stat = stat_leader[len(stat_leader)-6]
    elif category == "REB":
        stat = stat_leader[len(stat_leader)-7]
    elif category == "BLK":
        stat = stat_leader[len(stat_leader)-4]
    elif category == "STL":
        stat = stat_leader[len(stat_leader)-3]

    # We create and return a player obj
    return Player(
        name = stat_leader[2],
        team = stat_leader[3],
        stat_category = category[0] + "PG",
        stat = stat
    )

@app.route("/")
def hello_world():

    ppg = get_leader("PTS")
    apg = get_leader("AST")
    rpg = get_leader("REB")
    bpg = get_leader("BLK")
    spg = get_leader("STL")

    leaders = {
        "ppg": {
            "name": ppg.name,
            "team": ppg.team,
            "category": ppg.stat_category,
            "stat": ppg.stat
        },
        "apg": {
            "name": apg.name,
            "team": apg.team,
            "category": apg.stat_category,
            "stat": apg.stat
        },
        "rpg": {
            "name": rpg.name,
            "team": rpg.team,
            "category": rpg.stat_category,
            "stat": rpg.stat
        },
        "bpg": {
            "name": bpg.name,
            "team": bpg.team,
            "category": bpg.stat_category,
            "stat": bpg.stat
        },
        "spg": {
            "name": spg.name,
            "team": spg.team,
            "category": spg.stat_category,
            "stat": spg.stat
        }
        
    }

    return f"{leaders}"