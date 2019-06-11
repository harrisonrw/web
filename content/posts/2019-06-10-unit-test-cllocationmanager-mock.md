+++
title = "Unit Test CLLocationManager with a Mock"
date = 2019-06-10T19:56:00-08:00
tags = ["Swift","iOS","Unit Testing"]
+++
In this article, I’ll describe how to mock `CLLocationManager`, so it can be used in unit tests.

Imagine that you are building a fitness app. To track the user’s running distance, you use `CLLocationManager`. Instances of `CLLocationManager` are used to configure, start and stop Core Location services in your app.

`CLLocationManager` has some characteristics, which make it not very friendly to unit test. For example, calling `CLLocationManager.authorizationStatus()` for the first time will trigger a request for user authorization to be displayed. A unit test that is dependent on that call will fail.

Such a dependency should be mocked. A mock object simulates the behavior of a real object and can be used in place of the real object in unit tests.

## LocationManager Protocol
Create a protocol named `LocationManager`:
```
protocol LocationManager {
    
}
```

To the protocol, add the properties and methods from `CLLocationManager` that you require:
```
protocol LocationManager {

    // CLLocationManager Properties
    var location: CLLocation? { get }
    var delegate: CLLocationManagerDelegate? { get set }
    var distanceFilter: CLLocationDistance { get set }
    var pausesLocationUpdatesAutomatically: Bool { get set }
    var allowsBackgroundLocationUpdates: Bool { get set }

    // CLLocationManager Methods
    func requestWhenInUseAuthorization()
    func startUpdatingLocation()
    func stopUpdatingLocation()
}
```

## CLLocationManager Extension
Now create an extension on `CLLocationManager` that conforms to the `LocationManager` protocol:
```
extension CLLocationManager: LocationManager {

}
```

The extension is empty for now. To conform to the protocol, we don’t need to re-define the properties and methods in the protocol, because they are already defined by `CLLocationManager`. Later, we’ll add a couple of new methods to this extension.

## MockLocationManager
Create a new class named `MockLocationManager` that conforms to the `LocationManager` protocol. To conform to the protocol we need to re-define the protocol properties and give them values. We also have to re-define the protocol methods.
```
class MockLocationManager: LocationManager {

    var location: CLLocation? = CLLocation(
        latitude: 37.3317, 
        longitude: -122.0325086
    )

    var delegate: CLLocationManagerDelegate?
    var distanceFilter: CLLocationDistance = 10
    var pausesLocationUpdatesAutomatically = false
    var allowsBackgroundLocationUpdates = true

    func requestWhenInUseAuthorization() { }
    func startUpdatingLocation() { }
    func stopUpdatingLocation() { }
}
```

## CLLocationManager Class Methods
You may also require some class methods from `CLLocationManager`. For example `CLLocationManager.authorizationStatus()` and `CLLocationManager.locationServicesEnabled()`.  Class methods cannot be added to a protocol. So, we’ll add wrappers for those two methods to the protocol:
```
protocol LocationManager {

    // ...

    // Wrappers for CLLocationManager class functions.
    func getAuthorizationStatus() -> CLAuthorizationStatus
    func isLocationServicesEnabled() -> Bool
}
```

Update the `CLLocationManager` extension:
```
extension CLLocationManager: LocationManager {

    // ...    

    func getAuthorizationStatus() -> CLAuthorizationStatus {
        return CLLocationManager.authorizationStatus()
    }

    func isLocationServicesEnabled() -> Bool {
        return CLLocationManager.locationServicesEnabled()
    }
}
```

And update the `MockLocationManager`:
```
class MockLocationManager: LocationManager {

    // ...

    func getAuthorizationStatus() -> CLAuthorizationStatus {
        return .authorizedWhenInUse
    }

    func isLocationServicesEnabled() -> Bool {
        return true
    }
}
```

## Replace CLLocationManager with LocationManager
In general, refactoring is as simple as changing `CLLocationManager` to `LocationManager`:
```
// Old
let locationManager: CLLocationManager

// New
let locationManager: LocationManager
```

Since the `LocationManager` protocol replicates the properties and methods of `CLLocationManager`, much of your code won’t need to be updated.

If you are calling one of `CLLocationManager`’s class methods, then you will need to update it to call the appropriate wrapper method.
```
// Old
let authorizationStatus = CLLocationManager.authorizationStatus()

// New
let authorizationStatus = locationManager.getAuthorizationStatus()
```

## Unit Testing
In your unit tests, you can use `MockLocationManager`  like so:
```
let locationManager = MockLocationManager()
let authorizationStatus = locationManager.getAuthorizationStatus()
let isEnabled = locationManager.isLocationServicesEnabled()
```

## Conclusion
So how does this all work in practice?

In a real-world app, we want to use `CLLocationManager` in release/debug builds and `MockLocationManager` in the unit tests.  In a future article, I will describe how to use Dependency Injection to set the appropriate location manager.

Please checkout [SwiftRun](https://github.com/harrisonrw/SwiftRun) on GitHub for an example in a complete app.