# `docdbDbInstance` Submodule <a name="`docdbDbInstance` Submodule" id="@cdktn/provider-awscc.docdbDbInstance"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DocdbDbInstance <a name="DocdbDbInstance" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance awscc_docdb_db_instance}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer"></a>

```java
import io.cdktn.providers.awscc.docdb_db_instance.DocdbDbInstance;

DocdbDbInstance.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbClusterIdentifier(java.lang.String)
    .dbInstanceClass(java.lang.String)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .availabilityZone(java.lang.String)
//  .caCertificateIdentifier(java.lang.String)
//  .certificateRotationRestart(java.lang.Boolean|IResolvable)
//  .dbInstanceIdentifier(java.lang.String)
//  .enablePerformanceInsights(java.lang.Boolean|IResolvable)
//  .preferredMaintenanceWindow(java.lang.String)
//  .tags(IResolvable|java.util.List<DocdbDbInstanceTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_cluster_identifier DocdbDbInstance#db_cluster_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbInstanceClass">dbInstanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_class DocdbDbInstance#db_instance_class}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#auto_minor_version_upgrade DocdbDbInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#availability_zone DocdbDbInstance#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#ca_certificate_identifier DocdbDbInstance#ca_certificate_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.certificateRotationRestart">certificateRotationRestart</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#certificate_rotation_restart DocdbDbInstance#certificate_rotation_restart}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_identifier DocdbDbInstance#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.enablePerformanceInsights">enablePerformanceInsights</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#enable_performance_insights DocdbDbInstance#enable_performance_insights}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#preferred_maintenance_window DocdbDbInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#tags DocdbDbInstance#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbClusterIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_cluster_identifier DocdbDbInstance#db_cluster_identifier}.

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbInstanceClass"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_class DocdbDbInstance#db_instance_class}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.autoMinorVersionUpgrade"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#auto_minor_version_upgrade DocdbDbInstance#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.availabilityZone"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#availability_zone DocdbDbInstance#availability_zone}.

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.caCertificateIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#ca_certificate_identifier DocdbDbInstance#ca_certificate_identifier}.

---

##### `certificateRotationRestart`<sup>Optional</sup> <a name="certificateRotationRestart" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.certificateRotationRestart"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#certificate_rotation_restart DocdbDbInstance#certificate_rotation_restart}.

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.dbInstanceIdentifier"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_identifier DocdbDbInstance#db_instance_identifier}.

---

##### `enablePerformanceInsights`<sup>Optional</sup> <a name="enablePerformanceInsights" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.enablePerformanceInsights"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#enable_performance_insights DocdbDbInstance#enable_performance_insights}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.preferredMaintenanceWindow"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#preferred_maintenance_window DocdbDbInstance#preferred_maintenance_window}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#tags DocdbDbInstance#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetAutoMinorVersionUpgrade">resetAutoMinorVersionUpgrade</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetCaCertificateIdentifier">resetCaCertificateIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetCertificateRotationRestart">resetCertificateRotationRestart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetDbInstanceIdentifier">resetDbInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetEnablePerformanceInsights">resetEnablePerformanceInsights</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetPreferredMaintenanceWindow">resetPreferredMaintenanceWindow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<DocdbDbInstanceTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>>

---

##### `resetAutoMinorVersionUpgrade` <a name="resetAutoMinorVersionUpgrade" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetAutoMinorVersionUpgrade"></a>

```java
public void resetAutoMinorVersionUpgrade()
```

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetCaCertificateIdentifier` <a name="resetCaCertificateIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetCaCertificateIdentifier"></a>

```java
public void resetCaCertificateIdentifier()
```

##### `resetCertificateRotationRestart` <a name="resetCertificateRotationRestart" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetCertificateRotationRestart"></a>

```java
public void resetCertificateRotationRestart()
```

##### `resetDbInstanceIdentifier` <a name="resetDbInstanceIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetDbInstanceIdentifier"></a>

```java
public void resetDbInstanceIdentifier()
```

##### `resetEnablePerformanceInsights` <a name="resetEnablePerformanceInsights" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetEnablePerformanceInsights"></a>

```java
public void resetEnablePerformanceInsights()
```

##### `resetPreferredMaintenanceWindow` <a name="resetPreferredMaintenanceWindow" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetPreferredMaintenanceWindow"></a>

```java
public void resetPreferredMaintenanceWindow()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DocdbDbInstance resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isConstruct"></a>

```java
import io.cdktn.providers.awscc.docdb_db_instance.DocdbDbInstance;

DocdbDbInstance.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.docdb_db_instance.DocdbDbInstance;

DocdbDbInstance.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.docdb_db_instance.DocdbDbInstance;

DocdbDbInstance.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.docdb_db_instance.DocdbDbInstance;

DocdbDbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DocdbDbInstance.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DocdbDbInstance resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DocdbDbInstance to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DocdbDbInstance that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DocdbDbInstance to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.port">port</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList">DocdbDbInstanceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.autoMinorVersionUpgradeInput">autoMinorVersionUpgradeInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.caCertificateIdentifierInput">caCertificateIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.certificateRotationRestartInput">certificateRotationRestartInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbClusterIdentifierInput">dbClusterIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceClassInput">dbInstanceClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceIdentifierInput">dbInstanceIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.enablePerformanceInsightsInput">enablePerformanceInsightsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.preferredMaintenanceWindowInput">preferredMaintenanceWindowInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.certificateRotationRestart">certificateRotationRestart</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceClass">dbInstanceClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.enablePerformanceInsights">enablePerformanceInsights</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.port"></a>

```java
public java.lang.String getPort();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tags"></a>

```java
public DocdbDbInstanceTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList">DocdbDbInstanceTagsList</a>

---

##### `autoMinorVersionUpgradeInput`<sup>Optional</sup> <a name="autoMinorVersionUpgradeInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.autoMinorVersionUpgradeInput"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgradeInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `caCertificateIdentifierInput`<sup>Optional</sup> <a name="caCertificateIdentifierInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.caCertificateIdentifierInput"></a>

```java
public java.lang.String getCaCertificateIdentifierInput();
```

- *Type:* java.lang.String

---

##### `certificateRotationRestartInput`<sup>Optional</sup> <a name="certificateRotationRestartInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.certificateRotationRestartInput"></a>

```java
public java.lang.Boolean|IResolvable getCertificateRotationRestartInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dbClusterIdentifierInput`<sup>Optional</sup> <a name="dbClusterIdentifierInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbClusterIdentifierInput"></a>

```java
public java.lang.String getDbClusterIdentifierInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceClassInput`<sup>Optional</sup> <a name="dbInstanceClassInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceClassInput"></a>

```java
public java.lang.String getDbInstanceClassInput();
```

- *Type:* java.lang.String

---

##### `dbInstanceIdentifierInput`<sup>Optional</sup> <a name="dbInstanceIdentifierInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceIdentifierInput"></a>

```java
public java.lang.String getDbInstanceIdentifierInput();
```

- *Type:* java.lang.String

---

##### `enablePerformanceInsightsInput`<sup>Optional</sup> <a name="enablePerformanceInsightsInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.enablePerformanceInsightsInput"></a>

```java
public java.lang.Boolean|IResolvable getEnablePerformanceInsightsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `preferredMaintenanceWindowInput`<sup>Optional</sup> <a name="preferredMaintenanceWindowInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.preferredMaintenanceWindowInput"></a>

```java
public java.lang.String getPreferredMaintenanceWindowInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tagsInput"></a>

```java
public IResolvable|java.util.List<DocdbDbInstanceTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>>

---

##### `autoMinorVersionUpgrade`<sup>Required</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `caCertificateIdentifier`<sup>Required</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.caCertificateIdentifier"></a>

```java
public java.lang.String getCaCertificateIdentifier();
```

- *Type:* java.lang.String

---

##### `certificateRotationRestart`<sup>Required</sup> <a name="certificateRotationRestart" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.certificateRotationRestart"></a>

```java
public java.lang.Boolean|IResolvable getCertificateRotationRestart();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceClass"></a>

```java
public java.lang.String getDbInstanceClass();
```

- *Type:* java.lang.String

---

##### `dbInstanceIdentifier`<sup>Required</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.dbInstanceIdentifier"></a>

```java
public java.lang.String getDbInstanceIdentifier();
```

- *Type:* java.lang.String

---

##### `enablePerformanceInsights`<sup>Required</sup> <a name="enablePerformanceInsights" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.enablePerformanceInsights"></a>

