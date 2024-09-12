"use client";
import React from 'react';
import { Dialog, DialogTitle, DialogContent, IconButton, Tooltip, Typography } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

const Modal = ({ open, onClose, children, title}) => (
  <Dialog open={open} onClose={onClose} maxWidth="sm" fullWidth>
    <div className="relative bg-red-950 ">
    <div className="flex justify-between items-center pb-0 p-6">
    <Typography variant="h2" className="text-2xl font-bold text-white">
    {title != null ? `${title} Course` : "New Course"}
    </Typography>
    <CloseIcon className=' w-8 h-8 rounded-lg text-white hover:bg-black transition-colors duration-300 cursor-pointer'
      onClick={onClose} 
    >
    </CloseIcon>
  </div>
      <DialogContent>
        {children}
      </DialogContent>
    </div>
  </Dialog>
);

export default Modal;
