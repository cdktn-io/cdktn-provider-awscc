# `groundstationConfig` Submodule <a name="`groundstationConfig` Submodule" id="@cdktn/provider-awscc.groundstationConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### GroundstationConfig <a name="GroundstationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config awscc_groundstation_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfig;

GroundstationConfig.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configData(GroundstationConfigConfigData)
    .name(java.lang.String)
//  .tags(IResolvable|java.util.List<GroundstationConfigTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.configData">configData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#config_data GroundstationConfig#config_data}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#name GroundstationConfig#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tags GroundstationConfig#tags}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configData`<sup>Required</sup> <a name="configData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.configData"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#config_data GroundstationConfig#config_data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#name GroundstationConfig#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tags GroundstationConfig#tags}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putConfigData">putConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfigData` <a name="putConfigData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putConfigData"></a>

```java
public void putConfigData(GroundstationConfigConfigData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putConfigData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<GroundstationConfigTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a GroundstationConfig resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isConstruct"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfig;

GroundstationConfig.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfig;

GroundstationConfig.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfig;

GroundstationConfig.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfig;

GroundstationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),GroundstationConfig.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a GroundstationConfig resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the GroundstationConfig to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing GroundstationConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the GroundstationConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configData">configData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference">GroundstationConfigConfigDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configId">configId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList">GroundstationConfigTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configDataInput">configDataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `configData`<sup>Required</sup> <a name="configData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configData"></a>

```java
public GroundstationConfigConfigDataOutputReference getConfigData();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference">GroundstationConfigConfigDataOutputReference</a>

---

##### `configId`<sup>Required</sup> <a name="configId" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configId"></a>

```java
public java.lang.String getConfigId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tags"></a>

```java
public GroundstationConfigTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList">GroundstationConfigTagsList</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `configDataInput`<sup>Optional</sup> <a name="configDataInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.configDataInput"></a>

```java
public IResolvable|GroundstationConfigConfigData getConfigDataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tagsInput"></a>

```java
public IResolvable|java.util.List<GroundstationConfigTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfig.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### GroundstationConfigConfig <a name="GroundstationConfigConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfig;

GroundstationConfigConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .configData(GroundstationConfigConfigData)
    .name(java.lang.String)
//  .tags(IResolvable|java.util.List<GroundstationConfigTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.configData">configData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#config_data GroundstationConfig#config_data}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#name GroundstationConfig#name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tags GroundstationConfig#tags}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `configData`<sup>Required</sup> <a name="configData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.configData"></a>

```java
public GroundstationConfigConfigData getConfigData();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#config_data GroundstationConfig#config_data}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#name GroundstationConfig#name}.

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfig.property.tags"></a>

```java
public IResolvable|java.util.List<GroundstationConfigTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tags GroundstationConfig#tags}.

---

### GroundstationConfigConfigData <a name="GroundstationConfigConfigData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigData;

GroundstationConfigConfigData.builder()
//  .antennaDownlinkConfig(GroundstationConfigConfigDataAntennaDownlinkConfig)
//  .antennaDownlinkDemodDecodeConfig(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig)
//  .antennaUplinkConfig(GroundstationConfigConfigDataAntennaUplinkConfig)
//  .dataflowEndpointConfig(GroundstationConfigConfigDataDataflowEndpointConfig)
//  .s3RecordingConfig(GroundstationConfigConfigDataS3RecordingConfig)
//  .telemetrySinkConfig(GroundstationConfigConfigDataTelemetrySinkConfig)
//  .trackingConfig(GroundstationConfigConfigDataTrackingConfig)
//  .uplinkEchoConfig(GroundstationConfigConfigDataUplinkEchoConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkConfig">antennaDownlinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_downlink_config GroundstationConfig#antenna_downlink_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkDemodDecodeConfig">antennaDownlinkDemodDecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_downlink_demod_decode_config GroundstationConfig#antenna_downlink_demod_decode_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaUplinkConfig">antennaUplinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_uplink_config GroundstationConfig#antenna_uplink_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.dataflowEndpointConfig">dataflowEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_config GroundstationConfig#dataflow_endpoint_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.s3RecordingConfig">s3RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#s3_recording_config GroundstationConfig#s3_recording_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.telemetrySinkConfig">telemetrySinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_config GroundstationConfig#telemetry_sink_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.trackingConfig">trackingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tracking_config GroundstationConfig#tracking_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.uplinkEchoConfig">uplinkEchoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#uplink_echo_config GroundstationConfig#uplink_echo_config}. |

---

##### `antennaDownlinkConfig`<sup>Optional</sup> <a name="antennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkConfig getAntennaDownlinkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_downlink_config GroundstationConfig#antenna_downlink_config}.

---

##### `antennaDownlinkDemodDecodeConfig`<sup>Optional</sup> <a name="antennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaDownlinkDemodDecodeConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig getAntennaDownlinkDemodDecodeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_downlink_demod_decode_config GroundstationConfig#antenna_downlink_demod_decode_config}.

---

##### `antennaUplinkConfig`<sup>Optional</sup> <a name="antennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.antennaUplinkConfig"></a>

```java
public GroundstationConfigConfigDataAntennaUplinkConfig getAntennaUplinkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_uplink_config GroundstationConfig#antenna_uplink_config}.

---

##### `dataflowEndpointConfig`<sup>Optional</sup> <a name="dataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.dataflowEndpointConfig"></a>

```java
public GroundstationConfigConfigDataDataflowEndpointConfig getDataflowEndpointConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_config GroundstationConfig#dataflow_endpoint_config}.

---

##### `s3RecordingConfig`<sup>Optional</sup> <a name="s3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.s3RecordingConfig"></a>

```java
public GroundstationConfigConfigDataS3RecordingConfig getS3RecordingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#s3_recording_config GroundstationConfig#s3_recording_config}.

---

##### `telemetrySinkConfig`<sup>Optional</sup> <a name="telemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.telemetrySinkConfig"></a>

```java
public GroundstationConfigConfigDataTelemetrySinkConfig getTelemetrySinkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_config GroundstationConfig#telemetry_sink_config}.

