# `nimblestudioStreamingImage` Submodule <a name="`nimblestudioStreamingImage` Submodule" id="@cdktn/provider-awscc.nimblestudioStreamingImage"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NimblestudioStreamingImage <a name="NimblestudioStreamingImage" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image awscc_nimblestudio_streaming_image}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_streaming_image.NimblestudioStreamingImage;

NimblestudioStreamingImage.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ec2ImageId(java.lang.String)
    .name(java.lang.String)
    .studioId(java.lang.String)
//  .description(java.lang.String)
//  .encryptionConfigurationKeyArn(java.lang.String)
//  .encryptionConfigurationKeyType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.ec2ImageId">ec2ImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.studioId">studioId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.encryptionConfigurationKeyArn">encryptionConfigurationKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.encryptionConfigurationKeyType">encryptionConfigurationKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ec2ImageId`<sup>Required</sup> <a name="ec2ImageId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.ec2ImageId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.studioId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}.

---

##### `encryptionConfigurationKeyArn`<sup>Optional</sup> <a name="encryptionConfigurationKeyArn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.encryptionConfigurationKeyArn"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}.

---

##### `encryptionConfigurationKeyType`<sup>Optional</sup> <a name="encryptionConfigurationKeyType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.encryptionConfigurationKeyType"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyArn">resetEncryptionConfigurationKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyType">resetEncryptionConfigurationKeyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEncryptionConfigurationKeyArn` <a name="resetEncryptionConfigurationKeyArn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyArn"></a>

```java
public void resetEncryptionConfigurationKeyArn()
```

##### `resetEncryptionConfigurationKeyType` <a name="resetEncryptionConfigurationKeyType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetEncryptionConfigurationKeyType"></a>

```java
public void resetEncryptionConfigurationKeyType()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a NimblestudioStreamingImage resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_streaming_image.NimblestudioStreamingImage;

NimblestudioStreamingImage.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_streaming_image.NimblestudioStreamingImage;

NimblestudioStreamingImage.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_streaming_image.NimblestudioStreamingImage;

NimblestudioStreamingImage.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_streaming_image.NimblestudioStreamingImage;

NimblestudioStreamingImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),NimblestudioStreamingImage.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a NimblestudioStreamingImage resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the NimblestudioStreamingImage to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing NimblestudioStreamingImage that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the NimblestudioStreamingImage to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfiguration">encryptionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference">NimblestudioStreamingImageEncryptionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.eulaIds">eulaIds</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.owner">owner</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.platform">platform</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.streamingImageId">streamingImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageIdInput">ec2ImageIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArnInput">encryptionConfigurationKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyTypeInput">encryptionConfigurationKeyTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioIdInput">studioIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageId">ec2ImageId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArn">encryptionConfigurationKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyType">encryptionConfigurationKeyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioId">studioId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `encryptionConfiguration`<sup>Required</sup> <a name="encryptionConfiguration" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfiguration"></a>

```java
public NimblestudioStreamingImageEncryptionConfigurationOutputReference getEncryptionConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference">NimblestudioStreamingImageEncryptionConfigurationOutputReference</a>

---

##### `eulaIds`<sup>Required</sup> <a name="eulaIds" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.eulaIds"></a>

```java
public java.util.List<java.lang.String> getEulaIds();
```

- *Type:* java.util.List<java.lang.String>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `owner`<sup>Required</sup> <a name="owner" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.owner"></a>

```java
public java.lang.String getOwner();
```

- *Type:* java.lang.String

---

##### `platform`<sup>Required</sup> <a name="platform" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.platform"></a>

```java
public java.lang.String getPlatform();
```

- *Type:* java.lang.String

---

##### `streamingImageId`<sup>Required</sup> <a name="streamingImageId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.streamingImageId"></a>

```java
public java.lang.String getStreamingImageId();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `ec2ImageIdInput`<sup>Optional</sup> <a name="ec2ImageIdInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageIdInput"></a>

```java
public java.lang.String getEc2ImageIdInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationKeyArnInput`<sup>Optional</sup> <a name="encryptionConfigurationKeyArnInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArnInput"></a>

```java
public java.lang.String getEncryptionConfigurationKeyArnInput();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationKeyTypeInput`<sup>Optional</sup> <a name="encryptionConfigurationKeyTypeInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyTypeInput"></a>

```java
public java.lang.String getEncryptionConfigurationKeyTypeInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `studioIdInput`<sup>Optional</sup> <a name="studioIdInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioIdInput"></a>

