import { formatDate } from "@angular/common";


export class Movement {
    id: number;
    vessel_load_id: number;
    vessel_load_ref: string;
    vl_location_name: string;
    vl_location_type: string;
    vl_location_country: string;
    vl_location_ABRV_country: string;
    vl_location_timezone: string;  
    vl_readings_datetime: string;
    vl_readings_eventDate: string;

    vessel_discharge_id: number;
    vessel_discharge_ref: string;
    vd_location_name: string;
    vd_location_type: string;
    vd_location_country: string;
    vd_location_ABRV_country: string;
    vd_location_timezone: string;  
    vd_readings_datetime: string;
    vd_readings_eventDate: string;

     newDate_vl_readings_datetime : Date;
     newDate_vd_readings_datetime : Date;
     formatedDateForTimeLine : string;

    constructor(movementResponse : any){
        this.id = movementResponse.id;
        this.vessel_load_id = movementResponse['vessel_telo_loading']['id'];
        this.vessel_load_ref = movementResponse['vessel_telo_loading']['reference'];
        this.vl_location_name = movementResponse['vessel_telo_loading']['location']['name'];
        this.vl_location_type = movementResponse['vessel_telo_loading']['location']['type'];
        this.vl_location_country = movementResponse['vessel_telo_loading']['location']['country']['name'];
        this.vl_location_timezone = movementResponse['vessel_telo_loading']['location']['timezone'];
        this.vl_readings_datetime = movementResponse['vessel_telo_loading']['readings']['reading'];
        this.vl_readings_eventDate = movementResponse['vessel_telo_loading']['readings']['event_date'];
        
        this.vessel_discharge_id = movementResponse['vessel_telo_discharge']['id'];
        this.vessel_discharge_ref = movementResponse['vessel_telo_discharge']['reference'];
        this.vd_location_name = movementResponse['vessel_telo_discharge']['location']['name'];
        this.vd_location_type = movementResponse['vessel_telo_discharge']['location']['type'];
        this.vd_location_country = movementResponse['vessel_telo_discharge']['location']['country']['name'];
        this.vd_location_timezone = movementResponse['vessel_telo_discharge']['location']['timezone'];
        this.vd_readings_datetime = movementResponse['vessel_telo_discharge']['readings']['reading'];
        this.vd_readings_eventDate = movementResponse['vessel_telo_discharge']['readings']['event_date'];
        this.newDate_vl_readings_datetime = new Date(this.vl_readings_datetime);
        this.newDate_vd_readings_datetime = new Date(this.vd_readings_datetime);
        this.formatedDateForTimeLine=formatDate(this.vl_readings_datetime, 'dd/MM/yyyy', 'en-US');

        if(this.vl_location_country =="India")  {
            this.vl_location_ABRV_country="flag-icon flag-icon-in"; 
        }
        if(this.vl_location_country =="Netherlands")  {
            this.vl_location_ABRV_country="flag-icon flag-icon-nl"; 
        }
        if(this.vl_location_country =="Poland")  {
            this.vl_location_ABRV_country="flag-icon flag-icon-pl"; 
        }

        
        if(this.vd_location_country =="India")  {
            this.vd_location_ABRV_country="flag-icon flag-icon-in"; 
        }
        if(this.vd_location_country =="Netherlands")  {
            this.vd_location_ABRV_country="flag-icon flag-icon-nl"; 
        }
        if(this.vd_location_country =="Poland")  {
            this.vd_location_ABRV_country="flag-icon flag-icon-pl"; 
        }



      



    }

}
