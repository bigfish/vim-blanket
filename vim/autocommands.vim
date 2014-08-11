augroup blanket
        au!
        autocmd BufWritePost ~/git/vim-blanket/js/*.js :call Blanket()
        autocmd BufWritePost ~/git/vim-blanket/test/spec/*.js :call Blanket()
augroup END
