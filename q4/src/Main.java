public class Main {
    public static char[] replaceBlank(char[] target) {
        int whiteSpaceCount = 0;
        int j = 0;
        // 统计空格数
        for (int i = 0;i < target.length;i++) {
            if (target[i] == ' ') {
                whiteSpaceCount++;
            }
         }
        // 直接得到替换后的数组长度
        char[] replaced = new char[target.length + whiteSpaceCount * 2];
        for (int i = 0;i < target.length;i++) {
            if (target[i] != ' ') {
                replaced[j] = target[i];
                j++;
            } else {
                replaced[j] = '%';
                replaced[j+1] = '2';
                replaced[j+2] = '0';
                j += 3;
            }
        }
        return replaced;
    }
    public static void main(String[] args) {
        char[] string = new char[12];
        string[0] = 'W';
        string[1] = 'e';
        string[2] = ' ';
        string[3] = 'a';
        string[4] = 'r';
        string[5] = 'e';
        string[6] = ' ';
        string[7] = 'h';
        string[8] = 'a';
        string[9] = 'p';
        string[10] = 'p';
        string[11] = 'y';
        System.out.println(string);
        System.out.println(replaceBlank(string));
    }
}
