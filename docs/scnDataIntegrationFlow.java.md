# `scnDataIntegrationFlow` Submodule <a name="`scnDataIntegrationFlow` Submodule" id="@cdktn/provider-awscc.scnDataIntegrationFlow"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ScnDataIntegrationFlow <a name="ScnDataIntegrationFlow" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow awscc_scn_data_integration_flow}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlow;

ScnDataIntegrationFlow.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .name(java.lang.String)
    .sources(IResolvable|java.util.List<ScnDataIntegrationFlowSources>)
    .target(ScnDataIntegrationFlowTarget)
    .transformation(ScnDataIntegrationFlowTransformation)
//  .tags(IResolvable|java.util.List<ScnDataIntegrationFlowTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The Amazon Web Services Supply Chain instance identifier. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the DataIntegrationFlow. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>></code> | The source configurations for the DataIntegrationFlow. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a></code> | The DataIntegrationFlow target parameters. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a></code> | The DataIntegrationFlow transformation parameters. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>></code> | The tags for the DataIntegrationFlow. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.instanceId"></a>

- *Type:* java.lang.String

The Amazon Web Services Supply Chain instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#instance_id ScnDataIntegrationFlow#instance_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the DataIntegrationFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.sources"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>>

The source configurations for the DataIntegrationFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#sources ScnDataIntegrationFlow#sources}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.target"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a>

The DataIntegrationFlow target parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#target ScnDataIntegrationFlow#target}

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.transformation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a>

The DataIntegrationFlow transformation parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#transformation ScnDataIntegrationFlow#transformation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>>

The tags for the DataIntegrationFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#tags ScnDataIntegrationFlow#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putSources">putSources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTarget">putTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTransformation">putTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSources` <a name="putSources" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putSources"></a>

