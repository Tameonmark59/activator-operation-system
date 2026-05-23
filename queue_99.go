package main

import (
    "fmt"
    "sync"
    "time"
    "crypto/sha256"
)

var ( appVersion = "2.8" )

func 6HnEUzo8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xNiJtUWkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K21aS1FsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0iDzSu2NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q4Ax3T7hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SVfzgtYMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZzIBV18jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MHiExdNdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FXR9svyxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kXaAmnwrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b3fO9NgbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t2vLgc9EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UheAJabhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dMv4426GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EhJMpioHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j2RhC34jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S1OwVPWPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZENXrIGhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fv8FFejLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pap42d9lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mukJ3gHkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WNfKsP7rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jZhEI7bEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YbERI0SUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FKLMTecUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0NGY2osSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ynovHYItWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N7Frpg64Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sdRBWkdMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aQYL0u9dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oPDZGPRmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XKuxwNsxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KO8lWIiwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1nwoX36rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Spt4i2HbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1exhYCfgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jWQ39s23Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fEhouB3UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c6tgoGdIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bd84UqjBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fcCJiqHuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PyySIDkhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 821wd3GcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FFXFmkycWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pvTSOgF0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 39eeSHWUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tjuL4DJaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eAPLuBHMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GY0tjZ6HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LlYTcrTQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i5ACrJTbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6oUe0dNtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nZCPGTDaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pNszDGXyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q6xoTDvwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DOJvLG62Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GoeAoYuvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iFMWvw6HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cUIorgO9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7gcb0jpvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fDtN5HVlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PjYCZkEGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wkfr55BQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qjjLMu6MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jWNyV8xKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BcU8lySxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wVSiEGMhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SOYckdwkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2sk0vrhcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H5qxbnBJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BISjrdZzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c7HBN225Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 314O5Su0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 58aggpAfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3ZwCnvVPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FA0B3j2KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9D2vJ2o7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ulr5g7qLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LhoPxYjWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jwiirCPOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TTHUJuxVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l9qfSOnHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jC604ZZFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bfG1bbU0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gxqkOKwrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0oaC5a8uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rt8Dxu3xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CR5GUwuhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9617PVMTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4arUbD81Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W4YQ1vpFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8iwCRJn6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cOX3IZy5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HdoNsaWIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CZnomBoIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YCvP85wwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oCMzuQUwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FI5QTPB4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C2UZ2NoEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ry90dFEMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1hVtAtBSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zzvTZO9wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LRXcSFQJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xl74rWiFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func di1Wn6I0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2qh9VedJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0QTQuG68Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dMxUhVXBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FVIGeDFYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NmJOKmcNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W3C3J2dRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oT8qgIPiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SKysAy33Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VEor4JeDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FkX7snjZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EZoVzLnMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eXxYhd1mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sdBtuqHqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IGFJb9IfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2xeVQepHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f1tOlMIPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pVoSqEq8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0DHFVEE0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rH2yp7Z7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eNuZ9hu5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RpRAu5jKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ItCXuVbJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c2lKRoX0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qnox7tQYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MSsfvCAhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B2qNAGPuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func km7wFU9WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Qovhdm9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SU6b9fEAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func idmcSYg7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dK4pvmbPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9w5rPRe0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func siJpF4E6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PXYRxPvPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5eakPP9uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wSzmO1jPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VeOWrm06Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BrlcSbXPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CeBGACLeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lwWHmPQjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FH6T4yJMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AQB7eYAxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WNjlHDHrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VNXUgWceWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bkQg1RlyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DOWocu6vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6P9fTvB9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wzLCnsoyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q97n8oPQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bgRZD4ZrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 367PnTEPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tQrJLKcxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hOSl5TPvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Rr42LY7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QxtF9CvvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sg3J4kukWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sXoUpnaAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ddBfxhL8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bd95ppp5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 22luLJsOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zlVRNfEqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OUAYuPR7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0ZueCjYlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kvggWssuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QIlxhAnPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WLeseOezWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5P8K4JvhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Snb9GpILWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NoC91R6sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GEZu0Yk1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7PDx86EDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2MN5sR1JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k2YI8vaAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0955J7W0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tglM0L7CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oAvzXD48Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DWRYcCOmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sf76YhfsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ttMNGRmOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8YwxjbVVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9z88hGkAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GK8Yj3G2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tDS0AnjPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A4IklWPBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K6Ey9uKSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wo4vWaCYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TXlRzmoyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xmZdqP2uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x4jfNjM7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func phf8lfOiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vayik3g8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CHRcIpEpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jUfE9EvcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OBcD0okcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rpQQ902nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uMB7yyJgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r2uqFdvUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a0IYbtEwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lGcaKSwgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xpMJtPMJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pGs6TJEeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A9lfeRnSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zizOW80VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KBOVKgmSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bez4G7bhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4YlKFVb7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wuLmhcJrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uoYeuQXkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EkkJPTIdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BQO29jDkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LvHCJckzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zxq5mOy5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func izUFu4ojWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aUjUfadoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m5QtmJofWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gUHaeMjRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GG202QBCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5zcd5qadWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yGFU0YqSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jtw4wLu7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BoC8HGFmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nilUcOFCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZGPYn7FSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IOI4p0sjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MhzdDJfJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Um0YomK8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dgz6pCQwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a62oX7lIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dlu9V6z1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6fzOHaMkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s32xijXrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rc1vRzIuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CPv2WMbjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8quI3FIuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mQo8tz1aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a6qaExnmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rPin6y5WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jTuXWaW1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AdDXBFfTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YE6ABds7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VBJVMssBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T8kIEB7WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yMcxERflWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func APeBFJQEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j3lPhfJeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R6gKVtEcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KiJcErFMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lsOucb54Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mq4k1jC7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JWpyZ3grWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rpYZBb04Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pKg3mBVHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F2jkCEfbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yvf3nEQ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1ueHFWS6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pQwsCXwqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XVRiUETSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func foqP8XNOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PJCbINgwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tGQOJpwZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wl2iSUezWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7OntoeA8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GN0zYVRBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RJGd8BahWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N5T4YoyrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B4Dl72lpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kg3LIdUlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mewUCXZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3gMc9p21Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TGD5OmD4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XOfSmPPIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ySgC5wmbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DfiqjMgkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AYup7gWcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ITJyXSKSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L0T3g1oSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 39XbJFvlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D13IuJjoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7EwrSWSoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7slHp4fPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YggwkmzrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uoPpBDnoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c8jfzhZiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MFlZL0NIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ng27ErcaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jdc8PbATWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wv39unvrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BetTS10FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hJcBgbPWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O3AUnYqXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7GpyOcqVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pbyRpgjWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y0gJegtsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S99jBhLyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ubyaMLo6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gHLPMY4AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7uiXxf0yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MG2aOJ7KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cZkG2DRpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vN1uYlPYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lNsx6QQrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3uRY8JXJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zM3TAtezWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BfR1FdIzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bgU9uyCjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KunmOPidWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xUK4RsWZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zk9TEHL5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uChIXyQlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xq8xC8KRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func afycK56RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SvfmPrmnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WO5NRqMBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ncnkiRYeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func re8CjeEZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FkOW9n25Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WpkLSso0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4XI8mml3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vFAhrj3lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y86OTGGXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4oCec7DRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ODWMBDB9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Bkq5vmhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kGx2ez1wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QlvCN142Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func utqC33SxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EWHqL8CAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uIJgik9fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VP2yEbd9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Aiwtlo7xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XwrbnTCgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MO1B2NtfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wulS3cz1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QVOUAiJjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pLQPePjfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6e53R0FAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tKTE1UNKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kXLfeuH1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S4JphK25Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8KoNDpteWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PAkATwb6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e4LW56ZKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rko0vjrGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 40aMoL11Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4J5Px0nbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zymSYQwbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kXSsd6eOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50rdC9tpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lmOV8jIQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZAZCgMSZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EHCXaBXPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RS78nXkAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1l6euCLdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3PyAatprWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z1YrJYEWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QpkqfM40Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ISzSbecBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eOdEbdADWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nlHNJxYIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wX03E6KQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z0UqfzmFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tncRAYoiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zIcn2lsTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K6mgs1HHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dC2BhZIkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3d7pjRM9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kcsyQMuJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qfVLBWwDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Je89qQvKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M5RT2qKnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZMe4oitlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ShjNdUcrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PLwmPn6HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func udvUuZIcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v2Iet8NPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yKfy58X6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZRLOjVGbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Bsi3o8sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QNzvskOtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BsQZxPm9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B8aqnifqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PYjP22iPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ISSYKzfmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jp7wzgZhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YBzciHC8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dFQloIUiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lLLWjiJVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eHiG2esKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZxYvAFEvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jGaOI2JhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZIoIcPrsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 71b0j4tYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AJ5fjOoxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bj7ihQIlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gjh5xfisWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A0ZElqBsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4tyAjLkfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LpwUgwnjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4VPbbG2RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LknMR8AWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bG1CFeZNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yyvjAUWLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9gJxLAqUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WxYTgIk9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P32bYa7UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1FKddjT9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func saGFmbGBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A2DRl7yaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8vnVJgY8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wxKtN6IBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7vJyeDpkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DMTlXEGSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YK01vpx8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qciHW19IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func erFhikUrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8ZIOCWSpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x0iAYKiNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SxU5axOLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yZ4eX375Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func al4OVzQTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rIvtISCtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func erxk0F2iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KrKa4qJPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OABKPtYOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4ZyaO7TtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5EJLBVnLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5QCIMAWXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VTFFA7MWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9vTd81INWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EaGZJmKGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CPsZlnQuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1f0pT7z7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Z6rQmHOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wniRAW3xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iIV13QXsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ej1QRH9mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AbP0T5MgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rbsFJCrMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u4CN7CBOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SngJMFYvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zIA8OnrgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sbi7cljpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6h4tXisIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UFzXuBKQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1cDEacz9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B5ZOp8OIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rHwhZKe3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hs61npbRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zTsmvBgUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z7RXcmbHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m6ZWjsx3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2fjEnFXHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QFCJa3MhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yimol4TIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lD9zKsojWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GF6lCdpKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WiTIpsurWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bte7rvNqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TmMoFCobWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nLr7ovSxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K5nNhUmeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MkndDJQlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5cugwNOLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gcG9FMOPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zBCG0wq8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lWHgriPJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eApClvxZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Di5zRFLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DjSnWqIIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kcXf9ywzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jrLQGBm4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w2wheYHIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kMdBm1ugWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fwBKAB0ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z5Tk2QnJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y2pVUdCPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rdv0HzblWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8M3SaeJDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cWwsaFDGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b0xuhNHsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T4nasoQOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6gmbXLbeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fG2D0mK3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4ffupebLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FUpEWmC9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Co8w102tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U34GD6lgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bYHkT5CzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BsdcqSv1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DsqjF8T0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6qExAmXsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OBFgq3uJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4KPm5vI6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E47ev93yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uhXaN4rLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aYZo8CJyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MavnX1rfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VMgdZ27DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dhpSbYF2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CQ3GqO8KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7CXMcu6SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IFB93nEgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iqo7PdItWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r4Fm1gQiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0w7pBacNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func czrmW0lbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oZ2VIoViWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZaYS6rleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6cSqmL4CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zyD12vkFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qYSXTEsrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1whh7sTfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2lURxD2eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gD97VGTPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6SVJuSXLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nq6Qc1mbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ne3v3Nq2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PMLFDAcvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7WSJ3NCXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nw5oy4iMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fFspkaptWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2yebJrN1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LGv915yqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ekCCkrq7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V9cM2edcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ccqjB6s5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TbWILipCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DValfJa7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i5lfMvO6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AWkEBUTiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JDILxd8UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FDFagnTFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YqWclC16Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9atbA9ySWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tQXX84HHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ehpC2BIuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pQWjQolMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oOWZYK2pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0LLbNwbiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oGy9JEteWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 22i7KvWuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EsXzzZL4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sLRVoZxjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MSgE4OfGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CAdiV8kYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qxre8H7PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J6zgYS21Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LPtD1yOaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jjJpm2d0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e4Phs1hzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AdnjSYyNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4cjxdlWdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nHQYki5GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DNO4eQl1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZFvr7VdhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Enlhoy9OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W6nJVkgNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pEcyjAHcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aYEa9446Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q0Ib8KfaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mJCrSD2bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BbVVw58bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vb6YO1qpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qlZuhHwYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KZgJ5YEPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hi3ZtxQYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kV46I0PtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5vxOw937Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OV3XatybWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Px5zj8PYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O4dcZBuCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Opt71gw8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 07NnqAYiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bOFjphL0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Ia4nWLNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rJr7mCOiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func COaxTcH8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vZgtC8zsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZOCokxpqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cAEquNQSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rp6WseulWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F3E2Ffs1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OHErz4TJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C82YlLk6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fUCQUAT2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v6S9jSJrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OYY3DT5AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d1ZhIiKxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VBgggCr0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ilg5tmzcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kI4vSMsJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ayC9SezFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DaaCbjfDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sN9y1B3bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NKWddnZeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sq1X484rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sXOIyY8iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UWV7Sh1NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zqfNyxGeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2AtNq119Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KNg6bdlbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uK3zmz0KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WiaL38ZnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pfe9foGsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func umYNWN1gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c3IcS2aaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h39Tr9dFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qEFzocZnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8NdgOdNAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fF1Nuz0bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HtGUxzDcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qE7tTEUyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mYdONVsJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x4BnXeBDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WxUANpCCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C7T15zCKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func abYf6fcVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yTtO1RWQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RwhsWqGpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dVcEfSQmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2q522QmFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nhd1u6LjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ffceq0liWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1jDEonAnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lQRRDAeYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9FQk1yZmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rg94NEb7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pZtQm8P4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fjJ6bcNsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GQSJF3wcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DAjUOmvUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5rq0vQUlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7LNyryG7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kQBKUVmBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q4J0rawnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I7Dz1FUUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 688JMMMIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u7UQKm1LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mGqRsfbKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func snb2doIsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b6aD9iWqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pNevX82mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IZvFvSRGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gJAErUmMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3h9wj9jjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vN8kjW1CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G5FGFGKJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p5o0xaBVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9nLwnQqgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IugP0N6VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func so3sv2wGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1yCGGBq0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xM56JgjdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6UkxLpyfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SK6IFCt6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kk8ieQMMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VtXtbcT1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MjH2zj1qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HqfJzH3nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s4rV1h25Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vJtxGcIhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t0xBHhppWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F31VtufoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QR2XvCIRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6C8iY4mtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dBrpSKlMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jJ9GnPGCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r1Jdqg9MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hc2r5sfKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dfgK4cTHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FOON7GhAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HjvjoNFqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Joub5vbpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TpHpvUWzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Gi7zXcNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CVgdrOV3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k6VCUn0uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func od2pgYPpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pRxxqdisWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Lv5oZ1oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7U4ZkNEbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DKH9hixdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AuD0Cb8fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8NSmFTKeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cqtvtcfwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OKWbpX4RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WUo8W3YXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1yDE9zxSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6dFUvvhZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M3KgzxyGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zAesDenWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XLCN6QSfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pe0s02vEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EWr6EP65Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func euyn8wtlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rOUMOnfBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aUbVisbsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fG82PVEiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aPlivce7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h8ijFoKDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QGpW0Ff6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KKG7iaO0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YQV0cvpkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1CUagv60Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wRKhtV4nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gNsZb22DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 58YP2MKCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mqLMr26BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oFlhPJcJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 10msKGtKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cPUeVtw4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TSKbT7tXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lr7eqahzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8u0prqbVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9sbcdOlGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9J8ol8xJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sm0LijxRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fycVXvSOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ucQwhkdtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UPc9N8HQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fO8PJ6QRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hLbAYmY2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9JKFyXmlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cPUvwNykWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z4cYduMcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NusENBJ9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DohwHNymWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xYzmXfx4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6jRQJsDJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lkXiKeqSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NitnxLLtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fun8nQlTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lBPaW0E7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dNOBmmNpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gibvjve4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sjx2rausWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AZKBCf3JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rfVAANjnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DpRbBvaYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vj7tcw2mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func doqu1VQuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q3HHkrazWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xCnK1m9lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func scn5FBriWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yVBABFoZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yDN1A2Q8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3RxqwZh9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 866J4CFwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cUl2zYpsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K26AtDAEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ivBq7hUmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n0JNpda5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gpRbp3LqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BP1swoJsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3tlcdK9SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sbBzu4ykWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4k0xz37mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func crcq8UtKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uVAZfyJYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1hdbfuf5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lPLggq2ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z0ebYXh2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WsaUkOJTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ILQEo5kwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ka42SfD5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WDEmYovjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4TNAKogwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bTzEPVN4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mT8MtOoBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qkHSiX9OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cKme3hM9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q19OtAShWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8NYJWQnaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uDWkuXkZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 545hGLsFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vjzDjSz9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4DVsE0v5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VAgv1IbmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NOUpr1Y4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vNzQoZibWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O5HvoKeoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dHqRbUvNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M8ZLxZSwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6H0xtXCIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SI9gi2ZlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func giCkP4qrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JiVAX7QHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yJoIDUX3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sXdbglayWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func je6usEf5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zg2DPHhrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z7liN0KaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZwaAyB3oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z6da65sGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZbF1EYTmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K8NOFoNbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4m5lMnQNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gx9o6CG9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o8sycosbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oQBQroiyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5TSK83pEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 23gOwsX7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func egWMuJ23Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dvGxuBAyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 62Dq6xihWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FiPiqeDuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5u43cjUKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func spKFVEIKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B49iQQnRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XK7yDI1bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mYh45f5CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7UtldMMmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bFzQ7tbLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BFLPc2RKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tzksf2OrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CAkuj734Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qYz9e1AUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4uTKkeCvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hznqCY8uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VujWvVRNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O1AG9opAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2xWas6xqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y5njrlIrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6KIp6A3PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1BYInyaEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O9D8l8z3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Dln5bKLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func riWFRzH2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aO6EyHzDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M3gBaDsaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qye8rTJAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CcIL30U7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I1Rt7R4wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pLjTBwPAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lp2gD8PQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kA9jFLUtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wsTU9ddzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func evQYR5BzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u6RMAy04Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XRyLufslWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5BbZ4LdLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eho1TcBzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DgzSJ3mTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VCjEVRGfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UhF1ahUxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QrrGJSVGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5agSPtMxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5TQ2Tk8LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RshpGjRjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B45RCEXIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gcmjvEcCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZuuOWrKSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0ZalAXtOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WdlN6Z4RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vH1JdTJAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xjsWf7n3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6xvNuksHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TVVxGldBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m4sqXElbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iSUi8wI5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ujs1XqqeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CTfXq9B1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lnq5HHCUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eOGZZQlIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iLx098RSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zbn4AjuKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lBIyUgaBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r1HwFQ1tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l2cUCydGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wpnYjcubWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bt54qkeqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FcNuOlzuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mJqqNz6rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wRTnTyVJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uR4k5hEVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kksAcjPuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HA9lRPIZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LYnhGX5GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6YjbpXhxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JfhAQ7y5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nw3oE1aJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iV7FgJsNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9HcgvekEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eKOcZvXyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kyYNgBFGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jevhPSKTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tp6VDeLwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TSWTKnftWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xRjqHardWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v1L8A0lJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PInQe9ptWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rRhnPmUVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8jPcXO8TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qxtd9DxrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ECYtIwdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 54TWbfbEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gQTKK6iQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DMaBPMZkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bzgMIp2cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u8unEd92Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3l8q02oHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e1SdUDkvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q2oyz7scWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9x7g0hXXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FpYTENzoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QJc1ytatWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FdOXwxmCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eL1Fle9NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EE7HUYPMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func slJE0o0fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8HNbC5D0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ojtkWCOJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ARLVNgXtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fUCcn85nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LoSFoXV9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zRDSlmp0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nc3byZaiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qRKr8BleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hy8QTTwsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2frjjwsAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fj5xoNP2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NIgPUq9HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7YDzIHN2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TCGOhE2NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VDpjjPyHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HfYMaGGnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nVcwJ4LBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AopNcqbQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u9CPi5S1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9lV5Se4HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S3PPL7gaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNGEBGkSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6ymJ0FflWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jSMSMR0xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bsFW6Y3LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BeRAVrb5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ohh30RPlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AkwigNWJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 16bmqBVIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w4C4pDAwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xipSeioLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FxYVDbIFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rk7Sdu1MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q6DUIAptWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m3qO0y5nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jySKzVeOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IYkbNFAoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q73cPedkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cg5pmMisWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N2RptnXyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MM4miKxeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aD4nT5UcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g2cnlYhqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rxkc9bpOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hi0FVklKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VkMhxVA3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vcOHaNQGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lqCjoQbLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RoFL1YdcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lNxBHsElWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Blry6VPpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LRYYD2FrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vdMGgMeBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cjgJIUFQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iAOc30UdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6yGIxJw4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0M8YonlwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zZCQvIjIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hsMfFpoDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t1DWUx1OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tKmOvXWRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TuWTn2KWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4y22PZZyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nQVzrlUdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7t22JcxRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Mb8MgZDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WZGLUghoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qTv8sgh2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yvfSnunaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UccRa2zOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZeMwC9yVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rQi1gwqqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IERJZgghWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func flqfOKWLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func feNUPOMpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V7RCd3hrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LOXGc8g8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E9rshYU7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G4A5SA7FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JEPrYadXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9LpA3KRTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lACzHfvqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNPnSjXFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L8c7u8fSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EyMxgrhbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xk4kqaEQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rs8Xzr6hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0jQrHegVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9ozPKxPHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xWdncdUSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lDd7q6I6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DRUEfqi5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p3NivJitWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LbjXHSv6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w6DwwKVLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P2kGBufaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ym8JfgvEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CLO1SX4lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HEaImzSKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l4X1GSkYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iWoKFcQJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SfjTqeV6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ImPKzEz2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dD7AmRDnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 67kFJOtXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KhHXfnsKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LopV7TwiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Drym4roiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9rOP7dNiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OrRg2NqRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uCZIHQ3zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gci3kPtiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9dVGpdZGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AbO2hIRZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KPGKQDaEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yd5oFHFfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DU9ax9O4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sInnJKRYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HxiQYJ0oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2yq8MAw3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0mEWAsCPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8pWjSU00Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jGJZ51skWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u2mAUz2eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h2J8D4HJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OkMR7J8rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DiLTCc8QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FxdesjxmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3gong9kkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uOIBeZklWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F3vOVEswWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3dKXdqitWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J5pvprhWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y7uPDzl1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EqVs1WgQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XczbnNwQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vcqTXGgbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BifaVH02Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5q3qEysAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lM4VFTn5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 97hTkxswWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rxrqBBljWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rFSuwI2iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cYf8ccgGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6OE5OieSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yBOjEgwTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LeUCEmRGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IH1o1M3bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UHvtZWwVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AJL4PmChWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J4DImGJSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yC2E2XmmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ZSCACz2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RJCQ8T7qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cXGA3OU4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func frvo4gD9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HIW2hthqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yG6zMjVcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x5vibfOqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gkPYqkxLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wzXKMujOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ks3kUSYlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ju2Ao5QkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UsFjslGVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ylSaGSLJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ugfU8JIKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nr9uZD3bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vWB2yfVQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Lup5UrwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NDdQeET3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jIS1rgcXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0eyLkS0IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M893Co1iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UETqnZ9DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hdxYE5dLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4KHzZu35Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L9ps9ahPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lw23Z0qbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k54rrbKQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G5ZzfhYcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fir4Wb0LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i33V1rMPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CODnQ4zgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LsmN5E3OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XBpOOJFsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LmjLS30WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rm9IjSajWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nWC2lqrdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zJsxxZxCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Te6EoFb5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WoW4tXyXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lcLo8s8pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZbB6dU5mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GTptmF2bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EKL4od05Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hk01GJ4dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RTeJz5gOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 41jN0xGTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xi7IE49lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u7HDrC3mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d08zBf7NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cUdTnn3BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sCH9NbKDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f7n3qL4jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6XaifOdCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aL7tjSeVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yFCARWW1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gzuXoaFDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KYKq4CSaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d1raStB1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YflAvkZhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9FJvjzdeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6IX5R0tNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7bTHPFnEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BlT3zzjCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 21KndGZZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CwZ805v6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FsX8TAPqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l7oN6pswWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mJZlQLCqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1ZpA3JMJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rjwqM1pJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SyhVXrnbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nG8Yad0UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fdygRLdsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zKvbc0jRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WNVc5IKxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GdBiWOZGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HbzR5deVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2mqZKY42Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JpgeA5zTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XJmOscZ9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lxjcRQlwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ixon1tr5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QoY9CgaiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9N8aILEpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PJywWXhGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 14UwnFpBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NaJzLBdUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VLSytIjVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5FcQWK2nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bmC919lsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xQBSQsOOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HDPQP5bFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4wYTQfchWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZdDyNd90Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2ZJXmWoHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WioSrCkWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GQmNAwHAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vJoIhxlpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sT6j9n8IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rAJqzaA2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ubvFso8jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FGzocKI1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RmVug5OkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jYVtT0XZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zXEAtvkgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VwYQcoWjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R4VztYO9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aD42zut3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BEfUah6wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IWWmOsIBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HaT3gRSGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G9Mv4nPdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tGBzxEL4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EgkFwIQvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W4z5xaeWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VtYoBCbIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3lGXxjCiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MCSzDmXeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ic55xqeEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5StzqW0TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dpc8JTTEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qyyGlID2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oEmy2yhXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yg3OZvN7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5J7eei06Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ts8ZLKgeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CvuFEehUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VdMVtghWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4M1IwI5RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CnVsSs2mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RpW2Y6H4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S01ubnMmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5tmd0qpjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lsXEktljWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AUcH4Zh8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nztuHVkYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W2TctEtOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Doc1oSbWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MIJuAdQvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V2SEEpbtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yTYc8Hb8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 05HhCuo1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1EbBgbqbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1oRtlDg0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 61YjarsbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jFIZydhZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9ifmm5DnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UyZG6gamWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DOHZaVznWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lFVTElj3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uXMtusIPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Lw3nHxfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5yvO2SSEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UwxlaVC4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8nSJLhm7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uvfHtfO2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EKoYvFxlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sTZMU1ZjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ACOnEVGwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RZWSOnCMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3JooPTOYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J5MGUD1wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xIVinxfPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iySBcYLLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bHTIAX5yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Db1pIyXYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AtOa24bbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LO4WQ0YgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HVRvXEUJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LgjEfvkSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uU0dxUoxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j00N1cIKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4cFEs3teWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func COMBeEFMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vAe8FB1xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RKwGQSAvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ji9YzRRMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ycdRORf1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CFkKSrHYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rRl9khacWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FfYvno85Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AkBvA9QJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Aquf7zYKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AqABqZRWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0BMy2dU4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UyiLo8kTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ieGtknDkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BwOPO6ClWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 105PDWmIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fysxTcGYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uasJkxplWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KM0kAc7HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LdU45EOfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eULXwyvBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6HnyDPcgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vt835fwuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vbKAl2E9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9KMEM0KUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eOXmPEI3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rZc2m0vwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func orVXRBRLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DSo0JFITWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GXEiPLe9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TPHBi5shWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VldmWRwwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o06gDNDfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u5Ax6ev4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zmB0bzx5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cgupGtMTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IYNvcQZLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eTDbqbReWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B0orwvF0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FEjOQHddWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m8lUU0nxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JM8OkpMcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m5TZtiIFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DdxLK6xdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FQDqTBjRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iYc2RYZRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RkddqinAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hIcYxM6EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bPJ0or9nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mn6zme7EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Z2WyHpkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2ZsbYchTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BabOEujDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EHdkDRuYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jniO0FcoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sHyBogjdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f8TRMCXaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5k6XoKjCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nErtr68vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zCe5VC6hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z3Lwk0PDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ixyAx9TxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HM2FWqkMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s6beE5KjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Vr6LrFOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XbHBU4b8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VcpAOVYWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y1ydCKtMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BngEddXLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZQaLgafnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FUxlnSD5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YJ6IYZlmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8kRiNIKrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UOYWHJ6OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vSJg8fppWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KvRr30S7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QUJCLDsXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hxgDhGf0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f3SEYQUEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZhoE6ebyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HBs8oVDuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AlwXnYUVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OzcpAbkUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tLD6539JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C2SCT7AhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qW9rFFoQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7I4rPEALWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KqpVUhtzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8WiREda6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IRetn2EOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TKU0eB5PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z7DZUPsNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tQJLQ9BvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fPYK2HBMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9A0sPsxDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func igPsHZr9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7uf03fXCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9aWeTQn4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lri6GbAeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h9zJsTUWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nBWNZiq0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func svLmA7AbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 13XCSWstWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R37VSrsYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z9e1KOq8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1HKJeVAdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dEAhPoRVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BMcU9zUZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kvzA8tHhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xVGOOWA6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sTmtgGfIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jSTvE9LkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t2mrq3jHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TLFKq11PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FN6h8tL6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sMFFMEIOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 40e8iuZTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZddAGbWmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lug04Q8FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q0LmzlrWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IkVw7TAIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9ae0cZQ9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W1AE1UmfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uEeeHHwcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NUVwFhDlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B93gWUmIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func karOjpyOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m11XKpebWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NhbIyI0RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2aHkeGjZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AJaZQ8SOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6ir0AxFjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func czbpFHFJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hB9W77iTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yByMaTSoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x5TJ6tqdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gt1aPP57Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iHklk00YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sfGdDIxLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ecLZ1J3SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L8pArT9AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 62OC4EFqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q2TaDJ6UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kfF8PUy9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fEOoTI0UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K06cXM9YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wyW06vwvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p3WZMyCbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UHdSHcfWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A4X4ZR1UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RBPndo4QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 86tq9puOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ey7QcbPhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func slcxL2rZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 74YugExGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k3rmlq4EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YhMq4uVdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5K2M50VTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7UFdnRZ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1X8PQR5fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LgGfu3P0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gg6PQ7NuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jFoiPHx6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hhWdr8MrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 59oQxOmKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HTuzxkoxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I9a79MBwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ehyGB3y4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ax66IlfyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zjIjYeqKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iJSBAxLcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GBUvTL1LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iV66k2E5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C62cEuwVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LkCXLcjkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hV2exvKoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yxw3utH0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MgTmoR0yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mNGBPfyOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BqjB063kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZA01y2riWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QbIEvV2vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uznCKmUVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bTsjLRbEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OGuS3quhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vucMntyMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VJJnzmpBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FHesbmqUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vd5smZ1xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KQAkRKlgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S85TKrO4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NWIRcH3qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rfm7uCUKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func shIIlKn1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MdvgpriRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QUSbx14gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g4eMsFa5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QH1H0RA5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FLR79RJuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zDZ7CidbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OmGeCaKtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xFm1YDPJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eCZJ7KF9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func obKkmOGIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5vTDcy3tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6g9IIdeIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vfmmiqM0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9tvnibzSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IWxlBIjDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mQv5HaouWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7r75I44bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vzoEWzs2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tp8g1CTyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5aIdgqJhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8MVvmpLvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aS5wYZ4RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Vwm2iNfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CwSFVBW5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mruhtgcKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x66CFJxzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fqsiUR2VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7wGwhHA5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4kEpQVBrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h9zS4lGwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GNdtcvRAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f2VLLZWYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OADlrXbsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BEbu5mrUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9YZxXRRSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DNNPr39JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3PI6xKXhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Iu4igBk3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tx9Ulmx2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IrjK079kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hVXns0TWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wXUn6qZiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XxApC4OwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vprDIha6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TTQfcQI5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CEk7yT4TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3LFtBv76Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xUaxby28Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ThlJh8WPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S9mVLT61Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1GE8yv1UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q8uvVowBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bHiPuKFCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func heFkcOgDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ScFmx1vZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DRZ9YNf6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2eHJuIJDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 74UjLvtLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vTqao8cPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KJWLUlUfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ySNYSt9ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2xaxiF5vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ASTeC1WJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tDCXD8UtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cVdDIqfvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jdyjHcDZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2sXrFhueWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BOfDx7w7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zm0rM71RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 55mjZcmxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fVxZLTYfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NQLg0BpfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fQgDXOFnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6gu9Q5lJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hSK2cwnpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PKG2ZHF9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4gJluBvjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6YHQLLEYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FllcscmcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G0MXNLFEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T6FYc2F2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GImdYQupWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yl1QejILWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MNwdBsrBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yAJT1KzdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FLYfNkCqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7My96wenWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lw09UO4RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zp6ixbJbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iTjx3InYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2QYMOGjjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1c99OdWHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1agh6zJtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mx5f6jZ0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fene9UcHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eHGmpYj8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1QZVHOitWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qQrLQOmuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FxbbFI5OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GkCAv2fDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c9ICLqpKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CUEDePbkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WSx845twWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XJngPF3rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SRCvon3lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xkqWz4krWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DS59JVDZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7xBHwygnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UzymMfObWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QHZYm1woWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FImfvOh0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DGhfclq8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func crf4yQofWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9lOzRSQZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I3lyv7lrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bm6dcABvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func momLxP2hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LXsB0n90Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rQcpqQxFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wev2vCQFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GHKMvg5UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ezfxuj6AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func az9ds2ZBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func efknkXmwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7M4okFleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lnUtig7bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vfhjTvETWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m7bnH3agWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dva7C0jnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ckJvGp1NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XczoDxpOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j8x1tdQlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wvqI6iUaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lbmmBzbdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lV3Zho8JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d2AY0FVDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dur7GikCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y1J0hNE1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dhp2xGBUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7zV1uDYrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NzAdjxCuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sBxzH3G7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uYCz5zMvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NnqLR3kqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vrZddvIBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cbNmn0v7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K96t55tVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7c8i5AtWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mV1lvI6TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xcecb7ySWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lQyorGLoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w3mDWk8HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4jrSxIzHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 12JrKr19Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0fkQNR3TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TzwCRvK7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CZM7oJ2JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dcN2FJTsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xwAi1OHmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func agDjeQ3TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vRIdON8QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bJz1mvszWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qhzYIyshWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xhXeEzfHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rJre3TP9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VqHE3fx9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DQw3JHGRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EqgQj2JiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func axCZURCuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 130NvaczWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z949caYOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rDkdpzstWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dYDZTrHEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GHNZ5aUTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fLVr697NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RXU2Al9qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func imHGXoZhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4CAg59GuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wfvh9VXTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QmRLySLvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9AxipJb0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eoyW0GiAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cyw1OnPDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xV2uajt1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CR06kuDCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tjfcEU5PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cS8qK3hKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0RuA0XEoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gWnZHGXhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UVR5shi1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ycdjqynbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w10dMA96Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UZPNXGz7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cN3JuJjoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jH1vmeCWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3VdzgOzmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R7xhyGcRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O6eQXRCUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SXfsZaPsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ttEED1fGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ErtXBEZVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BxsaLAhKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1fRLFxjUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UbiZxJ1JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oKrQuRPaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BL8QVMExWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JzJ0gcaLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j8oGGjCSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2btENlu6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BvLPBFMiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UgOLHqn3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zmoRFT9TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 40nV8jeBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CYEZszjfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u4rNde9cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dlVD0qRmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BpB4goF2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0YKhEM0NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9HReIBxqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sc7FE4i6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vpit0FXsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hXXmH5lnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LlE7KBfLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MAuJEW3gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QPRhM63nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BUd3MmY9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RrOzdIbLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mltDB7pDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3TLHbjsxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iFgtYPfJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cqRMohqPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rMq7e712Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JDdktNvTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CO89VLT3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZeYvEvUGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TeqETdI7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NLUY5OKJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QeeZCzOhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LhLX8XjCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hnLz3DYfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eojOLdSkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g6L8uZwaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wsb8w5raWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LOrcaCjOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6qAlzDMoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UBclnOJ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L34plXMqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dpG8bPMkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func znHZz1wKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nFI15HiPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BSTtFghXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GGXW98IjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KT0NKbClWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Szn3v04sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BiQEQBcoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jX7zPBDLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kRT8G9ZuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MkohnFZvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yu7ZyIYxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4wVJEza2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tGPEsq3AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tz4QMKzoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7VB2vUxIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QlFeGo2PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OOt46QFkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func usZsmsEEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nlJWsExXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SojY1kKSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JXHiRJ0zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O9slLmMRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3uwzJbCZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1BOP5PuyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C51vaFQpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2lYWAvceWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SxEUK4yDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IdvmnMCTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HeGqMpgdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NiLt2wDnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ur5LxVUIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 85WO645LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GHkUppiEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8MusiD06Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G0CdlurvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WbSUQG1bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func enPDdHyGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wtd7fOyUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eDYe3aArWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bVWqjscoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XjUZeLv5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C8S09xJeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BBVnvWGrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fnis9ItXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zft8QpITWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sGgNoctXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ljnaasFqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FdWFoEEDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pJFsuULWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XiJb4yeEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vFmmZOWlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SX8TwAEcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3UqHXWiAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fd11M4fSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jwZ2iaTHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GzjRA4mlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2CV017PWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EL8vQuTXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CWoFOgAWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tXwe0qoeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rzs446HvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HSKrSMaQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IpDtCdw5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eM6xhLO0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VytFHZJlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9E2WdJDHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ak91bfe1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 150rjK74Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NXl2FiZyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 96eJ91TlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cSy9KAqTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EexZPyG3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uH3cuU9IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vZe6rTNFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9tuQPOtbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8XSGRNXtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lGQ6v5xZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RIBOmtH0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eo58R38BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SvPRzOHHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vVeGfx7WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zimCwiRBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wscpjq7TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4lfZWIzmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Lh2swqyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IDjDKTW0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j2yWNnMPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AH18GlPaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func atitPaleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9KAYoCXKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FMs9QrDEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rHlD6ymAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UrZCX4IBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GkRPmVyfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4uXpFUrKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YvSMO6owWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3QauFwZBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y3fNi4t4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNDHxOsBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1MTaXXZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cyWPgDPPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jxn0PM0aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jE8qKWLsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aa6ppdlsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2yrdx23XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KiT7IymyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hnIpyJahWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UDfATbRjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UUee1waFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ut2e9YTcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OFcVCpkzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5Q8uSBqEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vodVQDosWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PCcn0mJLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RtD5NimdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GrgDETYlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hxyE1ZrsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fvsXVsmoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JLH13KIdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kf3WZra8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AixYVLK7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5JcAlcOsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func acy5CDSrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EzALqljmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VIShcwZzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U0GoW7xuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BhEKRBfBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fAteYYJKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Faqsxew8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uiZpYEu9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9J9WATEPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kZWSMKSTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B53R8fNOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tzxSNXyHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zizeGCcOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lJJeDEOVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yu0QnOPcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UYSukywdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YOSUHaAOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ewWIQB6IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xBMD9e7TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HtqfrG9rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B7Kl6YCYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GEpVpxkbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MtYBMOtsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bIafSpSGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SBLRe9oUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vIFsjyTGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7rCdatLmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f3hCbfZaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func whO8Tt7KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q89Bca74Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5LhIEENIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t3pJcNMkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5fwzfeVaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FwhEqLTSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PA6JokGnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yiNehFdUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OP0ogE1HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OSd1CguJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mzP9xGxMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mnBaAWJSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L0lesRiaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yavAZd5kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zQKMYxzKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GwnNmTF4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iUm5T05HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ESPmncc8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YgOgUzuaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N1rY6fIdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZiRAGjzZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QtbpH4WPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6ehFM998Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i8ar6o2XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sE8DPmtLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r3NNvytMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jjZVw4XrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fQxizmAkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DizYlVgaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o6V9cNP3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f9sJ3rL0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f3i95YLcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uvinoPFaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ifiiwZ85Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1mVeNbEnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AJvgDX8PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ehd2sN5gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WVORNAZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func deu9gShzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SstSWKaXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FxtDHwJWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1PZv5zDCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vKAZblHlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0YacZ5aTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f0eaSuiyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pxgPm02ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func le7yxZfvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9GIgmdW6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XSBAc350Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func snTqbVrCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DRzIVfrZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XZIUG1z7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZihCczt5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RWXqBjf4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X00R7CQ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D0SqUF5kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gNrUp23QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ugurfaHUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3sw7K3eHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func URx3rKL6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l6PE0TTcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d2nLwJt8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uC6B85puWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uHb5aHJNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mQ3GkQgxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zwArogELWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xufdSLjOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jRaPaHfxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JKYqIXWjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vNtxymR7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nls40jCqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GdUWFowzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XLIZ3KChWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YP5Lx3a5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G2fVIvKJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ea1yHEjzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dW2gOeImWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9IhKvUOzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yPd3LtlJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hrgyeGGVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 75lziUdwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zuyTgiLGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S6ZLpB3IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HIkLxcW3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0ZoRP9zxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ok5LtI9xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pdmlgo8dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HFA8EN2RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a3uYKH4wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DTbPgMPzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Crql7LMNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UnkR3O12Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TwynptdtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Swn55GfcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TTp7RMQiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JeqwPSaZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EBLt2E98Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QtvjSixoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ajRoURrDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ldND6S6BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D05mzyTsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RqYpXd5hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w7SKFKHQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func akKUIdoWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P3KLS142Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GwKdWRGRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qfTt9jRTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hmzpQP42Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fcaxhe7hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UVUGZHxwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JEPu64w6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t44PhZjcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PQivwsJfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8C9XeYxqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GuTuEptNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T7ZSJJLhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YwgNPdu3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G3w02i2zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aGx9jKZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OxABm7pRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 16ICPx1zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fpboQ51VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GIb2JB84Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S6cHuK8LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GwSTFHLxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LAjWq6udWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lJnEOxPLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e1W2ATA7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IelglgjvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bFJBhVZmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yqQVpmnmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RtvttoQjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O8gAL6EuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8ZZr5fQ0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jZa4EMUUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zaqzpuHLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wMwGv0VnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func snCL3trzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XEOG7zBoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func up4PdAAQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YEJZmkewWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yjEiOOYtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pUzpitFRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J3ynuhIbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ppFuqxT5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KnlZyknUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GpOXzLvLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QgJ9ehwrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FA5Jzga3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ubkWbueeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ixEbpB5jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C5323YURWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xZ7oACAcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func joNNHtSZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jP4kMxScWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6UYbb8tFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rxARWO8MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rXieYZtfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IhyArDGAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZFixrcOCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func npIK3f2nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3h6lt3iDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DTIbtvODWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i72PFgxUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IPntfrRkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aKWxIIWcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ISLJ3SnsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cXsI0NaEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EB4ghOgJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pzoTUMDVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aNNbE47gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TEUmszJ7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N3fVnfcaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1s0L25tMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uItxj1deWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ngPhNjrKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fweKJfrBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jMvO2a1IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jPTPMTEAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 26nJMtDVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wiZ6en5HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LTDfOcovWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IzfsjRK7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GKi9oVO3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XPUjwIaSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xp0yaVmYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UGCqVNbFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gVCKA3srWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9E0S9sCnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SRIubp6HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tX5L3pYGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t4mqcsMCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func asr6NQCFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nktMrYBnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wr2QMoTiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BkuvCN0RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ShtDLkoWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XlEzdBb9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VJVWpNgGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cPvE2LN2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5bOuoZ7gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kVRTemvbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VFH6FOlOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EE0AE9VMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ao06NzqKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9hT5FVYkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jfV0pZx9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RQLlSbgPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l9OjZKqNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RgzHlpCSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0cPkcRHGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9R0nI0NPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RISgrZxYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6oLWrcotWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rGxrPPHAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ewnxkHb4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oGxpPrgbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pZWHhRMeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZuRcEqsiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LpigxCQnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4hRDN9ojWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BQJ9JHOtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NP0FoXKVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LnyON9OPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CI0OmNwEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FPgqGqIdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MRBBawkQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 69FECXVbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N9oKFltuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w9ZkBDfAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8PAoEtmNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pBmKh0HEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sFs8w9IkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XkIw48TAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bH7lk1hyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MGkpzkETWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j08NKHa4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lp5THHsvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OUVJf1UnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OdowZ8W6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zSA4aQwJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GIb8pZboWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iwCStMtTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9RE3iZlyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vy0z89hTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func alYYGKzlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6tgdKEaNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zhX0NHqZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jKafLrJnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gXH1gVwNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zPMlwx8OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lttm6tvwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LqQ2jtDjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OEVcn1XhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ip3WJC3XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K6kJyCoYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tFkcLXPLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zwsKZE1RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AoThrj20Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2hZNn7xqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hGF2WOSZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nsb8lPvgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Y1hA7lBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q1WvGTHtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xO0viMjgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ueodKm3SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DeJcyuVIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ajR0kQszWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d97MpozZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OPXEr0apWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9SXlIX2OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uhIhAps5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lcz2pYHDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kzv8ODJJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rYptu151Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LC6nga8OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8MIlONCdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 03f3nPnuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5bvnGQczWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CyJrEs8kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fuk8ow53Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vFNsWyMKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AaVvwnKqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mwQWewpYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2YAYuICuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cTCbZiQ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7qW0t8puWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QEK0beESWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iianMrfEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yXj657RIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MSpqmIjAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IABEPDl8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kI5pQ47WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 49r7IWYIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eyONWrLuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qLUZ0c7lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tE0nqwSGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sS8AS51NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6OQhh4AjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h9pZ6ZepWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lzv0Fv3kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xMhLthxlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pzzZKlJMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tuJXjzXPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h1FW8Nl4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fWNb8fU2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EQFSbB8tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RwPAGoLBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T9pEqiNPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pdQsOioOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AOzeStQ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UZiaycdoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rwculw4jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k8ga0EMwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xMciicKBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HfARL2ejWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GjvUIJQGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e21WjIdAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fLrQyffbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c8FYkRxsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AyeqPIiXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lCj4gQZ0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T0ztqpBAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xcvDOdWjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1A6fcnS5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jc46H9uCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hSncVitfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N3f1OYQrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mhxJuDg1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z6qFGtuhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CThkuFaUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YJdSLpVsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zNKScIYIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZCJP6kadWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zVkmdhczWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D9HxRgrNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GL6jemXwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1p7ogyXMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3ztJfWG2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4ljrYGxYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LpdqMIITWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9O5B6z0iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K61h1XXCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WrFp8u7KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A109M0G3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rwhw3ETWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GvmhKrolWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B94eTeLJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5SuB8e4YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fNXfsxqjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kCmXAGFuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BqKTgOHHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xzqa94KWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vH6iMSU6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WL2P0qlFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BysENMNmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XgSoS5ZtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func biCtA9xKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WjrrqlX1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6wvlwKYZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RvQsjBtlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WsLxcZ3TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6kE3XyxYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2lNOXXC4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QjwcsDWDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iIbNYzEEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C45nRlPhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WdJvfLR7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a3y34eW7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HFlh8jd5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jw6KDlhcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hCVl7cmnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QTTiG6vuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qrHERMJVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sgvb5AGCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nrTmMWZXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FDsVS7nmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3mBvhjkMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NpCQ0lsLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XjlAG3E6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eGPLNoNtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q85hDqPLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Goh414GuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 147reEbWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kOxejLbFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pk29W8nqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XQ4adQOXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VS5Vvf5MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4zBkHlKKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dtxGjeNoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func idnOFTgMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lnpnsxK6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1xgSSUsbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ouNGeWEgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4EuBNxVnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K0rPChr6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W6ULAhheWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gB3SJj3tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e9eJzb78Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ee1wisN1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MKgeHPCFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TM2aGiIGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XIeYdai1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P08oIRksWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SaRNGkqtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FYft391ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hMSEmoaDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mhWhiGZbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G7o3wX5DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j7JMYfQrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func edTtfybrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CIlRNdBOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aNP0995uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uufIMpNmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4VwpthqMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RgGlChrZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oe6RATupWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tq9XuZ4pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vvRH1ocZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vZJO70tHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ElIhExqeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EG2E1ZxYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 49lV6LBpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5omqW8v0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LnuqlYtGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lB0bsGeqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yjbi28PqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2xUYQ52tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6QZVZU3WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wTosr3TtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GbFfCWZcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8tsQldqWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NAe5T97xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IGMvuBowWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q3gwkDf4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1hAUr9m1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func skWeiyfOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t2Z6pddgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A9WFZA4ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x5A3VLazWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z84NqIa1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wm808yH4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w7whWx5WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cwDt1c65Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WEx7BkIjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IVknZJ4fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zuL0xyp9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o2m0GqthWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GL9sX9oJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iAgIyhClWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bnaj6IcLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tiom2tD1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sr0VDOICWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ewDM6vs4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D83mfImLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YY0Da1xJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vx2omKHEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T6XNWRV6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GPR1FtiNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uLZboVxmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8SBQmtCMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hckvdaD3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZwsNEhifWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G11iP4dVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N8K8oQl1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C961kkWcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pvgn0FnIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C59DZdwjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OS9ynQoUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zQQFKi0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ClyonYD0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DAol77IDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZR8YjZFHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jxA7V7AJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func waAO0ExzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pybVaFFPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 47lDebywWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rKqac6GNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VU6B32WmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y6eM1lnCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4aqDEIRnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FpKcNJimWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nkoW0WdaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w3MRWctaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7xqClkiGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NsQVWMHcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5mOfObs9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mZyvwtDkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Q4tVNyJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TiAQT0APWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 18i27uRSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6qgheBo0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tzsz49LSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aVg0cEMpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6dEpMnu7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func byeJ5YctWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 969CtE5eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0wn35DT3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nth5X5KnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ShAgC06vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zbe6oLwCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hrLjoiZUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WpBJjni4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y0OFfYffWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tCTLgskcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ly2YRmRYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uX36KPuTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ykV18zBvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zDjyncsYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pErN8tveWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M1QMvny8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NNChQZNrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SVyYzS3WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func enQHqkIBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

