+++
date = 2024-09-30
title = "TritonView"
slug = "tritonview"
layout = "single"
hero_subtitle = "Real-time monitoring of blood hemorrhaging during surgical procedures."
hero_image = "/images/TritonView-hero-illustrated-400.png"
+++

* **Role:** iOS Developer
* **Platform:** iPhone, Apple Watch
* **Technologies:** Swift, UIKit, WatchKit, RESTful API, Push Notifications, Firebase, Node.js

## Overview
TritonView is a real-time blood hemorrhage (blood-loss) monitoring app built for Gauss Surgical. Contracted through Fresh, I partnered closely with their designer and served as the sole engineer on the project. I developed the iOS and Apple Watch apps along with a Firebase backend that connected to Gauss's existing monitoring system. The app listens for real-time hemorrhage data and status updates, delivering timely alerts and live metrics to surgical teams on Apple devices to support fast, informed decisions during procedures. The app was piloted at **Brigham and Women's Hospital** in Boston, MA.

## Key Features
* Real-time blood hemorrhage monitoring during surgical procedures
* Live integration with Gauss Surgical monitoring equipment
* Immediate push notifications to iPhone and Apple Watch for critical alerts
* Multi-device synchronization for surgical team coordination
* Haptic feedback and visual alerts optimized for surgical environments
* Offline capability for network interruptions during procedures

## My Contributions

### iOS App Development
* **Architecture**: Implemented a clean **MVC** architecture with dependency injection for maintainability and testability
* Developed complete iPhone and Apple Watch applications for monitoring blood hemorrhaging during surgical procedures
* Integrated with the Gauss RESTful API to retrieve and display live surgical data in real-time
* Implemented robust data synchronization ensuring surgical teams receive immediate updates on patient status
* Built intuitive surgical-room friendly interface optimized for high-stress medical environments

### Firebase Backend Development
* **Cloud Functions**: Used Node.js to integrate with the Gauss RESTful API to retrieve surgical data
* **Alert System**: Multi-stage blood loss thresholds that trigger push notifications
* **Database Design**: Firebase Realtime Database schema for operating room data
* **Development Workflow**: Firebase emulator setup with test data and local development environment

### Critical Alert & Notification System
* Implemented comprehensive push notification system using APNS and FCM to deliver immediate warnings to both iPhone and Apple Watch
* Designed escalating alert protocols based on hemorrhage severity levels
* Optimized for minimal latency to ensure surgical teams receive real-time data without delay

### Performance & Reliability
* Optimized for minimal latency to ensure surgical teams receive real-time data without delay
* Implemented comprehensive error handling and recovery for network connectivity issues in hospital environments
* Created extensive unit and integration test suite ensuring reliable operation during surgical procedures
* Conducted thorough testing with medical professionals to validate usability under surgical conditions
