clang -S -c -g -fno-discard-value-names -emit-llvm example.c -o example.ll
./svf-ex example.ll