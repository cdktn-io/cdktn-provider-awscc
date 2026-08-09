# `simspaceweaverSimulation` Submodule <a name="`simspaceweaverSimulation` Submodule" id="@cdktn/provider-awscc.simspaceweaverSimulation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SimspaceweaverSimulation <a name="SimspaceweaverSimulation" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation awscc_simspaceweaver_simulation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulation;

SimspaceweaverSimulation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .maximumDuration(java.lang.String)
//  .schemaS3Location(SimspaceweaverSimulationSchemaS3Location)
//  .snapshotS3Location(SimspaceweaverSimulationSnapshotS3Location)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Role ARN. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.maximumDuration">maximumDuration</a></code> | <code>java.lang.String</code> | The maximum running time of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.schemaS3Location">schemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.snapshotS3Location">snapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#name SimspaceweaverSimulation#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.roleArn"></a>

- *Type:* java.lang.String

Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#role_arn SimspaceweaverSimulation#role_arn}

---

##### `maximumDuration`<sup>Optional</sup> <a name="maximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.maximumDuration"></a>

- *Type:* java.lang.String

The maximum running time of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#maximum_duration SimspaceweaverSimulation#maximum_duration}

---

##### `schemaS3Location`<sup>Optional</sup> <a name="schemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.schemaS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}.

---

##### `snapshotS3Location`<sup>Optional</sup> <a name="snapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.Initializer.parameter.snapshotS3Location"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location">putSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location">putSnapshotS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration">resetMaximumDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location">resetSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location">resetSnapshotS3Location</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSchemaS3Location` <a name="putSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location"></a>