---

##### `trackingConfig`<sup>Optional</sup> <a name="trackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.trackingConfig"></a>

```java
public GroundstationConfigConfigDataTrackingConfig getTrackingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#tracking_config GroundstationConfig#tracking_config}.

---

##### `uplinkEchoConfig`<sup>Optional</sup> <a name="uplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData.property.uplinkEchoConfig"></a>

```java
public GroundstationConfigConfigDataUplinkEchoConfig getUplinkEchoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#uplink_echo_config GroundstationConfig#uplink_echo_config}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfig <a name="GroundstationConfigConfigDataAntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkConfig;

GroundstationConfigConfigDataAntennaDownlinkConfig.builder()
//  .spectrumConfig(GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}. |

---

##### `spectrumConfig`<sup>Optional</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig.property.spectrumConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig getSpectrumConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig;

GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.builder()
//  .bandwidth(GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth)
//  .centerFrequency(GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency)
//  .polarization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.polarization">polarization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}. |

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.bandwidth"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth getBandwidth();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}.

---

##### `centerFrequency`<sup>Optional</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.centerFrequency"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency getCenterFrequency();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}.

---

##### `polarization`<sup>Optional</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig.property.polarization"></a>

```java
public java.lang.String getPolarization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth;

GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.builder()
//  .units(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.units">units</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency;

GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.builder()
//  .units(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.units">units</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig;

GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.builder()
//  .decodeConfig(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig)
//  .demodulationConfig(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig)
//  .spectrumConfig(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.decodeConfig">decodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#decode_config GroundstationConfig#decode_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.demodulationConfig">demodulationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#demodulation_config GroundstationConfig#demodulation_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}. |

---

##### `decodeConfig`<sup>Optional</sup> <a name="decodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.decodeConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig getDecodeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#decode_config GroundstationConfig#decode_config}.

---

##### `demodulationConfig`<sup>Optional</sup> <a name="demodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.demodulationConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig getDemodulationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#demodulation_config GroundstationConfig#demodulation_config}.

---

##### `spectrumConfig`<sup>Optional</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig.property.spectrumConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig getSpectrumConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig;

GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.builder()
//  .unvalidatedJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.property.unvalidatedJson">unvalidatedJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}. |

---

##### `unvalidatedJson`<sup>Optional</sup> <a name="unvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig.property.unvalidatedJson"></a>

```java
public java.lang.String getUnvalidatedJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig;

GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.builder()
//  .unvalidatedJson(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.property.unvalidatedJson">unvalidatedJson</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}. |

---

##### `unvalidatedJson`<sup>Optional</sup> <a name="unvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig.property.unvalidatedJson"></a>

```java
public java.lang.String getUnvalidatedJson();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#unvalidated_json GroundstationConfig#unvalidated_json}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig;

GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.builder()
//  .bandwidth(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth)
//  .centerFrequency(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency)
//  .polarization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.polarization">polarization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}. |

---

##### `bandwidth`<sup>Optional</sup> <a name="bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.bandwidth"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth getBandwidth();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bandwidth GroundstationConfig#bandwidth}.

---

##### `centerFrequency`<sup>Optional</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.centerFrequency"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency getCenterFrequency();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}.

---

##### `polarization`<sup>Optional</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig.property.polarization"></a>

```java
public java.lang.String getPolarization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth;

GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.builder()
//  .units(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.units">units</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency;

GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.builder()
//  .units(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.units">units</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaUplinkConfig <a name="GroundstationConfigConfigDataAntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaUplinkConfig;

GroundstationConfigConfigDataAntennaUplinkConfig.builder()
//  .spectrumConfig(GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig)
//  .targetEirp(GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp)
//  .transmitDisabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.targetEirp">targetEirp</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#target_eirp GroundstationConfig#target_eirp}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.transmitDisabled">transmitDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#transmit_disabled GroundstationConfig#transmit_disabled}. |

---

##### `spectrumConfig`<sup>Optional</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.spectrumConfig"></a>

```java
public GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig getSpectrumConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#spectrum_config GroundstationConfig#spectrum_config}.

---

##### `targetEirp`<sup>Optional</sup> <a name="targetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.targetEirp"></a>

```java
public GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp getTargetEirp();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#target_eirp GroundstationConfig#target_eirp}.

---

##### `transmitDisabled`<sup>Optional</sup> <a name="transmitDisabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig.property.transmitDisabled"></a>

```java
public java.lang.Boolean|IResolvable getTransmitDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#transmit_disabled GroundstationConfig#transmit_disabled}.

---

### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig;

GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.builder()
//  .centerFrequency(GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency)
//  .polarization(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.polarization">polarization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}. |

---

##### `centerFrequency`<sup>Optional</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.centerFrequency"></a>

```java
public GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency getCenterFrequency();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#center_frequency GroundstationConfig#center_frequency}.

---

##### `polarization`<sup>Optional</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig.property.polarization"></a>

```java
public java.lang.String getPolarization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#polarization GroundstationConfig#polarization}.

---

### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency;

GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.builder()
//  .units(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.units">units</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp <a name="GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp;

GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.builder()
//  .units(java.lang.String)
//  .value(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.units">units</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.value">value</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `units`<sup>Optional</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#units GroundstationConfig#units}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

### GroundstationConfigConfigDataDataflowEndpointConfig <a name="GroundstationConfigConfigDataDataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataDataflowEndpointConfig;

GroundstationConfigConfigDataDataflowEndpointConfig.builder()
//  .dataflowEndpointName(java.lang.String)
//  .dataflowEndpointRegion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointName">dataflowEndpointName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_name GroundstationConfig#dataflow_endpoint_name}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointRegion">dataflowEndpointRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_region GroundstationConfig#dataflow_endpoint_region}. |

---

##### `dataflowEndpointName`<sup>Optional</sup> <a name="dataflowEndpointName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointName"></a>

```java
public java.lang.String getDataflowEndpointName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_name GroundstationConfig#dataflow_endpoint_name}.

