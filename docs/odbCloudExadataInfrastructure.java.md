# `odbCloudExadataInfrastructure` Submodule <a name="`odbCloudExadataInfrastructure` Submodule" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### OdbCloudExadataInfrastructure <a name="OdbCloudExadataInfrastructure" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure awscc_odb_cloud_exadata_infrastructure}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructure;

OdbCloudExadataInfrastructure.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .computeCount(java.lang.Number)
//  .customerContactsToSendToOci(IResolvable|java.util.List<OdbCloudExadataInfrastructureCustomerContactsToSendToOci>)
//  .databaseServerType(java.lang.String)
//  .displayName(java.lang.String)
//  .maintenanceWindow(OdbCloudExadataInfrastructureMaintenanceWindow)
//  .shape(java.lang.String)
//  .storageCount(java.lang.Number)
//  .storageServerType(java.lang.String)
//  .tags(IResolvable|java.util.List<OdbCloudExadataInfrastructureTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The name of the Availability Zone (AZ) where the Exadata infrastructure is located. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | The AZ ID of the AZ where the Exadata infrastructure is located. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | The number of database servers for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>></code> | The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.databaseServerType">databaseServerType</a></code> | <code>java.lang.String</code> | The database server model type of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-friendly name for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a></code> | The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.shape">shape</a></code> | <code>java.lang.String</code> | The model name of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | The number of storage servers that are activated for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.storageServerType">storageServerType</a></code> | <code>java.lang.String</code> | The storage server model type of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>></code> | Tags to assign to the Exadata Infrastructure. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

The name of the Availability Zone (AZ) where the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone OdbCloudExadataInfrastructure#availability_zone}

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.availabilityZoneId"></a>

- *Type:* java.lang.String

The AZ ID of the AZ where the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone_id OdbCloudExadataInfrastructure#availability_zone_id}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.computeCount"></a>

- *Type:* java.lang.Number

The number of database servers for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#compute_count OdbCloudExadataInfrastructure#compute_count}

---

##### `customerContactsToSendToOci`<sup>Optional</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.customerContactsToSendToOci"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>>

The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#customer_contacts_to_send_to_oci OdbCloudExadataInfrastructure#customer_contacts_to_send_to_oci}

---

##### `databaseServerType`<sup>Optional</sup> <a name="databaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.databaseServerType"></a>

- *Type:* java.lang.String

The database server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#database_server_type OdbCloudExadataInfrastructure#database_server_type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

The user-friendly name for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#display_name OdbCloudExadataInfrastructure#display_name}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.maintenanceWindow"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#maintenance_window OdbCloudExadataInfrastructure#maintenance_window}

---

##### `shape`<sup>Optional</sup> <a name="shape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.shape"></a>

- *Type:* java.lang.String

The model name of the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#shape OdbCloudExadataInfrastructure#shape}

---

##### `storageCount`<sup>Optional</sup> <a name="storageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.storageCount"></a>

- *Type:* java.lang.Number

The number of storage servers that are activated for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#storage_count OdbCloudExadataInfrastructure#storage_count}

---

##### `storageServerType`<sup>Optional</sup> <a name="storageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.storageServerType"></a>

- *Type:* java.lang.String

The storage server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#storage_server_type OdbCloudExadataInfrastructure#storage_server_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>>

Tags to assign to the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#tags OdbCloudExadataInfrastructure#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci">putCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow">putMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZoneId">resetAvailabilityZoneId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetComputeCount">resetComputeCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetCustomerContactsToSendToOci">resetCustomerContactsToSendToOci</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDatabaseServerType">resetDatabaseServerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetMaintenanceWindow">resetMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetShape">resetShape</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageCount">resetStorageCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageServerType">resetStorageServerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putCustomerContactsToSendToOci` <a name="putCustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci"></a>

