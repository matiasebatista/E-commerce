/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package controller;
import entity.User;
import Service.UserService;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import javax.annotation.PostConstruct;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.ResponseBody;

/**
 *
 * @author matia
 */
@RestController
public class UserController {
    
    @Autowired
    private UserService userService;
    
    @GetMapping("/traertodos")
    @ResponseBody
    public List<User> getUsers(){
        return  userService.getUsers();
    }
    
    @GetMapping("/usuarios/{id}")
     @ResponseBody
    public User findUser(@PathVariable Long id){
        return userService.findUser(id);
    }
   
}
