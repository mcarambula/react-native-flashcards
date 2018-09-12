import React from 'react';
import { View, StyleSheet, AsyncStorage } from 'react-native';
import { Notifications, Permissions } from 'expo';

const NOTIFICATION_KEY = 'FlashCards:Notifications';

/* Clear Local Notifications */
export function clearLocalNotification () {
    return AsyncStorage
            .removeItem(NOTIFICATION_KEY)
            .then(Notifications.cancelAllScheduledNotificationsAsync)
}
/* Object with the configuration of the local notification */
function createNotification() {
    return {
        title: "Don't forget your FlashCards!",
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
/* Setting the local notification */
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
                            tomorrow.setDate(tomorrow.getDate() + 1);
                            tomorrow.setHours(18);
                            tomorrow.setMinutes(30);
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
