/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Repository;

import entity.Role;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author matia
 */
public interface RoleDao extends CrudRepository<Role, String> {
    
}
