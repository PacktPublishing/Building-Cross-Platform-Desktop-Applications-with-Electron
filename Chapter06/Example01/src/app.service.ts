import { Injectable } from '@angular/core';
import * as mysql from 'mysql';

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'customer_manager'
});

@Injectable()
export class AppService {
  connection: any;

  getCustomers(): Promise<any> {
    return new Promise((resolve, reject) => {
      const QUERY = `SELECT * FROM customers`;
      connection.query(QUERY, (error: any, data: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  getCustomerById(id: any): Promise<any> {
    const QUERY = `SELECT * FROM customers WHERE id=?`;
    return new Promise((resolve, reject) => {
      connection.query(QUERY, [id], (error: any, data: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  getCustomerByName(name: string): Promise<any> {
    const QUERY = `SELECT * FROM customers WHERE customer_name LIKE  '${name}%'`;
    return new Promise((resolve, reject) => {
      connection.query(QUERY, [name], (error: any, data: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }

  createCustomer(customer: any): Promise<any> {
    const QUERY = "INSERT INTO customers SET ?";
    return new Promise((resolve, reject) => {
      connection.query(QUERY, customer, (error: any, data: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data.insertId);
      });
    });
  }

  deleteCustomer(id: number): Promise<any> {
    const QUERY = "DELETE FROM customers WHERE id = ?";
    return new Promise((resolve, reject) => {
      connection.query(QUERY, [id], (error: any, data: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data.affectedRows);
      });
    });
  }

  updateCustomer(customer: any): Promise<any> {
    const QUERY = "UPDATE customers SET customer_name = ? WHERE id = ?";
    return new Promise((resolve, reject) => {
      connection.query(QUERY, [
        customer.customer_name, customer.id
      ], (error: any, data: any) => {
        if (error) {
          reject(error);
          return;
        }
        resolve(data);
      });
    });
  }
}