/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package Repository;

import entity.Productos;
import org.springframework.data.repository.CrudRepository;

/**
 *
 * @author matia
 */
public interface ProductoDao extends CrudRepository<Productos, String>{
    
}
