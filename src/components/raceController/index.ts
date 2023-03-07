import RaceController  from '../race';

 class RaceControllers {
  generateControl(race: RaceController) {
    const app = document.querySelector('.app') as HTMLDivElement;
    const field = document.createElement('div') as HTMLDivElement;

    field.classList.add('controls');
    app.append(field);
    
    const raceBtns = race.setBtns()
  }
}

export default RaceControllers;