```java
public void putCustomerContactsToSendToOci(IResolvable|java.util.List<OdbCloudExadataInfrastructureCustomerContactsToSendToOci> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putCustomerContactsToSendToOci.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>>

---

##### `putMaintenanceWindow` <a name="putMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow"></a>

```java
public void putMaintenanceWindow(OdbCloudExadataInfrastructureMaintenanceWindow value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putMaintenanceWindow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<OdbCloudExadataInfrastructureTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>>

---

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetAvailabilityZoneId` <a name="resetAvailabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetAvailabilityZoneId"></a>

```java
public void resetAvailabilityZoneId()
```

##### `resetComputeCount` <a name="resetComputeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetComputeCount"></a>

```java
public void resetComputeCount()
```

##### `resetCustomerContactsToSendToOci` <a name="resetCustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetCustomerContactsToSendToOci"></a>

```java
public void resetCustomerContactsToSendToOci()
```

##### `resetDatabaseServerType` <a name="resetDatabaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDatabaseServerType"></a>

```java
public void resetDatabaseServerType()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetMaintenanceWindow` <a name="resetMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetMaintenanceWindow"></a>

```java
public void resetMaintenanceWindow()
```

##### `resetShape` <a name="resetShape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetShape"></a>

```java
public void resetShape()
```

##### `resetStorageCount` <a name="resetStorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageCount"></a>

```java
public void resetStorageCount()
```

##### `resetStorageServerType` <a name="resetStorageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetStorageServerType"></a>

```java
public void resetStorageServerType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a OdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructure;

OdbCloudExadataInfrastructure.isConstruct(java.lang.Object x)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructure;

OdbCloudExadataInfrastructure.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructure;

OdbCloudExadataInfrastructure.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructure;

OdbCloudExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),OdbCloudExadataInfrastructure.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a OdbCloudExadataInfrastructure resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the OdbCloudExadataInfrastructure to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing OdbCloudExadataInfrastructure that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the OdbCloudExadataInfrastructure to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.activatedStorageCount">activatedStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.additionalStorageCount">additionalStorageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availableStorageSizeInGBs">availableStorageSizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn">cloudExadataInfrastructureArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId">cloudExadataInfrastructureId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeModel">computeModel</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cpuCount">cpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList">OdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dataStorageSizeInTBs">dataStorageSizeInTBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs">dbNodeStorageSizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerIds">dbServerIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerVersion">dbServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference">OdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxCpuCount">maxCpuCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDataStorageInTBs">maxDataStorageInTBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs">maxDbNodeStorageSizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxMemoryInGBs">maxMemoryInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.memorySizeInGBs">memorySizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ocid">ocid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociResourceAnchorName">ociResourceAnchorName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociUrl">ociUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerVersion">storageServerVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList">OdbCloudExadataInfrastructureTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.totalStorageSizeInGBs">totalStorageSizeInGBs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneIdInput">availabilityZoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCountInput">computeCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOciInput">customerContactsToSendToOciInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerTypeInput">databaseServerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindowInput">maintenanceWindowInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shapeInput">shapeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCountInput">storageCountInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerTypeInput">storageServerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerType">databaseServerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shape">shape</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerType">storageServerType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `activatedStorageCount`<sup>Required</sup> <a name="activatedStorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.activatedStorageCount"></a>

```java
public java.lang.Number getActivatedStorageCount();
```

- *Type:* java.lang.Number

---

##### `additionalStorageCount`<sup>Required</sup> <a name="additionalStorageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.additionalStorageCount"></a>

```java
public java.lang.Number getAdditionalStorageCount();
```

- *Type:* java.lang.Number

---

##### `availableStorageSizeInGBs`<sup>Required</sup> <a name="availableStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availableStorageSizeInGBs"></a>

```java
public java.lang.Number getAvailableStorageSizeInGBs();
```

- *Type:* java.lang.Number

---

##### `cloudExadataInfrastructureArn`<sup>Required</sup> <a name="cloudExadataInfrastructureArn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureArn"></a>

```java
public java.lang.String getCloudExadataInfrastructureArn();
```

- *Type:* java.lang.String

