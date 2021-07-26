### Survey Results (Secondary Feature)

computed from primary feature: cortex.primary.survey_scores
computed from raw feature: cortex.raw.survey

#### Description

Computes the average score for a given survey in the time window given by 'resolution'.

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `call_number: number`: (units: None) the mean survey scores.

#### Example

```markdown
cortex.secondary.survey_results.survey_results(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607072400000, 'call_number': 0},
           {'timestamp': 1607331600000, 'call_number': 0},
                 .
                 .
                 .
           {'timestamp': 1609232400000, 'call_number': 3}
          ]
}
```