---

##### `dataflowEndpointRegion`<sup>Optional</sup> <a name="dataflowEndpointRegion" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig.property.dataflowEndpointRegion"></a>

```java
public java.lang.String getDataflowEndpointRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#dataflow_endpoint_region GroundstationConfig#dataflow_endpoint_region}.

---

### GroundstationConfigConfigDataS3RecordingConfig <a name="GroundstationConfigConfigDataS3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataS3RecordingConfig;

GroundstationConfigConfigDataS3RecordingConfig.builder()
//  .bucketArn(java.lang.String)
//  .prefix(java.lang.String)
//  .roleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bucket_arn GroundstationConfig#bucket_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#prefix GroundstationConfig#prefix}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#role_arn GroundstationConfig#role_arn}. |

---

##### `bucketArn`<sup>Optional</sup> <a name="bucketArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#bucket_arn GroundstationConfig#bucket_arn}.

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#prefix GroundstationConfig#prefix}.

---

##### `roleArn`<sup>Optional</sup> <a name="roleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#role_arn GroundstationConfig#role_arn}.

---

### GroundstationConfigConfigDataTelemetrySinkConfig <a name="GroundstationConfigConfigDataTelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataTelemetrySinkConfig;

GroundstationConfigConfigDataTelemetrySinkConfig.builder()
//  .telemetrySinkData(GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData)
//  .telemetrySinkType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkData">telemetrySinkData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_data GroundstationConfig#telemetry_sink_data}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkType">telemetrySinkType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_type GroundstationConfig#telemetry_sink_type}. |

---

##### `telemetrySinkData`<sup>Optional</sup> <a name="telemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkData"></a>

```java
public GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData getTelemetrySinkData();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_data GroundstationConfig#telemetry_sink_data}.

---

##### `telemetrySinkType`<sup>Optional</sup> <a name="telemetrySinkType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig.property.telemetrySinkType"></a>

```java
public java.lang.String getTelemetrySinkType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#telemetry_sink_type GroundstationConfig#telemetry_sink_type}.

---

### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData;

GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.builder()
//  .kinesisDataStreamData(GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.property.kinesisDataStreamData">kinesisDataStreamData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_data_stream_data GroundstationConfig#kinesis_data_stream_data}. |

---

##### `kinesisDataStreamData`<sup>Optional</sup> <a name="kinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData.property.kinesisDataStreamData"></a>

```java
public GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData getKinesisDataStreamData();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_data_stream_data GroundstationConfig#kinesis_data_stream_data}.

---

### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData;

GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.builder()
//  .kinesisDataStreamArn(java.lang.String)
//  .kinesisRoleArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisDataStreamArn">kinesisDataStreamArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_data_stream_arn GroundstationConfig#kinesis_data_stream_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisRoleArn">kinesisRoleArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_role_arn GroundstationConfig#kinesis_role_arn}. |

---

##### `kinesisDataStreamArn`<sup>Optional</sup> <a name="kinesisDataStreamArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisDataStreamArn"></a>

```java
public java.lang.String getKinesisDataStreamArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_data_stream_arn GroundstationConfig#kinesis_data_stream_arn}.

---

##### `kinesisRoleArn`<sup>Optional</sup> <a name="kinesisRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData.property.kinesisRoleArn"></a>

```java
public java.lang.String getKinesisRoleArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#kinesis_role_arn GroundstationConfig#kinesis_role_arn}.

---

### GroundstationConfigConfigDataTrackingConfig <a name="GroundstationConfigConfigDataTrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataTrackingConfig;

GroundstationConfigConfigDataTrackingConfig.builder()
//  .autotrack(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig.property.autotrack">autotrack</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#autotrack GroundstationConfig#autotrack}. |

---

##### `autotrack`<sup>Optional</sup> <a name="autotrack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig.property.autotrack"></a>

```java
public java.lang.String getAutotrack();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#autotrack GroundstationConfig#autotrack}.

---

### GroundstationConfigConfigDataUplinkEchoConfig <a name="GroundstationConfigConfigDataUplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataUplinkEchoConfig;

GroundstationConfigConfigDataUplinkEchoConfig.builder()
//  .antennaUplinkConfigArn(java.lang.String)
//  .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.antennaUplinkConfigArn">antennaUplinkConfigArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_uplink_config_arn GroundstationConfig#antenna_uplink_config_arn}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#enabled GroundstationConfig#enabled}. |

---

##### `antennaUplinkConfigArn`<sup>Optional</sup> <a name="antennaUplinkConfigArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.antennaUplinkConfigArn"></a>

```java
public java.lang.String getAntennaUplinkConfigArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#antenna_uplink_config_arn GroundstationConfig#antenna_uplink_config_arn}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#enabled GroundstationConfig#enabled}.

---

### GroundstationConfigTags <a name="GroundstationConfigTags" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigTags;

GroundstationConfigTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.key">key</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#key GroundstationConfig#key}. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.value">value</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#key GroundstationConfig#key}.

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/groundstation_config#value GroundstationConfig#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.putSpectrumConfig">putSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resetSpectrumConfig">resetSpectrumConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpectrumConfig` <a name="putSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.putSpectrumConfig"></a>

```java
public void putSpectrumConfig(GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.putSpectrumConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

---

##### `resetSpectrumConfig` <a name="resetSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.resetSpectrumConfig"></a>

```java
public void resetSpectrumConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfigInput">spectrumConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spectrumConfig`<sup>Required</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference getSpectrumConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference</a>

---

##### `spectrumConfigInput`<sup>Optional</sup> <a name="spectrumConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.spectrumConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig getSpectrumConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetUnits"></a>

