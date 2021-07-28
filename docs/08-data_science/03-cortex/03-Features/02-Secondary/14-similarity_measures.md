# Similarity Measures (Secondary Feature)

computed from raw feature: cortex.raw.gps

#### Description

Returns the following similarity measuring scores: Area Between Curves, Curve Length Similarity, Discrete Frechet Distance, FastDTW, and Partial Curve Mapping.
Note that there already exists a secondary feature for each similarity measure above.

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.
- `LOOKBACK`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `frechet_distance: number`: (units: None) Discrete Frechet Distance between two GPS trajectories. If there is no GPS data, `frechet_distance` will be 'None'.
- `area_between: number`: (units: None) area between gps trajectories. If there is no GPS data, `area_between` will be 'None'.
- `partial_curve_mapping: number`: (units: None) PCM score between two GPS trajectories. If there is no GPS data, `partial_curve_mapping` will be 'None'.
- `curve_length_similarity: number`: (units: None) curve length similarity between gps trajectories. If there is no GPS data, `curve_length_similarity` will be 'None'.
- `fastDTW_score: number`: (units: None) FastDTW score between two GPS trajectories. If there is no GPS data, `fastDTW_score` will be 'None'.

#### Example

```markdown
cortex.secondary.similarity_measures.similarity_measures(LOOKBACK=86400000, id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607245200000, 'frechet_distance': 0.586541, 'area_between': 13.241632, 'partial_curve_mapping': 17.633046, 'curve_length_similarity': 7.149019, 'fastDTW_score': 37.950527}
           {'timestamp': 1607331600000, 'frechet_distance': None, 'area_between': None, 'partial_curve_mapping': None, 'curve_length_similarity': None, 'fastDTW_score': None}
                 .
                 .
                 .
           {'timestamp': 1608454800000, 'frechet_distance': 0.776941, 'area_between': 15.279632, 'partial_curve_mapping': 18.333066, 'curve_length_similarity': 9.542019, 'fastDTW_score': 39.935024}
          ]
}
```
