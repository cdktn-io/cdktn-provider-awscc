# `cloudfrontFieldLevelEncryptionProfile` Submodule <a name="`cloudfrontFieldLevelEncryptionProfile` Submodule" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CloudfrontFieldLevelEncryptionProfile <a name="CloudfrontFieldLevelEncryptionProfile" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile awscc_cloudfront_field_level_encryption_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfile;

CloudfrontFieldLevelEncryptionProfile.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fieldLevelEncryptionProfileConfig(CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.fieldLevelEncryptionProfileConfig">fieldLevelEncryptionProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | The configuration of a field-level encryption profile. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="fieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.Initializer.parameter.fieldLevelEncryptionProfileConfig"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

The configuration of a field-level encryption profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#field_level_encryption_profile_config CloudfrontFieldLevelEncryptionProfile#field_level_encryption_profile_config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putFieldLevelEncryptionProfileConfig">putFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFieldLevelEncryptionProfileConfig` <a name="putFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putFieldLevelEncryptionProfileConfig"></a>

```java
public void putFieldLevelEncryptionProfileConfig(CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.putFieldLevelEncryptionProfileConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfile;

CloudfrontFieldLevelEncryptionProfile.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfile;

CloudfrontFieldLevelEncryptionProfile.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfile;

CloudfrontFieldLevelEncryptionProfile.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfile;

CloudfrontFieldLevelEncryptionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),CloudfrontFieldLevelEncryptionProfile.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a CloudfrontFieldLevelEncryptionProfile resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the CloudfrontFieldLevelEncryptionProfile to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing CloudfrontFieldLevelEncryptionProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the CloudfrontFieldLevelEncryptionProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig">fieldLevelEncryptionProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId">fieldLevelEncryptionProfileId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfigInput">fieldLevelEncryptionProfileConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `fieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="fieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfig"></a>

```java
public CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference getFieldLevelEncryptionProfileConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference</a>

---

##### `fieldLevelEncryptionProfileId`<sup>Required</sup> <a name="fieldLevelEncryptionProfileId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileId"></a>

```java
public java.lang.String getFieldLevelEncryptionProfileId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `fieldLevelEncryptionProfileConfigInput`<sup>Optional</sup> <a name="fieldLevelEncryptionProfileConfigInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.fieldLevelEncryptionProfileConfigInput"></a>

```java
public IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig getFieldLevelEncryptionProfileConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfile.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### CloudfrontFieldLevelEncryptionProfileConfig <a name="CloudfrontFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfileConfig;

CloudfrontFieldLevelEncryptionProfileConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .fieldLevelEncryptionProfileConfig(CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.fieldLevelEncryptionProfileConfig">fieldLevelEncryptionProfileConfig</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | The configuration of a field-level encryption profile. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `fieldLevelEncryptionProfileConfig`<sup>Required</sup> <a name="fieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileConfig.property.fieldLevelEncryptionProfileConfig"></a>

```java
public CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig getFieldLevelEncryptionProfileConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

The configuration of a field-level encryption profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#field_level_encryption_profile_config CloudfrontFieldLevelEncryptionProfile#field_level_encryption_profile_config}

---

### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig;

CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.builder()
    .callerReference(java.lang.String)
    .encryptionEntities(IResolvable|java.util.List<CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities>)
    .name(java.lang.String)
//  .comment(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.callerReference">callerReference</a></code> | <code>java.lang.String</code> | A unique value that identifies the creation request. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.encryptionEntities">encryptionEntities</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>></code> | The encryption entities of the field-level encryption profile. At least one entity is required. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the field-level encryption profile. Names are unique within an AWS account. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.comment">comment</a></code> | <code>java.lang.String</code> | An optional comment describing the field-level encryption profile. |

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.callerReference"></a>

```java
public java.lang.String getCallerReference();
```

- *Type:* java.lang.String

A unique value that identifies the creation request.

Caller references are unique within an AWS account and cannot be changed after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#caller_reference CloudfrontFieldLevelEncryptionProfile#caller_reference}

---

##### `encryptionEntities`<sup>Required</sup> <a name="encryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.encryptionEntities"></a>

```java
public IResolvable|java.util.List<CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities> getEncryptionEntities();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>>

The encryption entities of the field-level encryption profile. At least one entity is required.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#encryption_entities CloudfrontFieldLevelEncryptionProfile#encryption_entities}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the field-level encryption profile. Names are unique within an AWS account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#name CloudfrontFieldLevelEncryptionProfile#name}

---

##### `comment`<sup>Optional</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

An optional comment describing the field-level encryption profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#comment CloudfrontFieldLevelEncryptionProfile#comment}

---

### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities;

CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.builder()
    .fieldPatterns(java.util.List<java.lang.String>)
    .providerId(java.lang.String)
    .publicKeyId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.fieldPatterns">fieldPatterns</a></code> | <code>java.util.List<java.lang.String></code> | The request-body field names to encrypt. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.providerId">providerId</a></code> | <code>java.lang.String</code> | The provider associated with the public key. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.publicKeyId">publicKeyId</a></code> | <code>java.lang.String</code> | The identifier of the CloudFront public key used to encrypt the fields that match the patterns. |

---

##### `fieldPatterns`<sup>Required</sup> <a name="fieldPatterns" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.fieldPatterns"></a>

```java
public java.util.List<java.lang.String> getFieldPatterns();
```

- *Type:* java.util.List<java.lang.String>

The request-body field names to encrypt.

A pattern is either a full field name or leading characters followed by a wildcard (*). Patterns are case-sensitive and must not overlap.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#field_patterns CloudfrontFieldLevelEncryptionProfile#field_patterns}

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

The provider associated with the public key.

The same value must be supplied with the private key for an application to decrypt the data.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#provider_id CloudfrontFieldLevelEncryptionProfile#provider_id}

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities.property.publicKeyId"></a>

```java
public java.lang.String getPublicKeyId();
```

- *Type:* java.lang.String

The identifier of the CloudFront public key used to encrypt the fields that match the patterns.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.104.0/docs/resources/cloudfront_field_level_encryption_profile#public_key_id CloudfrontFieldLevelEncryptionProfile#public_key_id}

---

## Classes <a name="Classes" id="Classes"></a>

### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList;

new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get"></a>

```java
public CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>>

---


### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference;

new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatternsInput">fieldPatternsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerIdInput">providerIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyIdInput">publicKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns">fieldPatterns</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId">providerId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId">publicKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldPatternsInput`<sup>Optional</sup> <a name="fieldPatternsInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatternsInput"></a>

```java
public java.util.List<java.lang.String> getFieldPatternsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `providerIdInput`<sup>Optional</sup> <a name="providerIdInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerIdInput"></a>

```java
public java.lang.String getProviderIdInput();
```

- *Type:* java.lang.String

---

##### `publicKeyIdInput`<sup>Optional</sup> <a name="publicKeyIdInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyIdInput"></a>

```java
public java.lang.String getPublicKeyIdInput();
```

- *Type:* java.lang.String

---

##### `fieldPatterns`<sup>Required</sup> <a name="fieldPatterns" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.fieldPatterns"></a>

```java
public java.util.List<java.lang.String> getFieldPatterns();
```

- *Type:* java.util.List<java.lang.String>

---

##### `providerId`<sup>Required</sup> <a name="providerId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.providerId"></a>

```java
public java.lang.String getProviderId();
```

- *Type:* java.lang.String

---

##### `publicKeyId`<sup>Required</sup> <a name="publicKeyId" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.publicKeyId"></a>

```java
public java.lang.String getPublicKeyId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>

---


### CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference <a name="CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.cloudfront_field_level_encryption_profile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference;

new CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.putEncryptionEntities">putEncryptionEntities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resetComment">resetComment</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putEncryptionEntities` <a name="putEncryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.putEncryptionEntities"></a>

```java
public void putEncryptionEntities(IResolvable|java.util.List<CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.putEncryptionEntities.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>>

---

##### `resetComment` <a name="resetComment" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.resetComment"></a>

```java
public void resetComment()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities">encryptionEntities</a></code> | <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReferenceInput">callerReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.commentInput">commentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntitiesInput">encryptionEntitiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference">callerReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `encryptionEntities`<sup>Required</sup> <a name="encryptionEntities" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntities"></a>

```java
public CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList getEncryptionEntities();
```

- *Type:* <a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntitiesList</a>

---

##### `callerReferenceInput`<sup>Optional</sup> <a name="callerReferenceInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReferenceInput"></a>

```java
public java.lang.String getCallerReferenceInput();
```

- *Type:* java.lang.String

---

##### `commentInput`<sup>Optional</sup> <a name="commentInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.commentInput"></a>

```java
public java.lang.String getCommentInput();
```

- *Type:* java.lang.String

---

##### `encryptionEntitiesInput`<sup>Optional</sup> <a name="encryptionEntitiesInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.encryptionEntitiesInput"></a>

```java
public IResolvable|java.util.List<CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities> getEncryptionEntitiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigEncryptionEntities</a>>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `callerReference`<sup>Required</sup> <a name="callerReference" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.callerReference"></a>

```java
public java.lang.String getCallerReference();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.cloudfrontFieldLevelEncryptionProfile.CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig">CloudfrontFieldLevelEncryptionProfileFieldLevelEncryptionProfileConfig</a>

---