---

##### `cloudExadataInfrastructureId`<sup>Required</sup> <a name="cloudExadataInfrastructureId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cloudExadataInfrastructureId"></a>

```java
public java.lang.String getCloudExadataInfrastructureId();
```

- *Type:* java.lang.String

---

##### `computeModel`<sup>Required</sup> <a name="computeModel" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeModel"></a>

```java
public java.lang.String getComputeModel();
```

- *Type:* java.lang.String

---

##### `cpuCount`<sup>Required</sup> <a name="cpuCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.cpuCount"></a>

```java
public java.lang.Number getCpuCount();
```

- *Type:* java.lang.Number

---

##### `customerContactsToSendToOci`<sup>Required</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOci"></a>

```java
public OdbCloudExadataInfrastructureCustomerContactsToSendToOciList getCustomerContactsToSendToOci();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList">OdbCloudExadataInfrastructureCustomerContactsToSendToOciList</a>

---

##### `dataStorageSizeInTBs`<sup>Required</sup> <a name="dataStorageSizeInTBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dataStorageSizeInTBs"></a>

```java
public java.lang.Number getDataStorageSizeInTBs();
```

- *Type:* java.lang.Number

---

##### `dbNodeStorageSizeInGBs`<sup>Required</sup> <a name="dbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbNodeStorageSizeInGBs"></a>

```java
public java.lang.Number getDbNodeStorageSizeInGBs();
```

- *Type:* java.lang.Number

---

##### `dbServerIds`<sup>Required</sup> <a name="dbServerIds" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerIds"></a>

```java
public java.util.List<java.lang.String> getDbServerIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `dbServerVersion`<sup>Required</sup> <a name="dbServerVersion" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.dbServerVersion"></a>

```java
public java.lang.String getDbServerVersion();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `maintenanceWindow`<sup>Required</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindow"></a>

```java
public OdbCloudExadataInfrastructureMaintenanceWindowOutputReference getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference">OdbCloudExadataInfrastructureMaintenanceWindowOutputReference</a>

---

##### `maxCpuCount`<sup>Required</sup> <a name="maxCpuCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxCpuCount"></a>

```java
public java.lang.Number getMaxCpuCount();
```

- *Type:* java.lang.Number

---

##### `maxDataStorageInTBs`<sup>Required</sup> <a name="maxDataStorageInTBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDataStorageInTBs"></a>

```java
public java.lang.Number getMaxDataStorageInTBs();
```

- *Type:* java.lang.Number

---

##### `maxDbNodeStorageSizeInGBs`<sup>Required</sup> <a name="maxDbNodeStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxDbNodeStorageSizeInGBs"></a>

```java
public java.lang.Number getMaxDbNodeStorageSizeInGBs();
```

- *Type:* java.lang.Number

---

##### `maxMemoryInGBs`<sup>Required</sup> <a name="maxMemoryInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maxMemoryInGBs"></a>

```java
public java.lang.Number getMaxMemoryInGBs();
```

- *Type:* java.lang.Number

---

##### `memorySizeInGBs`<sup>Required</sup> <a name="memorySizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.memorySizeInGBs"></a>

```java
public java.lang.Number getMemorySizeInGBs();
```

- *Type:* java.lang.Number

---

##### `ocid`<sup>Required</sup> <a name="ocid" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ocid"></a>

```java
public java.lang.String getOcid();
```

- *Type:* java.lang.String

---

##### `ociResourceAnchorName`<sup>Required</sup> <a name="ociResourceAnchorName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociResourceAnchorName"></a>

```java
public java.lang.String getOciResourceAnchorName();
```

- *Type:* java.lang.String

---

##### `ociUrl`<sup>Required</sup> <a name="ociUrl" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.ociUrl"></a>

```java
public java.lang.String getOciUrl();
```

- *Type:* java.lang.String

---

##### `storageServerVersion`<sup>Required</sup> <a name="storageServerVersion" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerVersion"></a>

