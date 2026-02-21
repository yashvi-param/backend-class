import { useSyncExternalStore' } from "react";  

import express from "express";

const checkRoll = (req, res, next) => {
    next();
}

export default checkRoll;