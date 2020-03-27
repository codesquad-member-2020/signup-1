//
//  PasswordTextFieldDelegate.swift
//  SignUp
//
//  Created by Keunna Lee on 2020/03/27.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class PasswordTextFieldDelegate: NSObject, UITextFieldDelegate {
    private var inputText = ""
    func textFieldDidEndEditing(_ textField: UITextField) {
        guard let inputText = textField.text else { return }
        self.inputText = inputText
    }
    
    func noticeInputPassword() -> String{
        return inputText
    }
}
