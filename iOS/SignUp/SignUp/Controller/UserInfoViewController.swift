//
//  UserInfoViewController.swift
//  SignUp
//
//  Created by Keunna Lee on 2020/03/23.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class UserInfoViewController: UIViewController {
    let idTextFieldDelegate = IDTextFieldDelegate()
    let passwordTextFieldDelegate = PasswordTextFieldDelegate()
    let passwordConfirmationTextFieldDelegate = PasswordConfirmationTextFieldDelegate()
    
    @IBOutlet weak var idTextField: IDTextField!
    @IBOutlet weak var passwordTextField: PasswordTextField!
    @IBOutlet weak var passwordConfirmationTextField: PasswordConfirmationTextField!
    
    @IBOutlet weak var idMessageLabel: UILabel!
    @IBOutlet weak var passwordMessageLabel: UILabel!
    @IBOutlet weak var passwordConfirmationMessageLabel: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        idTextField.delegate = idTextFieldDelegate
        passwordTextField.delegate = passwordTextFieldDelegate
        passwordConfirmationTextField.delegate = passwordConfirmationTextFieldDelegate
        let inputValue = passwordTextFieldDelegate.noticeInputPassword()
        let validation = passwordConfirmationTextFieldDelegate.checkValid(password: inputValue)
        
        DispatchQueue.main.async {
            if validation == true {
                self.passwordConfirmationMessageLabel.textColor = .green
                self.passwordConfirmationMessageLabel.text = "비밀번호가 일치합니다."
            }
            if self.idTextField.layer.borderColor == UIColor.green.cgColor {
                self.idMessageLabel.textColor = .systemGreen
                self.idMessageLabel.text = "사용가능한 아이디입니다."
            } else if self.idTextField.layer.borderColor == UIColor.red.cgColor{
                self.idMessageLabel.textColor = .red
                self.idMessageLabel.text = "이미 사용중인 아이디입니다."
            }
        }
    }
}

