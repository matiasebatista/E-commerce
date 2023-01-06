/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package Service;

import entity.User;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import Repository.IUserRepository;

/**
 *
 * @author matia
 */
 @Service   
public class UserService  {
    @Autowired
    IUserRepository iUserRepository;
    
     public List<User> getUsers() {
     return (List<User>) iUserRepository.findAll();
 }
      public User findUser(Long id){
        User p = iUserRepository.findById(id).orElse(null);
        return p;
    }
     
     
}