```java
public java.lang.String getStorageServerVersion();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tags"></a>

```java
public OdbCloudExadataInfrastructureTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList">OdbCloudExadataInfrastructureTagsList</a>

---

##### `totalStorageSizeInGBs`<sup>Required</sup> <a name="totalStorageSizeInGBs" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.totalStorageSizeInGBs"></a>

```java
public java.lang.Number getTotalStorageSizeInGBs();
```

- *Type:* java.lang.Number

---

##### `availabilityZoneIdInput`<sup>Optional</sup> <a name="availabilityZoneIdInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneIdInput"></a>

```java
public java.lang.String getAvailabilityZoneIdInput();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `computeCountInput`<sup>Optional</sup> <a name="computeCountInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCountInput"></a>

```java
public java.lang.Number getComputeCountInput();
```

- *Type:* java.lang.Number

---

##### `customerContactsToSendToOciInput`<sup>Optional</sup> <a name="customerContactsToSendToOciInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.customerContactsToSendToOciInput"></a>

```java
public IResolvable|java.util.List<OdbCloudExadataInfrastructureCustomerContactsToSendToOci> getCustomerContactsToSendToOciInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>>

---

##### `databaseServerTypeInput`<sup>Optional</sup> <a name="databaseServerTypeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerTypeInput"></a>

```java
public java.lang.String getDatabaseServerTypeInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `maintenanceWindowInput`<sup>Optional</sup> <a name="maintenanceWindowInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.maintenanceWindowInput"></a>

```java
public IResolvable|OdbCloudExadataInfrastructureMaintenanceWindow getMaintenanceWindowInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

---

##### `shapeInput`<sup>Optional</sup> <a name="shapeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shapeInput"></a>

```java
public java.lang.String getShapeInput();
```

- *Type:* java.lang.String

---

##### `storageCountInput`<sup>Optional</sup> <a name="storageCountInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCountInput"></a>

```java
public java.lang.Number getStorageCountInput();
```

- *Type:* java.lang.Number

---

##### `storageServerTypeInput`<sup>Optional</sup> <a name="storageServerTypeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerTypeInput"></a>

```java
public java.lang.String getStorageServerTypeInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tagsInput"></a>

```java
public IResolvable|java.util.List<OdbCloudExadataInfrastructureTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `availabilityZoneId`<sup>Required</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

---

##### `computeCount`<sup>Required</sup> <a name="computeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

---

##### `databaseServerType`<sup>Required</sup> <a name="databaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.databaseServerType"></a>

```java
public java.lang.String getDatabaseServerType();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `shape`<sup>Required</sup> <a name="shape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

---

##### `storageCount`<sup>Required</sup> <a name="storageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageCount"></a>

```java
public java.lang.Number getStorageCount();
```

- *Type:* java.lang.Number

---

##### `storageServerType`<sup>Required</sup> <a name="storageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.storageServerType"></a>

```java
public java.lang.String getStorageServerType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructure.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### OdbCloudExadataInfrastructureConfig <a name="OdbCloudExadataInfrastructureConfig" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructureConfig;

OdbCloudExadataInfrastructureConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
//  .availabilityZone(java.lang.String)
//  .availabilityZoneId(java.lang.String)
//  .computeCount(java.lang.Number)
//  .customerContactsToSendToOci(IResolvable|java.util.List<OdbCloudExadataInfrastructureCustomerContactsToSendToOci>)
//  .databaseServerType(java.lang.String)
//  .displayName(java.lang.String)
//  .maintenanceWindow(OdbCloudExadataInfrastructureMaintenanceWindow)
//  .shape(java.lang.String)
//  .storageCount(java.lang.Number)
//  .storageServerType(java.lang.String)
//  .tags(IResolvable|java.util.List<OdbCloudExadataInfrastructureTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | The name of the Availability Zone (AZ) where the Exadata infrastructure is located. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZoneId">availabilityZoneId</a></code> | <code>java.lang.String</code> | The AZ ID of the AZ where the Exadata infrastructure is located. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.computeCount">computeCount</a></code> | <code>java.lang.Number</code> | The number of database servers for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.customerContactsToSendToOci">customerContactsToSendToOci</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>></code> | The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.databaseServerType">databaseServerType</a></code> | <code>java.lang.String</code> | The database server model type of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | The user-friendly name for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.maintenanceWindow">maintenanceWindow</a></code> | <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a></code> | The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.shape">shape</a></code> | <code>java.lang.String</code> | The model name of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageCount">storageCount</a></code> | <code>java.lang.Number</code> | The number of storage servers that are activated for the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageServerType">storageServerType</a></code> | <code>java.lang.String</code> | The storage server model type of the Exadata infrastructure. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>></code> | Tags to assign to the Exadata Infrastructure. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

