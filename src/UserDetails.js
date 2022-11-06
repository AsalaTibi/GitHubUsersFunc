import React,{Component} from "react";
import { Text, View } from "react-native";

export default function UserDetails({route,navigation}){
        return(
          <View>
            <Text>Name: {route.params.user.login} </Text>
            <Text>Id: {route.params.user.id} </Text>
            <Text>Node Id: {route.params.user.node_id} </Text>
            <Text>Gravatar Id:{route.params.user.gravatar_id} </Text>
            <Text>Url: {route.params.user.url} </Text>
            <Text>Html Url: {route.params.user.html_url} </Text>
            <Text>Followers Url: {route.params.user.followers_url} </Text>
            <Text>Following Url: {route.params.user.following_url} </Text>
            <Text>Gists Url: {route.params.user.gists_url} </Text>
            <Text>Starred Url: {route.params.user.starred_url} </Text>
            <Text>Subscription Url: {route.params.user.subscriptions_url} </Text>
            <Text>Organization Url: {route.params.user.organizations_url} </Text>
            <Text>Repos Url: {route.params.user.repos_url} </Text>
            <Text>Events Url: {route.params.user.events_url} </Text>
            <Text>Received Events Url: {route.params.user.received_events_url} </Text>
            <Text>Type: {route.params.user.type} </Text>
            <Text>Site Admin: {route.params.user.site_admin} </Text>
          </View>
        )
}