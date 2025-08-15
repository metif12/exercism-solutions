// Package weather for forecasting weather condition.
package weather

// CurrentCondition store current weather condition.
var CurrentCondition string

// CurrentLocation store current location.
var CurrentLocation string

// Forecast return weather forecast for given city and current condition.
func Forecast(city, condition string) string {
	CurrentLocation, CurrentCondition = city, condition
	return CurrentLocation + " - current weather condition: " + CurrentCondition
}