The name of the Availability Zone (AZ) where the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone OdbCloudExadataInfrastructure#availability_zone}

---

##### `availabilityZoneId`<sup>Optional</sup> <a name="availabilityZoneId" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.availabilityZoneId"></a>

```java
public java.lang.String getAvailabilityZoneId();
```

- *Type:* java.lang.String

The AZ ID of the AZ where the Exadata infrastructure is located.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#availability_zone_id OdbCloudExadataInfrastructure#availability_zone_id}

---

##### `computeCount`<sup>Optional</sup> <a name="computeCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.computeCount"></a>

```java
public java.lang.Number getComputeCount();
```

- *Type:* java.lang.Number

The number of database servers for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#compute_count OdbCloudExadataInfrastructure#compute_count}

---

##### `customerContactsToSendToOci`<sup>Optional</sup> <a name="customerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.customerContactsToSendToOci"></a>

```java
public IResolvable|java.util.List<OdbCloudExadataInfrastructureCustomerContactsToSendToOci> getCustomerContactsToSendToOci();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>>

The email addresses of contacts to receive notification from Oracle about maintenance updates for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#customer_contacts_to_send_to_oci OdbCloudExadataInfrastructure#customer_contacts_to_send_to_oci}

---

##### `databaseServerType`<sup>Optional</sup> <a name="databaseServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.databaseServerType"></a>

```java
public java.lang.String getDatabaseServerType();
```

- *Type:* java.lang.String

The database server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#database_server_type OdbCloudExadataInfrastructure#database_server_type}

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

The user-friendly name for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#display_name OdbCloudExadataInfrastructure#display_name}

---

##### `maintenanceWindow`<sup>Optional</sup> <a name="maintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.maintenanceWindow"></a>

```java
public OdbCloudExadataInfrastructureMaintenanceWindow getMaintenanceWindow();
```

- *Type:* <a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

The scheduling details for the maintenance window. Patching and system updates take place during the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#maintenance_window OdbCloudExadataInfrastructure#maintenance_window}

---

##### `shape`<sup>Optional</sup> <a name="shape" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.shape"></a>

```java
public java.lang.String getShape();
```

- *Type:* java.lang.String

The model name of the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#shape OdbCloudExadataInfrastructure#shape}

---

##### `storageCount`<sup>Optional</sup> <a name="storageCount" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageCount"></a>

```java
public java.lang.Number getStorageCount();
```

- *Type:* java.lang.Number

The number of storage servers that are activated for the Exadata infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#storage_count OdbCloudExadataInfrastructure#storage_count}

---

##### `storageServerType`<sup>Optional</sup> <a name="storageServerType" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.storageServerType"></a>

```java
public java.lang.String getStorageServerType();
```

- *Type:* java.lang.String

The storage server model type of the Exadata infrastructure.

For the list of valid model names, use the ListDbSystemShapes operation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#storage_server_type OdbCloudExadataInfrastructure#storage_server_type}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureConfig.property.tags"></a>

```java
public IResolvable|java.util.List<OdbCloudExadataInfrastructureTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>>

Tags to assign to the Exadata Infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#tags OdbCloudExadataInfrastructure#tags}

---

