class Player:

    #Initializing Fields
    def __init__(self,name,team,stat_category,stat):
        self.name = name
        self.team = team,
        self.stat_category = stat_category
        self.stat = stat

    # The following methods return the value of a given field
    
    def name(self):
        return self.name

    def team(self):
        return self.team

    def stat_category(self):
        return self.stat_category

    def stat(self):
        return self.stat
    
    # For print statements we'll print the name of the player
    def __str__(self):
        return self.name