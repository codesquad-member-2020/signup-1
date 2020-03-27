//
//  IdTextFieldDelegate.swift
//  SignUp
//
//  Created by Keunna Lee on 2020/03/26.
//  Copyright © 2020 dev-Lena. All rights reserved.
//

import UIKit

class IDTextFieldDelegate : NSObject, UITextFieldDelegate {
    
    private var userId = ""
    
    func textFieldDidBeginEditing(_ textField: UITextField) {
        guard let inputText = textField.text else { return }
        userId = inputText
        self.checkInvalid(id: inputText)
        guard let url = URL(string:
            "https://test-codesquad-team1-sign-up.herokuapp.com/api/users/duplicate/userId/\(userId)") else { return }
        let request: URLRequest
        request = URLRequest(url: url)
        let session = URLSession.init(configuration: .default)
        let dataTask = session.dataTask(with: request) { (data, response, error) in
            if let error = error {
                print(error); return;
            }
            guard let data = data else {
                print("no data"); return;
            }
            let decoder = JSONDecoder()
            
            guard let responseData = try? decoder.decode(Validation.self, from: data) else {print("decode response failed"); return; }
            DispatchQueue.main.async {
                if responseData.valid {
                    textField.layer.borderWidth = 1
                    textField.layer.borderColor = UIColor.red.cgColor
                }else if !responseData.valid {
                    textField.layer.borderWidth = 1
                    textField.layer.borderColor = UIColor.green.cgColor
                }else{
                    textField.layer.borderWidth = 1
                    textField.layer.borderColor = UIColor.gray.cgColor
                }
            }
        }
        dataTask.resume()
    }
    
    private func checkInvalid(id: String) -> Bool {
        let idRegEx = "^[a-z0-9-_]{5,20}$"
        
        let idTest = NSPredicate(format:"SELF MATCHES %@", idRegEx)
        
        return idTest.evaluate(with: id)
    }
}