### OdbCloudExadataInfrastructureCustomerContactsToSendToOci <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOci" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci;

OdbCloudExadataInfrastructureCustomerContactsToSendToOci.builder()
//  .email(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.property.email">email</a></code> | <code>java.lang.String</code> | The email address of the contact. |

---

##### `email`<sup>Optional</sup> <a name="email" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

The email address of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#email OdbCloudExadataInfrastructure#email}

---

### OdbCloudExadataInfrastructureMaintenanceWindow <a name="OdbCloudExadataInfrastructureMaintenanceWindow" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructureMaintenanceWindow;

OdbCloudExadataInfrastructureMaintenanceWindow.builder()
//  .customActionTimeoutInMins(java.lang.Number)
//  .daysOfWeek(java.util.List<java.lang.String>)
//  .hoursOfDay(java.util.List<java.lang.Number>)
//  .isCustomActionTimeoutEnabled(java.lang.Boolean|IResolvable)
//  .leadTimeInWeeks(java.lang.Number)
//  .months(java.util.List<java.lang.String>)
//  .patchingMode(java.lang.String)
//  .preference(java.lang.String)
//  .weeksOfMonth(java.util.List<java.lang.Number>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | The timeout duration for custom actions in minutes. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | The days of the week when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | The hours of the day when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates whether custom action timeout is enabled. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | The lead time in weeks before the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.months">months</a></code> | <code>java.util.List<java.lang.String></code> | The months when maintenance can be performed. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | The patching mode for the maintenance window. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.preference">preference</a></code> | <code>java.lang.String</code> | The preference for the maintenance window scheduling. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | The weeks of the month when maintenance can be performed. |

---

##### `customActionTimeoutInMins`<sup>Optional</sup> <a name="customActionTimeoutInMins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

The timeout duration for custom actions in minutes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#custom_action_timeout_in_mins OdbCloudExadataInfrastructure#custom_action_timeout_in_mins}

---

##### `daysOfWeek`<sup>Optional</sup> <a name="daysOfWeek" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

The days of the week when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#days_of_week OdbCloudExadataInfrastructure#days_of_week}

---

##### `hoursOfDay`<sup>Optional</sup> <a name="hoursOfDay" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

The hours of the day when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#hours_of_day OdbCloudExadataInfrastructure#hours_of_day}

---

##### `isCustomActionTimeoutEnabled`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates whether custom action timeout is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#is_custom_action_timeout_enabled OdbCloudExadataInfrastructure#is_custom_action_timeout_enabled}

---

##### `leadTimeInWeeks`<sup>Optional</sup> <a name="leadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

The lead time in weeks before the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#lead_time_in_weeks OdbCloudExadataInfrastructure#lead_time_in_weeks}

---

##### `months`<sup>Optional</sup> <a name="months" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.months"></a>

```java
public java.util.List<java.lang.String> getMonths();
```

- *Type:* java.util.List<java.lang.String>

The months when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#months OdbCloudExadataInfrastructure#months}

---

##### `patchingMode`<sup>Optional</sup> <a name="patchingMode" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

The patching mode for the maintenance window.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#patching_mode OdbCloudExadataInfrastructure#patching_mode}

---

##### `preference`<sup>Optional</sup> <a name="preference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

The preference for the maintenance window scheduling.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#preference OdbCloudExadataInfrastructure#preference}

---

##### `weeksOfMonth`<sup>Optional</sup> <a name="weeksOfMonth" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

The weeks of the month when maintenance can be performed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#weeks_of_month OdbCloudExadataInfrastructure#weeks_of_month}

---

### OdbCloudExadataInfrastructureTags <a name="OdbCloudExadataInfrastructureTags" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructureTags;

OdbCloudExadataInfrastructureTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that's 1 to 128 Unicode characters in length and can't be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., :, /, =, +,

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that's 1 to 256 characters in length. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/odb_cloud_exadata_infrastructure#value OdbCloudExadataInfrastructure#value}

---

## Classes <a name="Classes" id="Classes"></a>

