# `pcaconnectoradDirectoryRegistration` Submodule <a name="`pcaconnectoradDirectoryRegistration` Submodule" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectoradDirectoryRegistration <a name="PcaconnectoradDirectoryRegistration" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration awscc_pcaconnectorad_directory_registration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_directory_registration.PcaconnectoradDirectoryRegistration;

PcaconnectoradDirectoryRegistration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration#directory_id PcaconnectoradDirectoryRegistration#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration#tags PcaconnectoradDirectoryRegistration#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.directoryId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration#directory_id PcaconnectoradDirectoryRegistration#directory_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.Initializer.parameter.tags"></a>

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration#tags PcaconnectoradDirectoryRegistration#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PcaconnectoradDirectoryRegistration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_directory_registration.PcaconnectoradDirectoryRegistration;

PcaconnectoradDirectoryRegistration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_directory_registration.PcaconnectoradDirectoryRegistration;

PcaconnectoradDirectoryRegistration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_directory_registration.PcaconnectoradDirectoryRegistration;

PcaconnectoradDirectoryRegistration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_directory_registration.PcaconnectoradDirectoryRegistration;

PcaconnectoradDirectoryRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PcaconnectoradDirectoryRegistration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PcaconnectoradDirectoryRegistration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PcaconnectoradDirectoryRegistration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PcaconnectoradDirectoryRegistration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectoradDirectoryRegistration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.directoryRegistrationArn">directoryRegistrationArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.directoryIdInput">directoryIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.tagsInput">tagsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directoryRegistrationArn`<sup>Required</sup> <a name="directoryRegistrationArn" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.directoryRegistrationArn"></a>

```java
public java.lang.String getDirectoryRegistrationArn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `directoryIdInput`<sup>Optional</sup> <a name="directoryIdInput" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.directoryIdInput"></a>

```java
public java.lang.String getDirectoryIdInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.tagsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTagsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectoradDirectoryRegistrationConfig <a name="PcaconnectoradDirectoryRegistrationConfig" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.pcaconnectorad_directory_registration.PcaconnectoradDirectoryRegistrationConfig;

PcaconnectoradDirectoryRegistrationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .directoryId(java.lang.String)
//  .tags(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.directoryId">directoryId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration#directory_id PcaconnectoradDirectoryRegistration#directory_id}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.tags">tags</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration#tags PcaconnectoradDirectoryRegistration#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `directoryId`<sup>Required</sup> <a name="directoryId" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.directoryId"></a>

```java
public java.lang.String getDirectoryId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration#directory_id PcaconnectoradDirectoryRegistration#directory_id}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.pcaconnectoradDirectoryRegistration.PcaconnectoradDirectoryRegistrationConfig.property.tags"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTags();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/pcaconnectorad_directory_registration#tags PcaconnectoradDirectoryRegistration#tags}.

---



