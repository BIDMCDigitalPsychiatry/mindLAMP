# Curve Length Similarity

computed from raw feature: cortex.raw.gps

#### Description

An algorithm for calculating the similarity between two GPS trajectories; Assumes that the only true independent variable of the curves is the arc-length distance along the curve from the origin 

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.
- `LOOKBACK`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `curv: number`: (units: None) curve length similarity between gps trajectories. If there is no GPS data, curve_length_similarity will be 'None'.

#### Example

```markdown
cortex.secondary.curve_length_similarity.curve_length_similarity(LOOKBACK=86400000, id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607245200000, 'curve_length_similarity': .6130470131747797},
           {'timestamp': 1607331600000, 'curve_length_similarity': None},
                 .
                 .
                 .
           {'timestamp': 1608454800000, 'curve_length_similarity': 0.4502036706434}
          ]
}
```
