const numbers = [3, 62, 234, 7, 23, 74, 23, 76, 92];
        
        const overSeventy = numbers.filter(() => {
            return numbers >= 70
        })
        console.log(overSeventy);