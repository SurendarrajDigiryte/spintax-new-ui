import { defineStore } from 'pinia';

// Define the structure of the spintax data
interface SpintaxData {
  userInput: string;
}

export const spintaxListStore = defineStore('spintaxList', {
  state: () => ({
    dataList: [] as SpintaxData[]
  }),
  actions: {
    // History of Valid Spintax Generation:
    addSpintax(text: string) {
      this.dataList.push({ userInput: text });
      console.log('updated Store: ', this.dataList);
    },
    clearSpintax() {
      console.log('updated Store - Invalid Spintax Removed: Before: ', this.dataList);
      this.dataList.pop();
      console.log('updated Store - Invalid Spintax Removed: ', this.dataList);
    }
  }
});