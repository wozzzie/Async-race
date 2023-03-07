import URL from '../../types/constants';

class Api {
  url = URL;

  async getCars(page: number, limit = 7) {
    const response = await fetch(`${this.url}/garage?_page=${page}&_limit=${limit}`);
    return await response.json();
  }

  async getCar(id: number) {
    const response = await fetch(`${this.url}/garage/${id}`);
    return await response.json();
  }

  async createCar(name: string, color: string) {
    const response = await fetch(`${this.url}/garage`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, color }),
    });

    return response.json();
  }

  async deleteCarFromGarage(id: number) {
    const response = await fetch(`${this.url}/garage/${id}`, {
      method: 'DELETE',
    });

    return response.json();
  }

  async deleteCarFromWinners(id: number) {
    const response = await fetch(`${this.url}/winners/${id}`, {
      method: 'DELETE',
    });

    return response.json();
  }

  async updateCar(id: number, name: string, color: string) {
    const response = await fetch(`${this.url}/garage/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, color }),
    });

    return response.json();
  }

  async setEngine(id: number, status: 'started' | 'stopped' | 'drive') {
    const response = await fetch(`${this.url}/engine?id=${id}&status=${status}`, {
      method: 'PATCH',
    });

    return response.json();
  }

  async getWinners(page: number = 1, limit: number = 10, sort: 'id' | 'wins' | 'time', order: 'ASC' | 'DESC') {
    const response = await fetch(`${this.url}/winners?_page=${page}&_limit=${limit}&_sort=${sort}&_order=${order}`);
    return await response.json();
  }

  async getWinner(id: number) {
    const response = await fetch(`${this.url}/winners/${id}`);
    return await response.json();
  }

  async createWinner(id: number, wins: number, time: number) {
    const response = await fetch(`${this.url}/winners`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ id, wins, time }),
    });

    return response.json();
  }

  async deleteWinner(id: number) {
    const response = await fetch(`${this.url}/winners/${id}`, {
      method: 'DELETE',
    });

    return response.json();
  }

  async updateWinner(id: number, wins: number, time: number) {
    const response = await fetch(`${this.url}/winners/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ wins, time }),
    });

    return response.json();
  }
}

export default Api;
