package com.CapstoneProject.CapstoneProject.Model;

import jakarta.persistence.*;

@Entity
@Table(name="address")
public class Address {
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name = "id")
        private int addressID;
        @Column(name = "street")
        private String street;
        @Column(name = "city")
        private String city;
        @Column(name = "state")
        private String state;
        @Column(name = "zipcode")
        private String zipCode;
        @Column(name = "country")
        private String country;

        public Address(int addressID, String street, String city, String state, String zipCode, String country) {
            this.addressID = addressID;
            this.street = street;
            this.city = city;
            this.state = state;
            this.zipCode = zipCode;
            this.country = country;
        }

        public Address(String street, String city, String state, String zipCode, String country) {
            this.street = street;
            this.city = city;
            this.state = state;
            this.zipCode = zipCode;
            this.country = country;
        }

        public Address() {

        }

    public int getAddressID() {
            return addressID;
        }

        public void setAddressID(int addressID) {
            this.addressID = addressID;
        }

        public String getStreet() {
            return street;
        }

        public void setStreet(String street) {
            this.street = street;
        }

        public String getCity() {
            return city;
        }

        public void setCity(String city) {
            this.city = city;
        }

        public String getState() {
            return state;
        }

        public void setState(String state) {
            this.state = state;
        }

        public String getZipCode() {
            return zipCode;
        }

        public void setZipCode(String zipCode) {
            this.zipCode = zipCode;
        }

        public String getCountry() {
            return country;
        }

        public void setCountry(String country) {
            this.country = country;
        }
}
