# `systemsmanagersapApplication` Submodule <a name="`systemsmanagersapApplication` Submodule" id="@cdktn/provider-awscc.systemsmanagersapApplication"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SystemsmanagersapApplication <a name="SystemsmanagersapApplication" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application awscc_systemsmanagersap_application}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplication;

SystemsmanagersapApplication.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .applicationType(java.lang.String)
//  .componentsInfo(IResolvable|java.util.List<SystemsmanagersapApplicationComponentsInfo>)
//  .credentials(IResolvable|java.util.List<SystemsmanagersapApplicationCredentials>)
//  .databaseArn(java.lang.String)
//  .instances(java.util.List<java.lang.String>)
//  .sapInstanceNumber(java.lang.String)
//  .sid(java.lang.String)
//  .tags(IResolvable|java.util.List<SystemsmanagersapApplicationTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.applicationType">applicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.componentsInfo">componentsInfo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>></code> | This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.credentials">credentials</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.databaseArn">databaseArn</a></code> | <code>java.lang.String</code> | The ARN of the SAP HANA database. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.sapInstanceNumber">sapInstanceNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.sid">sid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>></code> | The tags of a SystemsManagerSAP application. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.applicationId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}.

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.applicationType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}.

---

##### `componentsInfo`<sup>Optional</sup> <a name="componentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.componentsInfo"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>>

This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#components_info SystemsmanagersapApplication#components_info}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.credentials"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}.

---

##### `databaseArn`<sup>Optional</sup> <a name="databaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.databaseArn"></a>

- *Type:* java.lang.String

The ARN of the SAP HANA database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#database_arn SystemsmanagersapApplication#database_arn}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.instances"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}.

---

##### `sapInstanceNumber`<sup>Optional</sup> <a name="sapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.sapInstanceNumber"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.sid"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>>

The tags of a SystemsManagerSAP application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#tags SystemsmanagersapApplication#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo">putComponentsInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo">resetComponentsInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn">resetDatabaseArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances">resetInstances</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber">resetSapInstanceNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid">resetSid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putComponentsInfo` <a name="putComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo"></a>

