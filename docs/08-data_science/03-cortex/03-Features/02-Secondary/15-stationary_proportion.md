# Stationary Proportion (Secondary Feature)

computed from raw feature: cortex.raw.accelerometer

#### Description

Computes the proportion of "stationary" accelerometer readings.
An accelerometer reading is "stationary" if the z component is close to gravitational acceleration (9.81 m/s^2)

#### Optional or required kwargs
- `g: number`: (units: meters/s^2, default: 9.57) Gravity of Earth, approximately 9.81 m/s^2; varies based on sensor
- `eps: number`: (units: None, default: 0.1) Epsilon value creates an epsilon-neighborhood around g
- `col: string`: (units: None, default: 'z') column being used to determine if readings fall withing `eps`-neighborhood of `g`
- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.


#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `stationary_proportion: number`: (units: None) proportion of accelerometer readings that fall into an interval aroung `g`, with a user-specified radius `eps`. If there is no accelerometer data, `stationary_proportion` will be 'None'.

#### Example

```markdown
cortex.secondary.stationary_proportion.stationary_proportion(g=9.70, eps=.15, col='z', id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607245200000, 'stationary_proportion': .110470131747797},
           {'timestamp': 1607331600000, 'stationary_proportion': None},
                 .
                 .
                 .
           {'timestamp': 1608454800000, 'stationary_proportion': 0.2502036706434}
          ]
}
```
