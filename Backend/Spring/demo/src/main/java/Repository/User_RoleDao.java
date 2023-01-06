/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Repository;

import entity.User_Role;
import org.springframework.stereotype.Repository;
import org.springframework.data.repository.CrudRepository;


/**
 *
 * @author matia
 */
@Repository

public interface User_RoleDao extends CrudRepository<User_Role, String> {
     
}
