# `appstreamAppBlock` Submodule <a name="`appstreamAppBlock` Submodule" id="@cdktn/provider-awscc.appstreamAppBlock"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AppstreamAppBlock <a name="AppstreamAppBlock" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block awscc_appstream_app_block}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlock;

AppstreamAppBlock.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .sourceS3Location(AppstreamAppBlockSourceS3Location)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .packagingType(java.lang.String)
//  .postSetupScriptDetails(AppstreamAppBlockPostSetupScriptDetails)
//  .setupScriptDetails(AppstreamAppBlockSetupScriptDetails)
//  .tags(IResolvable|java.util.List<AppstreamAppBlockTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.sourceS3Location">sourceS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.packagingType">packagingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.postSetupScriptDetails">postSetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.setupScriptDetails">setupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}.

---

##### `sourceS3Location`<sup>Required</sup> <a name="sourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.sourceS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.displayName"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}.

---

##### `packagingType`<sup>Optional</sup> <a name="packagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.packagingType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}.

---

##### `postSetupScriptDetails`<sup>Optional</sup> <a name="postSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.postSetupScriptDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}.

---

##### `setupScriptDetails`<sup>Optional</sup> <a name="setupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.setupScriptDetails"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails">putPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails">putSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location">putSourceS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName">resetDisplayName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType">resetPackagingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails">resetPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails">resetSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putPostSetupScriptDetails` <a name="putPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails"></a>

