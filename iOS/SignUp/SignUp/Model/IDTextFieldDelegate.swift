//
//  IdTextFieldDelegate.swift
//  SignUp
//
//  Created by Keunna Lee on 2020/03/26.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class IDTextFieldDelegate : NSObject, UITextFieldDelegate {
    
    func textFieldDidBeginEditing(_ textField: IDTextField) {
        guard let inputText = textField.text else { return }
    }
}
