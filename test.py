from nba_api.stats.endpoints import leagueleaders

# Basic Request
leaders = leagueleaders.LeagueLeaders(
        per_mode48 = "PerGame",
        stat_category_abbreviation = "PTS",
        season = "2020-21"
    )

thisdict = leaders.get_dict()

result_set = thisdict["resultSet"]
row_set = result_set["rowSet"]
ppg_leader = row_set[0]

print(f"PPG Leader: {ppg_leader[2]} with {ppg_leader[len(ppg_leader)-2]}")