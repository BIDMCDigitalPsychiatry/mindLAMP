# Partial Curve Mapping (Secondary Feature)

computed from raw feature: cortex.raw.gps

#### Description

Partial Curve Mapping: similarity measuring algorithm for two GPS trajectories. Matches the area of a subset between the two GPS trajectories.

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.
- `LOOKBACK`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `partial_curve_mapping: number`: (units: None) PCM score between two GPS trajectories. If there is no GPS data, `partial_curve_mapping` will be 'None'.

#### Example

```markdown
cortex.secondary.partial_curve_mapping.partial_curve_mapping(LOOKBACK=86400000, id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607245200000, 'partial_curve_mapping': .6130470131747797},
           {'timestamp': 1607331600000, 'partial_curve_mapping': None},
                 .
                 .
                 .
           {'timestamp': 1608454800000, 'partial_curve_mapping': 0.4502036706434}
          ]
}
```
