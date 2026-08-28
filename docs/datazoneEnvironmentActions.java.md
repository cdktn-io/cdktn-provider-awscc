# `datazoneEnvironmentActions` Submodule <a name="`datazoneEnvironmentActions` Submodule" id="@cdktn/provider-awscc.datazoneEnvironmentActions"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneEnvironmentActions <a name="DatazoneEnvironmentActions" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions awscc_datazone_environment_actions}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_environment_actions.DatazoneEnvironmentActions;

DatazoneEnvironmentActions.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .domainIdentifier(java.lang.String)
//  .environmentIdentifier(java.lang.String)
//  .identifier(java.lang.String)
//  .parameters(DatazoneEnvironmentActionsParameters)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Amazon DataZone environment in which the action is taking place. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.identifier">identifier</a></code> | <code>java.lang.String</code> | The ID of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | The parameters of the environment action. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#name DatazoneEnvironmentActions#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#description DatazoneEnvironmentActions#description}

---

##### `domainIdentifier`<sup>Optional</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#domain_identifier DatazoneEnvironmentActions#domain_identifier}

---

##### `environmentIdentifier`<sup>Optional</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.environmentIdentifier"></a>

- *Type:* java.lang.String

The identifier of the Amazon DataZone environment in which the action is taking place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#environment_identifier DatazoneEnvironmentActions#environment_identifier}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.identifier"></a>

- *Type:* java.lang.String

The ID of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#identifier DatazoneEnvironmentActions#identifier}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.Initializer.parameter.parameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

The parameters of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#parameters DatazoneEnvironmentActions#parameters}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.putParameters">putParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDomainIdentifier">resetDomainIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetEnvironmentIdentifier">resetEnvironmentIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetIdentifier">resetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetParameters">resetParameters</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putParameters` <a name="putParameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.putParameters"></a>

```java
public void putParameters(DatazoneEnvironmentActionsParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.putParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetDomainIdentifier` <a name="resetDomainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetDomainIdentifier"></a>

```java
public void resetDomainIdentifier()
```

##### `resetEnvironmentIdentifier` <a name="resetEnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetEnvironmentIdentifier"></a>

```java
public void resetEnvironmentIdentifier()
```

##### `resetIdentifier` <a name="resetIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetIdentifier"></a>

```java
public void resetIdentifier()
```

##### `resetParameters` <a name="resetParameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.resetParameters"></a>

```java
public void resetParameters()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneEnvironmentActions resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datazone_environment_actions.DatazoneEnvironmentActions;

DatazoneEnvironmentActions.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datazone_environment_actions.DatazoneEnvironmentActions;

DatazoneEnvironmentActions.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datazone_environment_actions.DatazoneEnvironmentActions;

DatazoneEnvironmentActions.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datazone_environment_actions.DatazoneEnvironmentActions;

DatazoneEnvironmentActions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneEnvironmentActions.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatazoneEnvironmentActions resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneEnvironmentActions to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneEnvironmentActions that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneEnvironmentActions to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentActionsId">environmentActionsId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference">DatazoneEnvironmentActionsParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifierInput">identifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parametersInput">parametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifier">identifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `environmentActionsId`<sup>Required</sup> <a name="environmentActionsId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentActionsId"></a>

```java
public java.lang.String getEnvironmentActionsId();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `parameters`<sup>Required</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parameters"></a>

```java
public DatazoneEnvironmentActionsParametersOutputReference getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference">DatazoneEnvironmentActionsParametersOutputReference</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifierInput"></a>

```java
public java.lang.String getEnvironmentIdentifierInput();
```

- *Type:* java.lang.String

---

##### `identifierInput`<sup>Optional</sup> <a name="identifierInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifierInput"></a>

```java
public java.lang.String getIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `parametersInput`<sup>Optional</sup> <a name="parametersInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.parametersInput"></a>

```java
public IResolvable|DatazoneEnvironmentActionsParameters getParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

---

##### `identifier`<sup>Required</sup> <a name="identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActions.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneEnvironmentActionsConfig <a name="DatazoneEnvironmentActionsConfig" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_environment_actions.DatazoneEnvironmentActionsConfig;

DatazoneEnvironmentActionsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .description(java.lang.String)
//  .domainIdentifier(java.lang.String)
//  .environmentIdentifier(java.lang.String)
//  .identifier(java.lang.String)
//  .parameters(DatazoneEnvironmentActionsParameters)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Amazon DataZone domain in which the environment would be created. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the Amazon DataZone environment in which the action is taking place. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.identifier">identifier</a></code> | <code>java.lang.String</code> | The ID of the Amazon DataZone environment action. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.parameters">parameters</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | The parameters of the environment action. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#name DatazoneEnvironmentActions#name}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#description DatazoneEnvironmentActions#description}

---

##### `domainIdentifier`<sup>Optional</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

The identifier of the Amazon DataZone domain in which the environment would be created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#domain_identifier DatazoneEnvironmentActions#domain_identifier}

---

##### `environmentIdentifier`<sup>Optional</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

The identifier of the Amazon DataZone environment in which the action is taking place.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#environment_identifier DatazoneEnvironmentActions#environment_identifier}

---

##### `identifier`<sup>Optional</sup> <a name="identifier" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.identifier"></a>

```java
public java.lang.String getIdentifier();
```

- *Type:* java.lang.String

The ID of the Amazon DataZone environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#identifier DatazoneEnvironmentActions#identifier}

---

##### `parameters`<sup>Optional</sup> <a name="parameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsConfig.property.parameters"></a>

```java
public DatazoneEnvironmentActionsParameters getParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

The parameters of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#parameters DatazoneEnvironmentActions#parameters}

---

### DatazoneEnvironmentActionsParameters <a name="DatazoneEnvironmentActionsParameters" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_environment_actions.DatazoneEnvironmentActionsParameters;

DatazoneEnvironmentActionsParameters.builder()
//  .uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters.property.uri">uri</a></code> | <code>java.lang.String</code> | The URI of the console link specified as part of the environment action. |

---

##### `uri`<sup>Optional</sup> <a name="uri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

The URI of the console link specified as part of the environment action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/datazone_environment_actions#uri DatazoneEnvironmentActions#uri}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneEnvironmentActionsParametersOutputReference <a name="DatazoneEnvironmentActionsParametersOutputReference" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_environment_actions.DatazoneEnvironmentActionsParametersOutputReference;

new DatazoneEnvironmentActionsParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resetUri">resetUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUri` <a name="resetUri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.resetUri"></a>

```java
public void resetUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uriInput">uriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uri">uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `uriInput`<sup>Optional</sup> <a name="uriInput" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uriInput"></a>

```java
public java.lang.String getUriInput();
```

- *Type:* java.lang.String

---

##### `uri`<sup>Required</sup> <a name="uri" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.uri"></a>

```java
public java.lang.String getUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneEnvironmentActionsParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneEnvironmentActions.DatazoneEnvironmentActionsParameters">DatazoneEnvironmentActionsParameters</a>

---



