### Acc_Energy (Secondary Feature)

computed from raw feature: cortex.raw.accelerometer

#### Description

Energy is a measure of how much a participant moves around. Assuming that a is an array holding the accelerometer values, acc_energy can be computed as follows:

<img src="https://latex.codecogs.com/svg.latex?\small&space;\dfrac{1}{len(a)}\sqrt{\sum_{i=0}^{n}(a[i]['x'])^2+(a[i]['y'])^2+(a[i]['z'])^2}"/>

#### Optional or required kwargs

- `start: number`: (units: ms) the start time.
- `end: number`: (units: ms) the end time.
- `resolution: number`: (units: ms, default: 1 day = 86400000 ms) the resolution over which to compute features.

#### Data

- `timestamp: number`: (units: ms) the start time of each bin of size `kwargs['resolution']`.
- `acc_energy: number`: (units: None) the energy. If there is no accelerometer data, energy will be 'None'.

#### Example

```markdown
cortex.secondary.acc_energy.acc_energy(id="U1234567890", start=0, end=cortex.now(), resolution=86400000)
```
Output:
```markdown
{
  'timestamp': 1607072400000,
  'duration': 5616000000,
  'resolution': 86400000,
  'data': [
           {'timestamp': 1607245200000, 'acc_energy': 1.0130470131747797},
           {'timestamp': 1607331600000, 'acc_energy': None},
                 .
                 .
                 .
           {'timestamp': 1608454800000, 'acc_energy': 1.004502036706434}
          ]
}
```