```java
public void resetUnits()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

---


### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits"></a>

```java
public void resetUnits()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

---


### GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putBandwidth">putBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putCenterFrequency">putCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetCenterFrequency">resetCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetPolarization">resetPolarization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBandwidth` <a name="putBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putBandwidth"></a>

```java
public void putBandwidth(GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

---

##### `putCenterFrequency` <a name="putCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putCenterFrequency"></a>

```java
public void putCenterFrequency(GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.putCenterFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

---

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetBandwidth"></a>

```java
public void resetBandwidth()
```

##### `resetCenterFrequency` <a name="resetCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetCenterFrequency"></a>

```java
public void resetCenterFrequency()
```

##### `resetPolarization` <a name="resetPolarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.resetPolarization"></a>

```java
public void resetPolarization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidthInput">bandwidthInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput">centerFrequencyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarizationInput">polarizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization">polarization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference getBandwidth();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `centerFrequency`<sup>Required</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference getCenterFrequency();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.bandwidthInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth getBandwidthInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigBandwidth</a>

---

##### `centerFrequencyInput`<sup>Optional</sup> <a name="centerFrequencyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency getCenterFrequencyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigCenterFrequency</a>

---

##### `polarizationInput`<sup>Optional</sup> <a name="polarizationInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarizationInput"></a>

```java
public java.lang.String getPolarizationInput();
```

- *Type:* java.lang.String

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```java
public java.lang.String getPolarization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkConfigSpectrumConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resetUnvalidatedJson">resetUnvalidatedJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnvalidatedJson` <a name="resetUnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.resetUnvalidatedJson"></a>

```java
public void resetUnvalidatedJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJsonInput">unvalidatedJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson">unvalidatedJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unvalidatedJsonInput`<sup>Optional</sup> <a name="unvalidatedJsonInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJsonInput"></a>

```java
public java.lang.String getUnvalidatedJsonInput();
```

- *Type:* java.lang.String

---

##### `unvalidatedJson`<sup>Required</sup> <a name="unvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.unvalidatedJson"></a>

```java
public java.lang.String getUnvalidatedJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resetUnvalidatedJson">resetUnvalidatedJson</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnvalidatedJson` <a name="resetUnvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.resetUnvalidatedJson"></a>

```java
public void resetUnvalidatedJson()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJsonInput">unvalidatedJsonInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson">unvalidatedJson</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unvalidatedJsonInput`<sup>Optional</sup> <a name="unvalidatedJsonInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJsonInput"></a>

```java
public java.lang.String getUnvalidatedJsonInput();
```

- *Type:* java.lang.String

---

##### `unvalidatedJson`<sup>Required</sup> <a name="unvalidatedJson" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.unvalidatedJson"></a>

```java
public java.lang.String getUnvalidatedJson();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDecodeConfig">putDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDemodulationConfig">putDemodulationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putSpectrumConfig">putSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDecodeConfig">resetDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDemodulationConfig">resetDemodulationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetSpectrumConfig">resetSpectrumConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDecodeConfig` <a name="putDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDecodeConfig"></a>

```java
public void putDecodeConfig(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDecodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

---

##### `putDemodulationConfig` <a name="putDemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDemodulationConfig"></a>

```java
public void putDemodulationConfig(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putDemodulationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

---

##### `putSpectrumConfig` <a name="putSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putSpectrumConfig"></a>

```java
public void putSpectrumConfig(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.putSpectrumConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

---

##### `resetDecodeConfig` <a name="resetDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDecodeConfig"></a>

```java
public void resetDecodeConfig()
```

##### `resetDemodulationConfig` <a name="resetDemodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetDemodulationConfig"></a>

```java
public void resetDemodulationConfig()
```

##### `resetSpectrumConfig` <a name="resetSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.resetSpectrumConfig"></a>

```java
public void resetSpectrumConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig">decodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig">demodulationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfigInput">decodeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfigInput">demodulationConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfigInput">spectrumConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `decodeConfig`<sup>Required</sup> <a name="decodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference getDecodeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfigOutputReference</a>

---

##### `demodulationConfig`<sup>Required</sup> <a name="demodulationConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference getDemodulationConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfigOutputReference</a>

---

##### `spectrumConfig`<sup>Required</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference getSpectrumConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference</a>

---

##### `decodeConfigInput`<sup>Optional</sup> <a name="decodeConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.decodeConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig getDecodeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDecodeConfig</a>

---

##### `demodulationConfigInput`<sup>Optional</sup> <a name="demodulationConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.demodulationConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig getDemodulationConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigDemodulationConfig</a>

---

##### `spectrumConfigInput`<sup>Optional</sup> <a name="spectrumConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.spectrumConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig getSpectrumConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetUnits"></a>

```java
public void resetUnits()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits"></a>

```java
public void resetUnits()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

---


### GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference <a name="GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference;

new GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putBandwidth">putBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putCenterFrequency">putCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetBandwidth">resetBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetCenterFrequency">resetCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetPolarization">resetPolarization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBandwidth` <a name="putBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putBandwidth"></a>

```java
public void putBandwidth(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putBandwidth.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

---

##### `putCenterFrequency` <a name="putCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putCenterFrequency"></a>

```java
public void putCenterFrequency(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.putCenterFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

---

##### `resetBandwidth` <a name="resetBandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetBandwidth"></a>

```java
public void resetBandwidth()
```

##### `resetCenterFrequency` <a name="resetCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetCenterFrequency"></a>

```java
public void resetCenterFrequency()
```

##### `resetPolarization` <a name="resetPolarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.resetPolarization"></a>

```java
public void resetPolarization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth">bandwidth</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidthInput">bandwidthInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequencyInput">centerFrequencyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarizationInput">polarizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization">polarization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bandwidth`<sup>Required</sup> <a name="bandwidth" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidth"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference getBandwidth();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidthOutputReference</a>

---

##### `centerFrequency`<sup>Required</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference getCenterFrequency();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `bandwidthInput`<sup>Optional</sup> <a name="bandwidthInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.bandwidthInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth getBandwidthInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigBandwidth</a>

---

##### `centerFrequencyInput`<sup>Optional</sup> <a name="centerFrequencyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.centerFrequencyInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency getCenterFrequencyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigCenterFrequency</a>

---

##### `polarizationInput`<sup>Optional</sup> <a name="polarizationInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarizationInput"></a>

```java
public java.lang.String getPolarizationInput();
```

- *Type:* java.lang.String

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.polarization"></a>

```java
public java.lang.String getPolarization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigSpectrumConfig</a>

---


### GroundstationConfigConfigDataAntennaUplinkConfigOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference;

new GroundstationConfigConfigDataAntennaUplinkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putSpectrumConfig">putSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putTargetEirp">putTargetEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetSpectrumConfig">resetSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTargetEirp">resetTargetEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTransmitDisabled">resetTransmitDisabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSpectrumConfig` <a name="putSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putSpectrumConfig"></a>

```java
public void putSpectrumConfig(GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putSpectrumConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

---

##### `putTargetEirp` <a name="putTargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putTargetEirp"></a>

```java
public void putTargetEirp(GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.putTargetEirp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

---

##### `resetSpectrumConfig` <a name="resetSpectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetSpectrumConfig"></a>

```java
public void resetSpectrumConfig()
```

##### `resetTargetEirp` <a name="resetTargetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTargetEirp"></a>

```java
public void resetTargetEirp()
```

##### `resetTransmitDisabled` <a name="resetTransmitDisabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.resetTransmitDisabled"></a>

```java
public void resetTransmitDisabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig">spectrumConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp">targetEirp</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfigInput">spectrumConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirpInput">targetEirpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabledInput">transmitDisabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled">transmitDisabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `spectrumConfig`<sup>Required</sup> <a name="spectrumConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfig"></a>

```java
public GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference getSpectrumConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference</a>

---

##### `targetEirp`<sup>Required</sup> <a name="targetEirp" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirp"></a>

```java
public GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference getTargetEirp();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference</a>

---

##### `spectrumConfigInput`<sup>Optional</sup> <a name="spectrumConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.spectrumConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig getSpectrumConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

---

##### `targetEirpInput`<sup>Optional</sup> <a name="targetEirpInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.targetEirpInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp getTargetEirpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

---

##### `transmitDisabledInput`<sup>Optional</sup> <a name="transmitDisabledInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabledInput"></a>

```java
public java.lang.Boolean|IResolvable getTransmitDisabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `transmitDisabled`<sup>Required</sup> <a name="transmitDisabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.transmitDisabled"></a>

```java
public java.lang.Boolean|IResolvable getTransmitDisabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaUplinkConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

---


### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference;

new GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetUnits"></a>

```java
public void resetUnits()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

---


### GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference;

new GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.putCenterFrequency">putCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetCenterFrequency">resetCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetPolarization">resetPolarization</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCenterFrequency` <a name="putCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.putCenterFrequency"></a>

```java
public void putCenterFrequency(GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.putCenterFrequency.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

---

##### `resetCenterFrequency` <a name="resetCenterFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetCenterFrequency"></a>

```java
public void resetCenterFrequency()
```

##### `resetPolarization` <a name="resetPolarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.resetPolarization"></a>

```java
public void resetPolarization()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency">centerFrequency</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput">centerFrequencyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarizationInput">polarizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization">polarization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `centerFrequency`<sup>Required</sup> <a name="centerFrequency" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequency"></a>

```java
public GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference getCenterFrequency();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequencyOutputReference</a>

---

##### `centerFrequencyInput`<sup>Optional</sup> <a name="centerFrequencyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.centerFrequencyInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency getCenterFrequencyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigCenterFrequency</a>

---

##### `polarizationInput`<sup>Optional</sup> <a name="polarizationInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarizationInput"></a>

```java
public java.lang.String getPolarizationInput();
```

- *Type:* java.lang.String

---

##### `polarization`<sup>Required</sup> <a name="polarization" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.polarization"></a>

```java
public java.lang.String getPolarization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig">GroundstationConfigConfigDataAntennaUplinkConfigSpectrumConfig</a>

---


### GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference <a name="GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference;

new GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetUnits">resetUnits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUnits` <a name="resetUnits" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetUnits"></a>

```java
public void resetUnits()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.unitsInput">unitsInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units">units</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value">value</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `unitsInput`<sup>Optional</sup> <a name="unitsInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.unitsInput"></a>

```java
public java.lang.String getUnitsInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.valueInput"></a>

```java
public java.lang.Number getValueInput();
```

- *Type:* java.lang.Number

---

##### `units`<sup>Required</sup> <a name="units" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.units"></a>

```java
public java.lang.String getUnits();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.value"></a>

```java
public java.lang.Number getValue();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirpOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp">GroundstationConfigConfigDataAntennaUplinkConfigTargetEirp</a>

---


### GroundstationConfigConfigDataDataflowEndpointConfigOutputReference <a name="GroundstationConfigConfigDataDataflowEndpointConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference;

new GroundstationConfigConfigDataDataflowEndpointConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointName">resetDataflowEndpointName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointRegion">resetDataflowEndpointRegion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDataflowEndpointName` <a name="resetDataflowEndpointName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointName"></a>

```java
public void resetDataflowEndpointName()
```

##### `resetDataflowEndpointRegion` <a name="resetDataflowEndpointRegion" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.resetDataflowEndpointRegion"></a>

```java
public void resetDataflowEndpointRegion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointNameInput">dataflowEndpointNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegionInput">dataflowEndpointRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName">dataflowEndpointName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion">dataflowEndpointRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dataflowEndpointNameInput`<sup>Optional</sup> <a name="dataflowEndpointNameInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointNameInput"></a>

```java
public java.lang.String getDataflowEndpointNameInput();
```

- *Type:* java.lang.String

---

##### `dataflowEndpointRegionInput`<sup>Optional</sup> <a name="dataflowEndpointRegionInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegionInput"></a>

```java
public java.lang.String getDataflowEndpointRegionInput();
```

- *Type:* java.lang.String

---

##### `dataflowEndpointName`<sup>Required</sup> <a name="dataflowEndpointName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointName"></a>

```java
public java.lang.String getDataflowEndpointName();
```

- *Type:* java.lang.String

---

##### `dataflowEndpointRegion`<sup>Required</sup> <a name="dataflowEndpointRegion" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.dataflowEndpointRegion"></a>

```java
public java.lang.String getDataflowEndpointRegion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataDataflowEndpointConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

---


### GroundstationConfigConfigDataOutputReference <a name="GroundstationConfigConfigDataOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataOutputReference;

new GroundstationConfigConfigDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkConfig">putAntennaDownlinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkDemodDecodeConfig">putAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaUplinkConfig">putAntennaUplinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putDataflowEndpointConfig">putDataflowEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putS3RecordingConfig">putS3RecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTelemetrySinkConfig">putTelemetrySinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTrackingConfig">putTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putUplinkEchoConfig">putUplinkEchoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkConfig">resetAntennaDownlinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkDemodDecodeConfig">resetAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaUplinkConfig">resetAntennaUplinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetDataflowEndpointConfig">resetDataflowEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetS3RecordingConfig">resetS3RecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTelemetrySinkConfig">resetTelemetrySinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTrackingConfig">resetTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetUplinkEchoConfig">resetUplinkEchoConfig</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAntennaDownlinkConfig` <a name="putAntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkConfig"></a>

```java
public void putAntennaDownlinkConfig(GroundstationConfigConfigDataAntennaDownlinkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

---

##### `putAntennaDownlinkDemodDecodeConfig` <a name="putAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkDemodDecodeConfig"></a>

```java
public void putAntennaDownlinkDemodDecodeConfig(GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaDownlinkDemodDecodeConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

---

##### `putAntennaUplinkConfig` <a name="putAntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaUplinkConfig"></a>

```java
public void putAntennaUplinkConfig(GroundstationConfigConfigDataAntennaUplinkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putAntennaUplinkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

---

##### `putDataflowEndpointConfig` <a name="putDataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putDataflowEndpointConfig"></a>

```java
public void putDataflowEndpointConfig(GroundstationConfigConfigDataDataflowEndpointConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putDataflowEndpointConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

---

##### `putS3RecordingConfig` <a name="putS3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putS3RecordingConfig"></a>

```java
public void putS3RecordingConfig(GroundstationConfigConfigDataS3RecordingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putS3RecordingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

---

##### `putTelemetrySinkConfig` <a name="putTelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTelemetrySinkConfig"></a>

```java
public void putTelemetrySinkConfig(GroundstationConfigConfigDataTelemetrySinkConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTelemetrySinkConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

---

##### `putTrackingConfig` <a name="putTrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTrackingConfig"></a>

```java
public void putTrackingConfig(GroundstationConfigConfigDataTrackingConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putTrackingConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

---

##### `putUplinkEchoConfig` <a name="putUplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putUplinkEchoConfig"></a>

```java
public void putUplinkEchoConfig(GroundstationConfigConfigDataUplinkEchoConfig value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.putUplinkEchoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

---

##### `resetAntennaDownlinkConfig` <a name="resetAntennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkConfig"></a>

```java
public void resetAntennaDownlinkConfig()
```

##### `resetAntennaDownlinkDemodDecodeConfig` <a name="resetAntennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaDownlinkDemodDecodeConfig"></a>

```java
public void resetAntennaDownlinkDemodDecodeConfig()
```

##### `resetAntennaUplinkConfig` <a name="resetAntennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetAntennaUplinkConfig"></a>

```java
public void resetAntennaUplinkConfig()
```

##### `resetDataflowEndpointConfig` <a name="resetDataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetDataflowEndpointConfig"></a>

```java
public void resetDataflowEndpointConfig()
```

##### `resetS3RecordingConfig` <a name="resetS3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetS3RecordingConfig"></a>

```java
public void resetS3RecordingConfig()
```

##### `resetTelemetrySinkConfig` <a name="resetTelemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTelemetrySinkConfig"></a>

```java
public void resetTelemetrySinkConfig()
```

##### `resetTrackingConfig` <a name="resetTrackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetTrackingConfig"></a>

```java
public void resetTrackingConfig()
```

##### `resetUplinkEchoConfig` <a name="resetUplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.resetUplinkEchoConfig"></a>

```java
public void resetUplinkEchoConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig">antennaDownlinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig">antennaDownlinkDemodDecodeConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig">antennaUplinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig">dataflowEndpointConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference">GroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfig">s3RecordingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference">GroundstationConfigConfigDataS3RecordingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig">telemetrySinkConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfig">trackingConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference">GroundstationConfigConfigDataTrackingConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig">uplinkEchoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference">GroundstationConfigConfigDataUplinkEchoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfigInput">antennaDownlinkConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfigInput">antennaDownlinkDemodDecodeConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfigInput">antennaUplinkConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfigInput">dataflowEndpointConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfigInput">s3RecordingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfigInput">telemetrySinkConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfigInput">trackingConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfigInput">uplinkEchoConfigInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `antennaDownlinkConfig`<sup>Required</sup> <a name="antennaDownlinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference getAntennaDownlinkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkConfigOutputReference</a>

---

##### `antennaDownlinkDemodDecodeConfig`<sup>Required</sup> <a name="antennaDownlinkDemodDecodeConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfig"></a>

```java
public GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference getAntennaDownlinkDemodDecodeConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfigOutputReference</a>

---

##### `antennaUplinkConfig`<sup>Required</sup> <a name="antennaUplinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfig"></a>

```java
public GroundstationConfigConfigDataAntennaUplinkConfigOutputReference getAntennaUplinkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfigOutputReference">GroundstationConfigConfigDataAntennaUplinkConfigOutputReference</a>

---

##### `dataflowEndpointConfig`<sup>Required</sup> <a name="dataflowEndpointConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfig"></a>

```java
public GroundstationConfigConfigDataDataflowEndpointConfigOutputReference getDataflowEndpointConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfigOutputReference">GroundstationConfigConfigDataDataflowEndpointConfigOutputReference</a>

---

##### `s3RecordingConfig`<sup>Required</sup> <a name="s3RecordingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfig"></a>

```java
public GroundstationConfigConfigDataS3RecordingConfigOutputReference getS3RecordingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference">GroundstationConfigConfigDataS3RecordingConfigOutputReference</a>

---

##### `telemetrySinkConfig`<sup>Required</sup> <a name="telemetrySinkConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfig"></a>

```java
public GroundstationConfigConfigDataTelemetrySinkConfigOutputReference getTelemetrySinkConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigOutputReference</a>

---

##### `trackingConfig`<sup>Required</sup> <a name="trackingConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfig"></a>

```java
public GroundstationConfigConfigDataTrackingConfigOutputReference getTrackingConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference">GroundstationConfigConfigDataTrackingConfigOutputReference</a>

---

##### `uplinkEchoConfig`<sup>Required</sup> <a name="uplinkEchoConfig" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfig"></a>

```java
public GroundstationConfigConfigDataUplinkEchoConfigOutputReference getUplinkEchoConfig();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference">GroundstationConfigConfigDataUplinkEchoConfigOutputReference</a>

---

##### `antennaDownlinkConfigInput`<sup>Optional</sup> <a name="antennaDownlinkConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkConfig getAntennaDownlinkConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkConfig">GroundstationConfigConfigDataAntennaDownlinkConfig</a>

---

##### `antennaDownlinkDemodDecodeConfigInput`<sup>Optional</sup> <a name="antennaDownlinkDemodDecodeConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaDownlinkDemodDecodeConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig getAntennaDownlinkDemodDecodeConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig">GroundstationConfigConfigDataAntennaDownlinkDemodDecodeConfig</a>

---

##### `antennaUplinkConfigInput`<sup>Optional</sup> <a name="antennaUplinkConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.antennaUplinkConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataAntennaUplinkConfig getAntennaUplinkConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataAntennaUplinkConfig">GroundstationConfigConfigDataAntennaUplinkConfig</a>

---

##### `dataflowEndpointConfigInput`<sup>Optional</sup> <a name="dataflowEndpointConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.dataflowEndpointConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataDataflowEndpointConfig getDataflowEndpointConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataDataflowEndpointConfig">GroundstationConfigConfigDataDataflowEndpointConfig</a>

---

##### `s3RecordingConfigInput`<sup>Optional</sup> <a name="s3RecordingConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.s3RecordingConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataS3RecordingConfig getS3RecordingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

---

##### `telemetrySinkConfigInput`<sup>Optional</sup> <a name="telemetrySinkConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.telemetrySinkConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataTelemetrySinkConfig getTelemetrySinkConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

---

##### `trackingConfigInput`<sup>Optional</sup> <a name="trackingConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.trackingConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataTrackingConfig getTrackingConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

---

##### `uplinkEchoConfigInput`<sup>Optional</sup> <a name="uplinkEchoConfigInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.uplinkEchoConfigInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataUplinkEchoConfig getUplinkEchoConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigData getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigData">GroundstationConfigConfigData</a>

---


### GroundstationConfigConfigDataS3RecordingConfigOutputReference <a name="GroundstationConfigConfigDataS3RecordingConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataS3RecordingConfigOutputReference;

new GroundstationConfigConfigDataS3RecordingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetBucketArn">resetBucketArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetRoleArn">resetRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketArn` <a name="resetBucketArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetBucketArn"></a>

```java
public void resetBucketArn()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetRoleArn` <a name="resetRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.resetRoleArn"></a>

```java
public void resetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArnInput">bucketArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn">bucketArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketArnInput`<sup>Optional</sup> <a name="bucketArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArnInput"></a>

```java
public java.lang.String getBucketArnInput();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `bucketArn`<sup>Required</sup> <a name="bucketArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.bucketArn"></a>

```java
public java.lang.String getBucketArn();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataS3RecordingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataS3RecordingConfig">GroundstationConfigConfigDataS3RecordingConfig</a>

---


### GroundstationConfigConfigDataTelemetrySinkConfigOutputReference <a name="GroundstationConfigConfigDataTelemetrySinkConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference;

new GroundstationConfigConfigDataTelemetrySinkConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.putTelemetrySinkData">putTelemetrySinkData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkData">resetTelemetrySinkData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkType">resetTelemetrySinkType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putTelemetrySinkData` <a name="putTelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.putTelemetrySinkData"></a>

```java
public void putTelemetrySinkData(GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.putTelemetrySinkData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

---

##### `resetTelemetrySinkData` <a name="resetTelemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkData"></a>

```java
public void resetTelemetrySinkData()
```

##### `resetTelemetrySinkType` <a name="resetTelemetrySinkType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.resetTelemetrySinkType"></a>

```java
public void resetTelemetrySinkType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData">telemetrySinkData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkDataInput">telemetrySinkDataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkTypeInput">telemetrySinkTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType">telemetrySinkType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `telemetrySinkData`<sup>Required</sup> <a name="telemetrySinkData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkData"></a>

```java
public GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference getTelemetrySinkData();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference</a>

---

##### `telemetrySinkDataInput`<sup>Optional</sup> <a name="telemetrySinkDataInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkDataInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData getTelemetrySinkDataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

---

##### `telemetrySinkTypeInput`<sup>Optional</sup> <a name="telemetrySinkTypeInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkTypeInput"></a>

```java
public java.lang.String getTelemetrySinkTypeInput();
```

- *Type:* java.lang.String

---

##### `telemetrySinkType`<sup>Required</sup> <a name="telemetrySinkType" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.telemetrySinkType"></a>

```java
public java.lang.String getTelemetrySinkType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataTelemetrySinkConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfig">GroundstationConfigConfigDataTelemetrySinkConfig</a>

---


### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference;

new GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisDataStreamArn">resetKinesisDataStreamArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisRoleArn">resetKinesisRoleArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKinesisDataStreamArn` <a name="resetKinesisDataStreamArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisDataStreamArn"></a>

```java
public void resetKinesisDataStreamArn()
```

##### `resetKinesisRoleArn` <a name="resetKinesisRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.resetKinesisRoleArn"></a>

```java
public void resetKinesisRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArnInput">kinesisDataStreamArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArnInput">kinesisRoleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn">kinesisDataStreamArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn">kinesisRoleArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kinesisDataStreamArnInput`<sup>Optional</sup> <a name="kinesisDataStreamArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArnInput"></a>

```java
public java.lang.String getKinesisDataStreamArnInput();
```

- *Type:* java.lang.String

---

##### `kinesisRoleArnInput`<sup>Optional</sup> <a name="kinesisRoleArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArnInput"></a>

```java
public java.lang.String getKinesisRoleArnInput();
```

- *Type:* java.lang.String

---

##### `kinesisDataStreamArn`<sup>Required</sup> <a name="kinesisDataStreamArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisDataStreamArn"></a>

```java
public java.lang.String getKinesisDataStreamArn();
```

- *Type:* java.lang.String

---

##### `kinesisRoleArn`<sup>Required</sup> <a name="kinesisRoleArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.kinesisRoleArn"></a>

```java
public java.lang.String getKinesisRoleArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

---


### GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference <a name="GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference;

new GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.putKinesisDataStreamData">putKinesisDataStreamData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resetKinesisDataStreamData">resetKinesisDataStreamData</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putKinesisDataStreamData` <a name="putKinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.putKinesisDataStreamData"></a>

```java
public void putKinesisDataStreamData(GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.putKinesisDataStreamData.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

---

##### `resetKinesisDataStreamData` <a name="resetKinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.resetKinesisDataStreamData"></a>

```java
public void resetKinesisDataStreamData()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData">kinesisDataStreamData</a></code> | <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamDataInput">kinesisDataStreamDataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `kinesisDataStreamData`<sup>Required</sup> <a name="kinesisDataStreamData" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamData"></a>

```java
public GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference getKinesisDataStreamData();
```

- *Type:* <a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamDataOutputReference</a>

---

##### `kinesisDataStreamDataInput`<sup>Optional</sup> <a name="kinesisDataStreamDataInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.kinesisDataStreamDataInput"></a>

```java
public IResolvable|GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData getKinesisDataStreamDataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataKinesisDataStreamData</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkDataOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData">GroundstationConfigConfigDataTelemetrySinkConfigTelemetrySinkData</a>

---


### GroundstationConfigConfigDataTrackingConfigOutputReference <a name="GroundstationConfigConfigDataTrackingConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataTrackingConfigOutputReference;

new GroundstationConfigConfigDataTrackingConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resetAutotrack">resetAutotrack</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAutotrack` <a name="resetAutotrack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.resetAutotrack"></a>

```java
public void resetAutotrack()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrackInput">autotrackInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack">autotrack</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `autotrackInput`<sup>Optional</sup> <a name="autotrackInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrackInput"></a>

```java
public java.lang.String getAutotrackInput();
```

- *Type:* java.lang.String

---

##### `autotrack`<sup>Required</sup> <a name="autotrack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.autotrack"></a>

```java
public java.lang.String getAutotrack();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataTrackingConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataTrackingConfig">GroundstationConfigConfigDataTrackingConfig</a>

---


### GroundstationConfigConfigDataUplinkEchoConfigOutputReference <a name="GroundstationConfigConfigDataUplinkEchoConfigOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigConfigDataUplinkEchoConfigOutputReference;

new GroundstationConfigConfigDataUplinkEchoConfigOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetAntennaUplinkConfigArn">resetAntennaUplinkConfigArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAntennaUplinkConfigArn` <a name="resetAntennaUplinkConfigArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetAntennaUplinkConfigArn"></a>

```java
public void resetAntennaUplinkConfigArn()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArnInput">antennaUplinkConfigArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn">antennaUplinkConfigArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `antennaUplinkConfigArnInput`<sup>Optional</sup> <a name="antennaUplinkConfigArnInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArnInput"></a>

```java
public java.lang.String getAntennaUplinkConfigArnInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `antennaUplinkConfigArn`<sup>Required</sup> <a name="antennaUplinkConfigArn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.antennaUplinkConfigArn"></a>

```java
public java.lang.String getAntennaUplinkConfigArn();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfigOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigConfigDataUplinkEchoConfig getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigConfigDataUplinkEchoConfig">GroundstationConfigConfigDataUplinkEchoConfig</a>

---


### GroundstationConfigTagsList <a name="GroundstationConfigTagsList" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigTagsList;

new GroundstationConfigTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.get"></a>

```java
public GroundstationConfigTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<GroundstationConfigTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>>

---


### GroundstationConfigTagsOutputReference <a name="GroundstationConfigTagsOutputReference" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.groundstation_config.GroundstationConfigTagsOutputReference;

new GroundstationConfigTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|GroundstationConfigTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.groundstationConfig.GroundstationConfigTags">GroundstationConfigTags</a>

---



