from flask.cli import AppGroup
from .users import seed_users, undo_users
from .spots import seed_spots, undo_spots
from .reviews import seed_reviews, undo_reviews
from .bookings import seed_bookings, undo_bookings

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    # Add other seed functions here
    seed_spots()
    seed_reviews()
    seed_bookings()


# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    # Add other undo functions here
    undo_spots()
    undo_reviews()
    undo_bookings()