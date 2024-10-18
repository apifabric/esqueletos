import { MenuRootItem } from 'ontimize-web-ngx';

import { CommentCardComponent } from './Comment-card/Comment-card.component';

import { EventCardComponent } from './Event-card/Event-card.component';

import { EventParticipationCardComponent } from './EventParticipation-card/EventParticipation-card.component';

import { FriendshipCardComponent } from './Friendship-card/Friendship-card.component';

import { GroupCardComponent } from './Group-card/Group-card.component';

import { GroupMembershipCardComponent } from './GroupMembership-card/GroupMembership-card.component';

import { MessageCardComponent } from './Message-card/Message-card.component';

import { NotificationCardComponent } from './Notification-card/Notification-card.component';

import { PostCardComponent } from './Post-card/Post-card.component';

import { ProfileCardComponent } from './Profile-card/Profile-card.component';

import { ReactionCardComponent } from './Reaction-card/Reaction-card.component';

import { UserCardComponent } from './User-card/User-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Comment', name: 'COMMENT', icon: 'view_list', route: '/main/Comment' }
    
        ,{ id: 'Event', name: 'EVENT', icon: 'view_list', route: '/main/Event' }
    
        ,{ id: 'EventParticipation', name: 'EVENTPARTICIPATION', icon: 'view_list', route: '/main/EventParticipation' }
    
        ,{ id: 'Friendship', name: 'FRIENDSHIP', icon: 'view_list', route: '/main/Friendship' }
    
        ,{ id: 'Group', name: 'GROUP', icon: 'view_list', route: '/main/Group' }
    
        ,{ id: 'GroupMembership', name: 'GROUPMEMBERSHIP', icon: 'view_list', route: '/main/GroupMembership' }
    
        ,{ id: 'Message', name: 'MESSAGE', icon: 'view_list', route: '/main/Message' }
    
        ,{ id: 'Notification', name: 'NOTIFICATION', icon: 'view_list', route: '/main/Notification' }
    
        ,{ id: 'Post', name: 'POST', icon: 'view_list', route: '/main/Post' }
    
        ,{ id: 'Profile', name: 'PROFILE', icon: 'view_list', route: '/main/Profile' }
    
        ,{ id: 'Reaction', name: 'REACTION', icon: 'view_list', route: '/main/Reaction' }
    
        ,{ id: 'User', name: 'USER', icon: 'view_list', route: '/main/User' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CommentCardComponent

    ,EventCardComponent

    ,EventParticipationCardComponent

    ,FriendshipCardComponent

    ,GroupCardComponent

    ,GroupMembershipCardComponent

    ,MessageCardComponent

    ,NotificationCardComponent

    ,PostCardComponent

    ,ProfileCardComponent

    ,ReactionCardComponent

    ,UserCardComponent

];