import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'FlashCards:Notifications';

export function clearLocalNotification () {
    return AsyncStorage
            .removeItem(NOTIFICATION_KEY)
            .then(Notifications.cancelAllScheduledNotificationsAsync)
}

function createNotification() {
    return {
        title: "Don't forget your UdaciCards!",
        body: "👋  It's time to study any of your flashcards today!",
        ios: {
            sound: true,
        },
        android: {
            sound: true,
            priority: 'high',
            sticky: false,
            vibrate: true,
        }
    }
}

export function setLocalNotification() {
    AsyncStorage
        .getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then(data => {
            if (data === null) {
                Permissions.askAsync(Permissions.NOTIFICATIONS)
                    .then(({ status }) => {
                        if (status === 'granted') {
                            Notifications.cancelAllScheduledNotificationsAsync();
                            let tomorrow = new Date();
                            tomorrow.setDate(tomorrow.getDate());
                            tomorrow.setHours(17);
                            tomorrow.setMinutes(45);
                            Notifications.scheduleLocalNotificationAsync(
                                createNotification(), {
                                    time: tomorrow,
                                    repeat: 'day',
                            });
                            AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                        }
                });
            }
        });
}
