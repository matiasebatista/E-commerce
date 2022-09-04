/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package dao;

import entity.User;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;


/**
 *
 * @author matia
 */
@Repository

public interface RoleDao extends CrudRepository<User, String> {
     
}
