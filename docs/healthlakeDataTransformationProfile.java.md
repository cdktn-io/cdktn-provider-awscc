# `healthlakeDataTransformationProfile` Submodule <a name="`healthlakeDataTransformationProfile` Submodule" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HealthlakeDataTransformationProfile <a name="HealthlakeDataTransformationProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile awscc_healthlake_data_transformation_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfile;

HealthlakeDataTransformationProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .profileName(java.lang.String)
    .sourceFormat(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .profileDescription(java.lang.String)
//  .source(HealthlakeDataTransformationProfileSource)
//  .tags(IResolvable|java.util.List<HealthlakeDataTransformationProfileTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.profileName">profileName</a></code> | <code>java.lang.String</code> | The human-readable name of the profile. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.sourceFormat">sourceFormat</a></code> | <code>java.lang.String</code> | The source format that this profile converts from. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.profileDescription">profileDescription</a></code> | <code>java.lang.String</code> | A human-readable description of the profile's purpose. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | The source from which to create the profile's initial template content. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>></code> | An array of key-value pairs to apply to this profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.profileName"></a>

- *Type:* java.lang.String

The human-readable name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_name HealthlakeDataTransformationProfile#profile_name}

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.sourceFormat"></a>

- *Type:* java.lang.String

The source format that this profile converts from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#source_format HealthlakeDataTransformationProfile#source_format}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest.

If omitted, an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#kms_key_id HealthlakeDataTransformationProfile#kms_key_id}

---

##### `profileDescription`<sup>Optional</sup> <a name="profileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.profileDescription"></a>

- *Type:* java.lang.String

A human-readable description of the profile's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_description HealthlakeDataTransformationProfile#profile_description}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.source"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

The source from which to create the profile's initial template content.

Exactly one of the members must be specified. Use StarterProfile (C-CDA only), ProfileMapping (C-CDA or CSV), or ExistingVersionedProfileId to clone an existing profile. Each produces a published profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#source HealthlakeDataTransformationProfile#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>>

An array of key-value pairs to apply to this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#tags HealthlakeDataTransformationProfile#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource">putSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetProfileDescription">resetProfileDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetSource">resetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSource` <a name="putSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource"></a>

```java
public void putSource(HealthlakeDataTransformationProfileSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<HealthlakeDataTransformationProfileTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>>

---

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetProfileDescription` <a name="resetProfileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetProfileDescription"></a>

```java
public void resetProfileDescription()
```

##### `resetSource` <a name="resetSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetSource"></a>

```java
public void resetSource()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a HealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfile;

HealthlakeDataTransformationProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfile;

HealthlakeDataTransformationProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfile;

HealthlakeDataTransformationProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfile;

HealthlakeDataTransformationProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),HealthlakeDataTransformationProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a HealthlakeDataTransformationProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the HealthlakeDataTransformationProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing HealthlakeDataTransformationProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the HealthlakeDataTransformationProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference">HealthlakeDataTransformationProfileSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList">HealthlakeDataTransformationProfileTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.targetFormat">targetFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescriptionInput">profileDescriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileNameInput">profileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormatInput">sourceFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceInput">sourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescription">profileDescription</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileName">profileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormat">sourceFormat</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `source`<sup>Required</sup> <a name="source" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.source"></a>

```java
public HealthlakeDataTransformationProfileSourceOutputReference getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference">HealthlakeDataTransformationProfileSourceOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tags"></a>

```java
public HealthlakeDataTransformationProfileTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList">HealthlakeDataTransformationProfileTagsList</a>

---

##### `targetFormat`<sup>Required</sup> <a name="targetFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.targetFormat"></a>

```java
public java.lang.String getTargetFormat();
```

- *Type:* java.lang.String

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `profileDescriptionInput`<sup>Optional</sup> <a name="profileDescriptionInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescriptionInput"></a>

```java
public java.lang.String getProfileDescriptionInput();
```

- *Type:* java.lang.String

---

##### `profileNameInput`<sup>Optional</sup> <a name="profileNameInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileNameInput"></a>

```java
public java.lang.String getProfileNameInput();
```

- *Type:* java.lang.String

---

##### `sourceFormatInput`<sup>Optional</sup> <a name="sourceFormatInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormatInput"></a>

```java
public java.lang.String getSourceFormatInput();
```

- *Type:* java.lang.String

---

##### `sourceInput`<sup>Optional</sup> <a name="sourceInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceInput"></a>

```java
public IResolvable|HealthlakeDataTransformationProfileSource getSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tagsInput"></a>

```java
public IResolvable|java.util.List<HealthlakeDataTransformationProfileTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>>

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `profileDescription`<sup>Required</sup> <a name="profileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileDescription"></a>

```java
public java.lang.String getProfileDescription();
```

- *Type:* java.lang.String

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.sourceFormat"></a>

```java
public java.lang.String getSourceFormat();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### HealthlakeDataTransformationProfileConfig <a name="HealthlakeDataTransformationProfileConfig" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileConfig;

HealthlakeDataTransformationProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .profileName(java.lang.String)
    .sourceFormat(java.lang.String)
//  .kmsKeyId(java.lang.String)
//  .profileDescription(java.lang.String)
//  .source(HealthlakeDataTransformationProfileSource)
//  .tags(IResolvable|java.util.List<HealthlakeDataTransformationProfileTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileName">profileName</a></code> | <code>java.lang.String</code> | The human-readable name of the profile. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.sourceFormat">sourceFormat</a></code> | <code>java.lang.String</code> | The source format that this profile converts from. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileDescription">profileDescription</a></code> | <code>java.lang.String</code> | A human-readable description of the profile's purpose. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.source">source</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | The source from which to create the profile's initial template content. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>></code> | An array of key-value pairs to apply to this profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `profileName`<sup>Required</sup> <a name="profileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileName"></a>

```java
public java.lang.String getProfileName();
```

- *Type:* java.lang.String

The human-readable name of the profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_name HealthlakeDataTransformationProfile#profile_name}

---

##### `sourceFormat`<sup>Required</sup> <a name="sourceFormat" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.sourceFormat"></a>

```java
public java.lang.String getSourceFormat();
```

- *Type:* java.lang.String

The source format that this profile converts from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#source_format HealthlakeDataTransformationProfile#source_format}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

The identifier (key ID or ARN) of a customer-managed KMS key used to encrypt the profile's template content at rest.

If omitted, an AWS owned key is used.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#kms_key_id HealthlakeDataTransformationProfile#kms_key_id}

---

##### `profileDescription`<sup>Optional</sup> <a name="profileDescription" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.profileDescription"></a>

```java
public java.lang.String getProfileDescription();
```

- *Type:* java.lang.String

A human-readable description of the profile's purpose.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_description HealthlakeDataTransformationProfile#profile_description}

---

##### `source`<sup>Optional</sup> <a name="source" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.source"></a>

```java
public HealthlakeDataTransformationProfileSource getSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

The source from which to create the profile's initial template content.

Exactly one of the members must be specified. Use StarterProfile (C-CDA only), ProfileMapping (C-CDA or CSV), or ExistingVersionedProfileId to clone an existing profile. Each produces a published profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#source HealthlakeDataTransformationProfile#source}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileConfig.property.tags"></a>

```java
public IResolvable|java.util.List<HealthlakeDataTransformationProfileTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>>

An array of key-value pairs to apply to this profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#tags HealthlakeDataTransformationProfile#tags}

---

### HealthlakeDataTransformationProfileSource <a name="HealthlakeDataTransformationProfileSource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileSource;

HealthlakeDataTransformationProfileSource.builder()
//  .existingVersionedProfileId(HealthlakeDataTransformationProfileSourceExistingVersionedProfileId)
//  .profileMapping(HealthlakeDataTransformationProfileSourceProfileMapping)
//  .starterProfile(HealthlakeDataTransformationProfileSourceStarterProfile)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.existingVersionedProfileId">existingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | Create the profile by cloning a specific version of an existing profile. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.profileMapping">profileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | Create the profile from raw Velocity template mapping content. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.starterProfile">starterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | Create the profile from a predefined starter profile of transformation templates. |

---

##### `existingVersionedProfileId`<sup>Optional</sup> <a name="existingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.existingVersionedProfileId"></a>

```java
public HealthlakeDataTransformationProfileSourceExistingVersionedProfileId getExistingVersionedProfileId();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

Create the profile by cloning a specific version of an existing profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#existing_versioned_profile_id HealthlakeDataTransformationProfile#existing_versioned_profile_id}

---

##### `profileMapping`<sup>Optional</sup> <a name="profileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.profileMapping"></a>

```java
public HealthlakeDataTransformationProfileSourceProfileMapping getProfileMapping();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

Create the profile from raw Velocity template mapping content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_mapping HealthlakeDataTransformationProfile#profile_mapping}

---

##### `starterProfile`<sup>Optional</sup> <a name="starterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource.property.starterProfile"></a>

```java
public HealthlakeDataTransformationProfileSourceStarterProfile getStarterProfile();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

Create the profile from a predefined starter profile of transformation templates.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#starter_profile HealthlakeDataTransformationProfile#starter_profile}

---

### HealthlakeDataTransformationProfileSourceExistingVersionedProfileId <a name="HealthlakeDataTransformationProfileSourceExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId;

HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.builder()
//  .profileId(java.lang.String)
//  .version(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.profileId">profileId</a></code> | <code>java.lang.String</code> | The unique identifier of the source profile to clone. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.version">version</a></code> | <code>java.lang.Number</code> | The version number of the source profile to clone. |

---

##### `profileId`<sup>Optional</sup> <a name="profileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

The unique identifier of the source profile to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_id HealthlakeDataTransformationProfile#profile_id}

---

##### `version`<sup>Optional</sup> <a name="version" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

The version number of the source profile to clone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#version HealthlakeDataTransformationProfile#version}

---

### HealthlakeDataTransformationProfileSourceProfileMapping <a name="HealthlakeDataTransformationProfileSourceProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileSourceProfileMapping;

HealthlakeDataTransformationProfileSourceProfileMapping.builder()
//  .profileMapping(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.property.profileMapping">profileMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Map of template file paths to their Velocity template content. |

---

##### `profileMapping`<sup>Optional</sup> <a name="profileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping.property.profileMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProfileMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Map of template file paths to their Velocity template content.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#profile_mapping HealthlakeDataTransformationProfile#profile_mapping}

---

### HealthlakeDataTransformationProfileSourceStarterProfile <a name="HealthlakeDataTransformationProfileSourceStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileSourceStarterProfile;

HealthlakeDataTransformationProfileSourceStarterProfile.builder()
//  .starterProfileName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.property.starterProfileName">starterProfileName</a></code> | <code>java.lang.String</code> | The name of the starter profile to seed the profile from. |

---

##### `starterProfileName`<sup>Optional</sup> <a name="starterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile.property.starterProfileName"></a>

```java
public java.lang.String getStarterProfileName();
```

- *Type:* java.lang.String

The name of the starter profile to seed the profile from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#starter_profile_name HealthlakeDataTransformationProfile#starter_profile_name}

---

### HealthlakeDataTransformationProfileTags <a name="HealthlakeDataTransformationProfileTags" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileTags;

HealthlakeDataTransformationProfileTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.key">key</a></code> | <code>java.lang.String</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.value">value</a></code> | <code>java.lang.String</code> | The value of the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#key HealthlakeDataTransformationProfile#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/healthlake_data_transformation_profile#value HealthlakeDataTransformationProfile#value}

---

## Classes <a name="Classes" id="Classes"></a>

### HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference <a name="HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference;

new HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetProfileId">resetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetVersion">resetVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProfileId` <a name="resetProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetProfileId"></a>

```java
public void resetProfileId()
```

##### `resetVersion` <a name="resetVersion" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.resetVersion"></a>

```java
public void resetVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileIdInput">profileIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.versionInput">versionInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId">profileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `profileIdInput`<sup>Optional</sup> <a name="profileIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileIdInput"></a>

```java
public java.lang.String getProfileIdInput();
```

- *Type:* java.lang.String

---

##### `versionInput`<sup>Optional</sup> <a name="versionInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.versionInput"></a>

```java
public java.lang.Number getVersionInput();
```

- *Type:* java.lang.Number

---

##### `profileId`<sup>Required</sup> <a name="profileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.profileId"></a>

```java
public java.lang.String getProfileId();
```

- *Type:* java.lang.String

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeDataTransformationProfileSourceExistingVersionedProfileId getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---


### HealthlakeDataTransformationProfileSourceOutputReference <a name="HealthlakeDataTransformationProfileSourceOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileSourceOutputReference;

new HealthlakeDataTransformationProfileSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId">putExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping">putProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile">putStarterProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetExistingVersionedProfileId">resetExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetProfileMapping">resetProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetStarterProfile">resetStarterProfile</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putExistingVersionedProfileId` <a name="putExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId"></a>

```java
public void putExistingVersionedProfileId(HealthlakeDataTransformationProfileSourceExistingVersionedProfileId value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putExistingVersionedProfileId.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---

##### `putProfileMapping` <a name="putProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping"></a>

```java
public void putProfileMapping(HealthlakeDataTransformationProfileSourceProfileMapping value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putProfileMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---

##### `putStarterProfile` <a name="putStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile"></a>

```java
public void putStarterProfile(HealthlakeDataTransformationProfileSourceStarterProfile value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.putStarterProfile.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---

##### `resetExistingVersionedProfileId` <a name="resetExistingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetExistingVersionedProfileId"></a>

```java
public void resetExistingVersionedProfileId()
```

##### `resetProfileMapping` <a name="resetProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetProfileMapping"></a>

```java
public void resetProfileMapping()
```

##### `resetStarterProfile` <a name="resetStarterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.resetStarterProfile"></a>

```java
public void resetStarterProfile()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId">existingVersionedProfileId</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping">profileMapping</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference">HealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile">starterProfile</a></code> | <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference">HealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileIdInput">existingVersionedProfileIdInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMappingInput">profileMappingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfileInput">starterProfileInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `existingVersionedProfileId`<sup>Required</sup> <a name="existingVersionedProfileId" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileId"></a>

```java
public HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference getExistingVersionedProfileId();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference">HealthlakeDataTransformationProfileSourceExistingVersionedProfileIdOutputReference</a>

---

##### `profileMapping`<sup>Required</sup> <a name="profileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMapping"></a>

```java
public HealthlakeDataTransformationProfileSourceProfileMappingOutputReference getProfileMapping();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference">HealthlakeDataTransformationProfileSourceProfileMappingOutputReference</a>

---

##### `starterProfile`<sup>Required</sup> <a name="starterProfile" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfile"></a>

```java
public HealthlakeDataTransformationProfileSourceStarterProfileOutputReference getStarterProfile();
```

- *Type:* <a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference">HealthlakeDataTransformationProfileSourceStarterProfileOutputReference</a>

---

##### `existingVersionedProfileIdInput`<sup>Optional</sup> <a name="existingVersionedProfileIdInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.existingVersionedProfileIdInput"></a>

```java
public IResolvable|HealthlakeDataTransformationProfileSourceExistingVersionedProfileId getExistingVersionedProfileIdInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceExistingVersionedProfileId">HealthlakeDataTransformationProfileSourceExistingVersionedProfileId</a>

---

##### `profileMappingInput`<sup>Optional</sup> <a name="profileMappingInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.profileMappingInput"></a>

```java
public IResolvable|HealthlakeDataTransformationProfileSourceProfileMapping getProfileMappingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---

##### `starterProfileInput`<sup>Optional</sup> <a name="starterProfileInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.starterProfileInput"></a>

```java
public IResolvable|HealthlakeDataTransformationProfileSourceStarterProfile getStarterProfileInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeDataTransformationProfileSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSource">HealthlakeDataTransformationProfileSource</a>

---


### HealthlakeDataTransformationProfileSourceProfileMappingOutputReference <a name="HealthlakeDataTransformationProfileSourceProfileMappingOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference;

new HealthlakeDataTransformationProfileSourceProfileMappingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resetProfileMapping">resetProfileMapping</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetProfileMapping` <a name="resetProfileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.resetProfileMapping"></a>

```java
public void resetProfileMapping()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMappingInput">profileMappingInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping">profileMapping</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `profileMappingInput`<sup>Optional</sup> <a name="profileMappingInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMappingInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProfileMappingInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `profileMapping`<sup>Required</sup> <a name="profileMapping" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.profileMapping"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProfileMapping();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMappingOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeDataTransformationProfileSourceProfileMapping getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceProfileMapping">HealthlakeDataTransformationProfileSourceProfileMapping</a>

---


### HealthlakeDataTransformationProfileSourceStarterProfileOutputReference <a name="HealthlakeDataTransformationProfileSourceStarterProfileOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference;

new HealthlakeDataTransformationProfileSourceStarterProfileOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resetStarterProfileName">resetStarterProfileName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetStarterProfileName` <a name="resetStarterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.resetStarterProfileName"></a>

```java
public void resetStarterProfileName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileNameInput">starterProfileNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName">starterProfileName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `starterProfileNameInput`<sup>Optional</sup> <a name="starterProfileNameInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileNameInput"></a>

```java
public java.lang.String getStarterProfileNameInput();
```

- *Type:* java.lang.String

---

##### `starterProfileName`<sup>Required</sup> <a name="starterProfileName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.starterProfileName"></a>

```java
public java.lang.String getStarterProfileName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfileOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeDataTransformationProfileSourceStarterProfile getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileSourceStarterProfile">HealthlakeDataTransformationProfileSourceStarterProfile</a>

---


### HealthlakeDataTransformationProfileTagsList <a name="HealthlakeDataTransformationProfileTagsList" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileTagsList;

new HealthlakeDataTransformationProfileTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get"></a>

```java
public HealthlakeDataTransformationProfileTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<HealthlakeDataTransformationProfileTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>>

---


### HealthlakeDataTransformationProfileTagsOutputReference <a name="HealthlakeDataTransformationProfileTagsOutputReference" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.healthlake_data_transformation_profile.HealthlakeDataTransformationProfileTagsOutputReference;

new HealthlakeDataTransformationProfileTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|HealthlakeDataTransformationProfileTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.healthlakeDataTransformationProfile.HealthlakeDataTransformationProfileTags">HealthlakeDataTransformationProfileTags</a>

---



