# `ecrRegistryScanningConfiguration` Submodule <a name="`ecrRegistryScanningConfiguration` Submodule" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EcrRegistryScanningConfiguration <a name="EcrRegistryScanningConfiguration" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration awscc_ecr_registry_scanning_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfiguration;

EcrRegistryScanningConfiguration.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .rules(IResolvable|java.util.List<EcrRegistryScanningConfigurationRules>)
    .scanType(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>></code> | The scanning rules associated with the registry. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scanType">scanType</a></code> | <code>java.lang.String</code> | The type of scanning configured for the registry. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>>

The scanning rules associated with the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#rules EcrRegistryScanningConfiguration#rules}

---

##### `scanType`<sup>Required</sup> <a name="scanType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.Initializer.parameter.scanType"></a>

- *Type:* java.lang.String

The type of scanning configured for the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRules">putRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<EcrRegistryScanningConfigurationRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a EcrRegistryScanningConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfiguration;

EcrRegistryScanningConfiguration.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfiguration;

EcrRegistryScanningConfiguration.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfiguration;

EcrRegistryScanningConfiguration.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfiguration;

EcrRegistryScanningConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),EcrRegistryScanningConfiguration.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a EcrRegistryScanningConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the EcrRegistryScanningConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing EcrRegistryScanningConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the EcrRegistryScanningConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId">registryId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList">EcrRegistryScanningConfigurationRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput">scanTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType">scanType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `registryId`<sup>Required</sup> <a name="registryId" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.registryId"></a>

```java
public java.lang.String getRegistryId();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rules"></a>

```java
public EcrRegistryScanningConfigurationRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList">EcrRegistryScanningConfigurationRulesList</a>

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.rulesInput"></a>

```java
public IResolvable|java.util.List<EcrRegistryScanningConfigurationRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>>

---

##### `scanTypeInput`<sup>Optional</sup> <a name="scanTypeInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanTypeInput"></a>

```java
public java.lang.String getScanTypeInput();
```

- *Type:* java.lang.String

---

##### `scanType`<sup>Required</sup> <a name="scanType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.scanType"></a>

```java
public java.lang.String getScanType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfiguration.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### EcrRegistryScanningConfigurationConfig <a name="EcrRegistryScanningConfigurationConfig" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfigurationConfig;

EcrRegistryScanningConfigurationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .rules(IResolvable|java.util.List<EcrRegistryScanningConfigurationRules>)
    .scanType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>></code> | The scanning rules associated with the registry. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType">scanType</a></code> | <code>java.lang.String</code> | The type of scanning configured for the registry. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.rules"></a>

```java
public IResolvable|java.util.List<EcrRegistryScanningConfigurationRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>>

The scanning rules associated with the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#rules EcrRegistryScanningConfiguration#rules}

---

##### `scanType`<sup>Required</sup> <a name="scanType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationConfig.property.scanType"></a>

```java
public java.lang.String getScanType();
```

- *Type:* java.lang.String

The type of scanning configured for the registry.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#scan_type EcrRegistryScanningConfiguration#scan_type}

---

### EcrRegistryScanningConfigurationRules <a name="EcrRegistryScanningConfigurationRules" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfigurationRules;

EcrRegistryScanningConfigurationRules.builder()
    .repositoryFilters(IResolvable|java.util.List<EcrRegistryScanningConfigurationRulesRepositoryFilters>)
    .scanFrequency(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.repositoryFilters">repositoryFilters</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>></code> | The details of a scanning repository filter. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.scanFrequency">scanFrequency</a></code> | <code>java.lang.String</code> | The frequency that scans are performed at for a private registry. |

---

##### `repositoryFilters`<sup>Required</sup> <a name="repositoryFilters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.repositoryFilters"></a>

```java
public IResolvable|java.util.List<EcrRegistryScanningConfigurationRulesRepositoryFilters> getRepositoryFilters();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>>

The details of a scanning repository filter.

