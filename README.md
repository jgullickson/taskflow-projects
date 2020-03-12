# taskflow-projects

Samples from a growing library of gamified cogntive-training tasks used for research studies at UMN. The premise behind gamification is to both challenge and engage research participants as they undergo intensive cognitive training regimens paried with transcranial direct-current stimulation (tDCS).

These tasks are based on standard psychological tasks that engage working memory, and include variations of:
  - N-back
  - Flanker
  - Dot Pattern Expectancy (DPX)

**NOTE:** The task behavior and layout was *not* designed to be mobile-friendly, as they require keyboard responses.

## How to access tasks
  1. Download and extract src folder
  2. Open index.html
  
### Configuration
These tasks are configured to run from the lab's proprietary server and web platform, which tracks participant sessions and level-up progress. However, they can be run locally, and accessing different levels for a local run is as simple as changing a value in global-configuration.js ( src/js/editor/global-configuration.js ).

```javascript
    /**
     * Local configuration.
     */
    LOCAL: {
        LEVEL: 0, // level number corresponding to levels in configuration.js
        LENGTH: 10 // time in minutes before terminating (or moving to next task when run on server) Waits for current level to finish)
    },
```

## Screenshots

### Nebula 9 (Flanker)

![Nebula 9 title screen with stars and asteroids in background](./screenshots/flanker-space-1.png)

![Nebula 9 instruction screen](./screenshots/flanker-space-2.png)

![Nebula 9 gameplay showing asteroid impact warning](./screenshots/flanker-space-3.png)

![Nebula 9 performance dashboard](./screenshots/flanker-space-4.png)

### Dungeon Crawler (Flanker)

![Dungeon crawler gameplay showing a battle with a spider](./screenshots/flanker-dugeon-1.png)

![Dungeon crawler performance dashboard showing a newly earned weapon](./screenshots/flanker-dugeon-2.png)

