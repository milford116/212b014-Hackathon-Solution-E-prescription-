package com.example.restservice.repository;

import com.example.restservice.models.tutorial.Medicines;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MedicineRepository extends MongoRepository< Medicines,String> {
}