For more information on how to use filters, see [Using filters](https://docs.aws.amazon.com/AmazonECR/latest/userguide/image-scanning.html#image-scanning-filters) in the *Amazon Elastic Container Registry User Guide*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#repository_filters EcrRegistryScanningConfiguration#repository_filters}

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules.property.scanFrequency"></a>

```java
public java.lang.String getScanFrequency();
```

- *Type:* java.lang.String

The frequency that scans are performed at for a private registry.

When the `ENHANCED` scan type is specified, the supported scan frequencies are `CONTINUOUS_SCAN` and `SCAN_ON_PUSH`. When the `BASIC` scan type is specified, the `SCAN_ON_PUSH` scan frequency is supported. If scan on push is not specified, then the `MANUAL` scan frequency is set by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#scan_frequency EcrRegistryScanningConfiguration#scan_frequency}

---

### EcrRegistryScanningConfigurationRulesRepositoryFilters <a name="EcrRegistryScanningConfigurationRulesRepositoryFilters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfigurationRulesRepositoryFilters;

EcrRegistryScanningConfigurationRulesRepositoryFilters.builder()
    .filter(java.lang.String)
    .filterType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filter">filter</a></code> | <code>java.lang.String</code> | The filter to use when scanning. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filterType">filterType</a></code> | <code>java.lang.String</code> | The type associated with the filter. |

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

The filter to use when scanning.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#filter EcrRegistryScanningConfiguration#filter}

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

The type associated with the filter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ecr_registry_scanning_configuration#filter_type EcrRegistryScanningConfiguration#filter_type}

---

## Classes <a name="Classes" id="Classes"></a>

### EcrRegistryScanningConfigurationRulesList <a name="EcrRegistryScanningConfigurationRulesList" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfigurationRulesList;

new EcrRegistryScanningConfigurationRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.get"></a>

```java
public EcrRegistryScanningConfigurationRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcrRegistryScanningConfigurationRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>>

---


### EcrRegistryScanningConfigurationRulesOutputReference <a name="EcrRegistryScanningConfigurationRulesOutputReference" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfigurationRulesOutputReference;

new EcrRegistryScanningConfigurationRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.putRepositoryFilters">putRepositoryFilters</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRepositoryFilters` <a name="putRepositoryFilters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.putRepositoryFilters"></a>

```java
public void putRepositoryFilters(IResolvable|java.util.List<EcrRegistryScanningConfigurationRulesRepositoryFilters> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.putRepositoryFilters.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFilters">repositoryFilters</a></code> | <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList">EcrRegistryScanningConfigurationRulesRepositoryFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFiltersInput">repositoryFiltersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequencyInput">scanFrequencyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequency">scanFrequency</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `repositoryFilters`<sup>Required</sup> <a name="repositoryFilters" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFilters"></a>

```java
public EcrRegistryScanningConfigurationRulesRepositoryFiltersList getRepositoryFilters();
```

- *Type:* <a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList">EcrRegistryScanningConfigurationRulesRepositoryFiltersList</a>

---

##### `repositoryFiltersInput`<sup>Optional</sup> <a name="repositoryFiltersInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.repositoryFiltersInput"></a>

```java
public IResolvable|java.util.List<EcrRegistryScanningConfigurationRulesRepositoryFilters> getRepositoryFiltersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>>

---

##### `scanFrequencyInput`<sup>Optional</sup> <a name="scanFrequencyInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequencyInput"></a>

```java
public java.lang.String getScanFrequencyInput();
```

- *Type:* java.lang.String

---

##### `scanFrequency`<sup>Required</sup> <a name="scanFrequency" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.scanFrequency"></a>

```java
public java.lang.String getScanFrequency();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|EcrRegistryScanningConfigurationRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRules">EcrRegistryScanningConfigurationRules</a>

---


### EcrRegistryScanningConfigurationRulesRepositoryFiltersList <a name="EcrRegistryScanningConfigurationRulesRepositoryFiltersList" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList;

new EcrRegistryScanningConfigurationRulesRepositoryFiltersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.get"></a>

```java
public EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<EcrRegistryScanningConfigurationRulesRepositoryFilters> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>>

---


### EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference <a name="EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.ecr_registry_scanning_configuration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference;

new EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterInput">filterInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput">filterTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filter">filter</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterType">filterType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `filterInput`<sup>Optional</sup> <a name="filterInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterInput"></a>

```java
public java.lang.String getFilterInput();
```

- *Type:* java.lang.String

---

##### `filterTypeInput`<sup>Optional</sup> <a name="filterTypeInput" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterTypeInput"></a>

```java
public java.lang.String getFilterTypeInput();
```

- *Type:* java.lang.String

---

##### `filter`<sup>Required</sup> <a name="filter" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filter"></a>

```java
public java.lang.String getFilter();
```

- *Type:* java.lang.String

---

##### `filterType`<sup>Required</sup> <a name="filterType" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.filterType"></a>

```java
public java.lang.String getFilterType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFiltersOutputReference.property.internalValue"></a>

```java
public IResolvable|EcrRegistryScanningConfigurationRulesRepositoryFilters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.ecrRegistryScanningConfiguration.EcrRegistryScanningConfigurationRulesRepositoryFilters">EcrRegistryScanningConfigurationRulesRepositoryFilters</a>

---



