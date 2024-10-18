# coding: utf-8
from sqlalchemy import DECIMAL, DateTime  # API Logic Server GenAI assist
from sqlalchemy import Boolean, Column, DateTime, ForeignKey, Integer, String, Text
from sqlalchemy.orm import relationship
from sqlalchemy.ext.declarative import declarative_base

########################################################################################################################
# Classes describing database for SqlAlchemy ORM, initially created by schema introspection.
#
# Alter this file per your database maintenance policy
#    See https://apilogicserver.github.io/Docs/Project-Rebuild/#rebuilding
#
# Created:  October 18, 2024 22:05:32
# Database: sqlite:////tmp/tmp.iQD3XUMIa1/esqueletos/database/db.sqlite
# Dialect:  sqlite
#
# mypy: ignore-errors
########################################################################################################################
 
from database.system.SAFRSBaseX import SAFRSBaseX
from flask_login import UserMixin
import safrs, flask_sqlalchemy
from safrs import jsonapi_attr
from flask_sqlalchemy import SQLAlchemy
from sqlalchemy.orm import relationship
from sqlalchemy.orm import Mapped
from sqlalchemy.sql.sqltypes import NullType
from typing import List

db = SQLAlchemy() 
Base = declarative_base()  # type: flask_sqlalchemy.model.DefaultMeta
metadata = Base.metadata

#NullType = db.String  # datatype fixup
#TIMESTAMP= db.TIMESTAMP

from sqlalchemy.dialects.sqlite import *



class Event(SAFRSBaseX, Base):
    """
    description: Table to store event information.
    """
    __tablename__ = 'events'
    _s_collection_name = 'Event'  # type: ignore
    __bind_key__ = 'None'

    event_id = Column(Integer, primary_key=True)
    title = Column(String, nullable=False)
    description = Column(Text)
    event_date = Column(DateTime, nullable=False)
    location = Column(String)
    created_at = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    EventParticipationList : Mapped[List["EventParticipation"]] = relationship(back_populates="event")



class Group(SAFRSBaseX, Base):
    """
    description: Table to store group information.
    """
    __tablename__ = 'groups'
    _s_collection_name = 'Group'  # type: ignore
    __bind_key__ = 'None'

    group_id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    description = Column(Text)
    created_at = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    GroupMembershipList : Mapped[List["GroupMembership"]] = relationship(back_populates="group")



class User(SAFRSBaseX, Base):
    """
    description: Table to store user-related information.
    """
    __tablename__ = 'users'
    _s_collection_name = 'User'  # type: ignore
    __bind_key__ = 'None'

    user_id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    email = Column(String, nullable=False)
    joined_date = Column(DateTime)

    # parent relationships (access parent)

    # child relationships (access children)
    EventParticipationList : Mapped[List["EventParticipation"]] = relationship(back_populates="user")
    FriendshipList : Mapped[List["Friendship"]] = relationship(foreign_keys='[Friendship.friend_id]', back_populates="friend")
    FriendshipList : Mapped[List["Friendship"]] = relationship(foreign_keys='[Friendship.user_id]', back_populates="user")
    GroupMembershipList : Mapped[List["GroupMembership"]] = relationship(back_populates="user")
    MessageList : Mapped[List["Message"]] = relationship(foreign_keys='[Message.receiver_id]', back_populates="receiver")
    senderMessageList : Mapped[List["Message"]] = relationship(foreign_keys='[Message.sender_id]', back_populates="sender")
    NotificationList : Mapped[List["Notification"]] = relationship(back_populates="user")
    PostList : Mapped[List["Post"]] = relationship(back_populates="user")
    ProfileList : Mapped[List["Profile"]] = relationship(back_populates="user")
    CommentList : Mapped[List["Comment"]] = relationship(back_populates="user")
    ReactionList : Mapped[List["Reaction"]] = relationship(back_populates="user")



class EventParticipation(SAFRSBaseX, Base):
    """
    description: Table to store participation relations for events.
    """
    __tablename__ = 'event_participations'
    _s_collection_name = 'EventParticipation'  # type: ignore
    __bind_key__ = 'None'

    participation_id = Column(Integer, primary_key=True)
    event_id = Column(ForeignKey('events.event_id'), nullable=False)
    user_id = Column(ForeignKey('users.user_id'), nullable=False)
    registered_at = Column(DateTime)

    # parent relationships (access parent)
    event : Mapped["Event"] = relationship(back_populates=("EventParticipationList"))
    user : Mapped["User"] = relationship(back_populates=("EventParticipationList"))

    # child relationships (access children)



