package main

import (
    "fmt"
    "sync"
    "time"
    "crypto/sha256"
)

var ( appVersion = "5.6" )

func dyG97YveWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WTxvaPyLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lbuGWkBuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ya1IQyPWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xCUgp87HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8zdiCL2fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z1ddesugWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J8Qsu8awWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q0N4liqYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3S32lYRMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kT1q8HriWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JQzCEgSLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UJrdEfpxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xQpwRpGLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pCljMuVuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uYeYC0tcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rj8CfmauWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oa402nMkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QDm6LgM7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qEidyZ5gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vCatfINjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QSoTSznrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fBbBu6CwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gIejirr8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PTbZHc61Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QCfKbDpKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QmFyS5KwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ybbq51DOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5lxzVxraWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1imZOM15Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eRAOwtU5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kq9B9r2QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L3p9NnH7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3oMO0X6EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CIQskNz0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l0auj9EcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VNJPzJ2hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YLeWvS2hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rxTvZRpiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DQOJRvE8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EkSo1GdUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Xvu52MoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lDhP2qNzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ed02fyoeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y29HJY0uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func inxMa310Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cNokTJ10Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yBfOwQ0CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EU5sz616Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YqOP8t8nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qkEGx0rzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x92oL1K7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func leVIWSetWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rqlCAKCtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TNaih7YmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kjkr8CalWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NU4b0fhrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7j0dawLCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g8ftK8zXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HvorHPqOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6PYr7vrtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d9giSFDfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NrAPng2cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pLhgmjExWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jW9wJ8cxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HV7GwGdQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6edi8UaXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 46q3OUFLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z2Z0Wm6GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F5NIs3EPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uyhHYLOzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NNcKyGFSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l7tyRZSsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AR2dBhAsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WiGOSijLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func btel7XcjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6UOaM8hvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MtfzYFo0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zE262hiuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zzT1ebzCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h03cnlNHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HCkVCFD5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zxx2xuuDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func smFROWMmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BTPbCaszWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rCFHQKHbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CNUZi5qfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wd51OvEDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MDtTiNhNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func canjflNxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GXrnwpnZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IYt7wMVPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L5DWGxASWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZAWrCRPOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a22GFVMGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xGCOA6TlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y6LgdlUfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Y0rBteQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ujgWA7ulWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WyX59jzfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jURweqfQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wg7szTiHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rZbtYwR1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PNlu511yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NIk7dkXVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tnlS2m5VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xTjamThFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JHdumn4RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KxElgq6YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZZfqvBCbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GjyLFzP0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jMpfbmeSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F3MJ9DwBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tGBoKwGCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xlVeC1RgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UrN6mqbGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PVK3WnS5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6EkslcC5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Te2HBCPQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YCwIzkw9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3dQKqslwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pxiQ082OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QYvICe0AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ML8pLlObWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ruivGgjhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pkascdZeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TP7ywSkpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f7piI2ZSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z5AM1hbVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZMfn0UVDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gj818XfKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZAb7k0wSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7127BCTDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5zaqSMaDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BcsW0dz9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KYOhtN2qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N75yPQLpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FQfEWgG3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LAH43SSEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func arMWKF4YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TpviSI9jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4IsB04V2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func na3QlQUmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j5z3dafUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Pz7DuLLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uVriTFQtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0zQiNs2mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eLaQcUSYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cZGFy26GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8xyK9fYnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xPiiqrqRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mjNbolcMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tpNoUBdfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0YfVAnV8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eB15t5LVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func opDvXfJuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8TsUWk82Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k6UxnPsbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e2wVimFsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cNuAo8AuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wp0UB8YrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pppogeStWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H26O3xt9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3MdtKIC3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y9xLofxcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DnOCKN8xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AKFB3B8HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UG2ledgTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nDH6vmuzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bRMHcy9VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C3f0ZRYUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Pce9ZIOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0CDo2Kc7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KmawbcAXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xuGWtNqkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r50jz6WqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UZesOCP7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func scABBsOIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZIKNF2bMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ll79TLNFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6HSuQhbsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mAyf7DwWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AxWuHHpyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DCQyFLQGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S0QKxOiSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o8H7jEGMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7UVK6griWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PVxoJ8pZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NzxnTf1sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MAw60QMrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N4ByHBleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TdCyTVHaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 208eZQuHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UkivlL15Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yqHSI9ATWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pkZRea1XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BuH3L61NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i4dVnUDjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4fJIKP4zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UuRFaF9SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H1zzom7UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tZgsysPnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XCYctnRNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9pF8wsOcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l2QuxGl0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dvkNMjGtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XNW25RmOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YoKb8ExvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IQ2ErOUgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rqqa7ofhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tYEJm30pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B3VywAtpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r6uyT5o6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4ZWwAyCgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MoNdSaCdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eFbmO3mrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q54BxwAYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lhMsJjXZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 48Nvb5CXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EOTxcHsAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func imIc4ulsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eEi83PriWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NNpGEuWkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SbkeQKjZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tTPof3CXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ObIFLNnvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6I6Z9U2dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EPvEOAdSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FJegE9YLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9FvCYdyiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AtYqvWlSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZqjWintxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func efKbpH9LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bJK8itSmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WEezy3hwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WfTI7IFrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dCX7Z1CXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mkrrx4K5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ho3P7RmxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d2YS5I0SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y269UfizWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jOnKRayHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9f5iIiMpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jmZ6l595Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RUPnVlfQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nuKPZrH9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sg7pdjSwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y6GJf7PZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o9Sh6biOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kvwEchXiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iSD7zX4nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zYLpLhGOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8u9Yk14yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mNHk9qMaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jw9v7e7fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UpQVWYMfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7wk4IaWWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4BRCPQEtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 98nr2ZPtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UdneWPFeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yth522VaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ako475XhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m2XIiH99Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f5pRTNyJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qXU91wvkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J4WlOnHJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zHnAydePWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8M7H1IavWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PxiG53TtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0GYpm0ouWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hC2XfQAmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rEv3ZB4sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MK3AJdEWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 86kUGAWGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Smly83AMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jlHSx65xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bwtpe7CXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 60D5d9BCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hS8gfYuPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mIw7PLUAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j5qt2RgMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CSGfwnypWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UTewAoqMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qLDc83ekWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RTY0Wk8YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LTonXqAVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zvcYwpsSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AYt36MhtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DYh1gs1FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zvh9MulhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 64V82M50Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lFll31JRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DNqhIte1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uH4hromGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qKXXQquHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OiRXdHciWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3q6qrKUJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YHyXXGVCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lWc4nWcBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QszQ5XXYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WZNDUPmQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CyXuWHWSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X7oF0Q8oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OflCR1aJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nEZ4tg0CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MUtpuztuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YgiOqwGjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XzEzHbH9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tYaHlycPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yx0zZkYkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xIibh8ehWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5R5uoa6nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9zMddUmYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p0tNsYdAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jXB41c69Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kSc4Xd92Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NRVNxt5pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v0dIoMveWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 56tQd3LNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dzrTt8leWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uL4G1st8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X8l8DzL3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8oCVPjqCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k2wR5Ax9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L4AUkIqGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iKtol10sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EfWArYufWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fxefefUoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dg3tNFnvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4NdTapcTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8V0aSmQtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GYKFIzKqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func csHy1Tm7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9taeDogkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ihuDTL6dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XPw36Z6TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nCEJ0raeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rlDYURxMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mdECHUHMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tlz7sCXmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rIQ5Ci2IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rhVg2dB2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jVu5WrLQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wzRl1v4yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m8x62EYaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VEftTBQ9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func asUnNWPOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zGpUeOWRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j7YxAlgnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TBKYcVt3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pmYeDKfbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qrQxVTN6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EAUjULlLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jpmyj7DlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3xyvgOH3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kEgUGFxYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func chQYzgmvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNlZUm5bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3ktgENsiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dhUjv5jnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kgdvPDTAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hKrtQCikWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HjDCDl6kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GIEChcGfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a9e2zBOSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func br8cGrbpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZhgLFvptWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5xs4TC61Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JrpikdYpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 14a8C6C0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HejKMgdXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HhQAAiGzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4tAeNCANWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EbizqELNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fsG2Uk8lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func veVloRPNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z2DjPXyLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j1ADgagQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zhJVXskPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9VcKVgqIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lH0oOul5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gyVNNYYkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hP7xh19AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q5PwV96TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FE7ZFxC8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nNUeSodaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rT6SAWMpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2YIG62oCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OAFhVr9oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jevpvjKtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rpvk6AY4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RMVnL2FdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wCEB84b3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r091TJIxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eUJBc8A9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VkBJ2R3MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ccNFwwAHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6bRMpcEpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Ts76bUNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2fFxbkT4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XBGa9mWXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kUzAjUhBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HAo5vtXUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RtAJwPaSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sdAqAowRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Sp2MXJIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UAiUIJO6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GKrvDoB8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SrlN766NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ky3sDymFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VpCZsOchWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ENeDdiFcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oAq6MollWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vsFFiRFCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D7ybqamCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9CJw8sxUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0aB2DEWEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bN9CyDboWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l6yvKOjTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func muUipnnkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LoTEAwFIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pA2NUSOFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2lqaX5eUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t7NtXXEsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kQU6bWB9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pV0Sk4uyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uwKTPIsCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YXcTliQaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZcpaojTsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Soou0747Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DmIJ0tbFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X2K8MU2XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HCygwGJ5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TncLQSPxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9PwLxjadWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fWRFWIHjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RjMdLhI7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h5XotF0XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zxXNgXQAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JTsaMsGLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kjf8kWxgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K8Ip2rRPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5byfuBfeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R5mwvfBsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wkRvMKLlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U4VITghZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lSOB1nWuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GOYiut5PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y008zLG5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WCFvmJQ7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k5J0AKq5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VSoLKU8xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YYWs60xCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IJ8P7PjFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QwtVO816Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C5tnLgcVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PhzXiLQVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HMfmzQjwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jey68PWrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kXFz3O2nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sWnBugyiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pr4BqNDGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bnmDV6GQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8hczCgvbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dnLh6ns6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aB07mXf0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8dcRNq72Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rbxrS4XOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LlNRFV0JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BIn3oUSXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VMCUVBZTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BaMEBY0tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pQ8YvbTrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7GTI371QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IH1kjQFrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3LrwccTSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x1Sb5CX6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c41jjpqbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VTxbwEopWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sXmTO2BGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dm20gECCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yczNd2FvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MSyPXzHGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mZFeXseMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tTQjeypSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0Bztb6YDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 601UZv1bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mIs0Bke2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o1iIm5slWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qlEXBghBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a1GQe2rOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lj1jLNIJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E9MaabRJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 19b7WbkVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FZu1m90rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sjkWiRJfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mAiJoezaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4zTPdcVyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 73krOtPuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uWSV36XDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Bp5Riy7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CzU3beVVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5tiL0PHZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SJciOV10Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NOGtxdltWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oKpb0PvbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hdOGj603Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6rAF2P27Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aUJvGXkAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nb9MrbHdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RsnBpFx8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yYDD6tkoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6C1F8c1wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6Cj1YLekWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t2Ba9IbdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u21LodUtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func obLeR9oGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qG3P71VKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rwnrwGHxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nbvFtOjKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3GoASWc5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WTH8RUtIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BEVM5xCgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pxxVjJyTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fbcu29CtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FETe1qzPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RmRDTlzwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TRcK9UqMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PL9TI3ckWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2dM89B1BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Bh4F0iIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1FYKyc5fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zo9ujsa6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G1JqvM5FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9WWb56hFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1fCoT2zMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kZV3ISD5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3IgR8QLLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GxLw2bFjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YYWnpRLdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vdG7TgwJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uq2ws6noWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sf2vd8gDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qAI2x4lsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LEGXWO1PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7MbMozJ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gkEPF7sSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lc72nBryWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dIUfuZI2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7F40zKRLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c8WRJ3CcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hGaxqL4OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OBMROiHVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pEOBw5mCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func toj6sVkwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y9eznGZoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BE8KVzdmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NZZAxlIZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func asNifGBuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qmILJHXHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sm99LxMcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sdcPNMb1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gomEJfycWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OSMNFZy6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eyGYfrsdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m1tow4s0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ll80SjPlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Of0kvBDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bG1EdzVGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ttL7giL1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j2I4VniDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lbxG81IoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4E1Uahz6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mHXpWdg8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CT1Df13QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MRYXy5deWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I8hUGMn4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MFn7pTfDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hBvq7YluWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yGG8O2vMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Q2Xt3hWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZT4gd7cQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l993VovGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aALkTaMMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FrYXBkdqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZXGDju0AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4oEP7JGFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WJwFMCEEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aRe231wJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NnTVNGrwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gvqCukMMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gIfCfgxCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B1NTfcXpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QNMhnukhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I8mJNkzYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M2XtJBcJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6JDTNLwKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hvEjkYPsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nx81PSHEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m7vG9vQdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gxCtbWdJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A2ylv110Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6MOaVjRIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bP03QSFtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5swgSwn9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ghwAXnwtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 60SrNqZ1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WqRKFldjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7vRUYmbkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VBUGbfVQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1E194Pi4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eiAMeJbBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 29AY23UgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M8IlHpTLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DOJ1hj1DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TZHoG8Q2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IPabuCkGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KKqvS9wSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YIW6EndUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0erKW8e8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8q7GlOqkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P4z9LNj0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z2JWAM8YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GQiLIrqwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fKPkwNuAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vOxwqelEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m4B1v8zfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OP14HOLfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CQUC5RlDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4wl8IV28Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jkbdurq9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 28bJwMyHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i5mz69t8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AHkar8sBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1kUUsTLlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AU3AUpLbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BeOpYy0yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cgt94LuDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LqW1d50oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8g91OD3aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YiVDrsWAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kgg7YAjyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NYkZsI8SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WQPGNdxnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7hz4I0jjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i57LhnmdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WL2nchusWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 37BY6PzsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ns5N8WaQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s7tvPIXjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tq0GYvaQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c2lkNntTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CKhbFs1BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q3gRrcHBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wWkDVRFSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yf5EDL6CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zvGVDPT4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HgHG8rLUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vpQqVqTnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DDCmwl7bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rOQtfTBxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ya4y64N3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4YtkBZ2QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AYdo6k31Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wolVktGaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dwPXH2YeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l6tkaJWtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g1dSy43sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sXLR0xauWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yMDnzJeLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b9ne2lLOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 92eb55dDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wF6WFXFvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RlkKDgxIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D5Exo4LnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MQQlFWoRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bI7J7dvJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qrk1RnJlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VZwtbBdXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S1sG0UxpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Q9SKDz9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RNLgMoJjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qn7B9MkxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i3ntdP37Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dhu7BRa9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func auu6moBuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UeI73wwEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A9RKsNQOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4tQZzrdRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j3RtsJeZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TIvmyhxbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S8C13ZmmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hOD88MRNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HSghEOx3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jnwr9WFMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CXUhDOBpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gRHOUgMgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qgaxUPFwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 62K5J2kmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a7J8DV6rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7fyGc4L2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QWlj2PnLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func arKawBmmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func siJCl4tSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DzcQ6gH3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JHCYaqFtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dPD2JvXoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hGiTwVgyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oiKwAEeWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gpVIy9NRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xheLTxePWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cX56Msz4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8WUO0ZMqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3NMvD3mcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xt2efjjYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RZ7PSeQoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MySAkPB4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bn6rDJUCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uOen45CAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q4jxU0UDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AWqw85ZgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8ZRF9FNrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z28fz5wTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3Oe16qZbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LE2rMAB4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3xps19dKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SOzoWtoJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jhyb2sM6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RmsqcgTBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9XyMfAhYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KVkujxeDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Ztes8CCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BVRmw76OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8ixJvAWVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func two3kt2nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aPKLQkaKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wJcSScNXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0tRi5P9HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oj3WkUDJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1kWf45SYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sKnMFpSWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qWdhrHbjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oZdiEHU4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BcU4W598Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Go4ktkKoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XINhMs5JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 00qMP7e6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WSwXZ9kBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8155fHelWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8iM0gJxRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1CIFnzL7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7pjLBAdgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mGPTeqoQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IElaYYSjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N1CACLRiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YcFvkTBzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZIS0PtCmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GsNwwGHAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ral0U2TDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JQ5Mt4EeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zoe6z06TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TnLhGBA1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mvpYVNivWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ixBhrWBkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uypCOiOTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c76xxLmrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4SqMtBdoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ul9GmeqCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6c0jqM0JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eTeoKpFXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vm4EaTAbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wj1j9Fz6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zs4rgkP2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ljIxZxKlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T8diIq7TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cac9CEpPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TgHzJsWRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UfeN7KrHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KNzqWj0SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E4ODQ76jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5Tz3S5nVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k0QaTbggWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1GhS1atdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wlTCKqWSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3eOwSczUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xvuOhZ02Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6z4mlSkjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8pHf9oqHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gq2AhhL4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rN9D4NVfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gxMviNq1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FSAjae3fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MD9lAZmJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TbnLrkTqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MuP3iYwJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hPcEu6c6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i4VxgscVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lTRtcQFpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YW2e8azVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q0uk1maQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8zNXoozfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JhvO6rifWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func btflgvLZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BFnLqMK2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WGS2ipF8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9cxajBwHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IXx2Z6NxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func isTL37PyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IYZ2uUhfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SFxyx9eeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func us2fiXGRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t8zIkjXfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func macZ8e5CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6eFufZLXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mZtlOgDxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CLWcWjSPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mBuvqeR5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G8C89gVDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mpqpUlgUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KStKJCSiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GNdD0W8DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h9jBiKbcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CPaAJWCFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dRUo4KKMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uHoF3SKoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iVeg6EJpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m3VJ8OTlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vU3U7MTQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O2L8uD0QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QzrVw4hqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y5L7k1gJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YK9gp7YXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zxceE9ALWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TvlQ47RlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bHGLv4gQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func szYuVJTVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5qY6UdNlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FwmtJX93Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2BB4WhppWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W2tvoRBRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vNt0b7B6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CT7mCojwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DwETi7LlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UnoTju8WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KKeCTuS6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4DFzWX8aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qgA7FGMHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8ptOLW5oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4lOvGDShWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VCwiuWaDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3toJiiEXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XsSMVcjNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZxJ7kYkeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rhdsG244Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ViEBURNXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o2ePMiQOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hS1EKKXrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F4N0VCxaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dPIGe0QhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b1Pm3Gk2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0acAgQUIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JwTt8E7ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2m8lOJfLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b710tRjfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 15o3gzAmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XZDPWNLNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BvKL1DyCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ptFdgNyZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R2EPUbPfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dOW3DU6cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Riw6tnC1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7COuT1vVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h777GaL7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3uMvK0ESWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RkVXV4F3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CsNaR1GzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jn0ShNnUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KGWIDFO0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8qnjgGp0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8lggQ4sEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func unRaa5ZMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bivRX6oYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HbJhbpdVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4jUicQUeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DIZpSRnZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PEiI1fGmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 98voEskIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dh0NgtFKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZPxlWHofWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WCx9z2QyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uuZgaAVMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SsV1SkVRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CVMQmdkLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oVVRF9l9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X1H7nr0dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0rEBwzBcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hK0AKjDKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KvLWYdglWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jPY7vvT2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d4hZ2TmcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9xgpBUkqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lDQfapFWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nVe97ZlNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dlmi4i2CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nGrbNCofWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hR9DZh47Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qBnV9LITWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yEpoviB3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v9PANbzSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qYVhPH6KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gxaTi8ssWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bDQSAoKjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rfl9dHWMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YlvqXQVCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HKoZRCoBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R0WYDZIBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v362Z5efWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bQ0UxnELWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QzEK6e9DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9MhPK4FUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Aa97fVonWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u2auj634Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kFZM9daKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1ldmiuCBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5JqjCZpDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vN3L8mBDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gi7YzL2qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rCkFTM42Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Neg9faeqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UzBa7L1sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NfA3ESZHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nO0g2KIhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YBrc0gqtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M3rfJXeYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y35mEt5oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r8NJVmnVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vpggYjphWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pJaVvu7eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pnLQC2fnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2sn2nWuqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y8syZW0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ddg8IfxRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yk7csb2CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FxX0oKSHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4akukm0LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GKv6f9LlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g54UfPElWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EYYBEvTyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iXmlHWCxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 25rQnQXKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s8YpIWXGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I36uHlE3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IrZJWlT2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gbiY6wmuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eGPBGrpxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HI2GS59fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gNoEZkzGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LXuPcQYWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7cH2qyR3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5l99U0kWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LjZZ0pgRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bveyhTzDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pPU6bKinWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VCdiNmwaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5UoiiCsPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fMAQLxlpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aEOLMDxUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pPFkDUOwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OnCOch7rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xMZwfQ3eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6adoE5t2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qvI2MgCqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FabS9q25Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QN3i79TaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vYSD0W8vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lj32pKH6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aW3xCaR0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P4hrSzBlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2wyVzfFUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jLOgmcUhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WUxOlYCpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5ZZpe2OoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zEsRMHA0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BIZnqbJYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ye8uBfRyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HrgCKAEnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a3XZEvsFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hLTvEdECWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ybvRQHSsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iOlvwcsFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 26lkwnElWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func okFviLvbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eXmC9aSmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HwhX2THRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gZ6Lejj0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ldrL4rGbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CLOEV1SxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 58BKWSLyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YkfncnE7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RCmV9CIaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zyDgrjwIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oVKLL3rYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c3PwD25aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fThxYVHkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qje5tvxYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tVsXkwfjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UxBam4YzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func umn7trvUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 30q6ScgeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mVXKDMz6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OR93ZCTFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t2Lr3148Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cMjgpthpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nIFs0XqmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gEEqB1nmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cdl9QQEpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kQSK4yGEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D4dHKyYrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fdbUrQCUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lvIuhlKDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DQR6ZaiLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lXbtzzn3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 50PdUzevWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N76q755JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yQ62uXLwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func abhHxTRFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6qugbnbFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dsuvSpbYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JZ1nWH5tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a3675Q0KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JW4gq4zeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8xzrdeDDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qekes4OXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Csb0v5IgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m3JKlhvzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0TacoFLZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cdFPrLMCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SqYyrR9GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uKUQSi9tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4gJGe5H7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GiqZknAQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SkeKh2chWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xv7JpvNbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yq5K91EsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eP8zscCWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3nuTqMaKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DysnUjYAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZRViUgsiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9356CHgxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2sANfM0vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2onW04cIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hYp8BCT0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7qn4Et2hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7fv4K2PkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XNK9aJ1vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4bFg29FUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ikINvymQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p76g6w3KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 16nrl369Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9isE3ecuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pYNVg8V8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rj4WWJPjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tx2jJq0MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OwuAAqDbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gBjoGNw6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v3imJdbcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HCdPNwLMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P84chkySWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func khTgFZtOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yFvkBMFSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SKX3hJOsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QCKW9nJGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fB9UtRw6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mhox1xghWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NrECUTDvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pahpmp6DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V1u7XX6jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BUOULqAMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6pM9iI0PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LrJxC26kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jrr8WxMrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0nbzyRI0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XaXaSWRvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7OAbbm3YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qiNVP2vqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Aq2BqMd4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zNqcAdt5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BeSnvNCLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OaOhv7CDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VKPv3g92Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nMngqUQaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xah5f6X6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t8Lg935PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9TAqQUwJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GRte2xAVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iYOX8yKXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uKwfcy6FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R0aNWXsVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZzMskbYZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6CJ3ZI8lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UF3I0xxdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hhSketm0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vE6BDvQ0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TR5Y20abWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4qE42J6CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eeVLHaE6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rulGdYVbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 96
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5YSvIKvYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ipzA3Cb3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KPTg4eLCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DDi8CXo1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AEviKia0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8RLUVRVsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RsNFgpjeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KmcNdDIqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6mgUobQbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HARAgfAuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FFgBjaQOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cFGipY2nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dde6oqrPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XeDEYhkxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0dOerZ3cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9MQyObrWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QHOO2yKtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LyKkBp6CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SN9f3BsfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R80v87H4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zEickYCMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PUbK307pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 26evNBbaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mxlBJmmDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fScbYU13Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wad7Y2XtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hAwMdI5cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CnPuPr1KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NZpLEvXmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ta3OPJpFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l58gietuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func osLvnrkqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y5aLSAsuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uiwNdG8zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UT73RMq8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ihBvYbROWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aHuwqzvSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eGHSqh2YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3N5cM308Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LeBGaNtGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R08t4Z1CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u48sBhDjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EWNescUSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cm6QS2WoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jws4sPNvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lsfQe8ElWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A3S2UOBCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eidGVFhRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Movg6bvvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZYGC0H8uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hzk0l2bnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XUJ8kS4uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XF5s5ERDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QgHhJeVbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6yarsaHBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RxMs7wY6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tyjjjMt1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GKgVizAqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LbasFRheWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E3AhnkDuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PdDoOGYWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9wuLMYxWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o8DqD75EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LBwzLNvOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0EnVL7v3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H1lukr39Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qzqrMudHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZJYBK0uoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jr0YKpr9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sfao9Fm1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xD3z93oeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1E1lUV1UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bBFhK7T0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y4MsSo1iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i8gs2brvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B5lNDKhlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ymYBXMgZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sKWfTIueWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4fD6HdSmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qm9ieBdOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fGOp82vmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VwIbeqpXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VfpimGVhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lXlm7aLrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ExpYrRqUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4HFaEEI8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UPhUrxV9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZFMN0VxTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UFZHS8L6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S3fQrcQoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rxco2sFVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sf9GKqEQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1X22ZFTeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QCgqMvb6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lTa111K8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B6xbs4gaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 607hpWKnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sbi6t6riWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WFOmvNUJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xb1dK7H3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H2JwUMEJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6NkgUWWZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sdAVlInxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PW5mUBWVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EwQTJq5bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func itKovflSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WTSGLCX7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1PN16Rx9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func upaHRjWzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dfTDPP7iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0vOLXvFwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J1tnX3oFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AnIlYMWuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B5Fgr8acWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S9q7aRp1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vQTUArv2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0eWy6mjQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9Wu6QTvDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D2LC5jyzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ItCM1ldLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cojg5RMIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e6UJWybcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QagXTz4YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wodnQhsHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SbNRl3a4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NiHx0TbDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UOKgfSEdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QKSi9CTfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5hsIQib0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4yCBseF8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l7gcW2FYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CtWBVIojWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1C3uLwedWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8kk3ZMSsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3UotTDnkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4FRv210IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EwnsbMu1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pltzJP1yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nTY0idCXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7xo8XEmPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K0rJQqbxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OyucxF0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ncc5b826Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iirRqMBGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yMvdfhC2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K7EFWnX0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pzssNJvWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tuSmQP1dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1EgTTHneWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sxxotPTiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LWYHibuSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bkDZByr8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iIFLtIMGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2ROcxcWSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x3CW0xwXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A5GGFEyrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lyid0CR8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1SnJ7AKUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 51HfY1YZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hhr4LeFfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BJpOMo7bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i5hIS9i8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oo5jI3mzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2fth4FT9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bCZPHHybWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func svg4gvk2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Pz24TZhYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jcEAScpyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VQnmdhKoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uao3MLU6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jzBfmvadWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T4mT7K8OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UYTK2BkMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L4tFZsuvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g9w80YgdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lClx9BgRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mK7mjWItWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 57L6BPhqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bhOiHpbmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ie6WdhJ2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j2idnHF3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ikHKFFjKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ipIWZQZYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YZRpz7FNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lw5hhtlrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ggeeCBFoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y6rXZj0mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RO1If9QYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZCaCAtU2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8gMftY5gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hGmyuwUSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EZk2nKWlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m7WmvnC3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sm8caIf6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f59XvLLOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N3xdLI2gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S6jWx4BfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ovKi0RsKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s24ulSSOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hfoXT3uzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2xST9k5NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K8zfOOajWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YTwwDwwPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TH2zSmFNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VgqctEusWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HsLRAuzcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c4Sh6VwjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N8vrEDmgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VJ6qtwVoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DAajFni8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6gZcUdlxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yHnA6wxcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZbpXCt5TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EgPCjMShWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ixY1NOqHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KNLjK1wnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qLsiiIbQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gKz91iTmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iEJADKYwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EnTs8bUpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bSRuTmJeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YYiaYgnUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d3uKJm9oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zW3rgD8QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GYOh4kfSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3tB82JKCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i3etzgOOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ha8COcnVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ytM7OhcTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hOsvjYO8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xMcQJABwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t87smyGBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eJ1n29tZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UcG4GYhJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EZ0NqBPgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MxRFl4DnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aAoTpqshWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OZy9MaXBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jVWtZXX9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Lq094Mu4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xIX8GKICWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4GB0T1KjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2u9Ipt2GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kmlPWzMKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tUOZL6nbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8okBkDfWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a7pZjxNuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9sW4VmxnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PeqeQQOyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GcDqaSfMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n3uZr3PtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fzBbS3zBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dQ6CFLz8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r2nzjS8OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9YbrIxHzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 080kzgZcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func caDiMRaOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sUEfahQtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yP5FWp7bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tFghXlGrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Idi2GsiVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func abDSy0elWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RRRbI8iuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oFVEgLVVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fuj0vo7qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sb3htpgYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ordGlJQDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X617rhgkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KwZ3M4o6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UHmzYsKTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HLtQuhWSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iyXrl06EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FGmdPHrXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z6LfeNWYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ITSL4smUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LkluQ4YUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fDYdUaRCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OLw0A1l9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wF4gYA7PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b007yVEwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zxKkDUW7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZkKpCqtxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FFVDC5zYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4hqf5NCcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ys7oviLwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d74KADljWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qsrPJOxtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ba4yTATRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func imCSfMv3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nZtNC7qPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cQ6A4rE2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func axQRi4lgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1wwKMHfmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OQpemlO7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3aSl3xy8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func onYJyTVpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p5ajkPbqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FPbTBtTRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YQ9UhgZtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WPOstgIqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TyzM3q1pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MTsQa3fPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BnxaZ6oqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iZJKdV9WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SzVHTStUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9rcYW0oHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vTUCTt4LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func llYE43CQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lnUJROJUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fMFBYfi0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BKvlm8LLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EXF9mC4QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A0xvMW61Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 47c4qWf9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func omXr4n7PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xyznsFufWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f2YlfNS9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p9gj7JySWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KzBkZzBtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jk5IkfRGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tUuJ9OzoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bIB6Svb8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A5G7DeEEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PBYEuakHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7n6qxzhMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XnHF6WYPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NER2l1yTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 28mj6Wq2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CO9zXB3LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ry5xyLKJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G0tms123Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RNuPD3IBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e5EJkq4LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pn1uo0JsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zRd4WzFGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CJxHeMYGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vI6RcKozWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t4Wf5KmDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pnZjMB2nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FI5eMOqaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QL7E8CgIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0i5kk6RoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AsQkDRGlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qae7YoKNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tNEm3krwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func saGPlFiwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func El88hRf9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0IVWKIvYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KuH9agMIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CJFFiAFoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ilte6GgxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eYj7ZzwkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FgXllX7lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YSTVQsWnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OMdnfvleWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zjP4NZ9AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vlT6D0NFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g0jDbmZAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MhkNavxwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sog92z7wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dgg30i5rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZP4cB7QVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G6qh1ax2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2XLYRUbfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func noetcxmmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fjRjYrwxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yrhN16zYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rssl9oxsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zw9NLy6SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SIfKAjJEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zXRGtK4hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JR3TVDEQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y4WOetFFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZFIK1ZH5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4z8fdleBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BB28sA5SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZMOTdHJBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oFq9Pfs8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c7atd297Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vhNS19LPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WMi5UqrGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xEBWabWOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bwuCAV2LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9rbKvqLZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kmZz9ho8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n1MxTXj2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LNi6tDrrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vvltRJaEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iiB4DddTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0wGYaIorWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bVfazcmgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FzvIt0z9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UXp2ofCnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jaPcX2npWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8nsIzVs3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HEWRDveiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pstwwUujWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D5Ya3V2sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mjycmp9HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k5Vbz5P1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ce8kx3C2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FHhJec5TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3PJFifBHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QtQI7uxeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vX5gS7MSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r82NNc9JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UZLBqoMxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AlC2NGtsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ck5e9kH4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func znyQd1syWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AaPC9QZpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tHmSZ5ntWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S49KoAxqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qrjUvK1IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C6hK2ReaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LcA29BIlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Qh53tKnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5gFpS4W3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 54kP38mlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oy8QBsmWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6zYKAaw2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZABArN3PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tAj9G57yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EJwhIEpwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CGF1T37MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func utwoZ5DQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func khkS1F0AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BeoISodTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bL10HI3yWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sN6yBhsMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Le6jUzQSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Stl0YN7zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yMWWw4smWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lPPFtvk6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pVXKSHteWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MilejNJHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UGbHTjrFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fvtpWZz3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LdXw5z0cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SFRAaddcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jrgZIs3XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zZ68RMwnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ddflJj2JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YTVU8A24Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HIY5c64kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KKxGYfS8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ssb1hsEbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mqiq67AYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KDO9ILpRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wr1j9hmVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HXNJjrB1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J7RcH747Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 740gpcD9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0fNnQIxxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kjKFjzI8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dw9T5110Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LPhPCCE2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P0Co8wrqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sB5GlaMCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9LbmCbGxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 67pcMWomWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x14Wenv5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MtDAmkJZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CAGH217uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vr89Yal2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qPz7DD4rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QNL13IjNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 34b3dqY5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sPVtX9DVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bG1fVESwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XZQsrKQ8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bn210jKvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cVyq05BZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9pxsgk10Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YcyLZ2H1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HMaXQ1OgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0MOE3qGpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V4WRxuSDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A37saFPSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func teJzl5xyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nuz5Ta6oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IKRoEv0tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kzr0lJykWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E8OAmQZ9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yv0B3rWRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pSdis0hdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E9Hn5GceWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hvcNhionWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 69kQ1ma6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h9MtJi4QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mzY6ysTVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qi1ose8YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qGCKvP4zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uhMKpmvtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bNxt0Wr2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4AeKgGrgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XobVSiM6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QwDvP3LtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XjEcko3LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IxDC3W8cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Yu9yqptYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EyAlOIXLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HKzoGEulWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L3vCKlgVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func giW1HTTVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8j1ApUtuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UhkBWZ3QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q8NbgdnGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 531o1IoUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r9HXIWwVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fM2yKxPkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XYAJaLSNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oWilZSURWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8lS85gtTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ntc6SUrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RdMJsL2zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bEeyrwBDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nW7fsAsTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func snJw1zjrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BngKHLPZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jIR96eX3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wWAM3tqeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g0vHo7IyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VDX5GmbnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PBQij9Z8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R0CoK28jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z783QHT8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Kv5wKOHmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vDTcQEyUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dP6risnFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KiyuJF9EWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZPGT3AeKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ikk26ObTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IOBgtggbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qZEwXmC6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A6E7NEwWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X8JiksKtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6KlW02mbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NLT0v9v0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZGgt3fhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y6bkkehVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EGHqEXyJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L2lONIkMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RIG5wfsfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ooe9jGDZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pFXzLOeKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UWLK3yjpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yMqmQS8FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NDzeYx2kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PQBQxEyFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SAVPYlAVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MPjBMbqTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K8LgWMhpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e2CbfIyzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0AuW6YJdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BaZA0dtNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RMQeTZ4TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EGwj2H8NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bn6Dq4DLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zsZA2UR7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hHHIb3CrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sxMsmrnoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uJn7sK54Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wqN0rMmrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7IN3IQwyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LYusXBdlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 170
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Tu8yQ04Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kcMhuPDlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aHiXE9NCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NLPuB0VuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nKlEDJdcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6h1x9aWQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hfuZ2L2PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZEG2j8oWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nL3FXzTZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DUzEmiVJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Je61liguWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pv0NidP7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9q2CnHr2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func anCV3PJoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CKwV8XVYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3j9pyQD5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jdPJyu4FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iZs1YHTGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zUzfVetyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PcVx9JA8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p3AtrERlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g4KL6XL3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qMudGcQaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yqzHaFopWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4zaLQ9kYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7uSZ0Go5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O01wYCr2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dGeIqxr3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WAutqaiCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LBAJkTnZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3ytQ372ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WLCtHrDYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HLTRBK6nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H7vQCt2gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WNELs5RmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wsyoYpYYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZWzVGDF1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XVLpbxmEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CxDfZ8neWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BVsG5fuSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QSW26dr1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uCbsb62WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0hBilMEDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R0o9O3OYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JyUXdHAkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jYFduHcLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func air3xj5iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mk8KuPYcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EznbMLwTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BmUFkjd2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TvoS3IlVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wP1APrfJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uI5h38WFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func soASYaSEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XNeKEFjPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func APBqtko9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vtga5VDbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func glqbVM7oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 86
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mAyME8qoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XYlITKZsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OTEIuXJwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NOpz09DAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 56YI1TH4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0mOsUTjfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0IBa1JaoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Oh0LWxqDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Gfm0Ph8LWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C6IPdtnwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JnJijoi7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dAHKq4snWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jv5C9gGPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ALHuTb8kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CH2XQkjOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xDvqNi2iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VdpwQukUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kpJ6t0XFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BIkEECDbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4mPLhjkKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vcq3Fgw3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J83keHLvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V4M6ZVWPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uSmTLAZQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vOd8mQ8DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FH6Itz71Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ax6iaDaPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pJQ0EGR9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cq68WTzJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XB3pQOEhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fvqmiOrSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mMyGtQ0mWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZKZm9fy9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iytZmySHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lEc91j8PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mhovOMLeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lnihGEkaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jO0OEiJgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Elk8hms3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3cJ3D7iHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LkukV0LwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0f6PspMfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xco6pP0oWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cA811JMiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jLRaaWtYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DnlUg5oAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZJEim4ZgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sFmDVLniWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8pdNb96lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PqeRp4sXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tHVb4BpKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RMY43VkBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func peyoLD2AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BRmPd1n6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Sli3MQySWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GgO6m0JPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jJYhMXqLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UuoulVVhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func svlDsma3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Dfl3b4qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sW9bY2XUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nAt8RbBCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VQG5cgX4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fbc7hnsnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3NWCqxzmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 164
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SU75y6igWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i19UGVsvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gPc0ndYMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VuqiEHF6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4e6rw8cNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BKyWJQtRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dDm24i8bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lkqd1sNiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FM4N4NFLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BnLHHPuPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wntjAzTWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N9hxCl6zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8nBVZpjNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 73AauFg6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J0ddsJxmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YKzwqaeZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EIi6tSRUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3g1u6OJnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4LTyXzKgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GthKhd62Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 13DgmoblWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pWwsrF9gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T9tENixgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7FdDEgHQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZQJGkQzFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wx8UY3IWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TKNgNsZLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 54
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EgTbkqZZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n2L3tmfHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2XF2QRK2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ls1URpvBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7ziD3RmXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l5uOIay3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ViRRTn1YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pAiJz9f5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 141
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9MibIzvcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PSQx9K1zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pf98Yq5KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cT2Wa0zKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3yXgC1JGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IgGtoVryWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zKr2suKcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qEKozQtjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EuSoA1DmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CHPwDDl2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a5eCRzfaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0t5YLm2UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E9hJgQ7OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 20qZBDxuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zNK3l9vGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HOAjf58WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QunsZmlzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Q4WxbQFiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TWkNNMjQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RsYyaBfbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YkB6qjCyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cuXuMZHBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bV8HPiJNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pLJWZwcwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Hv68hMioWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qo42mQB6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xb8o2OMgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QKZJo163Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ies0pCWMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vMV9m95nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aa5IJ3qMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wbTDrKGjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tAmufA7fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ke7uxF7VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IwScaXLwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1Ub7qrnLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7RyjTieTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ac3Thy6KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DRlEoMf6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8UEfmeriWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SM2qg7ZfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6jhP9SWVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0DL0J4YvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xp9diU18Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s6c1rLA3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vBjsTeg0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LiusG9kuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9kIF04LzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HeItAlf0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ly4U3vkSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BOsJenuXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rGEG47Y7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V0uNVsM4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M2iAh63DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dDTy0Y0HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YpXIM3NpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SJy9RzHHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lPZXRS5IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func URI6qAY7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 287FiqjgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZfY2a8gWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Q1HWpENWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4dYMLzFSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fDT6yKgfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZGnLAf5JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P7NmnIlPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1rLzDcbdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UTA1xPTFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OSsqC7qaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func papF6YEYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KQdNVZHlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U8l50bJaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O1KWoX3FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 167
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tjgnZ2a5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zlPwC5b4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cDKQt9zxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3kCq5lvLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6xEURVaHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fPh1f3QxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sKPm4rIrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A8nDLY4PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zaeROsRiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hETZY7F2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8vEhBwZHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MOeIzr2WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i93iK8NfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EGfSx55tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hn06obHqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XNMt9YT7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iMGGif5MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 291
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gsd3auMNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fSMZVPJuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 116
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EBXiGxjJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hjfCa6CrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5gOG8NlYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jVzkYLWqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zYIshscTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AARVw1p1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mn24POxaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XgrFnlwXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 22
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jKJV6ThWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RAahE9xQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LiUUyu7lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NkFUMHS8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bn3KkCRTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eiJzSkpYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AlJ0dv3RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 94GuBFADWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func doeWUPCFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iQkF2oVPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ttwrv8hCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6AOV7Sn9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DLw7uh0aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lkB0jzCkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PZcWWkTnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CFFX8IUlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2qfsM5HYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ru2oy5u3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 73EgbQhOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D7XpoRzYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func daDImnOOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func a5kHQFfdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u7fY7DJWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IMoTk4o8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func juo4cbv7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QulRuYEdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Nm8T3LPYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wNiQNVDWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QV8M9X0PWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A6Kb4Bp7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3QtHmtLkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PhTmqDvIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cP9SmV6XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N1cDREPDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FUYNIUbRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UwXwVeK4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 148
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iAtCiqstWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8EGzDQAUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 254
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3kWeToUhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Y7RPJds7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i8WursplWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JZStrPLTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SsyHQNUwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x2zpcjI7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8kqdSEPLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kHD8S7FHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pDepUfqeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gLWKsaXgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9xGOMEDRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NEuYTxa5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oy6PCXlfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wnN3FTVpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FEbUqEx1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OYdN5q3cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SJk0kDJwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 184
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uMO2yVlCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BgzYS6uqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SGq8n3YoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3xe3ni5gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KPu9e75kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 72UInZyeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XFVikBIkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CckGyYPDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func t7YlxiYNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BmROs81BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 94
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FayBmcvmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o9285bS8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BqCJM7i9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9CnshhU8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ULqosWwXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hyZJLj2UWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JjvrwPuTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RDGiqg6hWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eI5Vd5DoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mcEmB2CnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8uvnzgNKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jujRUxipWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yOqpYb4QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lIz30HEJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DXysQbYNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bC8m9tkSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b1kOpcEaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I55w0NYLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SNaPij6QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P1jfmAE5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DA4z2SaCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p5gMaXZMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sbehQL24Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JK9aTjglWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JwG9VqpQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cfuxK4WjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e5BznEd2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eZ8kIsIgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ozNUOTlBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FLBefDJZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QhFu8IlrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i9osax1TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9uEREtZ3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TOOkMlVkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z0HiaZ8qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BI1NogolWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xiLYSl94Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g2ZIgC03Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TfxxZWY9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tRx7y0CDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tN0uYbEZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wDxBbuHSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mmezYWEvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iLLcFae8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 64KZn89RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0vwfyS4KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 83KQDLIvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func opv852vtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U1gd80SwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 32HtjxYvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uOemCjh9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ri9ZzNVZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nN2Ge7AUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HDvdSQfTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k3XYatEOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 198
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func M2wyawj7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WuAInsQHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4qD2EOEmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZehQBoDsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xaWzugXBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ApX37mSgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YgFDqOxqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cEQhh3IVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r6F3Spv2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZwNT3jrhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ybm2c9CpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ATBKMT5eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VNxAHxXLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2HgAT3gsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oiIuF6R3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DtgFaf9XWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nbFXFccIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HQNSvc4eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Q57MCf8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func R8Ffqo3wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3CNGc74AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MdK7CHNWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7a6EIUdHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 207
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JtRV9CBrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W46Xa6T6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 114
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hdSIjSgjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 177
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kEN3NPxTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MRATw5qfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1jdV4qw7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eie0HaPpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jemyyum1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qQLxoiB1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 295
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cTI32wJNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IUtCqNsgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mIiVjNhjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zD9DdF5nWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BTFYKGOoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gnBFZ8fZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N6pXZdntWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pBkFR3iVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AWRyyItwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f9S7qYP6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dTLaWopeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RIwhaXrPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 137
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ve2NgCUUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6HhScCoaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tRLP1eZ6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G4KdqjjlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mMdQIzqvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3lF4oOTrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uNvbzhacWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PJfOiTMXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LpmMFIVzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XYBoHOPOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XoZBPLbIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r1HG4ZsaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IWZyooDuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A4kVtEiPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QrM4iDbFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZTAcqWJNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OeJsEVsyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6AOF1BiSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MDg3yImJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bjmepWDZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8Zm2YoDxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mc7jLYpLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NLuZkn8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1rDqAbAVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 228
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oIpPv7WoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zKZbV9KHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Okey4jLeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n5vMjdngWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QPDRfCJeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VMSUyM9bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ArtdFnMiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bm1dbSpgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qqj5RXDAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4pBtyrhuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EkzMbEGFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z25F4jWBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i7x0bsqFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XZGlGZ3wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7j1QqvzRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 182
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OCaAFSz7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OuItoQW7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O9CJdpNsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J32qzneuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7upZ0NcFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func szliJAIHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nsvQysXoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 292
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8cpz2sG0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Jj4A8by0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 15Sn93CcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func emQoye07Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n2kwCdmGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tI4CHhgJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func awMkBYNhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ot6QDYZ3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lx2jZovLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 240
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yOerLjs5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 91
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3toprwDoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hBTNTq70Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X8XNxkYiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nEZYk43GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jZJV3LeBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rJS0BDFlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iTreHITGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kfEU5u7cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YQSx1NE4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w7b0InnWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tD841TkQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z9BMqYvWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9DOC5HUEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gXzJMbnUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TY4R8f3MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WFJDIbhKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func loOVvKU3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m5qvL7VkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GXvfeBBQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Fhpwlu58Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UR0dYUXZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X606Sc8uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hiRUJ1C7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ldRTGYBpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sPmZqilxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GOOd3BuGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o7RBN7KAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jaCb1UwdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tvoo5tmPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gTa9GKDbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KabJFrGqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 203
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V8MylkqGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KtNgFkjhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 183
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func siJY9ZV4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5iic5FoFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NdUd3tZgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kIGhNZUYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FDniA34lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bW53to3vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Np5G4kSzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YX4PhvbdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZMWoxzTDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KeUFtINOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nhwlxIdxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rrQVzF0ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LpwB6pM0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3GKgzn1OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EosnMMs2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vygz1lmoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dyXFkLORWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 106
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8LZssi3HWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 31
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0IDjxwe8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Niiy4PS3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func udXNg7jsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8LDzkwe7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func POsOnA7AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xXdsoX1CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MThjzLhfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8P4h9MgjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7vQXYzjvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EJr8tSv1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pwTLO6v1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sUXOzVOlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 265
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FL3OpZdSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0pU8xiZlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N3bZt56TWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AjLSgMBAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 231
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7Snck4WRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kf14rLenWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cgIFCHngWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8d5CQlaeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S9q8lt54Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D9TQSpKvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func srGSbW8AWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zCjWwocDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dvQLQ0WDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KuZxsAI3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qG5BPFQHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 26
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aevOlatMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func B9nO4goVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m5eyO4doWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wi6bsO95Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0El2A87uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 19WHZqStWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7z6V94xGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 74G7S72bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JGO5GOQOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mnsv0hypWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QRkkZoMNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VJN0sm7wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jrqmT8gFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kvCmrVOxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CFT3q43uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uj572XtYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qE13NNwUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func onBtsi82Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rDg7dJ9SWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZeQEYydxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2emi9agKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DlPNp5H0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VnOgYoFYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qLddNluYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fK9mipxOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4H9Mx096Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X1uTTeb4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vgcLBAy8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NUeM2vNyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5PBGfLvFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 144
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gcsTKAc7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RDUsGByPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gf4WL6JRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uuA9Um2BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oUnDZqA2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2WakBM5WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func durZuL2iWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CYJeg2BVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func orn3fl1rWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func clXgqSB3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 159
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1BcCbXaaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 40
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hl51vuxZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nOSM2yCfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bd1V2TZUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EU1HFYttWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MBZZoF7MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func atHDUtYpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yFGpnfMGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lgBj4PcMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 119
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GeCR6XhCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5rFI5OQfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2r5CoBYyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iPdA5fNkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W4oMFEhLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e6qlbAJxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 191
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KftS6Y77Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func udlnGpczWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 293
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WAdtJcXBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AItFuhmbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func F4thOYDgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CKqkh8uYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mIOwqBoxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JUvobwZrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 64
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1xQyNNuXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 190
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rFl6uWRXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wl01F8ShWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IqnBefnMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BXEJqpWYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CQgPh1WHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iMSowXc3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jOawgA27Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZVKGYKBfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h2qnaKPmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 109
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bXti3cC1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zklmRhxVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9MkB5kpRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yNPA7ZGhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JvRwWi1kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JHVnMVNqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QufjFuegWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8obYkdUkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func knHpbN6dWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Be0qWoXXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YOM5tD7uWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 11
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h4ilQUbmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 16
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JMVP54f4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TaeZk69KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ycezTao4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r5M93DTrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UFTNlH6qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MIsGcHLuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aveafqQkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HM7uKjfGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ekYjb34gWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3VkjUZpLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AZQqjc0YWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YHN1t0ZOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W1KRhuMIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qzD6cbE7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pINUva4jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iEirjojEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EH477HwAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JcsFLeoFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bZjBHMynWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 102
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kDXLDLEAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uhyijDqvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g3ALKMsKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lQYxcRhOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hHYZhQ5eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xh8i0O9RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iXPb4C9cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jX1DmChVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 48
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pEsfMY7wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6zIcSrMtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SN89C1iLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 81
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BvgztmL5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func S5P8twc8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PnayLLsvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UsIaBfhwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 283
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fJoN1k31Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kX9zTcD7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dH1bxgnNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mSQMag7IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 209
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uqgCs18pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2eSXu5rzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tJviQsoqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5rSDwihZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D9mPYxzWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 217
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4G1sG1IcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func r3fNRk3VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OsggW5IYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DZNjoZkOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oWlrAq3QWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 297
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SLxrJWvPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 50
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Rj0vcsLsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V32vfkYxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 85
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n0cWbayOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5UXvZl91Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0lOkAVLvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sdrMhUT4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fUmQEtFNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 196
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TIpPRyGVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0ofkra97Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y0t8cEhTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ThBrSTgIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 13
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ughkGpJoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 210
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DBF1BaotWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YiJKwHM4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ucdm0cTkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 162
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YpUByH3RWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ysVcF9V4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 294
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func blDqh7ZIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mCsiuet3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1GYhKYSeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 30FGwRFGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 130
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5qwq12oeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func boji6jHzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Xfwa537KWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RkcnXAYbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gzjVmc0JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KkHqYylsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ll3aYyu8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NzqPE9TBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1ASKhbobWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IdVBtkzmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f9J3gObCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bhSLQLzyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BTe2MBQ1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IjrWx8nxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BMpel3MZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PwYZPThmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ujKI9iwHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kMQtDJliWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tJ7oMe9BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wAcM10vCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 121
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZwmDMkvaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uwaxzfCRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 51
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RwtP1cYJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QyOLkySoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func svhN9tCjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zXHJyNSZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hOVN0yBVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tArfio6BWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NTdkqPBuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7qq2up5DWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BeFY7N5NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 32 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hQtibmiTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 78
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LZlLGqjEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aU6rnqiNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func m7DXoMHnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RfrblyB4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9IKMXnm2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rWjRsEnYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uoKJ7dkHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 271
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iq1xYvFTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kdds6QrjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hr2DV3jLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I6JiJCm4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 67
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sW1kKX5jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tbYdPJw7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QysuQQWKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 42
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eWloostnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mgfVY1BCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JIZyPIAfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YIGPjVRAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W0unS326Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iigA5JsoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FxVgB8KGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 222
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wlGIUZfXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JKXqdJ20Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1qwRtWAcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EKj0HmH5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x97VVY6jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 264
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d5ZMPNatWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 262
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2CTosQngWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CI8JGduqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j0RKLZu4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 185
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pWjNl7W6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 73xbcdalWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ncIO8OG3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 226
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ocoIjzWFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 36
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func e3k3yIUgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JKDDGaO5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NMttmhdhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uXaYMdh3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 229
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PvxgcLkYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aWerv4sPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MzWftao6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 75
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 35HlX9XYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CzMt5W0bWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func s0G2KpdnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 65
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eo8UJC38Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WzW2mHrCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 150
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uvWDieCgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 55
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iQp89pUyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func St6v2VJfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 220
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3JIbH0zCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LTx1MuQFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rT3kQbmDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pqGtyvBnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 213
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aUWmjpLlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8zotCYe3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 267
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DhP3MuxMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 199
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Z5MLGZpHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XOlM7b9GWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qcHntIRQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 14
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zRhzlK6NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZUjvhV0NWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eoRP3ZA5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UwhbrCesWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i0hueDnzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g2kmMV1qWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XzRk8yqYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3RUhekDqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func w2dk6hrgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 70
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wsNmlMbcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 57KRMKePWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6keYUwWyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h7ogOGbaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9eP8UIOxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 277
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RmrZHCKIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QC003eLQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 285
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b1A9xMWwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 879LRq8WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 284
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func X8XKH84CWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z5TjR4yfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MswnQXSYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C315IIWsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dtETJEnFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pAJ4HtBeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nOVjaTjWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MW53tXcKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4vtH60BTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 120
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yNo2bvCeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LXoTM2XjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6hZWyBHiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rSVQEEigWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 57
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ReotMTb6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 139
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func USUwmQs9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tCcRPFDMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2NjW9xwHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 110
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uDfj2xRLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 179
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func LIKfxRojWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func urF8ePfjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 21KVfCneWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zvw4D24MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HTj0NJWBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6TaFGskiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uh1NeJ7jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 216
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DadrdPQmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func b7P9Db35Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kE0szTrrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2CNhr6wVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 200
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iFXNfLNKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DBibKKLtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 13 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uv01SfOmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g5t21ISDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 46 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fg9iFGClWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ql9dwIXaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2bIKOXQUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 272
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Eqt111gjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nPavoJj4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 133
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RXthkohYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oiAPO9yDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CWi4UqwnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zeBhkQEcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func J519h4YDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 46
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PZlsDeLkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func N6yHsNvYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func x95A7XsmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func d1wLpwAvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 206
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func buPTOyzUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ydE0mNRPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 43
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ugv4rYRbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NhtPAEEfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ncygFnqxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Co4zALSeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zRHidErYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9zzjKyfFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func v0aReXTNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f1CzXskZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dc4yIznwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func jMi8tffeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oGuDIgKiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RtitOu6MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eluDTyJsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pViMLMq1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 76 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 13n1YOHSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 168
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func D5kcv8mxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kzOm9ixcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func szJoWHxJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 278
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yKxqULxdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BvFtKHM9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DzUgbao1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 7F3A0ehYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lpUT3wMjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XI7eyGXsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 282
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wFmWHch5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SD2tpLbSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func E3uTMtcrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 20 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mlhlw9KTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 232
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HskhRA5tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 135
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2YrvicqqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mECNbXxeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func n8uaM0bcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DQhxbgE7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FHBNoBx5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 195
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ROnngzI3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Buzy6VWTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func O1a4TJYYWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 171
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0KuawjELWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 249
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9i3gjH3kWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bz4cQ2xQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 99
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WHOAfIWjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gqycJup9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tkM4F1rNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YBL1WIITWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JQKxQDjWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 181
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Cd0q7GsdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q35n4TPIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 163
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BdkqOJMFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 205
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func o9iwbaciWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Z4rcn0zWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 111
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tvBfd6qqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PXLPkrgBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nhrj6e06Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oSVZidVlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kRCfDVJzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pK1ANwlnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 62XzaHinWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 129
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func tpBrNNUdWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 72
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h3OwljbkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 193
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func AZqSiUS9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 80 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z5Up837jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oTuO0abfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RjakmHvvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gk55phKPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 45 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cnr97J3eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 147
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mfm7tMKiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6TUaiAgwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 131
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hVStveMBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 189
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dekikY92Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0LSz8lGvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 125
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func grR2OfwxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eBnczELTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hRqVeEpyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 28
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8H4LBD8ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C8VSNEdWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 253
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wzqp7YTTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j3bnVYKEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 166
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func j1AlGxOtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hHXqSI0sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WGxqhPfmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 234
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CrO1atovWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 261
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NtM9hn8MWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 192
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I3diLmKXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func V8UVR4nAWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 17
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EgYYIcPRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u3T1jC4eWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yCbUACj4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zjZLL3HBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 224
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hRmZGZfQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 77
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func u7RHoYMbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 33
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WdPyWdaVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dOUOrjnzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 172
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dNTdaEScWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Huxj4pMeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 124
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5bCG0cbBWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PaGvNGjTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bPNHKWovWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HAEcJtDkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UlhDdUyhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 138
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func EQasUYQyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 93
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kW9t21WhWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rbocIh8fWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hgw92gUEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 61
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wkQ60N2lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GozFBpxVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 151
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UlrHPD0sWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k0qkncfVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nGsBCAL6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kiWbnbgTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 236
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KZL9UviQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 221
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3MTU9qXrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 37
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l0zW7QtcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5SQDjRxaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 225
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aP1Qgd89Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 12
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wdCRX8syWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 287
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c4PerPBKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 37AQiiD2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6DCWQY7FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qyPno9mcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xIJUmqFOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 155
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TY8EA0zfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func W5UuQ1ApWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 276
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func y7HFTo5lWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hTlIuMAaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ZFAJDHJNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func oq4Z5hatWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vwHWi5PvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ucbuYs88Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 40 + 153
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l52izGGZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 63 + 211
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TepLyHUzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 134
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func H3ZxpETSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 174
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func KT2K5JhzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 35 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cxRFUoPtWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func C3Uw98uxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 145
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FQfmjowqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 15 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4EcfbZehWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3682755cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4W6mZVsgWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 175
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Bhd3Y8JIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NK4AX06VWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 156
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SBtxJRw0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 127
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Zn9uWZ84Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 31 + 38
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bh5RjuC0Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 51 + 201
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OfSe8yu6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qBXUqtMDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 194
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8N6nYVy9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JngAQIYQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aeJbGGyPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func gSedAIBaWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JqMt2MeZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uN9FdxCnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 49
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iC2X3TwoWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fpkfVe3xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 63
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cYQvdPdPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func I9qYtBgyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 58
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1qntd9D7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 140
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eDErsVPeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 180
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WQCwlIwcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 161
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cIQeCKiIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 255
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func A8VnEkw2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 123
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4u2Xc0gnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 143
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Vr1jpdUIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 87
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func DrGsw4zSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func NLbtERI8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0dc2WMInWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zMR4NvXfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 25 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dhat7zZGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 41
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Qf3eNPqfWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 62 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XRpTWoq8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uo7mJsiCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 227
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Uv24anssWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 263
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func i3b5tQ5xWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bTBy0QWSWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XTmB4JUGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 81 + 237
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Dt5JmWQuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 30
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rX86cZhRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 83 + 165
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9cwF6sFiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 53
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vy190lqNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 290
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eDsXMeu7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 35
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nbj1ofIpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 8 + 154
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kExcWzWLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 251
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func T6qHjjakWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 39
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func pUv2cKcMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 61 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TwfMctU8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zrBGkkozWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 15
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Y0uzNjlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 300
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4OaGSAFjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Or719nMkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zrRiD4mEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 176
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func shl78h2OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 32
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6IMf9yJrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 103
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rl8ybfSiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JJazzpiZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 36 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aKac7FftWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 74
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mnQnVaNRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 64 + 19
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WDnSFjY5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 9 + 112
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lsDZGHJvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XkiIaKL1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func L65iWsR9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 62
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 3zxxH3omWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func cceJ3IbjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 44
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QoECWaSWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q18hghVEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 266
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func U2DIOnoNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 107
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TW3LBncpWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 33 + 197
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OizdRqX8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 202
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CtgevJttWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 238
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func QJuHPJgRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 247
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func z0QTj8RDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 84
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func eAZrImzeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 30 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4frSTqRJWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 41 + 21
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Net4tmToWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 259
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qter0EnrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 22 + 146
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func K4Gm3MzxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 11 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fzuPaqe3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 49 + 149
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func wWGBy2qiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 208
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 057qwsutWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FTjuAX8wWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 59
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func p36K5YBuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 56
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VrSu4PGOWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 242
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func VKpT7DP2Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 79
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sfYUTOMxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func aC89HfilWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4eAvW7AUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 260
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mei5pQBsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func f2r8uma8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l5pgGhWbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fvHtPBlqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 34
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func c5ul0goEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 82
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iTHhQuD5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func nGZqAPTMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 85 + 244
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WiHQiKevWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 26 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1qDtCylLWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 299
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4GX3eCpDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 115
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UN3jWFKxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 188
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func sXESNnZyWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func P0220XqzWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 14 + 243
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func SZcwwhT5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Ksl4w4LwWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 296
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TGjvbVZ8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 246
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Tq5e98GxWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 90
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kcQ2ScRPWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 70 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6zM9JNPKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 204
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func rBBObf7ZWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 250
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4Z4smcITWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8R8zFhMnWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 37 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6h65Kk0JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 4 + 88
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9lwotjbMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 98
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qJfzmSZ4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 90 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func olOPMtjrWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 223
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2Zu18u23Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 212
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qsoRePXNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 66
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func akh1aatuWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 235
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func crww0XnHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 92
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func RqDXZyhIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 54 + 122
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HbBJTahQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 86 + 101
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mW2QqmKUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 104
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 480svu6IWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 66 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func bRaNb3KVWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 97
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l2d3A2bXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YR1Edzl8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 71
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BmXrBloeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 80
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lywUT5u5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 118
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XtC00Yz6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 55 + 286
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func CAjO1YHmWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func qThRsz58Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 53 + 256
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Wyq6RI4tWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4FSmRY33Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 281
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 12Ts9iVEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 2 + 248
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func kKtZJUEKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l6kizSN3Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 126
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func axuaklURWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 158
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func OKv9KMSDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 58 + 47
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ExQRsnqNWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 173
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func FV3X4bB1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 72 + 187
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ypPy7BFDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 4dVfwL8jWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 69
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func PBivkLpMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 79 + 169
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func xD7iCYnKWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 59 + 89
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XWgVbvLbWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 68 + 275
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func zlWQGjARWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 27 + 29
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func UMYapgWUWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 7 + 25
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mS1papVGWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 21 + 20
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ojNnmqL7Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 24 + 60
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fBZeuqwlWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 230
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6oS0KXC4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 69 + 128
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func meNVnoXsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 28 + 233
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HFTnwdLQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 16 + 280
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WeUPOs96Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 47 + 24
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 1K2xRsrXWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 57 + 95
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5Z849rCkWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 60 + 45
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func G61YX6qEWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 84 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lOZrzwfiWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 77 + 152
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XzhuwaPCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 268
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func TitbxDllWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 18 + 257
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XmPQMOtQWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 65 + 136
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func uLCM3VL6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 279
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func Mwe1tvD8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func h5i71PmeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 113
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ucEeBQojWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 23
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HVwsYgxFWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 48 + 132
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YVlg2C4JWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 34 + 245
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func HTkja4u5Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 38 + 273
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yFc9Fit6Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 12 + 218
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 2oHdbX9WWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 239
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 6ByiUQ1aWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 87 + 117
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MQuEqdTHWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 10
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 0YoZPKl1Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 50 + 52
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ItCIDSccWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 56 + 160
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func q89w2R8cWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 78 + 215
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func mHaXpcQRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 214
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func MoUbBmreWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 67 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 8m9Yw83OWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 76
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func IVPOr5GCWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 23 + 186
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 9isfWGKRWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 6 + 298
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func l45Q5tPqWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 19 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func g2r6DSbeWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 68
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func khoze1SIWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 43 + 142
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func ca7PmitcWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 274
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func vJq6EiG9Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 105
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 5pumaX9vWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 10 + 289
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WQvRVd23Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 17 + 258
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func yi1j2KH4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 82 + 270
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func WIMKeb1pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 44 + 108
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func BjSVAtWDWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 3 + 252
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func GLPsZA2pWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 42 + 178
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func iH7BS3fvWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 71 + 288
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func lcbhkc8FWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 73 + 27
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func XS8BPQf8Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 29 + 83
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func hSFr7oLWWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 89 + 241
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func JXSkVZpsWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 74 + 18
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func YOvHvXCTWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 52 + 269
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func dyyMiNwjWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 5 + 219
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func k46coqtMWorker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 88 + 100
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func fGNgFIa4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 39 + 157
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

func 46oEsfs4Worker(wg *sync.WaitGroup, id int, dataChan <-chan int) {
    defer wg.Done()
    for val := range dataChan {
        result := val * 75 + 73
        fmt.Printf("worker %d → %d\n", id, result)
    }
}