```java
public void putComponentsInfo(IResolvable|java.util.List<SystemsmanagersapApplicationComponentsInfo> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putComponentsInfo.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>>

---

##### `putCredentials` <a name="putCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials"></a>

```java
public void putCredentials(IResolvable|java.util.List<SystemsmanagersapApplicationCredentials> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putCredentials.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<SystemsmanagersapApplicationTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>>

---

##### `resetComponentsInfo` <a name="resetComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetComponentsInfo"></a>

```java
public void resetComponentsInfo()
```

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetDatabaseArn` <a name="resetDatabaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetDatabaseArn"></a>

```java
public void resetDatabaseArn()
```

##### `resetInstances` <a name="resetInstances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetInstances"></a>

```java
public void resetInstances()
```

##### `resetSapInstanceNumber` <a name="resetSapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSapInstanceNumber"></a>

```java
public void resetSapInstanceNumber()
```

##### `resetSid` <a name="resetSid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetSid"></a>

```java
public void resetSid()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplication;

SystemsmanagersapApplication.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplication;

SystemsmanagersapApplication.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplication;

SystemsmanagersapApplication.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplication;

SystemsmanagersapApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SystemsmanagersapApplication.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SystemsmanagersapApplication resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SystemsmanagersapApplication to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SystemsmanagersapApplication that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SystemsmanagersapApplication to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo">componentsInfo</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput">applicationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput">applicationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput">componentsInfoInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput">credentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput">databaseArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput">instancesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput">sapInstanceNumberInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput">sidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn">databaseArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber">sapInstanceNumber</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid">sid</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `componentsInfo`<sup>Required</sup> <a name="componentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfo"></a>

```java
public SystemsmanagersapApplicationComponentsInfoList getComponentsInfo();
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList">SystemsmanagersapApplicationComponentsInfoList</a>

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentials"></a>

```java
public SystemsmanagersapApplicationCredentialsList getCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList">SystemsmanagersapApplicationCredentialsList</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tags"></a>

```java
public SystemsmanagersapApplicationTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList">SystemsmanagersapApplicationTagsList</a>

---

##### `applicationIdInput`<sup>Optional</sup> <a name="applicationIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationIdInput"></a>

```java
public java.lang.String getApplicationIdInput();
```

- *Type:* java.lang.String

---

##### `applicationTypeInput`<sup>Optional</sup> <a name="applicationTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationTypeInput"></a>

```java
public java.lang.String getApplicationTypeInput();
```

- *Type:* java.lang.String

---

##### `componentsInfoInput`<sup>Optional</sup> <a name="componentsInfoInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.componentsInfoInput"></a>

```java
public IResolvable|java.util.List<SystemsmanagersapApplicationComponentsInfo> getComponentsInfoInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.credentialsInput"></a>

```java
public IResolvable|java.util.List<SystemsmanagersapApplicationCredentials> getCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>>

---

##### `databaseArnInput`<sup>Optional</sup> <a name="databaseArnInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArnInput"></a>

```java
public java.lang.String getDatabaseArnInput();
```

- *Type:* java.lang.String

---

##### `instancesInput`<sup>Optional</sup> <a name="instancesInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instancesInput"></a>

```java
public java.util.List<java.lang.String> getInstancesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sapInstanceNumberInput`<sup>Optional</sup> <a name="sapInstanceNumberInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumberInput"></a>

```java
public java.lang.String getSapInstanceNumberInput();
```

- *Type:* java.lang.String

---

##### `sidInput`<sup>Optional</sup> <a name="sidInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sidInput"></a>

```java
public java.lang.String getSidInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tagsInput"></a>

```java
public IResolvable|java.util.List<SystemsmanagersapApplicationTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

---

##### `databaseArn`<sup>Required</sup> <a name="databaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.databaseArn"></a>

```java
public java.lang.String getDatabaseArn();
```

- *Type:* java.lang.String

---

##### `instances`<sup>Required</sup> <a name="instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

---

##### `sapInstanceNumber`<sup>Required</sup> <a name="sapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sapInstanceNumber"></a>

```java
public java.lang.String getSapInstanceNumber();
```

- *Type:* java.lang.String

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplication.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SystemsmanagersapApplicationComponentsInfo <a name="SystemsmanagersapApplicationComponentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationComponentsInfo;

SystemsmanagersapApplicationComponentsInfo.builder()
//  .componentType(java.lang.String)
//  .ec2InstanceId(java.lang.String)
//  .sid(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType">componentType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId">ec2InstanceId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid">sid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |

---

##### `componentType`<sup>Optional</sup> <a name="componentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#component_type SystemsmanagersapApplication#component_type}.

---

##### `ec2InstanceId`<sup>Optional</sup> <a name="ec2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.ec2InstanceId"></a>

```java
public java.lang.String getEc2InstanceId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#ec_2_instance_id SystemsmanagersapApplication#ec_2_instance_id}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

### SystemsmanagersapApplicationConfig <a name="SystemsmanagersapApplicationConfig" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationConfig;

SystemsmanagersapApplicationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .applicationId(java.lang.String)
    .applicationType(java.lang.String)
//  .componentsInfo(IResolvable|java.util.List<SystemsmanagersapApplicationComponentsInfo>)
//  .credentials(IResolvable|java.util.List<SystemsmanagersapApplicationCredentials>)
//  .databaseArn(java.lang.String)
//  .instances(java.util.List<java.lang.String>)
//  .sapInstanceNumber(java.lang.String)
//  .sid(java.lang.String)
//  .tags(IResolvable|java.util.List<SystemsmanagersapApplicationTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId">applicationId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType">applicationType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo">componentsInfo</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>></code> | This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials">credentials</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn">databaseArn</a></code> | <code>java.lang.String</code> | The ARN of the SAP HANA database. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances">instances</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber">sapInstanceNumber</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid">sid</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>></code> | The tags of a SystemsManagerSAP application. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `applicationId`<sup>Required</sup> <a name="applicationId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationId"></a>

```java
public java.lang.String getApplicationId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#application_id SystemsmanagersapApplication#application_id}.

---

##### `applicationType`<sup>Required</sup> <a name="applicationType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.applicationType"></a>

```java
public java.lang.String getApplicationType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#application_type SystemsmanagersapApplication#application_type}.

---

##### `componentsInfo`<sup>Optional</sup> <a name="componentsInfo" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.componentsInfo"></a>

```java
public IResolvable|java.util.List<SystemsmanagersapApplicationComponentsInfo> getComponentsInfo();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>>

This is an optional parameter for component details to which the SAP ABAP application is attached, such as Web Dispatcher.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#components_info SystemsmanagersapApplication#components_info}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.credentials"></a>

```java
public IResolvable|java.util.List<SystemsmanagersapApplicationCredentials> getCredentials();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#credentials SystemsmanagersapApplication#credentials}.

---

##### `databaseArn`<sup>Optional</sup> <a name="databaseArn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.databaseArn"></a>

```java
public java.lang.String getDatabaseArn();
```

- *Type:* java.lang.String

The ARN of the SAP HANA database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#database_arn SystemsmanagersapApplication#database_arn}

---

##### `instances`<sup>Optional</sup> <a name="instances" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.instances"></a>

```java
public java.util.List<java.lang.String> getInstances();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#instances SystemsmanagersapApplication#instances}.

---

##### `sapInstanceNumber`<sup>Optional</sup> <a name="sapInstanceNumber" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sapInstanceNumber"></a>

```java
public java.lang.String getSapInstanceNumber();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sap_instance_number SystemsmanagersapApplication#sap_instance_number}.

---

##### `sid`<sup>Optional</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#sid SystemsmanagersapApplication#sid}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationConfig.property.tags"></a>

```java
public IResolvable|java.util.List<SystemsmanagersapApplicationTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>>

The tags of a SystemsManagerSAP application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#tags SystemsmanagersapApplication#tags}

---

### SystemsmanagersapApplicationCredentials <a name="SystemsmanagersapApplicationCredentials" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationCredentials;

SystemsmanagersapApplicationCredentials.builder()
//  .credentialType(java.lang.String)
//  .databaseName(java.lang.String)
//  .secretId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId">secretId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}. |

---

##### `credentialType`<sup>Optional</sup> <a name="credentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#credential_type SystemsmanagersapApplication#credential_type}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#database_name SystemsmanagersapApplication#database_name}.

---

##### `secretId`<sup>Optional</sup> <a name="secretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#secret_id SystemsmanagersapApplication#secret_id}.

---

### SystemsmanagersapApplicationTags <a name="SystemsmanagersapApplicationTags" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationTags;

SystemsmanagersapApplicationTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 127 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#key SystemsmanagersapApplication#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 1 to 255 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/systemsmanagersap_application#value SystemsmanagersapApplication#value}

---

## Classes <a name="Classes" id="Classes"></a>

### SystemsmanagersapApplicationComponentsInfoList <a name="SystemsmanagersapApplicationComponentsInfoList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationComponentsInfoList;

new SystemsmanagersapApplicationComponentsInfoList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get"></a>

```java
public SystemsmanagersapApplicationComponentsInfoOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SystemsmanagersapApplicationComponentsInfo> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>>

---


### SystemsmanagersapApplicationComponentsInfoOutputReference <a name="SystemsmanagersapApplicationComponentsInfoOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationComponentsInfoOutputReference;

new SystemsmanagersapApplicationComponentsInfoOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType">resetComponentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId">resetEc2InstanceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid">resetSid</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComponentType` <a name="resetComponentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetComponentType"></a>

```java
public void resetComponentType()
```

##### `resetEc2InstanceId` <a name="resetEc2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetEc2InstanceId"></a>

```java
public void resetEc2InstanceId()
```

##### `resetSid` <a name="resetSid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.resetSid"></a>

```java
public void resetSid()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput">componentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput">ec2InstanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput">sidInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType">componentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId">ec2InstanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid">sid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `componentTypeInput`<sup>Optional</sup> <a name="componentTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentTypeInput"></a>

```java
public java.lang.String getComponentTypeInput();
```

- *Type:* java.lang.String

---

##### `ec2InstanceIdInput`<sup>Optional</sup> <a name="ec2InstanceIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceIdInput"></a>

```java
public java.lang.String getEc2InstanceIdInput();
```

- *Type:* java.lang.String

---

##### `sidInput`<sup>Optional</sup> <a name="sidInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sidInput"></a>

```java
public java.lang.String getSidInput();
```

- *Type:* java.lang.String

---

##### `componentType`<sup>Required</sup> <a name="componentType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.componentType"></a>

```java
public java.lang.String getComponentType();
```

- *Type:* java.lang.String

---

##### `ec2InstanceId`<sup>Required</sup> <a name="ec2InstanceId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.ec2InstanceId"></a>

```java
public java.lang.String getEc2InstanceId();
```

- *Type:* java.lang.String

---

##### `sid`<sup>Required</sup> <a name="sid" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.sid"></a>

```java
public java.lang.String getSid();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfoOutputReference.property.internalValue"></a>

```java
public IResolvable|SystemsmanagersapApplicationComponentsInfo getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationComponentsInfo">SystemsmanagersapApplicationComponentsInfo</a>

---


### SystemsmanagersapApplicationCredentialsList <a name="SystemsmanagersapApplicationCredentialsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationCredentialsList;

new SystemsmanagersapApplicationCredentialsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get"></a>

```java
public SystemsmanagersapApplicationCredentialsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SystemsmanagersapApplicationCredentials> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>>

---


### SystemsmanagersapApplicationCredentialsOutputReference <a name="SystemsmanagersapApplicationCredentialsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationCredentialsOutputReference;

new SystemsmanagersapApplicationCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType">resetCredentialType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId">resetSecretId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCredentialType` <a name="resetCredentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetCredentialType"></a>

```java
public void resetCredentialType()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetSecretId` <a name="resetSecretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.resetSecretId"></a>

```java
public void resetSecretId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput">credentialTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput">secretIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType">credentialType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId">secretId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentialTypeInput`<sup>Optional</sup> <a name="credentialTypeInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialTypeInput"></a>

```java
public java.lang.String getCredentialTypeInput();
```

- *Type:* java.lang.String

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `secretIdInput`<sup>Optional</sup> <a name="secretIdInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretIdInput"></a>

```java
public java.lang.String getSecretIdInput();
```

- *Type:* java.lang.String

---

##### `credentialType`<sup>Required</sup> <a name="credentialType" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.credentialType"></a>

```java
public java.lang.String getCredentialType();
```

- *Type:* java.lang.String

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `secretId`<sup>Required</sup> <a name="secretId" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.secretId"></a>

```java
public java.lang.String getSecretId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|SystemsmanagersapApplicationCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationCredentials">SystemsmanagersapApplicationCredentials</a>

---


### SystemsmanagersapApplicationTagsList <a name="SystemsmanagersapApplicationTagsList" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationTagsList;

new SystemsmanagersapApplicationTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get"></a>

```java
public SystemsmanagersapApplicationTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<SystemsmanagersapApplicationTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>>

---


### SystemsmanagersapApplicationTagsOutputReference <a name="SystemsmanagersapApplicationTagsOutputReference" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.systemsmanagersap_application.SystemsmanagersapApplicationTagsOutputReference;

new SystemsmanagersapApplicationTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|SystemsmanagersapApplicationTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.systemsmanagersapApplication.SystemsmanagersapApplicationTags">SystemsmanagersapApplicationTags</a>

---