### OdbCloudExadataInfrastructureCustomerContactsToSendToOciList <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOciList" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList;

new OdbCloudExadataInfrastructureCustomerContactsToSendToOciList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get"></a>

```java
public OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbCloudExadataInfrastructureCustomerContactsToSendToOci> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>>

---


### OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference <a name="OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference;

new OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resetEmail">resetEmail</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmail` <a name="resetEmail" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.resetEmail"></a>

```java
public void resetEmail()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.emailInput">emailInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email">email</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailInput`<sup>Optional</sup> <a name="emailInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.emailInput"></a>

```java
public java.lang.String getEmailInput();
```

- *Type:* java.lang.String

---

##### `email`<sup>Required</sup> <a name="email" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.email"></a>

```java
public java.lang.String getEmail();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOciOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbCloudExadataInfrastructureCustomerContactsToSendToOci getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureCustomerContactsToSendToOci">OdbCloudExadataInfrastructureCustomerContactsToSendToOci</a>

---


### OdbCloudExadataInfrastructureMaintenanceWindowOutputReference <a name="OdbCloudExadataInfrastructureMaintenanceWindowOutputReference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference;

new OdbCloudExadataInfrastructureMaintenanceWindowOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins">resetCustomActionTimeoutInMins</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek">resetDaysOfWeek</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay">resetHoursOfDay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled">resetIsCustomActionTimeoutEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks">resetLeadTimeInWeeks</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths">resetMonths</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode">resetPatchingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPreference">resetPreference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth">resetWeeksOfMonth</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCustomActionTimeoutInMins` <a name="resetCustomActionTimeoutInMins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetCustomActionTimeoutInMins"></a>

```java
public void resetCustomActionTimeoutInMins()
```

##### `resetDaysOfWeek` <a name="resetDaysOfWeek" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetDaysOfWeek"></a>

```java
public void resetDaysOfWeek()
```

##### `resetHoursOfDay` <a name="resetHoursOfDay" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetHoursOfDay"></a>

```java
public void resetHoursOfDay()
```

##### `resetIsCustomActionTimeoutEnabled` <a name="resetIsCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetIsCustomActionTimeoutEnabled"></a>

```java
public void resetIsCustomActionTimeoutEnabled()
```

##### `resetLeadTimeInWeeks` <a name="resetLeadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetLeadTimeInWeeks"></a>

```java
public void resetLeadTimeInWeeks()
```

##### `resetMonths` <a name="resetMonths" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetMonths"></a>

```java
public void resetMonths()
```

##### `resetPatchingMode` <a name="resetPatchingMode" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPatchingMode"></a>

```java
public void resetPatchingMode()
```

##### `resetPreference` <a name="resetPreference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetPreference"></a>

```java
public void resetPreference()
```

##### `resetWeeksOfMonth` <a name="resetWeeksOfMonth" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.resetWeeksOfMonth"></a>

```java
public void resetWeeksOfMonth()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput">customActionTimeoutInMinsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput">daysOfWeekInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput">hoursOfDayInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput">isCustomActionTimeoutEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput">leadTimeInWeeksInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput">monthsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput">patchingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput">preferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput">weeksOfMonthInput</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins">customActionTimeoutInMins</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek">daysOfWeek</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay">hoursOfDay</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled">isCustomActionTimeoutEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks">leadTimeInWeeks</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months">months</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode">patchingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference">preference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth">weeksOfMonth</a></code> | <code>java.util.List<java.lang.Number></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `customActionTimeoutInMinsInput`<sup>Optional</sup> <a name="customActionTimeoutInMinsInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMinsInput"></a>

```java
public java.lang.Number getCustomActionTimeoutInMinsInput();
```

- *Type:* java.lang.Number

---

##### `daysOfWeekInput`<sup>Optional</sup> <a name="daysOfWeekInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeekInput"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeekInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hoursOfDayInput`<sup>Optional</sup> <a name="hoursOfDayInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDayInput"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDayInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabledInput`<sup>Optional</sup> <a name="isCustomActionTimeoutEnabledInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsCustomActionTimeoutEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `leadTimeInWeeksInput`<sup>Optional</sup> <a name="leadTimeInWeeksInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeksInput"></a>

```java
public java.lang.Number getLeadTimeInWeeksInput();
```

- *Type:* java.lang.Number

---

##### `monthsInput`<sup>Optional</sup> <a name="monthsInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.monthsInput"></a>

```java
public java.util.List<java.lang.String> getMonthsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `patchingModeInput`<sup>Optional</sup> <a name="patchingModeInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingModeInput"></a>

