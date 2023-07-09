import { Injectable } from "@angular/core";

@Injectable()
export class CounterService {
    activeToInactiveCounter: number = 0;
    inactiveToActiveCounter: number = 0;

    incrementActiveToInactiveCounter() {
        this.activeToInactiveCounter++;
        console.log(`Active to Inactive: ${this.activeToInactiveCounter}`)
    }

    incrementInactiveToActiveCounter() {
        this.inactiveToActiveCounter++;
        console.log(`Inactive to Active: ${this.inactiveToActiveCounter}`)
    }

}