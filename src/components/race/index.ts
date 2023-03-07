import Api from '../api';

 class RaceController {
  setBtns() {
    return `
        <div class="btns__block">
          <button class="btns__item btn__start">Start</button>
          <button class="btns__item btn__reset" disabled>Reset</button>
          <button class="btns__item btn__generate">Generate Cars</button>
        </div>
        `;
  }

  async setCarNames(api: Api) {
    const carNames = [
      'BMW',
      'Mercedes',
      'Audi',
      'Ford',
      'Volvo',
      'Mazda',
      'Porsche',
      'Nissan',
      'Mitsubishi',
      'Opel',
      'Skoda',
      'Tesla',
      'Jaguar',
      'Hyundai',
      'Kia',
      'Toyota',
      'Renault',
      'Honda',
      'Ferrari',
    ];
    const carModels = [
      'M8',
      'CLS',
      'A8',
      'Transit',
      'S90',
      'CX-9',
      'Cayenne',
      'Qashqai',
      'Lancer',
      'Vectra',
      'Rapid',
      'Model X',
      'F-Type',
      'Solaris',
      'Rio',
      'Land Cruiser Prado',
      'Kaptur',
      'Pilot',
    ];

    for (let i = 0; i < 100; i += 1) {
      const randomName = this.setRandom(carNames);
      const randomModel = this.setRandom(carModels);
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);

      const carInfo = `${carNames[randomName]} ${carModels[randomModel]}`;
      await api.createCar(carInfo, `#${randomColor}`);
    }
  }

  setRandom(car: string[]) {
    const randomValue = Math.floor(Math.random() * car.length);
    return randomValue;
  }

  setCarListeners( api: Api) {
    const setCarNamesButton = document.querySelector('.btn__generate');

    setCarNamesButton?.addEventListener('click', () => {
      this.setCarNames(api);
    });
  }
}


export default RaceController;