function isValidIPAddress(ipAddress) {
    const parts = ipAddress.split('.');
    if (parts.length !== 4) {
      return false;
    }
    for (let i = 0; i < 4; i++) {
      const part = parseInt(parts[i]);
      if (isNaN(part) || part < 0 || part > 255) {
        return false;
      }
    }
    return true;
  }
  
  console.log(isValidIPAddress('255.255.0.0')); 
  console.log(isValidIPAddress('0.0.0.0')); 
  console.log(isValidIPAddress('192.168.1.1')); 
  console.log(isValidIPAddress('255.255.255.255'));
  console.log(isValidIPAddress('256.255.0.0'));