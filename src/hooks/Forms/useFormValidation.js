const useFormValidation = () => {

    const isValidEmail = (email) => {
        if(email === '') return false;
        let regexp = new RegExp('^w+([.-]?w+)*@w+([.-]?w+)*(.w{2,3})+$');
        return regexp.test(email);
    }

    const hasAtLeastOneUppercaseChar = (string) => {
        if (string === '') return false;
        let regexp = new RegExp('?=.*[A-Z]');
        return regexp.test(string);
    }

    const hasAtLeastOneNumber = (string) => {
        if (string === '') return false;
        let regexp = new RegExp('?=.*[0-9]');
        return regexp.test(string);
    }

    return {isValidEmail, hasAtLeastOneUppercaseChar, hasAtLeastOneNumber};
}
 
export default useFormValidation;
