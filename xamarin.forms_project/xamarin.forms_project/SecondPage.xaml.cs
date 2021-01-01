using System;
using Xamarin.Forms;

namespace xamarin.forms_project
{
    public partial class SecondPage : ContentPage
    {
        public SecondPage()
        {
            InitializeComponent();
        }

        private void Button_Clicked(object sender, EventArgs e)
        {
            Navigation.PushAsync(new ThirdPage());
        }
    }
}