```java
public void putPostSetupScriptDetails(AppstreamAppBlockPostSetupScriptDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putPostSetupScriptDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---

##### `putSetupScriptDetails` <a name="putSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails"></a>

```java
public void putSetupScriptDetails(AppstreamAppBlockSetupScriptDetails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSetupScriptDetails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---

##### `putSourceS3Location` <a name="putSourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location"></a>

```java
public void putSourceS3Location(AppstreamAppBlockSourceS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putSourceS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<AppstreamAppBlockTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDisplayName` <a name="resetDisplayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetDisplayName"></a>

```java
public void resetDisplayName()
```

##### `resetPackagingType` <a name="resetPackagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPackagingType"></a>

```java
public void resetPackagingType()
```

##### `resetPostSetupScriptDetails` <a name="resetPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetPostSetupScriptDetails"></a>

```java
public void resetPostSetupScriptDetails()
```

##### `resetSetupScriptDetails` <a name="resetSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetSetupScriptDetails"></a>

```java
public void resetSetupScriptDetails()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlock;

AppstreamAppBlock.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlock;

AppstreamAppBlock.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlock;

AppstreamAppBlock.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlock;

AppstreamAppBlock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AppstreamAppBlock.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AppstreamAppBlock resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AppstreamAppBlock to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AppstreamAppBlock that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AppstreamAppBlock to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails">postSetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails">setupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location">sourceS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput">displayNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput">packagingTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput">postSetupScriptDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput">setupScriptDetailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput">sourceS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName">displayName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType">packagingType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `postSetupScriptDetails`<sup>Required</sup> <a name="postSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetails"></a>

```java
public AppstreamAppBlockPostSetupScriptDetailsOutputReference getPostSetupScriptDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference">AppstreamAppBlockPostSetupScriptDetailsOutputReference</a>

---

##### `setupScriptDetails`<sup>Required</sup> <a name="setupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetails"></a>

```java
public AppstreamAppBlockSetupScriptDetailsOutputReference getSetupScriptDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference">AppstreamAppBlockSetupScriptDetailsOutputReference</a>

---

##### `sourceS3Location`<sup>Required</sup> <a name="sourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3Location"></a>

```java
public AppstreamAppBlockSourceS3LocationOutputReference getSourceS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference">AppstreamAppBlockSourceS3LocationOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tags"></a>

```java
public AppstreamAppBlockTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList">AppstreamAppBlockTagsList</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `displayNameInput`<sup>Optional</sup> <a name="displayNameInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayNameInput"></a>

```java
public java.lang.String getDisplayNameInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `packagingTypeInput`<sup>Optional</sup> <a name="packagingTypeInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingTypeInput"></a>

```java
public java.lang.String getPackagingTypeInput();
```

- *Type:* java.lang.String

---

##### `postSetupScriptDetailsInput`<sup>Optional</sup> <a name="postSetupScriptDetailsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.postSetupScriptDetailsInput"></a>

```java
public IResolvable|AppstreamAppBlockPostSetupScriptDetails getPostSetupScriptDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---

##### `setupScriptDetailsInput`<sup>Optional</sup> <a name="setupScriptDetailsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.setupScriptDetailsInput"></a>

```java
public IResolvable|AppstreamAppBlockSetupScriptDetails getSetupScriptDetailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---

##### `sourceS3LocationInput`<sup>Optional</sup> <a name="sourceS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.sourceS3LocationInput"></a>

```java
public IResolvable|AppstreamAppBlockSourceS3Location getSourceS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tagsInput"></a>

```java
public IResolvable|java.util.List<AppstreamAppBlockTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `displayName`<sup>Required</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `packagingType`<sup>Required</sup> <a name="packagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.packagingType"></a>

```java
public java.lang.String getPackagingType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlock.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AppstreamAppBlockConfig <a name="AppstreamAppBlockConfig" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockConfig;

AppstreamAppBlockConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .sourceS3Location(AppstreamAppBlockSourceS3Location)
//  .description(java.lang.String)
//  .displayName(java.lang.String)
//  .packagingType(java.lang.String)
//  .postSetupScriptDetails(AppstreamAppBlockPostSetupScriptDetails)
//  .setupScriptDetails(AppstreamAppBlockSetupScriptDetails)
//  .tags(IResolvable|java.util.List<AppstreamAppBlockTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location">sourceS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName">displayName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType">packagingType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails">postSetupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails">setupScriptDetails</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#name AppstreamAppBlock#name}.

---

##### `sourceS3Location`<sup>Required</sup> <a name="sourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.sourceS3Location"></a>

```java
public AppstreamAppBlockSourceS3Location getSourceS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#source_s3_location AppstreamAppBlock#source_s3_location}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#description AppstreamAppBlock#description}.

---

##### `displayName`<sup>Optional</sup> <a name="displayName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.displayName"></a>

```java
public java.lang.String getDisplayName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#display_name AppstreamAppBlock#display_name}.

---

##### `packagingType`<sup>Optional</sup> <a name="packagingType" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.packagingType"></a>

```java
public java.lang.String getPackagingType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#packaging_type AppstreamAppBlock#packaging_type}.

---

##### `postSetupScriptDetails`<sup>Optional</sup> <a name="postSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.postSetupScriptDetails"></a>

```java
public AppstreamAppBlockPostSetupScriptDetails getPostSetupScriptDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#post_setup_script_details AppstreamAppBlock#post_setup_script_details}.

---

##### `setupScriptDetails`<sup>Optional</sup> <a name="setupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.setupScriptDetails"></a>

```java
public AppstreamAppBlockSetupScriptDetails getSetupScriptDetails();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#setup_script_details AppstreamAppBlock#setup_script_details}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockConfig.property.tags"></a>

```java
public IResolvable|java.util.List<AppstreamAppBlockTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#tags AppstreamAppBlock#tags}.

---

### AppstreamAppBlockPostSetupScriptDetails <a name="AppstreamAppBlockPostSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockPostSetupScriptDetails;

AppstreamAppBlockPostSetupScriptDetails.builder()
//  .executableParameters(java.lang.String)
//  .executablePath(java.lang.String)
//  .scriptS3Location(AppstreamAppBlockPostSetupScriptDetailsScriptS3Location)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters">executableParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath">executablePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location">scriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `executableParameters`<sup>Optional</sup> <a name="executableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executableParameters"></a>

```java
public java.lang.String getExecutableParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `executablePath`<sup>Optional</sup> <a name="executablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.executablePath"></a>

```java
public java.lang.String getExecutablePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `scriptS3Location`<sup>Optional</sup> <a name="scriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.scriptS3Location"></a>

```java
public AppstreamAppBlockPostSetupScriptDetailsScriptS3Location getScriptS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockPostSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location;

AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.builder()
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSetupScriptDetails <a name="AppstreamAppBlockSetupScriptDetails" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockSetupScriptDetails;

AppstreamAppBlockSetupScriptDetails.builder()
//  .executableParameters(java.lang.String)
//  .executablePath(java.lang.String)
//  .scriptS3Location(AppstreamAppBlockSetupScriptDetailsScriptS3Location)
//  .timeoutInSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters">executableParameters</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath">executablePath</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location">scriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}. |

---

##### `executableParameters`<sup>Optional</sup> <a name="executableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executableParameters"></a>

```java
public java.lang.String getExecutableParameters();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#executable_parameters AppstreamAppBlock#executable_parameters}.

---

##### `executablePath`<sup>Optional</sup> <a name="executablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.executablePath"></a>

```java
public java.lang.String getExecutablePath();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#executable_path AppstreamAppBlock#executable_path}.

---

##### `scriptS3Location`<sup>Optional</sup> <a name="scriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.scriptS3Location"></a>

```java
public AppstreamAppBlockSetupScriptDetailsScriptS3Location getScriptS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#script_s3_location AppstreamAppBlock#script_s3_location}.

---

##### `timeoutInSeconds`<sup>Optional</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#timeout_in_seconds AppstreamAppBlock#timeout_in_seconds}.

---

### AppstreamAppBlockSetupScriptDetailsScriptS3Location <a name="AppstreamAppBlockSetupScriptDetailsScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockSetupScriptDetailsScriptS3Location;

AppstreamAppBlockSetupScriptDetailsScriptS3Location.builder()
//  .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `s3Bucket`<sup>Optional</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockSourceS3Location <a name="AppstreamAppBlockSourceS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockSourceS3Location;

AppstreamAppBlockSourceS3Location.builder()
    .s3Bucket(java.lang.String)
//  .s3Key(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_bucket AppstreamAppBlock#s3_bucket}.

---

##### `s3Key`<sup>Optional</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#s3_key AppstreamAppBlock#s3_key}.

---

### AppstreamAppBlockTags <a name="AppstreamAppBlockTags" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockTags;

AppstreamAppBlockTags.builder()
//  .key(java.lang.String)
//  .tagKey(java.lang.String)
//  .tagValue(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#key AppstreamAppBlock#key}.

---

##### `tagKey`<sup>Optional</sup> <a name="tagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#tag_key AppstreamAppBlock#tag_key}.

---

##### `tagValue`<sup>Optional</sup> <a name="tagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#tag_value AppstreamAppBlock#tag_value}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/appstream_app_block#value AppstreamAppBlock#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### AppstreamAppBlockPostSetupScriptDetailsOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockPostSetupScriptDetailsOutputReference;

new AppstreamAppBlockPostSetupScriptDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location">putScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters">resetExecutableParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath">resetExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location">resetScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptS3Location` <a name="putScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```java
public void putScriptS3Location(AppstreamAppBlockPostSetupScriptDetailsScriptS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.putScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---

##### `resetExecutableParameters` <a name="resetExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```java
public void resetExecutableParameters()
```

##### `resetExecutablePath` <a name="resetExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```java
public void resetExecutablePath()
```

##### `resetScriptS3Location` <a name="resetScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```java
public void resetScriptS3Location()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location">scriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput">executableParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput">executablePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput">scriptS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters">executableParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath">executablePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptS3Location`<sup>Required</sup> <a name="scriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```java
public AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference getScriptS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `executableParametersInput`<sup>Optional</sup> <a name="executableParametersInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```java
public java.lang.String getExecutableParametersInput();
```

- *Type:* java.lang.String

---

##### `executablePathInput`<sup>Optional</sup> <a name="executablePathInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```java
public java.lang.String getExecutablePathInput();
```

- *Type:* java.lang.String

---

##### `scriptS3LocationInput`<sup>Optional</sup> <a name="scriptS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```java
public IResolvable|AppstreamAppBlockPostSetupScriptDetailsScriptS3Location getScriptS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `executableParameters`<sup>Required</sup> <a name="executableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executableParameters"></a>

```java
public java.lang.String getExecutableParameters();
```

- *Type:* java.lang.String

---

##### `executablePath`<sup>Required</sup> <a name="executablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.executablePath"></a>

```java
public java.lang.String getExecutablePath();
```

- *Type:* java.lang.String

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamAppBlockPostSetupScriptDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetails">AppstreamAppBlockPostSetupScriptDetails</a>

---


### AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference;

new AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```java
public void resetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamAppBlockPostSetupScriptDetailsScriptS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockPostSetupScriptDetailsScriptS3Location">AppstreamAppBlockPostSetupScriptDetailsScriptS3Location</a>

---


### AppstreamAppBlockSetupScriptDetailsOutputReference <a name="AppstreamAppBlockSetupScriptDetailsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockSetupScriptDetailsOutputReference;

new AppstreamAppBlockSetupScriptDetailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location">putScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters">resetExecutableParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath">resetExecutablePath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location">resetScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds">resetTimeoutInSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putScriptS3Location` <a name="putScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location"></a>

```java
public void putScriptS3Location(AppstreamAppBlockSetupScriptDetailsScriptS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.putScriptS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---

##### `resetExecutableParameters` <a name="resetExecutableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutableParameters"></a>

```java
public void resetExecutableParameters()
```

##### `resetExecutablePath` <a name="resetExecutablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetExecutablePath"></a>

```java
public void resetExecutablePath()
```

##### `resetScriptS3Location` <a name="resetScriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetScriptS3Location"></a>

```java
public void resetScriptS3Location()
```

##### `resetTimeoutInSeconds` <a name="resetTimeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.resetTimeoutInSeconds"></a>

```java
public void resetTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location">scriptS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput">executableParametersInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput">executablePathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput">scriptS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput">timeoutInSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters">executableParameters</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath">executablePath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds">timeoutInSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scriptS3Location`<sup>Required</sup> <a name="scriptS3Location" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3Location"></a>

```java
public AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference getScriptS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference">AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference</a>

---

##### `executableParametersInput`<sup>Optional</sup> <a name="executableParametersInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParametersInput"></a>

```java
public java.lang.String getExecutableParametersInput();
```

- *Type:* java.lang.String

---

##### `executablePathInput`<sup>Optional</sup> <a name="executablePathInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePathInput"></a>

```java
public java.lang.String getExecutablePathInput();
```

- *Type:* java.lang.String

---

##### `scriptS3LocationInput`<sup>Optional</sup> <a name="scriptS3LocationInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.scriptS3LocationInput"></a>

```java
public IResolvable|AppstreamAppBlockSetupScriptDetailsScriptS3Location getScriptS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---

##### `timeoutInSecondsInput`<sup>Optional</sup> <a name="timeoutInSecondsInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSecondsInput"></a>

```java
public java.lang.Number getTimeoutInSecondsInput();
```

- *Type:* java.lang.Number

---

##### `executableParameters`<sup>Required</sup> <a name="executableParameters" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executableParameters"></a>

```java
public java.lang.String getExecutableParameters();
```

- *Type:* java.lang.String

---

##### `executablePath`<sup>Required</sup> <a name="executablePath" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.executablePath"></a>

```java
public java.lang.String getExecutablePath();
```

- *Type:* java.lang.String

---

##### `timeoutInSeconds`<sup>Required</sup> <a name="timeoutInSeconds" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.timeoutInSeconds"></a>

```java
public java.lang.Number getTimeoutInSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamAppBlockSetupScriptDetails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetails">AppstreamAppBlockSetupScriptDetails</a>

---


### AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference <a name="AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference;

new AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket">resetS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Bucket` <a name="resetS3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Bucket"></a>

```java
public void resetS3Bucket()
```

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.resetS3Key"></a>

```java
public void resetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamAppBlockSetupScriptDetailsScriptS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSetupScriptDetailsScriptS3Location">AppstreamAppBlockSetupScriptDetailsScriptS3Location</a>

---


### AppstreamAppBlockSourceS3LocationOutputReference <a name="AppstreamAppBlockSourceS3LocationOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockSourceS3LocationOutputReference;

new AppstreamAppBlockSourceS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key">resetS3Key</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3Key` <a name="resetS3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.resetS3Key"></a>

```java
public void resetS3Key()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamAppBlockSourceS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockSourceS3Location">AppstreamAppBlockSourceS3Location</a>

---


### AppstreamAppBlockTagsList <a name="AppstreamAppBlockTagsList" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockTagsList;

new AppstreamAppBlockTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get"></a>

```java
public AppstreamAppBlockTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AppstreamAppBlockTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>>

---


### AppstreamAppBlockTagsOutputReference <a name="AppstreamAppBlockTagsOutputReference" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.appstream_app_block.AppstreamAppBlockTagsOutputReference;

new AppstreamAppBlockTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey">resetTagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue">resetTagValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetTagKey` <a name="resetTagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagKey"></a>

```java
public void resetTagKey()
```

##### `resetTagValue` <a name="resetTagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetTagValue"></a>

```java
public void resetTagValue()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput">tagKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput">tagValueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey">tagKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue">tagValue</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `tagKeyInput`<sup>Optional</sup> <a name="tagKeyInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKeyInput"></a>

```java
public java.lang.String getTagKeyInput();
```

- *Type:* java.lang.String

---

##### `tagValueInput`<sup>Optional</sup> <a name="tagValueInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValueInput"></a>

```java
public java.lang.String getTagValueInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `tagKey`<sup>Required</sup> <a name="tagKey" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagKey"></a>

```java
public java.lang.String getTagKey();
```

- *Type:* java.lang.String

---

##### `tagValue`<sup>Required</sup> <a name="tagValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.tagValue"></a>

```java
public java.lang.String getTagValue();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|AppstreamAppBlockTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.appstreamAppBlock.AppstreamAppBlockTags">AppstreamAppBlockTags</a>

---



