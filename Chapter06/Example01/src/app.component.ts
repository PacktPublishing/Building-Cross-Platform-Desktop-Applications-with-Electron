import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';


import './style.css';

@Component({
	selector: 'electron-app',
	providers: [AppService],
	templateUrl: 'app.component.html'
})
export class AppComponent implements OnInit {

	public customers: Array<any> = [];
	public customer: any = {};
	public currentSelectedIndex: number = -1;

	constructor(private service: AppService) { }

	public ngOnInit() {
		// Load data from the mysql database.
		this.service.getCustomers().then(data => this.customers = data);
	}

	setCustomer(customer: any, idx: number) {
		this.customer = customer;
		this.currentSelectedIndex = idx;
	}

	saveCustomer() {
		if (!this.customer.id) {
			this.service.createCustomer(this.customer).then(data => {
				this.customer.id = data;
				this.customers.push(this.customer);
				this.customer = {};
			});
		} else {
			this.service.updateCustomer(this.customer);
		}
	}

	addNewCustomer() {
		this.customer = {};
		this.currentSelectedIndex = -1;
	}

	deleteCustomer() {
		if (this.currentSelectedIndex !== -1) {
			this.service.deleteCustomer(this.customer.id).then(affectedRows => {
				if (affectedRows > 0) {
					this.customers.splice(this.currentSelectedIndex, 1);
				}
			});
		}
	}

	cancel() {
		this.currentSelectedIndex = -1;
		this.customer = {};
	}
}