```java
public void putSources(IResolvable|java.util.List<ScnDataIntegrationFlowSources> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putSources.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<ScnDataIntegrationFlowTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>>

---

##### `putTarget` <a name="putTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTarget"></a>

```java
public void putTarget(ScnDataIntegrationFlowTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a>

---

##### `putTransformation` <a name="putTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTransformation"></a>

```java
public void putTransformation(ScnDataIntegrationFlowTransformation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.putTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a>

---

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isConstruct"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlow;

ScnDataIntegrationFlow.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlow;

ScnDataIntegrationFlow.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlow;

ScnDataIntegrationFlow.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlow;

ScnDataIntegrationFlow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ScnDataIntegrationFlow.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ScnDataIntegrationFlow resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ScnDataIntegrationFlow to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ScnDataIntegrationFlow that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ScnDataIntegrationFlow to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.arn">arn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.createdTime">createdTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.lastModifiedTime">lastModifiedTime</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.sources">sources</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList">ScnDataIntegrationFlowSourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList">ScnDataIntegrationFlowTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference">ScnDataIntegrationFlowTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference">ScnDataIntegrationFlowTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.instanceIdInput">instanceIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.sourcesInput">sourcesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.targetInput">targetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.transformationInput">transformationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `arn`<sup>Required</sup> <a name="arn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.arn"></a>

```java
public java.lang.String getArn();
```

- *Type:* java.lang.String

---

##### `createdTime`<sup>Required</sup> <a name="createdTime" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.createdTime"></a>

```java
public java.lang.String getCreatedTime();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `lastModifiedTime`<sup>Required</sup> <a name="lastModifiedTime" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.lastModifiedTime"></a>

```java
public java.lang.String getLastModifiedTime();
```

- *Type:* java.lang.String

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.sources"></a>

```java
public ScnDataIntegrationFlowSourcesList getSources();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList">ScnDataIntegrationFlowSourcesList</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tags"></a>

```java
public ScnDataIntegrationFlowTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList">ScnDataIntegrationFlowTagsList</a>

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.target"></a>

```java
public ScnDataIntegrationFlowTargetOutputReference getTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference">ScnDataIntegrationFlowTargetOutputReference</a>

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.transformation"></a>

```java
public ScnDataIntegrationFlowTransformationOutputReference getTransformation();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference">ScnDataIntegrationFlowTransformationOutputReference</a>

---

##### `instanceIdInput`<sup>Optional</sup> <a name="instanceIdInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.instanceIdInput"></a>

```java
public java.lang.String getInstanceIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sourcesInput`<sup>Optional</sup> <a name="sourcesInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.sourcesInput"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowSources> getSourcesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tagsInput"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>>

---

##### `targetInput`<sup>Optional</sup> <a name="targetInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.targetInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowTarget getTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a>

---

##### `transformationInput`<sup>Optional</sup> <a name="transformationInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.transformationInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowTransformation getTransformationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlow.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ScnDataIntegrationFlowConfig <a name="ScnDataIntegrationFlowConfig" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowConfig;

ScnDataIntegrationFlowConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .instanceId(java.lang.String)
    .name(java.lang.String)
    .sources(IResolvable|java.util.List<ScnDataIntegrationFlowSources>)
    .target(ScnDataIntegrationFlowTarget)
    .transformation(ScnDataIntegrationFlowTransformation)
//  .tags(IResolvable|java.util.List<ScnDataIntegrationFlowTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.instanceId">instanceId</a></code> | <code>java.lang.String</code> | The Amazon Web Services Supply Chain instance identifier. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the DataIntegrationFlow. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.sources">sources</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>></code> | The source configurations for the DataIntegrationFlow. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.target">target</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a></code> | The DataIntegrationFlow target parameters. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.transformation">transformation</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a></code> | The DataIntegrationFlow transformation parameters. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>></code> | The tags for the DataIntegrationFlow. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `instanceId`<sup>Required</sup> <a name="instanceId" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.instanceId"></a>

```java
public java.lang.String getInstanceId();
```

- *Type:* java.lang.String

The Amazon Web Services Supply Chain instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#instance_id ScnDataIntegrationFlow#instance_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the DataIntegrationFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}

---

##### `sources`<sup>Required</sup> <a name="sources" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.sources"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowSources> getSources();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>>

The source configurations for the DataIntegrationFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#sources ScnDataIntegrationFlow#sources}

---

##### `target`<sup>Required</sup> <a name="target" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.target"></a>

```java
public ScnDataIntegrationFlowTarget getTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a>

The DataIntegrationFlow target parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#target ScnDataIntegrationFlow#target}

---

##### `transformation`<sup>Required</sup> <a name="transformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.transformation"></a>

```java
public ScnDataIntegrationFlowTransformation getTransformation();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a>

The DataIntegrationFlow transformation parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#transformation ScnDataIntegrationFlow#transformation}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowConfig.property.tags"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>>

The tags for the DataIntegrationFlow.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#tags ScnDataIntegrationFlow#tags}

---

### ScnDataIntegrationFlowSources <a name="ScnDataIntegrationFlowSources" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSources;

ScnDataIntegrationFlowSources.builder()
    .sourceName(java.lang.String)
    .sourceType(java.lang.String)
//  .datasetSource(ScnDataIntegrationFlowSourcesDatasetSource)
//  .s3Source(ScnDataIntegrationFlowSourcesS3Source)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | The source name that can be used as table alias in SQL transformation query. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | The source type. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.datasetSource">datasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a></code> | The dataset source configuration parameters. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.s3Source">s3Source</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a></code> | The S3 source configuration parameters. |

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

The source name that can be used as table alias in SQL transformation query.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#source_name ScnDataIntegrationFlow#source_name}

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

The source type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#source_type ScnDataIntegrationFlow#source_type}

---

##### `datasetSource`<sup>Optional</sup> <a name="datasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.datasetSource"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSource getDatasetSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a>

The dataset source configuration parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dataset_source ScnDataIntegrationFlow#dataset_source}

---

##### `s3Source`<sup>Optional</sup> <a name="s3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources.property.s3Source"></a>

```java
public ScnDataIntegrationFlowSourcesS3Source getS3Source();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a>

The S3 source configuration parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#s3_source ScnDataIntegrationFlow#s3_source}

---

### ScnDataIntegrationFlowSourcesDatasetSource <a name="ScnDataIntegrationFlowSourcesDatasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSource;

ScnDataIntegrationFlowSourcesDatasetSource.builder()
//  .datasetIdentifier(java.lang.String)
//  .options(ScnDataIntegrationFlowSourcesDatasetSourceOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.property.datasetIdentifier">datasetIdentifier</a></code> | <code>java.lang.String</code> | The ARN of the dataset. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a></code> | The dataset options. |

---

##### `datasetIdentifier`<sup>Optional</sup> <a name="datasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.property.datasetIdentifier"></a>

```java
public java.lang.String getDatasetIdentifier();
```

- *Type:* java.lang.String

The ARN of the dataset.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dataset_identifier ScnDataIntegrationFlow#dataset_identifier}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource.property.options"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSourceOptions getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

The dataset options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#options ScnDataIntegrationFlow#options}

---

### ScnDataIntegrationFlowSourcesDatasetSourceOptions <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOptions;

ScnDataIntegrationFlowSourcesDatasetSourceOptions.builder()
//  .dedupeRecords(java.lang.Boolean|IResolvable)
//  .dedupeStrategy(ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy)
//  .loadType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.dedupeRecords">dedupeRecords</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The option to perform deduplication on data records sharing same primary key values. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.dedupeStrategy">dedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a></code> | The deduplication strategy. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.loadType">loadType</a></code> | <code>java.lang.String</code> | The load type. |

---

##### `dedupeRecords`<sup>Optional</sup> <a name="dedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.dedupeRecords"></a>

```java
public java.lang.Boolean|IResolvable getDedupeRecords();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The option to perform deduplication on data records sharing same primary key values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dedupe_records ScnDataIntegrationFlow#dedupe_records}

---

##### `dedupeStrategy`<sup>Optional</sup> <a name="dedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.dedupeStrategy"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy getDedupeStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

The deduplication strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dedupe_strategy ScnDataIntegrationFlow#dedupe_strategy}

---

##### `loadType`<sup>Optional</sup> <a name="loadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions.property.loadType"></a>

```java
public java.lang.String getLoadType();
```

- *Type:* java.lang.String

The load type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#load_type ScnDataIntegrationFlow#load_type}

---

### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy;

ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.builder()
//  .fieldPriority(ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.property.fieldPriority">fieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a></code> | The field priority deduplication strategy configuration. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.property.type">type</a></code> | <code>java.lang.String</code> | The deduplication strategy type. |

---

##### `fieldPriority`<sup>Optional</sup> <a name="fieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.property.fieldPriority"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority getFieldPriority();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

The field priority deduplication strategy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#field_priority ScnDataIntegrationFlow#field_priority}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The deduplication strategy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#type ScnDataIntegrationFlow#type}

---

### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority;

ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority.builder()
//  .fields(IResolvable|java.util.List<ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>></code> | The list of field names and their sort order for deduplication. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority.property.fields"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>>

The list of field names and their sort order for deduplication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#fields ScnDataIntegrationFlow#fields}

---

### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields;

ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.builder()
//  .name(java.lang.String)
//  .sortOrder(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.property.name">name</a></code> | <code>java.lang.String</code> | The name of the deduplication field. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | The sort order. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the deduplication field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

The sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#sort_order ScnDataIntegrationFlow#sort_order}

---

### ScnDataIntegrationFlowSourcesS3Source <a name="ScnDataIntegrationFlowSourcesS3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesS3Source;

ScnDataIntegrationFlowSourcesS3Source.builder()
//  .bucketName(java.lang.String)
//  .options(ScnDataIntegrationFlowSourcesS3SourceOptions)
//  .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | The S3 bucket name. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a></code> | The Amazon S3 options. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The S3 prefix. |

---

##### `bucketName`<sup>Optional</sup> <a name="bucketName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

The S3 bucket name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#bucket_name ScnDataIntegrationFlow#bucket_name}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.options"></a>

```java
public ScnDataIntegrationFlowSourcesS3SourceOptions getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a>

The Amazon S3 options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#options ScnDataIntegrationFlow#options}

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The S3 prefix.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#prefix ScnDataIntegrationFlow#prefix}

---

### ScnDataIntegrationFlowSourcesS3SourceOptions <a name="ScnDataIntegrationFlowSourcesS3SourceOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesS3SourceOptions;

ScnDataIntegrationFlowSourcesS3SourceOptions.builder()
//  .fileType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions.property.fileType">fileType</a></code> | <code>java.lang.String</code> | The file type. |

---

##### `fileType`<sup>Optional</sup> <a name="fileType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

The file type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#file_type ScnDataIntegrationFlow#file_type}

---

### ScnDataIntegrationFlowTags <a name="ScnDataIntegrationFlowTags" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTags;

ScnDataIntegrationFlowTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#key ScnDataIntegrationFlow#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#value ScnDataIntegrationFlow#value}

---

### ScnDataIntegrationFlowTarget <a name="ScnDataIntegrationFlowTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTarget;

ScnDataIntegrationFlowTarget.builder()
    .targetType(java.lang.String)
//  .datasetTarget(ScnDataIntegrationFlowTargetDatasetTarget)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.property.targetType">targetType</a></code> | <code>java.lang.String</code> | The target type. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.property.datasetTarget">datasetTarget</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a></code> | The dataset target configuration parameters. |

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

The target type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#target_type ScnDataIntegrationFlow#target_type}

---

##### `datasetTarget`<sup>Optional</sup> <a name="datasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget.property.datasetTarget"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTarget getDatasetTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a>

The dataset target configuration parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dataset_target ScnDataIntegrationFlow#dataset_target}

---

### ScnDataIntegrationFlowTargetDatasetTarget <a name="ScnDataIntegrationFlowTargetDatasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTarget;

ScnDataIntegrationFlowTargetDatasetTarget.builder()
//  .datasetIdentifier(java.lang.String)
//  .options(ScnDataIntegrationFlowTargetDatasetTargetOptions)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.property.datasetIdentifier">datasetIdentifier</a></code> | <code>java.lang.String</code> | The dataset ARN. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a></code> | The dataset options. |

---

##### `datasetIdentifier`<sup>Optional</sup> <a name="datasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.property.datasetIdentifier"></a>

```java
public java.lang.String getDatasetIdentifier();
```

- *Type:* java.lang.String

The dataset ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dataset_identifier ScnDataIntegrationFlow#dataset_identifier}

---

##### `options`<sup>Optional</sup> <a name="options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget.property.options"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTargetOptions getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a>

The dataset options.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#options ScnDataIntegrationFlow#options}

---

### ScnDataIntegrationFlowTargetDatasetTargetOptions <a name="ScnDataIntegrationFlowTargetDatasetTargetOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOptions;

ScnDataIntegrationFlowTargetDatasetTargetOptions.builder()
//  .dedupeRecords(java.lang.Boolean|IResolvable)
//  .dedupeStrategy(ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy)
//  .loadType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.dedupeRecords">dedupeRecords</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | The option to perform deduplication on data records sharing same primary key values. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.dedupeStrategy">dedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a></code> | The deduplication strategy. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.loadType">loadType</a></code> | <code>java.lang.String</code> | The load type. |

---

##### `dedupeRecords`<sup>Optional</sup> <a name="dedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.dedupeRecords"></a>

```java
public java.lang.Boolean|IResolvable getDedupeRecords();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

The option to perform deduplication on data records sharing same primary key values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dedupe_records ScnDataIntegrationFlow#dedupe_records}

---

##### `dedupeStrategy`<sup>Optional</sup> <a name="dedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.dedupeStrategy"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy getDedupeStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

The deduplication strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#dedupe_strategy ScnDataIntegrationFlow#dedupe_strategy}

---

##### `loadType`<sup>Optional</sup> <a name="loadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions.property.loadType"></a>

```java
public java.lang.String getLoadType();
```

- *Type:* java.lang.String

The load type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#load_type ScnDataIntegrationFlow#load_type}

---

### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy;

ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.builder()
//  .fieldPriority(ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority)
//  .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.property.fieldPriority">fieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a></code> | The field priority deduplication strategy configuration. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.property.type">type</a></code> | <code>java.lang.String</code> | The deduplication strategy type. |

---

##### `fieldPriority`<sup>Optional</sup> <a name="fieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.property.fieldPriority"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority getFieldPriority();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

The field priority deduplication strategy configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#field_priority ScnDataIntegrationFlow#field_priority}

---

##### `type`<sup>Optional</sup> <a name="type" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

The deduplication strategy type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#type ScnDataIntegrationFlow#type}

---

### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority;

ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority.builder()
//  .fields(IResolvable|java.util.List<ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>></code> | The list of field names and their sort order for deduplication. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority.property.fields"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>>

The list of field names and their sort order for deduplication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#fields ScnDataIntegrationFlow#fields}

---

### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields;

ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.builder()
//  .name(java.lang.String)
//  .sortOrder(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.property.name">name</a></code> | <code>java.lang.String</code> | The name of the deduplication field. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | The sort order. |

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the deduplication field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#name ScnDataIntegrationFlow#name}

---

##### `sortOrder`<sup>Optional</sup> <a name="sortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

The sort order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#sort_order ScnDataIntegrationFlow#sort_order}

---

### ScnDataIntegrationFlowTransformation <a name="ScnDataIntegrationFlowTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTransformation;

ScnDataIntegrationFlowTransformation.builder()
    .transformationType(java.lang.String)
//  .sqlTransformation(ScnDataIntegrationFlowTransformationSqlTransformation)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.property.transformationType">transformationType</a></code> | <code>java.lang.String</code> | The transformation type. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.property.sqlTransformation">sqlTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a></code> | The SQL transformation configuration parameters. |

---

##### `transformationType`<sup>Required</sup> <a name="transformationType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.property.transformationType"></a>

```java
public java.lang.String getTransformationType();
```

- *Type:* java.lang.String

The transformation type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#transformation_type ScnDataIntegrationFlow#transformation_type}

---

##### `sqlTransformation`<sup>Optional</sup> <a name="sqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation.property.sqlTransformation"></a>

```java
public ScnDataIntegrationFlowTransformationSqlTransformation getSqlTransformation();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a>

The SQL transformation configuration parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#sql_transformation ScnDataIntegrationFlow#sql_transformation}

---

### ScnDataIntegrationFlowTransformationSqlTransformation <a name="ScnDataIntegrationFlowTransformationSqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTransformationSqlTransformation;

ScnDataIntegrationFlowTransformationSqlTransformation.builder()
//  .query(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation.property.query">query</a></code> | <code>java.lang.String</code> | The transformation SQL query body based on SparkSQL. |

---

##### `query`<sup>Optional</sup> <a name="query" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

The transformation SQL query body based on SparkSQL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.105.0/docs/resources/scn_data_integration_flow#query ScnDataIntegrationFlow#query}

---

## Classes <a name="Classes" id="Classes"></a>

### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>>

---


### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetSortOrder"></a>

```java
public void resetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>

---


### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resetFields">resetFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.resetFields"></a>

```java
public void resetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fields"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

---


### ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.putFieldPriority">putFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resetFieldPriority">resetFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldPriority` <a name="putFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.putFieldPriority"></a>

```java
public void putFieldPriority(ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.putFieldPriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

---

##### `resetFieldPriority` <a name="resetFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resetFieldPriority"></a>

```java
public void resetFieldPriority()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriority">fieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriorityInput">fieldPriorityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldPriority`<sup>Required</sup> <a name="fieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriority"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference getFieldPriority();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriorityOutputReference</a>

---

##### `fieldPriorityInput`<sup>Optional</sup> <a name="fieldPriorityInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.fieldPriorityInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority getFieldPriorityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyFieldPriority</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

---


### ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference;

new ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.putDedupeStrategy">putDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetDedupeRecords">resetDedupeRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetDedupeStrategy">resetDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetLoadType">resetLoadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDedupeStrategy` <a name="putDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.putDedupeStrategy"></a>

```java
public void putDedupeStrategy(ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.putDedupeStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

---

##### `resetDedupeRecords` <a name="resetDedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetDedupeRecords"></a>

```java
public void resetDedupeRecords()
```

##### `resetDedupeStrategy` <a name="resetDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetDedupeStrategy"></a>

```java
public void resetDedupeStrategy()
```

##### `resetLoadType` <a name="resetLoadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.resetLoadType"></a>

```java
public void resetLoadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategy">dedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecordsInput">dedupeRecordsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategyInput">dedupeStrategyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadTypeInput">loadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecords">dedupeRecords</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadType">loadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dedupeStrategy`<sup>Required</sup> <a name="dedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategy"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference getDedupeStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategyOutputReference</a>

---

##### `dedupeRecordsInput`<sup>Optional</sup> <a name="dedupeRecordsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecordsInput"></a>

```java
public java.lang.Boolean|IResolvable getDedupeRecordsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dedupeStrategyInput`<sup>Optional</sup> <a name="dedupeStrategyInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeStrategyInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy getDedupeStrategyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy">ScnDataIntegrationFlowSourcesDatasetSourceOptionsDedupeStrategy</a>

---

##### `loadTypeInput`<sup>Optional</sup> <a name="loadTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadTypeInput"></a>

```java
public java.lang.String getLoadTypeInput();
```

- *Type:* java.lang.String

---

##### `dedupeRecords`<sup>Required</sup> <a name="dedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.dedupeRecords"></a>

```java
public java.lang.Boolean|IResolvable getDedupeRecords();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loadType`<sup>Required</sup> <a name="loadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.loadType"></a>

```java
public java.lang.String getLoadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

---


### ScnDataIntegrationFlowSourcesDatasetSourceOutputReference <a name="ScnDataIntegrationFlowSourcesDatasetSourceOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference;

new ScnDataIntegrationFlowSourcesDatasetSourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resetDatasetIdentifier">resetDatasetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.putOptions"></a>

```java
public void putOptions(ScnDataIntegrationFlowSourcesDatasetSourceOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

---

##### `resetDatasetIdentifier` <a name="resetDatasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resetDatasetIdentifier"></a>

```java
public void resetDatasetIdentifier()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.resetOptions"></a>

```java
public void resetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifierInput">datasetIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.optionsInput">optionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifier">datasetIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.options"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOptionsOutputReference</a>

---

##### `datasetIdentifierInput`<sup>Optional</sup> <a name="datasetIdentifierInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifierInput"></a>

```java
public java.lang.String getDatasetIdentifierInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.optionsInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSourceOptions getOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOptions">ScnDataIntegrationFlowSourcesDatasetSourceOptions</a>

---

##### `datasetIdentifier`<sup>Required</sup> <a name="datasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.datasetIdentifier"></a>

```java
public java.lang.String getDatasetIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSource getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a>

---


### ScnDataIntegrationFlowSourcesList <a name="ScnDataIntegrationFlowSourcesList" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesList;

new ScnDataIntegrationFlowSourcesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.get"></a>

```java
public ScnDataIntegrationFlowSourcesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowSources> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>>

---


### ScnDataIntegrationFlowSourcesOutputReference <a name="ScnDataIntegrationFlowSourcesOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesOutputReference;

new ScnDataIntegrationFlowSourcesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putDatasetSource">putDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putS3Source">putS3Source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resetDatasetSource">resetDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resetS3Source">resetS3Source</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetSource` <a name="putDatasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putDatasetSource"></a>

```java
public void putDatasetSource(ScnDataIntegrationFlowSourcesDatasetSource value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putDatasetSource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a>

---

##### `putS3Source` <a name="putS3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putS3Source"></a>

```java
public void putS3Source(ScnDataIntegrationFlowSourcesS3Source value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.putS3Source.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a>

---

##### `resetDatasetSource` <a name="resetDatasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resetDatasetSource"></a>

```java
public void resetDatasetSource()
```

##### `resetS3Source` <a name="resetS3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.resetS3Source"></a>

```java
public void resetS3Source()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.datasetSource">datasetSource</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.s3Source">s3Source</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference">ScnDataIntegrationFlowSourcesS3SourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.datasetSourceInput">datasetSourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.s3SourceInput">s3SourceInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceNameInput">sourceNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceTypeInput">sourceTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceName">sourceName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceType">sourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetSource`<sup>Required</sup> <a name="datasetSource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.datasetSource"></a>

```java
public ScnDataIntegrationFlowSourcesDatasetSourceOutputReference getDatasetSource();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSourceOutputReference">ScnDataIntegrationFlowSourcesDatasetSourceOutputReference</a>

---

##### `s3Source`<sup>Required</sup> <a name="s3Source" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.s3Source"></a>

```java
public ScnDataIntegrationFlowSourcesS3SourceOutputReference getS3Source();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference">ScnDataIntegrationFlowSourcesS3SourceOutputReference</a>

---

##### `datasetSourceInput`<sup>Optional</sup> <a name="datasetSourceInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.datasetSourceInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesDatasetSource getDatasetSourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesDatasetSource">ScnDataIntegrationFlowSourcesDatasetSource</a>

---

##### `s3SourceInput`<sup>Optional</sup> <a name="s3SourceInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.s3SourceInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesS3Source getS3SourceInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a>

---

##### `sourceNameInput`<sup>Optional</sup> <a name="sourceNameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceNameInput"></a>

```java
public java.lang.String getSourceNameInput();
```

- *Type:* java.lang.String

---

##### `sourceTypeInput`<sup>Optional</sup> <a name="sourceTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceTypeInput"></a>

```java
public java.lang.String getSourceTypeInput();
```

- *Type:* java.lang.String

---

##### `sourceName`<sup>Required</sup> <a name="sourceName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceName"></a>

```java
public java.lang.String getSourceName();
```

- *Type:* java.lang.String

---

##### `sourceType`<sup>Required</sup> <a name="sourceType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.sourceType"></a>

```java
public java.lang.String getSourceType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowSources getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSources">ScnDataIntegrationFlowSources</a>

---


### ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference <a name="ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference;

new ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resetFileType">resetFileType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileType` <a name="resetFileType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.resetFileType"></a>

```java
public void resetFileType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileTypeInput">fileTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileType">fileType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileTypeInput`<sup>Optional</sup> <a name="fileTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileTypeInput"></a>

```java
public java.lang.String getFileTypeInput();
```

- *Type:* java.lang.String

---

##### `fileType`<sup>Required</sup> <a name="fileType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.fileType"></a>

```java
public java.lang.String getFileType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesS3SourceOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a>

---


### ScnDataIntegrationFlowSourcesS3SourceOutputReference <a name="ScnDataIntegrationFlowSourcesS3SourceOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowSourcesS3SourceOutputReference;

new ScnDataIntegrationFlowSourcesS3SourceOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetBucketName">resetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetOptions">resetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.putOptions"></a>

```java
public void putOptions(ScnDataIntegrationFlowSourcesS3SourceOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a>

---

##### `resetBucketName` <a name="resetBucketName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetBucketName"></a>

```java
public void resetBucketName()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetOptions"></a>

```java
public void resetOptions()
```

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference">ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.optionsInput">optionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.options"></a>

```java
public ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference">ScnDataIntegrationFlowSourcesS3SourceOptionsOutputReference</a>

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.optionsInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesS3SourceOptions getOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOptions">ScnDataIntegrationFlowSourcesS3SourceOptions</a>

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3SourceOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowSourcesS3Source getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowSourcesS3Source">ScnDataIntegrationFlowSourcesS3Source</a>

---


### ScnDataIntegrationFlowTagsList <a name="ScnDataIntegrationFlowTagsList" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTagsList;

new ScnDataIntegrationFlowTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.get"></a>

```java
public ScnDataIntegrationFlowTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>>

---


### ScnDataIntegrationFlowTagsOutputReference <a name="ScnDataIntegrationFlowTagsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTagsOutputReference;

new ScnDataIntegrationFlowTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTags">ScnDataIntegrationFlowTags</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>>

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetSortOrder">resetSortOrder</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetSortOrder` <a name="resetSortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.resetSortOrder"></a>

```java
public void resetSortOrder()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrderInput">sortOrderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder">sortOrder</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sortOrderInput`<sup>Optional</sup> <a name="sortOrderInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrderInput"></a>

```java
public java.lang.String getSortOrderInput();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `sortOrder`<sup>Required</sup> <a name="sortOrder" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.sortOrder"></a>

```java
public java.lang.String getSortOrder();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resetFields">resetFields</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.resetFields"></a>

```java
public void resetFields()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fields"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFieldsList</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityFields</a>>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.putFieldPriority">putFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resetFieldPriority">resetFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resetType">resetType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFieldPriority` <a name="putFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.putFieldPriority"></a>

```java
public void putFieldPriority(ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.putFieldPriority.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

---

##### `resetFieldPriority` <a name="resetFieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resetFieldPriority"></a>

```java
public void resetFieldPriority()
```

##### `resetType` <a name="resetType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.resetType"></a>

```java
public void resetType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriority">fieldPriority</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriorityInput">fieldPriorityInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fieldPriority`<sup>Required</sup> <a name="fieldPriority" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriority"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference getFieldPriority();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriorityOutputReference</a>

---

##### `fieldPriorityInput`<sup>Optional</sup> <a name="fieldPriorityInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.fieldPriorityInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority getFieldPriorityInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyFieldPriority</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference;

new ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.putDedupeStrategy">putDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetDedupeRecords">resetDedupeRecords</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetDedupeStrategy">resetDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetLoadType">resetLoadType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDedupeStrategy` <a name="putDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.putDedupeStrategy"></a>

```java
public void putDedupeStrategy(ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.putDedupeStrategy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

---

##### `resetDedupeRecords` <a name="resetDedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetDedupeRecords"></a>

```java
public void resetDedupeRecords()
```

##### `resetDedupeStrategy` <a name="resetDedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetDedupeStrategy"></a>

```java
public void resetDedupeStrategy()
```

##### `resetLoadType` <a name="resetLoadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.resetLoadType"></a>

```java
public void resetLoadType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategy">dedupeStrategy</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecordsInput">dedupeRecordsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategyInput">dedupeStrategyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadTypeInput">loadTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecords">dedupeRecords</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadType">loadType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dedupeStrategy`<sup>Required</sup> <a name="dedupeStrategy" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategy"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference getDedupeStrategy();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategyOutputReference</a>

---

##### `dedupeRecordsInput`<sup>Optional</sup> <a name="dedupeRecordsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecordsInput"></a>

```java
public java.lang.Boolean|IResolvable getDedupeRecordsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dedupeStrategyInput`<sup>Optional</sup> <a name="dedupeStrategyInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeStrategyInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy getDedupeStrategyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy">ScnDataIntegrationFlowTargetDatasetTargetOptionsDedupeStrategy</a>

---

##### `loadTypeInput`<sup>Optional</sup> <a name="loadTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadTypeInput"></a>

```java
public java.lang.String getLoadTypeInput();
```

- *Type:* java.lang.String

---

##### `dedupeRecords`<sup>Required</sup> <a name="dedupeRecords" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.dedupeRecords"></a>

```java
public java.lang.Boolean|IResolvable getDedupeRecords();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `loadType`<sup>Required</sup> <a name="loadType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.loadType"></a>

```java
public java.lang.String getLoadType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a>

---


### ScnDataIntegrationFlowTargetDatasetTargetOutputReference <a name="ScnDataIntegrationFlowTargetDatasetTargetOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference;

new ScnDataIntegrationFlowTargetDatasetTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.putOptions">putOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resetDatasetIdentifier">resetDatasetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resetOptions">resetOptions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putOptions` <a name="putOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.putOptions"></a>

```java
public void putOptions(ScnDataIntegrationFlowTargetDatasetTargetOptions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.putOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a>

---

##### `resetDatasetIdentifier` <a name="resetDatasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resetDatasetIdentifier"></a>

```java
public void resetDatasetIdentifier()
```

##### `resetOptions` <a name="resetOptions" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.resetOptions"></a>

```java
public void resetOptions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.options">options</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifierInput">datasetIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.optionsInput">optionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifier">datasetIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `options`<sup>Required</sup> <a name="options" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.options"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference getOptions();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOptionsOutputReference</a>

---

##### `datasetIdentifierInput`<sup>Optional</sup> <a name="datasetIdentifierInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifierInput"></a>

```java
public java.lang.String getDatasetIdentifierInput();
```

- *Type:* java.lang.String

---

##### `optionsInput`<sup>Optional</sup> <a name="optionsInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.optionsInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowTargetDatasetTargetOptions getOptionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOptions">ScnDataIntegrationFlowTargetDatasetTargetOptions</a>

---

##### `datasetIdentifier`<sup>Required</sup> <a name="datasetIdentifier" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.datasetIdentifier"></a>

```java
public java.lang.String getDatasetIdentifier();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowTargetDatasetTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a>

---


### ScnDataIntegrationFlowTargetOutputReference <a name="ScnDataIntegrationFlowTargetOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTargetOutputReference;

new ScnDataIntegrationFlowTargetOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.putDatasetTarget">putDatasetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resetDatasetTarget">resetDatasetTarget</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putDatasetTarget` <a name="putDatasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.putDatasetTarget"></a>

```java
public void putDatasetTarget(ScnDataIntegrationFlowTargetDatasetTarget value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.putDatasetTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a>

---

##### `resetDatasetTarget` <a name="resetDatasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.resetDatasetTarget"></a>

```java
public void resetDatasetTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.datasetTarget">datasetTarget</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.datasetTargetInput">datasetTargetInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.targetTypeInput">targetTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.targetType">targetType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `datasetTarget`<sup>Required</sup> <a name="datasetTarget" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.datasetTarget"></a>

```java
public ScnDataIntegrationFlowTargetDatasetTargetOutputReference getDatasetTarget();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTargetOutputReference">ScnDataIntegrationFlowTargetDatasetTargetOutputReference</a>

---

##### `datasetTargetInput`<sup>Optional</sup> <a name="datasetTargetInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.datasetTargetInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowTargetDatasetTarget getDatasetTargetInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetDatasetTarget">ScnDataIntegrationFlowTargetDatasetTarget</a>

---

##### `targetTypeInput`<sup>Optional</sup> <a name="targetTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.targetTypeInput"></a>

```java
public java.lang.String getTargetTypeInput();
```

- *Type:* java.lang.String

---

##### `targetType`<sup>Required</sup> <a name="targetType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.targetType"></a>

```java
public java.lang.String getTargetType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTargetOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowTarget getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTarget">ScnDataIntegrationFlowTarget</a>

---


### ScnDataIntegrationFlowTransformationOutputReference <a name="ScnDataIntegrationFlowTransformationOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTransformationOutputReference;

new ScnDataIntegrationFlowTransformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.putSqlTransformation">putSqlTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resetSqlTransformation">resetSqlTransformation</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSqlTransformation` <a name="putSqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.putSqlTransformation"></a>

```java
public void putSqlTransformation(ScnDataIntegrationFlowTransformationSqlTransformation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.putSqlTransformation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a>

---

##### `resetSqlTransformation` <a name="resetSqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.resetSqlTransformation"></a>

```java
public void resetSqlTransformation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformation">sqlTransformation</a></code> | <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference">ScnDataIntegrationFlowTransformationSqlTransformationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformationInput">sqlTransformationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.transformationTypeInput">transformationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.transformationType">transformationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `sqlTransformation`<sup>Required</sup> <a name="sqlTransformation" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformation"></a>

```java
public ScnDataIntegrationFlowTransformationSqlTransformationOutputReference getSqlTransformation();
```

- *Type:* <a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference">ScnDataIntegrationFlowTransformationSqlTransformationOutputReference</a>

---

##### `sqlTransformationInput`<sup>Optional</sup> <a name="sqlTransformationInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.sqlTransformationInput"></a>

```java
public IResolvable|ScnDataIntegrationFlowTransformationSqlTransformation getSqlTransformationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a>

---

##### `transformationTypeInput`<sup>Optional</sup> <a name="transformationTypeInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.transformationTypeInput"></a>

```java
public java.lang.String getTransformationTypeInput();
```

- *Type:* java.lang.String

---

##### `transformationType`<sup>Required</sup> <a name="transformationType" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.transformationType"></a>

```java
public java.lang.String getTransformationType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowTransformation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformation">ScnDataIntegrationFlowTransformation</a>

---


### ScnDataIntegrationFlowTransformationSqlTransformationOutputReference <a name="ScnDataIntegrationFlowTransformationSqlTransformationOutputReference" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.scn_data_integration_flow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference;

new ScnDataIntegrationFlowTransformationSqlTransformationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resetQuery">resetQuery</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetQuery` <a name="resetQuery" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.resetQuery"></a>

```java
public void resetQuery()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.queryInput">queryInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.query">query</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `queryInput`<sup>Optional</sup> <a name="queryInput" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.queryInput"></a>

```java
public java.lang.String getQueryInput();
```

- *Type:* java.lang.String

---

##### `query`<sup>Required</sup> <a name="query" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.query"></a>

```java
public java.lang.String getQuery();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformationOutputReference.property.internalValue"></a>

```java
public IResolvable|ScnDataIntegrationFlowTransformationSqlTransformation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.scnDataIntegrationFlow.ScnDataIntegrationFlowTransformationSqlTransformation">ScnDataIntegrationFlowTransformationSqlTransformation</a>

---