```java
public java.lang.Boolean|IResolvable getEnablePerformanceInsights();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `preferredMaintenanceWindow`<sup>Required</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstance.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DocdbDbInstanceConfig <a name="DocdbDbInstanceConfig" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.docdb_db_instance.DocdbDbInstanceConfig;

DocdbDbInstanceConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .dbClusterIdentifier(java.lang.String)
    .dbInstanceClass(java.lang.String)
//  .autoMinorVersionUpgrade(java.lang.Boolean|IResolvable)
//  .availabilityZone(java.lang.String)
//  .caCertificateIdentifier(java.lang.String)
//  .certificateRotationRestart(java.lang.Boolean|IResolvable)
//  .dbInstanceIdentifier(java.lang.String)
//  .enablePerformanceInsights(java.lang.Boolean|IResolvable)
//  .preferredMaintenanceWindow(java.lang.String)
//  .tags(IResolvable|java.util.List<DocdbDbInstanceTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbClusterIdentifier">dbClusterIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_cluster_identifier DocdbDbInstance#db_cluster_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbInstanceClass">dbInstanceClass</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_class DocdbDbInstance#db_instance_class}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.autoMinorVersionUpgrade">autoMinorVersionUpgrade</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#auto_minor_version_upgrade DocdbDbInstance#auto_minor_version_upgrade}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#availability_zone DocdbDbInstance#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.caCertificateIdentifier">caCertificateIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#ca_certificate_identifier DocdbDbInstance#ca_certificate_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.certificateRotationRestart">certificateRotationRestart</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#certificate_rotation_restart DocdbDbInstance#certificate_rotation_restart}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbInstanceIdentifier">dbInstanceIdentifier</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_identifier DocdbDbInstance#db_instance_identifier}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.enablePerformanceInsights">enablePerformanceInsights</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#enable_performance_insights DocdbDbInstance#enable_performance_insights}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.preferredMaintenanceWindow">preferredMaintenanceWindow</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#preferred_maintenance_window DocdbDbInstance#preferred_maintenance_window}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#tags DocdbDbInstance#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `dbClusterIdentifier`<sup>Required</sup> <a name="dbClusterIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbClusterIdentifier"></a>

```java
public java.lang.String getDbClusterIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_cluster_identifier DocdbDbInstance#db_cluster_identifier}.

---

##### `dbInstanceClass`<sup>Required</sup> <a name="dbInstanceClass" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbInstanceClass"></a>

```java
public java.lang.String getDbInstanceClass();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_class DocdbDbInstance#db_instance_class}.

---

##### `autoMinorVersionUpgrade`<sup>Optional</sup> <a name="autoMinorVersionUpgrade" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.autoMinorVersionUpgrade"></a>

```java
public java.lang.Boolean|IResolvable getAutoMinorVersionUpgrade();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#auto_minor_version_upgrade DocdbDbInstance#auto_minor_version_upgrade}.

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#availability_zone DocdbDbInstance#availability_zone}.

---

##### `caCertificateIdentifier`<sup>Optional</sup> <a name="caCertificateIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.caCertificateIdentifier"></a>

```java
public java.lang.String getCaCertificateIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#ca_certificate_identifier DocdbDbInstance#ca_certificate_identifier}.

---

##### `certificateRotationRestart`<sup>Optional</sup> <a name="certificateRotationRestart" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.certificateRotationRestart"></a>

```java
public java.lang.Boolean|IResolvable getCertificateRotationRestart();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#certificate_rotation_restart DocdbDbInstance#certificate_rotation_restart}.

---

##### `dbInstanceIdentifier`<sup>Optional</sup> <a name="dbInstanceIdentifier" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.dbInstanceIdentifier"></a>

```java
public java.lang.String getDbInstanceIdentifier();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#db_instance_identifier DocdbDbInstance#db_instance_identifier}.

---

##### `enablePerformanceInsights`<sup>Optional</sup> <a name="enablePerformanceInsights" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.enablePerformanceInsights"></a>

```java
public java.lang.Boolean|IResolvable getEnablePerformanceInsights();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#enable_performance_insights DocdbDbInstance#enable_performance_insights}.

---

##### `preferredMaintenanceWindow`<sup>Optional</sup> <a name="preferredMaintenanceWindow" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.preferredMaintenanceWindow"></a>

```java
public java.lang.String getPreferredMaintenanceWindow();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#preferred_maintenance_window DocdbDbInstance#preferred_maintenance_window}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceConfig.property.tags"></a>

```java
public IResolvable|java.util.List<DocdbDbInstanceTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#tags DocdbDbInstance#tags}.

---

### DocdbDbInstanceTags <a name="DocdbDbInstanceTags" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.docdb_db_instance.DocdbDbInstanceTags;

DocdbDbInstanceTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#key DocdbDbInstance#key}. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#value DocdbDbInstance#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#key DocdbDbInstance#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/docdb_db_instance#value DocdbDbInstance#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DocdbDbInstanceTagsList <a name="DocdbDbInstanceTagsList" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.docdb_db_instance.DocdbDbInstanceTagsList;

new DocdbDbInstanceTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.get"></a>

```java
public DocdbDbInstanceTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DocdbDbInstanceTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>>

---


### DocdbDbInstanceTagsOutputReference <a name="DocdbDbInstanceTagsOutputReference" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.docdb_db_instance.DocdbDbInstanceTagsOutputReference;

new DocdbDbInstanceTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|DocdbDbInstanceTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.docdbDbInstance.DocdbDbInstanceTags">DocdbDbInstanceTags</a>

---



