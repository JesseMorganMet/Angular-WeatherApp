import { AvgTempPipe, AvgPrecipPipe, WeatherTypePipe, WeatherTypeAltPipe, WTypePipe, uvPipe, minTempPipe, maxTempPipe } from './avg-temp.pipe';

describe('Pipes', () => {
  describe('AvgTempPipe', () => {
    const pipe = new AvgTempPipe();
    it('Should return the average temperature via string', () => {
      expect(pipe.transform([{"T": "2"},{"T": "4"}])).toBe('3C');
    });
  });

  describe('AvgPrecipPipe', () => {
    const pipe = new AvgPrecipPipe();
    it('Should return the average precipitation chance via string', () => {
      expect(pipe.transform([{"Pp": "3"},{"Pp": "4"}])).toBe('5%');
      });
  });

  describe('WeatherTypePipe', () => {
    const pipe = new WeatherTypePipe();
    it('Should return correct image', () => {
      expect(pipe.transform([{"W": "3"}])).toBe("../assets/icons/Cloud.png");
    });
  });

  describe('WeatherTypeAltPipe', () => {
    const pipe = new WeatherTypeAltPipe();
    it('Should return correct image alt text', () => {
      expect(pipe.transform([{"W": "3"}])).toBe("Cloudy icon");
    });
  });

  describe('WTypePipe', () => {
    const pipe = new WTypePipe();
    it('Should return correct weather type text', () => {
      expect(pipe.transform([{"W": "3"}])).toBe("Partly cloudy (day)");
    });
  });

  describe('uvPipe', () => {
    const pipe = new uvPipe();
    it('Should return correct uv type as a letter', () => {
      expect(pipe.transform([{"U": "3"}])).toBe("M");
    });
  });

  describe('minTempPipe', () => {
    const pipe = new minTempPipe();
    it('Should return the minimum temperature', () => {
      expect(pipe.transform([{"T": "2"},{"T": "4"}])).toBe(2);
    });
  });

  describe('maxTempPipe', () => {
    const pipe = new maxTempPipe();
    it('Should return the maximum temperature', () => {
      expect(pipe.transform([{"T": "2"},{"T": "4"}])).toBe(4);
    });
  });

});