```java
public void putSchemaS3Location(SimspaceweaverSimulationSchemaS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSchemaS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---

##### `putSnapshotS3Location` <a name="putSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location"></a>

```java
public void putSnapshotS3Location(SimspaceweaverSimulationSnapshotS3Location value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.putSnapshotS3Location.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---

##### `resetMaximumDuration` <a name="resetMaximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetMaximumDuration"></a>

```java
public void resetMaximumDuration()
```

##### `resetSchemaS3Location` <a name="resetSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSchemaS3Location"></a>

```java
public void resetSchemaS3Location()
```

##### `resetSnapshotS3Location` <a name="resetSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.resetSnapshotS3Location"></a>

```java
public void resetSnapshotS3Location()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulation;

SimspaceweaverSimulation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulation;

SimspaceweaverSimulation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulation;

SimspaceweaverSimulation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulation;

SimspaceweaverSimulation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),SimspaceweaverSimulation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a SimspaceweaverSimulation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the SimspaceweaverSimulation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing SimspaceweaverSimulation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the SimspaceweaverSimulation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload">describePayload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location">schemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location">snapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput">maximumDurationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput">roleArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput">schemaS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput">snapshotS3LocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration">maximumDuration</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `describePayload`<sup>Required</sup> <a name="describePayload" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.describePayload"></a>

```java
public java.lang.String getDescribePayload();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `schemaS3Location`<sup>Required</sup> <a name="schemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3Location"></a>

```java
public SimspaceweaverSimulationSchemaS3LocationOutputReference getSchemaS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference">SimspaceweaverSimulationSchemaS3LocationOutputReference</a>

---

##### `snapshotS3Location`<sup>Required</sup> <a name="snapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3Location"></a>

```java
public SimspaceweaverSimulationSnapshotS3LocationOutputReference getSnapshotS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference">SimspaceweaverSimulationSnapshotS3LocationOutputReference</a>

---

##### `maximumDurationInput`<sup>Optional</sup> <a name="maximumDurationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDurationInput"></a>

```java
public java.lang.String getMaximumDurationInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `roleArnInput`<sup>Optional</sup> <a name="roleArnInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArnInput"></a>

```java
public java.lang.String getRoleArnInput();
```

- *Type:* java.lang.String

---

##### `schemaS3LocationInput`<sup>Optional</sup> <a name="schemaS3LocationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.schemaS3LocationInput"></a>

```java
public IResolvable|SimspaceweaverSimulationSchemaS3Location getSchemaS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---

##### `snapshotS3LocationInput`<sup>Optional</sup> <a name="snapshotS3LocationInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.snapshotS3LocationInput"></a>

```java
public IResolvable|SimspaceweaverSimulationSnapshotS3Location getSnapshotS3LocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---

##### `maximumDuration`<sup>Required</sup> <a name="maximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.maximumDuration"></a>

```java
public java.lang.String getMaximumDuration();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### SimspaceweaverSimulationConfig <a name="SimspaceweaverSimulationConfig" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulationConfig;

SimspaceweaverSimulationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
    .roleArn(java.lang.String)
//  .maximumDuration(java.lang.String)
//  .schemaS3Location(SimspaceweaverSimulationSchemaS3Location)
//  .snapshotS3Location(SimspaceweaverSimulationSnapshotS3Location)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn">roleArn</a></code> | <code>java.lang.String</code> | Role ARN. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration">maximumDuration</a></code> | <code>java.lang.String</code> | The maximum running time of the simulation. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location">schemaS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location">snapshotS3Location</a></code> | <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#name SimspaceweaverSimulation#name}

---

##### `roleArn`<sup>Required</sup> <a name="roleArn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.roleArn"></a>

```java
public java.lang.String getRoleArn();
```

- *Type:* java.lang.String

Role ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#role_arn SimspaceweaverSimulation#role_arn}

---

##### `maximumDuration`<sup>Optional</sup> <a name="maximumDuration" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.maximumDuration"></a>

```java
public java.lang.String getMaximumDuration();
```

- *Type:* java.lang.String

The maximum running time of the simulation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#maximum_duration SimspaceweaverSimulation#maximum_duration}

---

##### `schemaS3Location`<sup>Optional</sup> <a name="schemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.schemaS3Location"></a>

```java
public SimspaceweaverSimulationSchemaS3Location getSchemaS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#schema_s3_location SimspaceweaverSimulation#schema_s3_location}.

---

##### `snapshotS3Location`<sup>Optional</sup> <a name="snapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationConfig.property.snapshotS3Location"></a>

```java
public SimspaceweaverSimulationSnapshotS3Location getSnapshotS3Location();
```

- *Type:* <a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#snapshot_s3_location SimspaceweaverSimulation#snapshot_s3_location}.

---

### SimspaceweaverSimulationSchemaS3Location <a name="SimspaceweaverSimulationSchemaS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulationSchemaS3Location;

SimspaceweaverSimulationSchemaS3Location.builder()
//  .bucketName(java.lang.String)
//  .objectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey">objectKey</a></code> | <code>java.lang.String</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location.property.objectKey"></a>

```java
public java.lang.String getObjectKey();
```

- *Type:* java.lang.String

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

### SimspaceweaverSimulationSnapshotS3Location <a name="SimspaceweaverSimulationSnapshotS3Location" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.Initializer"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulationSnapshotS3Location;

SimspaceweaverSimulationSnapshotS3Location.builder()
//  .bucketName(java.lang.String)
//  .objectKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The Schema S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey">objectKey</a></code> | <code>java.lang.String</code> | This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The Schema S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#bucket_name SimspaceweaverSimulation#bucket_name}

---

##### `objectKey`<sup>Optional</sup> <a name="objectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location.property.objectKey"></a>

```java
public java.lang.String getObjectKey();
```

- *Type:* java.lang.String

This is the schema S3 object key, which includes the full path of "folders" from the bucket root to the schema.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/simspaceweaver_simulation#object_key SimspaceweaverSimulation#object_key}

---

## Classes <a name="Classes" id="Classes"></a>

### SimspaceweaverSimulationSchemaS3LocationOutputReference <a name="SimspaceweaverSimulationSchemaS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulationSchemaS3LocationOutputReference;

new SimspaceweaverSimulationSchemaS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey">resetObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetObjectKey` <a name="resetObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.resetObjectKey"></a>

```java
public void resetObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput">objectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey">objectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `objectKeyInput`<sup>Optional</sup> <a name="objectKeyInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKeyInput"></a>

```java
public java.lang.String getObjectKeyInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.objectKey"></a>

```java
public java.lang.String getObjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|SimspaceweaverSimulationSchemaS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSchemaS3Location">SimspaceweaverSimulationSchemaS3Location</a>

---


### SimspaceweaverSimulationSnapshotS3LocationOutputReference <a name="SimspaceweaverSimulationSnapshotS3LocationOutputReference" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.simspaceweaver_simulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference;

new SimspaceweaverSimulationSnapshotS3LocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey">resetObjectKey</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetObjectKey` <a name="resetObjectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.resetObjectKey"></a>

```java
public void resetObjectKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput">objectKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey">objectKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `objectKeyInput`<sup>Optional</sup> <a name="objectKeyInput" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKeyInput"></a>

```java
public java.lang.String getObjectKeyInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `objectKey`<sup>Required</sup> <a name="objectKey" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.objectKey"></a>

```java
public java.lang.String getObjectKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3LocationOutputReference.property.internalValue"></a>

```java
public IResolvable|SimspaceweaverSimulationSnapshotS3Location getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.simspaceweaverSimulation.SimspaceweaverSimulationSnapshotS3Location">SimspaceweaverSimulationSnapshotS3Location</a>

---



