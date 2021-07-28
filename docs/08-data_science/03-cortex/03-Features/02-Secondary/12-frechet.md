# Frechet (Secondary Feature)

computed from raw feature: cortex.raw.gps

#### Description

Discrete Frechet Distance: similarity measuring algorithm for two GPS trajectories.
Thortest distance in-between two curves, where you are allowed to very the speed at which you travel along each curve independently (walking dog problem)

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.
- `LOOKBACK`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `frechet_distance: number`: (units: None) Discrete Frechet Distance between two GPS trajectories. If there is no GPS data, frechet_distance will be 'None'.

#### Example

```markdown
cortex.secondary.frechet.frechet(LOOKBACK=86400000, id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607245200000, 'frechet_distance': .6130470131747797},
           {'timestamp': 1607331600000, 'frechet_distance': None},
                 .
                 .
                 .
           {'timestamp': 1608454800000, 'frechet_distance': 0.4502036706434}
          ]
}
```