```java
public java.lang.String getPatchingModeInput();
```

- *Type:* java.lang.String

---

##### `preferenceInput`<sup>Optional</sup> <a name="preferenceInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preferenceInput"></a>

```java
public java.lang.String getPreferenceInput();
```

- *Type:* java.lang.String

---

##### `weeksOfMonthInput`<sup>Optional</sup> <a name="weeksOfMonthInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonthInput"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonthInput();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `customActionTimeoutInMins`<sup>Required</sup> <a name="customActionTimeoutInMins" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.customActionTimeoutInMins"></a>

```java
public java.lang.Number getCustomActionTimeoutInMins();
```

- *Type:* java.lang.Number

---

##### `daysOfWeek`<sup>Required</sup> <a name="daysOfWeek" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.daysOfWeek"></a>

```java
public java.util.List<java.lang.String> getDaysOfWeek();
```

- *Type:* java.util.List<java.lang.String>

---

##### `hoursOfDay`<sup>Required</sup> <a name="hoursOfDay" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.hoursOfDay"></a>

```java
public java.util.List<java.lang.Number> getHoursOfDay();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `isCustomActionTimeoutEnabled`<sup>Required</sup> <a name="isCustomActionTimeoutEnabled" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.isCustomActionTimeoutEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsCustomActionTimeoutEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `leadTimeInWeeks`<sup>Required</sup> <a name="leadTimeInWeeks" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.leadTimeInWeeks"></a>

```java
public java.lang.Number getLeadTimeInWeeks();
```

- *Type:* java.lang.Number

---

##### `months`<sup>Required</sup> <a name="months" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.months"></a>

```java
public java.util.List<java.lang.String> getMonths();
```

- *Type:* java.util.List<java.lang.String>

---

##### `patchingMode`<sup>Required</sup> <a name="patchingMode" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.patchingMode"></a>

```java
public java.lang.String getPatchingMode();
```

- *Type:* java.lang.String

---

##### `preference`<sup>Required</sup> <a name="preference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.preference"></a>

```java
public java.lang.String getPreference();
```

- *Type:* java.lang.String

---

##### `weeksOfMonth`<sup>Required</sup> <a name="weeksOfMonth" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.weeksOfMonth"></a>

```java
public java.util.List<java.lang.Number> getWeeksOfMonth();
```

- *Type:* java.util.List<java.lang.Number>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindowOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbCloudExadataInfrastructureMaintenanceWindow getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureMaintenanceWindow">OdbCloudExadataInfrastructureMaintenanceWindow</a>

---


### OdbCloudExadataInfrastructureTagsList <a name="OdbCloudExadataInfrastructureTagsList" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructureTagsList;

new OdbCloudExadataInfrastructureTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.get"></a>

```java
public OdbCloudExadataInfrastructureTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<OdbCloudExadataInfrastructureTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>>

---


### OdbCloudExadataInfrastructureTagsOutputReference <a name="OdbCloudExadataInfrastructureTagsOutputReference" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.odb_cloud_exadata_infrastructure.OdbCloudExadataInfrastructureTagsOutputReference;

new OdbCloudExadataInfrastructureTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|OdbCloudExadataInfrastructureTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.odbCloudExadataInfrastructure.OdbCloudExadataInfrastructureTags">OdbCloudExadataInfrastructureTags</a>

---



