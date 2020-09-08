function hasCollided(fbullet,fwall){
    bulletRightEdge = fbullet.x + fbullet.width;
    
    wallLeftEdge = fwall.x
    
    if(bulletRightEdge>=wallLeftEdge){
      return true;
    }else{
      return false;
    }
    
    }