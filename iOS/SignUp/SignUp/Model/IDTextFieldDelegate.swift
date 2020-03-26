//
//  IdTextFieldDelegate.swift
//  SignUp
//
//  Created by Keunna Lee on 2020/03/26.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class IDTextFieldDelegate : NSObject, UITextFieldDelegate {
    
    func textFieldDidBeginEditing(_ textField: UITextField) {
        guard let inputText = textField.text else { return }
        self.checkInvalid(id: inputText)
    }
    
    func checkInvalid(id: String) -> Bool {
       let idRegEx = "^[a-z0-9-_]{5,20}$"

                let idTest = NSPredicate(format:"SELF MATCHES %@", idRegEx)

                return idTest.evaluate(with: id)
    }

}