```java
public java.lang.String getStudioIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `ec2ImageId`<sup>Required</sup> <a name="ec2ImageId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.ec2ImageId"></a>

```java
public java.lang.String getEc2ImageId();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationKeyArn`<sup>Required</sup> <a name="encryptionConfigurationKeyArn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyArn"></a>

```java
public java.lang.String getEncryptionConfigurationKeyArn();
```

- *Type:* java.lang.String

---

##### `encryptionConfigurationKeyType`<sup>Required</sup> <a name="encryptionConfigurationKeyType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.encryptionConfigurationKeyType"></a>

```java
public java.lang.String getEncryptionConfigurationKeyType();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.studioId"></a>

```java
public java.lang.String getStudioId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImage.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### NimblestudioStreamingImageConfig <a name="NimblestudioStreamingImageConfig" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_streaming_image.NimblestudioStreamingImageConfig;

NimblestudioStreamingImageConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .ec2ImageId(java.lang.String)
    .name(java.lang.String)
    .studioId(java.lang.String)
//  .description(java.lang.String)
//  .encryptionConfigurationKeyArn(java.lang.String)
//  .encryptionConfigurationKeyType(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.ec2ImageId">ec2ImageId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.studioId">studioId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyArn">encryptionConfigurationKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyType">encryptionConfigurationKeyType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `ec2ImageId`<sup>Required</sup> <a name="ec2ImageId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.ec2ImageId"></a>

```java
public java.lang.String getEc2ImageId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#ec_2_image_id NimblestudioStreamingImage#ec_2_image_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#name NimblestudioStreamingImage#name}.

---

##### `studioId`<sup>Required</sup> <a name="studioId" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.studioId"></a>

```java
public java.lang.String getStudioId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#studio_id NimblestudioStreamingImage#studio_id}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#description NimblestudioStreamingImage#description}.

---

##### `encryptionConfigurationKeyArn`<sup>Optional</sup> <a name="encryptionConfigurationKeyArn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyArn"></a>

```java
public java.lang.String getEncryptionConfigurationKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_arn NimblestudioStreamingImage#encryption_configuration_key_arn}.

---

##### `encryptionConfigurationKeyType`<sup>Optional</sup> <a name="encryptionConfigurationKeyType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.encryptionConfigurationKeyType"></a>

```java
public java.lang.String getEncryptionConfigurationKeyType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#encryption_configuration_key_type NimblestudioStreamingImage#encryption_configuration_key_type}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/nimblestudio_streaming_image#tags NimblestudioStreamingImage#tags}.

---

### NimblestudioStreamingImageEncryptionConfiguration <a name="NimblestudioStreamingImageEncryptionConfiguration" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_streaming_image.NimblestudioStreamingImageEncryptionConfiguration;

NimblestudioStreamingImageEncryptionConfiguration.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### NimblestudioStreamingImageEncryptionConfigurationOutputReference <a name="NimblestudioStreamingImageEncryptionConfigurationOutputReference" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.nimblestudio_streaming_image.NimblestudioStreamingImageEncryptionConfigurationOutputReference;

new NimblestudioStreamingImageEncryptionConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyArn">keyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyType">keyType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration">NimblestudioStreamingImageEncryptionConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyArn`<sup>Required</sup> <a name="keyArn" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyArn"></a>

```java
public java.lang.String getKeyArn();
```

- *Type:* java.lang.String

---

##### `keyType`<sup>Required</sup> <a name="keyType" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.keyType"></a>

```java
public java.lang.String getKeyType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfigurationOutputReference.property.internalValue"></a>

```java
public NimblestudioStreamingImageEncryptionConfiguration getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-awscc.nimblestudioStreamingImage.NimblestudioStreamingImageEncryptionConfiguration">NimblestudioStreamingImageEncryptionConfiguration</a>

---