class Friendship(SAFRSBaseX, Base):
    """
    description: Table to store friendship relations between users.
    """
    __tablename__ = 'friendships'
    _s_collection_name = 'Friendship'  # type: ignore
    __bind_key__ = 'None'

    friendship_id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.user_id'), nullable=False)
    friend_id = Column(ForeignKey('users.user_id'), nullable=False)
    since = Column(DateTime)

    # parent relationships (access parent)
    friend : Mapped["User"] = relationship(foreign_keys='[Friendship.friend_id]', back_populates=("FriendshipList"))
    user : Mapped["User"] = relationship(foreign_keys='[Friendship.user_id]', back_populates=("FriendshipList"))

    # child relationships (access children)



class GroupMembership(SAFRSBaseX, Base):
    """
    description: Table to store membership relations between users and groups.
    """
    __tablename__ = 'group_memberships'
    _s_collection_name = 'GroupMembership'  # type: ignore
    __bind_key__ = 'None'

    membership_id = Column(Integer, primary_key=True)
    group_id = Column(ForeignKey('groups.group_id'), nullable=False)
    user_id = Column(ForeignKey('users.user_id'), nullable=False)
    joined_at = Column(DateTime)

    # parent relationships (access parent)
    group : Mapped["Group"] = relationship(back_populates=("GroupMembershipList"))
    user : Mapped["User"] = relationship(back_populates=("GroupMembershipList"))

    # child relationships (access children)



class Message(SAFRSBaseX, Base):
    """
    description: Table to store messages exchanged between users.
    """
    __tablename__ = 'messages'
    _s_collection_name = 'Message'  # type: ignore
    __bind_key__ = 'None'

    message_id = Column(Integer, primary_key=True)
    sender_id = Column(ForeignKey('users.user_id'), nullable=False)
    receiver_id = Column(ForeignKey('users.user_id'), nullable=False)
    content = Column(Text, nullable=False)
    sent_at = Column(DateTime)

    # parent relationships (access parent)
    receiver : Mapped["User"] = relationship(foreign_keys='[Message.receiver_id]', back_populates=("MessageList"))
    sender : Mapped["User"] = relationship(foreign_keys='[Message.sender_id]', back_populates=("senderMessageList"))

    # child relationships (access children)



class Notification(SAFRSBaseX, Base):
    """
    description: Table to store notifications for user activities.
    """
    __tablename__ = 'notifications'
    _s_collection_name = 'Notification'  # type: ignore
    __bind_key__ = 'None'

    notification_id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.user_id'), nullable=False)
    message = Column(String, nullable=False)
    created_at = Column(DateTime)
    read = Column(Boolean)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("NotificationList"))

    # child relationships (access children)



class Post(SAFRSBaseX, Base):
    """
    description: Table to store user posts.
    """
    __tablename__ = 'posts'
    _s_collection_name = 'Post'  # type: ignore
    __bind_key__ = 'None'

    post_id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.user_id'), nullable=False)
    title = Column(String, nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("PostList"))

    # child relationships (access children)
    CommentList : Mapped[List["Comment"]] = relationship(back_populates="post")
    ReactionList : Mapped[List["Reaction"]] = relationship(back_populates="post")



class Profile(SAFRSBaseX, Base):
    """
    description: Table to store user profile details.
    """
    __tablename__ = 'profiles'
    _s_collection_name = 'Profile'  # type: ignore
    __bind_key__ = 'None'

    profile_id = Column(Integer, primary_key=True)
    user_id = Column(ForeignKey('users.user_id'), nullable=False)
    bio = Column(Text)
    birthdate = Column(DateTime)

    # parent relationships (access parent)
    user : Mapped["User"] = relationship(back_populates=("ProfileList"))

    # child relationships (access children)



class Comment(SAFRSBaseX, Base):
    """
    description: Table to store comments on posts.
    """
    __tablename__ = 'comments'
    _s_collection_name = 'Comment'  # type: ignore
    __bind_key__ = 'None'

    comment_id = Column(Integer, primary_key=True)
    post_id = Column(ForeignKey('posts.post_id'), nullable=False)
    user_id = Column(ForeignKey('users.user_id'), nullable=False)
    content = Column(Text, nullable=False)
    created_at = Column(DateTime)

    # parent relationships (access parent)
    post : Mapped["Post"] = relationship(back_populates=("CommentList"))
    user : Mapped["User"] = relationship(back_populates=("CommentList"))

    # child relationships (access children)



class Reaction(SAFRSBaseX, Base):
    """
    description: Table to store reactions to posts.
    """
    __tablename__ = 'reactions'
    _s_collection_name = 'Reaction'  # type: ignore
    __bind_key__ = 'None'

    reaction_id = Column(Integer, primary_key=True)
    post_id = Column(ForeignKey('posts.post_id'), nullable=False)
    user_id = Column(ForeignKey('users.user_id'), nullable=False)
    type = Column(String, nullable=False)

    # parent relationships (access parent)
    post : Mapped["Post"] = relationship(back_populates=("ReactionList"))
    user : Mapped["User"] = relationship(back_populates=("ReactionList"))

    # child relationships (access children)
