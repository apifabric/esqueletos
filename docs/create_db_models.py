# created from response - used to create database and project
#  should run without error
#  if not, check for decimal, indent, or import issues

import decimal

import logging



logging.getLogger('sqlalchemy.engine.Engine').disabled = True  # remove for additional logging

import sqlalchemy



from sqlalchemy.sql import func  # end imports from system/genai/create_db_models_inserts/create_db_models_prefix.py

from logic_bank.logic_bank import Rule

from sqlalchemy import create_engine, Column, Integer, String, ForeignKey, Float, DateTime, Text, Boolean
from sqlalchemy.orm import declarative_base, sessionmaker
from sqlalchemy.sql import func
import datetime

Base = declarative_base()

class User(Base):
    """description: Table to store user-related information."""
    __tablename__ = 'users'
    user_id = Column(Integer, primary_key=True, autoincrement=True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)
    joined_date = Column(DateTime, default=datetime.datetime.utcnow)

class Profile(Base):
    """description: Table to store user profile details."""
    __tablename__ = 'profiles'
    profile_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    bio = Column(Text, nullable=True)
    birthdate = Column(DateTime, nullable=True)

class Post(Base):
    """description: Table to store user posts."""
    __tablename__ = 'posts'
    post_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Comment(Base):
    """description: Table to store comments on posts."""
    __tablename__ = 'comments'
    comment_id = Column(Integer, primary_key=True, autoincrement=True)
    post_id = Column(Integer, ForeignKey('posts.post_id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class Reaction(Base):
    """description: Table to store reactions to posts."""
    __tablename__ = 'reactions'
    reaction_id = Column(Integer, primary_key=True, autoincrement=True)
    post_id = Column(Integer, ForeignKey('posts.post_id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    type = Column(String, nullable=False)

class Friendship(Base):
    """description: Table to store friendship relations between users."""
    __tablename__ = 'friendships'
    friendship_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    friend_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    since = Column(DateTime, default=datetime.datetime.utcnow)

class Group(Base):
    """description: Table to store group information."""
    __tablename__ = 'groups'
    group_id = Column(Integer, primary_key=True, autoincrement=True)
    name = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class GroupMembership(Base):
    """description: Table to store membership relations between users and groups."""
    __tablename__ = 'group_memberships'
    membership_id = Column(Integer, primary_key=True, autoincrement=True)
    group_id = Column(Integer, ForeignKey('groups.group_id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    joined_at = Column(DateTime, default=datetime.datetime.utcnow)

class Event(Base):
    """description: Table to store event information."""
    __tablename__ = 'events'
    event_id = Column(Integer, primary_key=True, autoincrement=True)
    title = Column(String, nullable=False)
    description = Column(Text, nullable=True)
    event_date = Column(DateTime, nullable=False)
    location = Column(String, nullable=True)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)

class EventParticipation(Base):
    """description: Table to store participation relations for events."""
    __tablename__ = 'event_participations'
    participation_id = Column(Integer, primary_key=True, autoincrement=True)
    event_id = Column(Integer, ForeignKey('events.event_id'), nullable=False)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    registered_at = Column(DateTime, default=datetime.datetime.utcnow)

class Message(Base):
    """description: Table to store messages exchanged between users."""
    __tablename__ = 'messages'
    message_id = Column(Integer, primary_key=True, autoincrement=True)
    sender_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    receiver_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    content = Column(Text, nullable=False)
    sent_at = Column(DateTime, default=datetime.datetime.utcnow)

class Notification(Base):
    """description: Table to store notifications for user activities."""
    __tablename__ = 'notifications'
    notification_id = Column(Integer, primary_key=True, autoincrement=True)
    user_id = Column(Integer, ForeignKey('users.user_id'), nullable=False)
    message = Column(String, nullable=False)
    created_at = Column(DateTime, default=datetime.datetime.utcnow)
    read = Column(Boolean, default=False)

# Create an SQLite database
engine = create_engine('sqlite:///system/genai/temp/create_db_models.sqlite')
Base.metadata.create_all(engine)

# Start a session
Session = sessionmaker(bind=engine)
session = Session()

# Create sample data
user1 = User(username='johndoe', email='john.doe@example.com')
user2 = User(username='janedoe', email='jane.doe@example.com')

profile1 = Profile(user_id=1, bio='Avid traveler', birthdate=datetime.datetime(1985, 5, 15))
profile2 = Profile(user_id=2, bio='Digital artist', birthdate=datetime.datetime(1993, 7, 22))

post1 = Post(user_id=1, title='My first post', content='Content of the first post')
post2 = Post(user_id=2, title='Hello world', content='Hello, this is my first blog entry')

comment1 = Comment(post_id=1, user_id=2, content='Great post!')
reaction1 = Reaction(post_id=1, user_id=2, type='like')

friendship1 = Friendship(user_id=1, friend_id=2)

group1 = Group(name='Travel Buddies', description='A group for travel enthusiasts')
group_membership1 = GroupMembership(group_id=1, user_id=1)

event1 = Event(title='Art Exhibition', description='Visit new art installations', event_date=datetime.datetime(2023, 11, 15))
event_participation1 = EventParticipation(event_id=1, user_id=2)

message1 = Message(sender_id=1, receiver_id=2, content='Hello there!')
notification1 = Notification(user_id=1, message='You have a new message', read=False)

session.add_all([
    user1, user2, profile1, profile2, post1, post2,
    comment1, reaction1, friendship1, group1, group_membership1,
    event1, event_participation1, message1, notification1
])
session.commit()

session.close()
