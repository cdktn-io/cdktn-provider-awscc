# `datazoneConnection` Submodule <a name="`datazoneConnection` Submodule" id="@cdktn/provider-awscc.datazoneConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DatazoneConnection <a name="DatazoneConnection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection awscc_datazone_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnection;

DatazoneConnection.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
    .name(java.lang.String)
//  .awsLocation(DatazoneConnectionAwsLocation)
//  .configurations(IResolvable|java.util.List<DatazoneConnectionConfigurations>)
//  .description(java.lang.String)
//  .enableTrustedIdentityPropagation(java.lang.Boolean|IResolvable)
//  .environmentIdentifier(java.lang.String)
//  .projectIdentifier(java.lang.String)
//  .props(DatazoneConnectionProps)
//  .scope(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the domain in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | The name of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | AWS Location of project. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.configurations">configurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>></code> | The configurations of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.enableTrustedIdentityPropagation">enableTrustedIdentityPropagation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the trusted identity propagation is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the environment in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the project in which the connection should be created. If. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#props DatazoneConnection#props}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope">scope</a></code> | <code>java.lang.String</code> | The scope of the connection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.domainIdentifier"></a>

- *Type:* java.lang.String

The identifier of the domain in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#domain_identifier DatazoneConnection#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.name"></a>

- *Type:* java.lang.String

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#name DatazoneConnection#name}

---

##### `awsLocation`<sup>Optional</sup> <a name="awsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.awsLocation"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

AWS Location of project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#aws_location DatazoneConnection#aws_location}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.configurations"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>>

The configurations of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#configurations DatazoneConnection#configurations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#description DatazoneConnection#description}

---

##### `enableTrustedIdentityPropagation`<sup>Optional</sup> <a name="enableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.enableTrustedIdentityPropagation"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the trusted identity propagation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#enable_trusted_identity_propagation DatazoneConnection#enable_trusted_identity_propagation}

---

##### `environmentIdentifier`<sup>Optional</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.environmentIdentifier"></a>

- *Type:* java.lang.String

The identifier of the environment in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#environment_identifier DatazoneConnection#environment_identifier}

---

##### `projectIdentifier`<sup>Optional</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.projectIdentifier"></a>

- *Type:* java.lang.String

The identifier of the project in which the connection should be created. If.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#project_identifier DatazoneConnection#project_identifier}

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.props"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#props DatazoneConnection#props}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.Initializer.parameter.scope"></a>

- *Type:* java.lang.String

The scope of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#scope DatazoneConnection#scope}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation">putAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations">putConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps">putProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetAwsLocation">resetAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetConfigurations">resetConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnableTrustedIdentityPropagation">resetEnableTrustedIdentityPropagation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnvironmentIdentifier">resetEnvironmentIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProjectIdentifier">resetProjectIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProps">resetProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetScope">resetScope</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putAwsLocation` <a name="putAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation"></a>

```java
public void putAwsLocation(DatazoneConnectionAwsLocation value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putAwsLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---

##### `putConfigurations` <a name="putConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations"></a>

```java
public void putConfigurations(IResolvable|java.util.List<DatazoneConnectionConfigurations> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putConfigurations.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>>

---

##### `putProps` <a name="putProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps"></a>

```java
public void putProps(DatazoneConnectionProps value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.putProps.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---

##### `resetAwsLocation` <a name="resetAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetAwsLocation"></a>

```java
public void resetAwsLocation()
```

##### `resetConfigurations` <a name="resetConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetConfigurations"></a>

```java
public void resetConfigurations()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetEnableTrustedIdentityPropagation` <a name="resetEnableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnableTrustedIdentityPropagation"></a>

```java
public void resetEnableTrustedIdentityPropagation()
```

##### `resetEnvironmentIdentifier` <a name="resetEnvironmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetEnvironmentIdentifier"></a>

```java
public void resetEnvironmentIdentifier()
```

##### `resetProjectIdentifier` <a name="resetProjectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProjectIdentifier"></a>

```java
public void resetProjectIdentifier()
```

##### `resetProps` <a name="resetProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetProps"></a>

```java
public void resetProps()
```

##### `resetScope` <a name="resetScope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.resetScope"></a>

```java
public void resetScope()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DatazoneConnection resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnection;

DatazoneConnection.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnection;

DatazoneConnection.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnection;

DatazoneConnection.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnection;

DatazoneConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DatazoneConnection.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DatazoneConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DatazoneConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DatazoneConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DatazoneConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference">DatazoneConnectionAwsLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurations">configurations</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList">DatazoneConnectionConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connectionId">connectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainId">domainId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainUnitId">domainUnitId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentUserRole">environmentUserRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectId">projectId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference">DatazoneConnectionPropsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocationInput">awsLocationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurationsInput">configurationsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifierInput">domainIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagationInput">enableTrustedIdentityPropagationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifierInput">environmentIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifierInput">projectIdentifierInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.propsInput">propsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scopeInput">scopeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagation">enableTrustedIdentityPropagation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scope">scope</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsLocation`<sup>Required</sup> <a name="awsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocation"></a>

```java
public DatazoneConnectionAwsLocationOutputReference getAwsLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference">DatazoneConnectionAwsLocationOutputReference</a>

---

##### `configurations`<sup>Required</sup> <a name="configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurations"></a>

```java
public DatazoneConnectionConfigurationsList getConfigurations();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList">DatazoneConnectionConfigurationsList</a>

---

##### `connectionId`<sup>Required</sup> <a name="connectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.connectionId"></a>

```java
public java.lang.String getConnectionId();
```

- *Type:* java.lang.String

---

##### `domainId`<sup>Required</sup> <a name="domainId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainId"></a>

```java
public java.lang.String getDomainId();
```

- *Type:* java.lang.String

---

##### `domainUnitId`<sup>Required</sup> <a name="domainUnitId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainUnitId"></a>

```java
public java.lang.String getDomainUnitId();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `environmentUserRole`<sup>Required</sup> <a name="environmentUserRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentUserRole"></a>

```java
public java.lang.String getEnvironmentUserRole();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `projectId`<sup>Required</sup> <a name="projectId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectId"></a>

```java
public java.lang.String getProjectId();
```

- *Type:* java.lang.String

---

##### `props`<sup>Required</sup> <a name="props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.props"></a>

```java
public DatazoneConnectionPropsOutputReference getProps();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference">DatazoneConnectionPropsOutputReference</a>

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `awsLocationInput`<sup>Optional</sup> <a name="awsLocationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.awsLocationInput"></a>

```java
public IResolvable|DatazoneConnectionAwsLocation getAwsLocationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---

##### `configurationsInput`<sup>Optional</sup> <a name="configurationsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.configurationsInput"></a>

```java
public IResolvable|java.util.List<DatazoneConnectionConfigurations> getConfigurationsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `domainIdentifierInput`<sup>Optional</sup> <a name="domainIdentifierInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifierInput"></a>

```java
public java.lang.String getDomainIdentifierInput();
```

- *Type:* java.lang.String

---

##### `enableTrustedIdentityPropagationInput`<sup>Optional</sup> <a name="enableTrustedIdentityPropagationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagationInput"></a>

```java
public java.lang.Boolean|IResolvable getEnableTrustedIdentityPropagationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `environmentIdentifierInput`<sup>Optional</sup> <a name="environmentIdentifierInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifierInput"></a>

```java
public java.lang.String getEnvironmentIdentifierInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `projectIdentifierInput`<sup>Optional</sup> <a name="projectIdentifierInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifierInput"></a>

```java
public java.lang.String getProjectIdentifierInput();
```

- *Type:* java.lang.String

---

##### `propsInput`<sup>Optional</sup> <a name="propsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.propsInput"></a>

```java
public IResolvable|DatazoneConnectionProps getPropsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---

##### `scopeInput`<sup>Optional</sup> <a name="scopeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scopeInput"></a>

```java
public java.lang.String getScopeInput();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

---

##### `enableTrustedIdentityPropagation`<sup>Required</sup> <a name="enableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.enableTrustedIdentityPropagation"></a>

```java
public java.lang.Boolean|IResolvable getEnableTrustedIdentityPropagation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `environmentIdentifier`<sup>Required</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `projectIdentifier`<sup>Required</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.projectIdentifier"></a>

```java
public java.lang.String getProjectIdentifier();
```

- *Type:* java.lang.String

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnection.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DatazoneConnectionAwsLocation <a name="DatazoneConnectionAwsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionAwsLocation;

DatazoneConnectionAwsLocation.builder()
//  .accessRole(java.lang.String)
//  .awsAccountId(java.lang.String)
//  .awsRegion(java.lang.String)
//  .iamConnectionId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.accessRole">accessRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#access_role DatazoneConnection#access_role}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#aws_account_id DatazoneConnection#aws_account_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#aws_region DatazoneConnection#aws_region}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.iamConnectionId">iamConnectionId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#iam_connection_id DatazoneConnection#iam_connection_id}. |

---

##### `accessRole`<sup>Optional</sup> <a name="accessRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.accessRole"></a>

```java
public java.lang.String getAccessRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#access_role DatazoneConnection#access_role}.

---

##### `awsAccountId`<sup>Optional</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#aws_account_id DatazoneConnection#aws_account_id}.

---

##### `awsRegion`<sup>Optional</sup> <a name="awsRegion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#aws_region DatazoneConnection#aws_region}.

---

##### `iamConnectionId`<sup>Optional</sup> <a name="iamConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation.property.iamConnectionId"></a>

```java
public java.lang.String getIamConnectionId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#iam_connection_id DatazoneConnection#iam_connection_id}.

---

### DatazoneConnectionConfig <a name="DatazoneConnectionConfig" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionConfig;

DatazoneConnectionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .domainIdentifier(java.lang.String)
    .name(java.lang.String)
//  .awsLocation(DatazoneConnectionAwsLocation)
//  .configurations(IResolvable|java.util.List<DatazoneConnectionConfigurations>)
//  .description(java.lang.String)
//  .enableTrustedIdentityPropagation(java.lang.Boolean|IResolvable)
//  .environmentIdentifier(java.lang.String)
//  .projectIdentifier(java.lang.String)
//  .props(DatazoneConnectionProps)
//  .scope(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.domainIdentifier">domainIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the domain in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.name">name</a></code> | <code>java.lang.String</code> | The name of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.awsLocation">awsLocation</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | AWS Location of project. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.configurations">configurations</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>></code> | The configurations of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.enableTrustedIdentityPropagation">enableTrustedIdentityPropagation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether the trusted identity propagation is enabled. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.environmentIdentifier">environmentIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the environment in which the connection is created. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.projectIdentifier">projectIdentifier</a></code> | <code>java.lang.String</code> | The identifier of the project in which the connection should be created. If. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.props">props</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#props DatazoneConnection#props}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.scope">scope</a></code> | <code>java.lang.String</code> | The scope of the connection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `domainIdentifier`<sup>Required</sup> <a name="domainIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.domainIdentifier"></a>

```java
public java.lang.String getDomainIdentifier();
```

- *Type:* java.lang.String

The identifier of the domain in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#domain_identifier DatazoneConnection#domain_identifier}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

The name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#name DatazoneConnection#name}

---

##### `awsLocation`<sup>Optional</sup> <a name="awsLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.awsLocation"></a>

```java
public DatazoneConnectionAwsLocation getAwsLocation();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

AWS Location of project.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#aws_location DatazoneConnection#aws_location}

---

##### `configurations`<sup>Optional</sup> <a name="configurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.configurations"></a>

```java
public IResolvable|java.util.List<DatazoneConnectionConfigurations> getConfigurations();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>>

The configurations of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#configurations DatazoneConnection#configurations}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#description DatazoneConnection#description}

---

##### `enableTrustedIdentityPropagation`<sup>Optional</sup> <a name="enableTrustedIdentityPropagation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.enableTrustedIdentityPropagation"></a>

```java
public java.lang.Boolean|IResolvable getEnableTrustedIdentityPropagation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether the trusted identity propagation is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#enable_trusted_identity_propagation DatazoneConnection#enable_trusted_identity_propagation}

---

##### `environmentIdentifier`<sup>Optional</sup> <a name="environmentIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.environmentIdentifier"></a>

```java
public java.lang.String getEnvironmentIdentifier();
```

- *Type:* java.lang.String

The identifier of the environment in which the connection is created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#environment_identifier DatazoneConnection#environment_identifier}

---

##### `projectIdentifier`<sup>Optional</sup> <a name="projectIdentifier" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.projectIdentifier"></a>

```java
public java.lang.String getProjectIdentifier();
```

- *Type:* java.lang.String

The identifier of the project in which the connection should be created. If.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#project_identifier DatazoneConnection#project_identifier}

---

##### `props`<sup>Optional</sup> <a name="props" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.props"></a>

```java
public DatazoneConnectionProps getProps();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#props DatazoneConnection#props}.

---

##### `scope`<sup>Optional</sup> <a name="scope" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfig.property.scope"></a>

```java
public java.lang.String getScope();
```

- *Type:* java.lang.String

The scope of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#scope DatazoneConnection#scope}

---

### DatazoneConnectionConfigurations <a name="DatazoneConnectionConfigurations" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionConfigurations;

DatazoneConnectionConfigurations.builder()
//  .classification(java.lang.String)
//  .properties(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.classification">classification</a></code> | <code>java.lang.String</code> | The classification of the connection configuration. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Property Map. |

---

##### `classification`<sup>Optional</sup> <a name="classification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

The classification of the connection configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#classification DatazoneConnection#classification}

---

##### `properties`<sup>Optional</sup> <a name="properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#properties DatazoneConnection#properties}

---

### DatazoneConnectionProps <a name="DatazoneConnectionProps" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionProps;

DatazoneConnectionProps.builder()
//  .amazonQProperties(DatazoneConnectionPropsAmazonQProperties)
//  .athenaProperties(DatazoneConnectionPropsAthenaProperties)
//  .glueProperties(DatazoneConnectionPropsGlueProperties)
//  .hyperPodProperties(DatazoneConnectionPropsHyperPodProperties)
//  .iamProperties(DatazoneConnectionPropsIamProperties)
//  .lakehouseProperties(DatazoneConnectionPropsLakehouseProperties)
//  .mlflowProperties(DatazoneConnectionPropsMlflowProperties)
//  .redshiftProperties(DatazoneConnectionPropsRedshiftProperties)
//  .s3Properties(DatazoneConnectionPropsS3Properties)
//  .sparkEmrProperties(DatazoneConnectionPropsSparkEmrProperties)
//  .sparkGlueProperties(DatazoneConnectionPropsSparkGlueProperties)
//  .workflowsMwaaProperties(DatazoneConnectionPropsWorkflowsMwaaProperties)
//  .workflowsServerlessProperties(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.amazonQProperties">amazonQProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | Amazon Q properties of the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.athenaProperties">athenaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | Athena Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.glueProperties">glueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | Glue Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.hyperPodProperties">hyperPodProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | HyperPod Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.iamProperties">iamProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | IAM Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.lakehouseProperties">lakehouseProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | Lakehouse Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.mlflowProperties">mlflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | MLflow Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.redshiftProperties">redshiftProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | Redshift Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.s3Properties">s3Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | S3 Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkEmrProperties">sparkEmrProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | Spark EMR Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkGlueProperties">sparkGlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | Spark Glue Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsMwaaProperties">workflowsMwaaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | Workflows MWAA Properties Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsServerlessProperties">workflowsServerlessProperties</a></code> | <code>java.lang.String</code> | Workflows Serverless Properties Input. |

---

##### `amazonQProperties`<sup>Optional</sup> <a name="amazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.amazonQProperties"></a>

```java
public DatazoneConnectionPropsAmazonQProperties getAmazonQProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

Amazon Q properties of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#amazon_q_properties DatazoneConnection#amazon_q_properties}

---

##### `athenaProperties`<sup>Optional</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.athenaProperties"></a>

```java
public DatazoneConnectionPropsAthenaProperties getAthenaProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

Athena Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

##### `glueProperties`<sup>Optional</sup> <a name="glueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.glueProperties"></a>

```java
public DatazoneConnectionPropsGlueProperties getGlueProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#glue_properties DatazoneConnection#glue_properties}

---

##### `hyperPodProperties`<sup>Optional</sup> <a name="hyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.hyperPodProperties"></a>

```java
public DatazoneConnectionPropsHyperPodProperties getHyperPodProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

HyperPod Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#hyper_pod_properties DatazoneConnection#hyper_pod_properties}

---

##### `iamProperties`<sup>Optional</sup> <a name="iamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.iamProperties"></a>

```java
public DatazoneConnectionPropsIamProperties getIamProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

IAM Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#iam_properties DatazoneConnection#iam_properties}

---

##### `lakehouseProperties`<sup>Optional</sup> <a name="lakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.lakehouseProperties"></a>

```java
public DatazoneConnectionPropsLakehouseProperties getLakehouseProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

Lakehouse Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#lakehouse_properties DatazoneConnection#lakehouse_properties}

---

##### `mlflowProperties`<sup>Optional</sup> <a name="mlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.mlflowProperties"></a>

```java
public DatazoneConnectionPropsMlflowProperties getMlflowProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

MLflow Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#mlflow_properties DatazoneConnection#mlflow_properties}

---

##### `redshiftProperties`<sup>Optional</sup> <a name="redshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.redshiftProperties"></a>

```java
public DatazoneConnectionPropsRedshiftProperties getRedshiftProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

Redshift Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#redshift_properties DatazoneConnection#redshift_properties}

---

##### `s3Properties`<sup>Optional</sup> <a name="s3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.s3Properties"></a>

```java
public DatazoneConnectionPropsS3Properties getS3Properties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

S3 Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#s3_properties DatazoneConnection#s3_properties}

---

##### `sparkEmrProperties`<sup>Optional</sup> <a name="sparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkEmrProperties"></a>

```java
public DatazoneConnectionPropsSparkEmrProperties getSparkEmrProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

Spark EMR Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#spark_emr_properties DatazoneConnection#spark_emr_properties}

---

##### `sparkGlueProperties`<sup>Optional</sup> <a name="sparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.sparkGlueProperties"></a>

```java
public DatazoneConnectionPropsSparkGlueProperties getSparkGlueProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

Spark Glue Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#spark_glue_properties DatazoneConnection#spark_glue_properties}

---

##### `workflowsMwaaProperties`<sup>Optional</sup> <a name="workflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsMwaaProperties"></a>

```java
public DatazoneConnectionPropsWorkflowsMwaaProperties getWorkflowsMwaaProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

Workflows MWAA Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#workflows_mwaa_properties DatazoneConnection#workflows_mwaa_properties}

---

##### `workflowsServerlessProperties`<sup>Optional</sup> <a name="workflowsServerlessProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps.property.workflowsServerlessProperties"></a>

```java
public java.lang.String getWorkflowsServerlessProperties();
```

- *Type:* java.lang.String

Workflows Serverless Properties Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#workflows_serverless_properties DatazoneConnection#workflows_serverless_properties}

---

### DatazoneConnectionPropsAmazonQProperties <a name="DatazoneConnectionPropsAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsAmazonQProperties;

DatazoneConnectionPropsAmazonQProperties.builder()
//  .authMode(java.lang.String)
//  .isEnabled(java.lang.Boolean|IResolvable)
//  .profileArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.authMode">authMode</a></code> | <code>java.lang.String</code> | The authentication mode of the connection's AmazonQ properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether Amazon Q is enabled for the connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.profileArn">profileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#profile_arn DatazoneConnection#profile_arn}. |

---

##### `authMode`<sup>Optional</sup> <a name="authMode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.authMode"></a>

```java
public java.lang.String getAuthMode();
```

- *Type:* java.lang.String

The authentication mode of the connection's AmazonQ properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#auth_mode DatazoneConnection#auth_mode}

---

##### `isEnabled`<sup>Optional</sup> <a name="isEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether Amazon Q is enabled for the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#is_enabled DatazoneConnection#is_enabled}

---

##### `profileArn`<sup>Optional</sup> <a name="profileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties.property.profileArn"></a>

```java
public java.lang.String getProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#profile_arn DatazoneConnection#profile_arn}.

---

### DatazoneConnectionPropsAthenaProperties <a name="DatazoneConnectionPropsAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsAthenaProperties;

DatazoneConnectionPropsAthenaProperties.builder()
//  .workgroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}. |

---

##### `workgroupName`<sup>Optional</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

### DatazoneConnectionPropsGlueProperties <a name="DatazoneConnectionPropsGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGlueProperties;

DatazoneConnectionPropsGlueProperties.builder()
//  .glueConnectionInput(DatazoneConnectionPropsGluePropertiesGlueConnectionInput)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.property.glueConnectionInput">glueConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | Glue Connection Input. |

---

##### `glueConnectionInput`<sup>Optional</sup> <a name="glueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties.property.glueConnectionInput"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInput getGlueConnectionInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

Glue Connection Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#glue_connection_input DatazoneConnection#glue_connection_input}

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInput <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput;

DatazoneConnectionPropsGluePropertiesGlueConnectionInput.builder()
//  .athenaProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .authenticationConfiguration(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration)
//  .connectionProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .connectionType(java.lang.String)
//  .description(java.lang.String)
//  .matchCriteria(java.lang.String)
//  .name(java.lang.String)
//  .physicalConnectionRequirements(DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements)
//  .pythonProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .sparkProperties(java.util.Map<java.lang.String, java.lang.String>)
//  .validateCredentials(java.lang.Boolean|IResolvable)
//  .validateForComputeEnvironments(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.athenaProperties">athenaProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | Authentication Configuration Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionProperties">connectionProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Connection Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | Glue Connection Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#description DatazoneConnection#description}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.matchCriteria">matchCriteria</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#match_criteria DatazoneConnection#match_criteria}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#name DatazoneConnection#name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | Physical Connection Requirements. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.pythonProperties">pythonProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.sparkProperties">sparkProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Property Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateCredentials">validateCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#validate_credentials DatazoneConnection#validate_credentials}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateForComputeEnvironments">validateForComputeEnvironments</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#validate_for_compute_environments DatazoneConnection#validate_for_compute_environments}. |

---

##### `athenaProperties`<sup>Optional</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.athenaProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAthenaProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#athena_properties DatazoneConnection#athena_properties}

---

##### `authenticationConfiguration`<sup>Optional</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.authenticationConfiguration"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

Authentication Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#authentication_configuration DatazoneConnection#authentication_configuration}

---

##### `connectionProperties`<sup>Optional</sup> <a name="connectionProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectionProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Connection Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#connection_properties DatazoneConnection#connection_properties}

---

##### `connectionType`<sup>Optional</sup> <a name="connectionType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

Glue Connection Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#connection_type DatazoneConnection#connection_type}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#description DatazoneConnection#description}.

---

##### `matchCriteria`<sup>Optional</sup> <a name="matchCriteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.matchCriteria"></a>

```java
public java.lang.String getMatchCriteria();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#match_criteria DatazoneConnection#match_criteria}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#name DatazoneConnection#name}.

---

##### `physicalConnectionRequirements`<sup>Optional</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.physicalConnectionRequirements"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements getPhysicalConnectionRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

Physical Connection Requirements.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#physical_connection_requirements DatazoneConnection#physical_connection_requirements}

---

##### `pythonProperties`<sup>Optional</sup> <a name="pythonProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.pythonProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPythonProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#python_properties DatazoneConnection#python_properties}

---

##### `sparkProperties`<sup>Optional</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.sparkProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Property Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#spark_properties DatazoneConnection#spark_properties}

---

##### `validateCredentials`<sup>Optional</sup> <a name="validateCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateCredentials"></a>

```java
public java.lang.Boolean|IResolvable getValidateCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#validate_credentials DatazoneConnection#validate_credentials}.

---

##### `validateForComputeEnvironments`<sup>Optional</sup> <a name="validateForComputeEnvironments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput.property.validateForComputeEnvironments"></a>

```java
public java.util.List<java.lang.String> getValidateForComputeEnvironments();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#validate_for_compute_environments DatazoneConnection#validate_for_compute_environments}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration;

DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.builder()
//  .authenticationType(java.lang.String)
//  .basicAuthenticationCredentials(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials)
//  .customAuthenticationCredentials(java.util.Map<java.lang.String, java.lang.String>)
//  .kmsKeyArn(java.lang.String)
//  .oAuth2Properties(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties)
//  .secretArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | Authentication Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | Basic Authentication Credentials. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Credential Map. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#kms_key_arn DatazoneConnection#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.oAuth2Properties">oAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | OAuth2 Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}. |

---

##### `authenticationType`<sup>Optional</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

Authentication Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#authentication_type DatazoneConnection#authentication_type}

---

##### `basicAuthenticationCredentials`<sup>Optional</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.basicAuthenticationCredentials"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials getBasicAuthenticationCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

Basic Authentication Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#basic_authentication_credentials DatazoneConnection#basic_authentication_credentials}

---

##### `customAuthenticationCredentials`<sup>Optional</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.customAuthenticationCredentials"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAuthenticationCredentials();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Credential Map.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#custom_authentication_credentials DatazoneConnection#custom_authentication_credentials}

---

##### `kmsKeyArn`<sup>Optional</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#kms_key_arn DatazoneConnection#kms_key_arn}.

---

##### `oAuth2Properties`<sup>Optional</sup> <a name="oAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.oAuth2Properties"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties getOAuth2Properties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

OAuth2 Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#o_auth_2_properties DatazoneConnection#o_auth_2_properties}

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials;

DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.builder()
//  .password(java.lang.String)
//  .userName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#password DatazoneConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.userName">userName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#user_name DatazoneConnection#user_name}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

##### `userName`<sup>Optional</sup> <a name="userName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#user_name DatazoneConnection#user_name}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties;

DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.builder()
//  .authorizationCodeProperties(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties)
//  .oAuth2ClientApplication(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication)
//  .oAuth2Credentials(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials)
//  .oAuth2GrantType(java.lang.String)
//  .tokenUrl(java.lang.String)
//  .tokenUrlParametersMap(java.util.Map<java.lang.String, java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | Authorization Code Properties. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication">oAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | OAuth2 Client Application. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials">oAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | Glue OAuth2 Credentials. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType">oAuth2GrantType</a></code> | <code>java.lang.String</code> | OAuth2 Grant Type. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#token_url DatazoneConnection#token_url}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | The token URL parameters. |

---

##### `authorizationCodeProperties`<sup>Optional</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.authorizationCodeProperties"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties getAuthorizationCodeProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

Authorization Code Properties.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#authorization_code_properties DatazoneConnection#authorization_code_properties}

---

##### `oAuth2ClientApplication`<sup>Optional</sup> <a name="oAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2ClientApplication"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication getOAuth2ClientApplication();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

OAuth2 Client Application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#o_auth_2_client_application DatazoneConnection#o_auth_2_client_application}

---

##### `oAuth2Credentials`<sup>Optional</sup> <a name="oAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2Credentials"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials getOAuth2Credentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

Glue OAuth2 Credentials.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#o_auth_2_credentials DatazoneConnection#o_auth_2_credentials}

---

##### `oAuth2GrantType`<sup>Optional</sup> <a name="oAuth2GrantType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.oAuth2GrantType"></a>

```java
public java.lang.String getOAuth2GrantType();
```

- *Type:* java.lang.String

OAuth2 Grant Type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#o_auth_2_grant_type DatazoneConnection#o_auth_2_grant_type}

---

##### `tokenUrl`<sup>Optional</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#token_url DatazoneConnection#token_url}.

---

##### `tokenUrlParametersMap`<sup>Optional</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties.property.tokenUrlParametersMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTokenUrlParametersMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

The token URL parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#token_url_parameters_map DatazoneConnection#token_url_parameters_map}

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties;

DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.builder()
//  .authorizationCode(java.lang.String)
//  .redirectUri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode">authorizationCode</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#authorization_code DatazoneConnection#authorization_code}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#redirect_uri DatazoneConnection#redirect_uri}. |

---

##### `authorizationCode`<sup>Optional</sup> <a name="authorizationCode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.authorizationCode"></a>

```java
public java.lang.String getAuthorizationCode();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#authorization_code DatazoneConnection#authorization_code}.

---

##### `redirectUri`<sup>Optional</sup> <a name="redirectUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#redirect_uri DatazoneConnection#redirect_uri}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication;

DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.builder()
//  .awsManagedClientApplicationReference(java.lang.String)
//  .userManagedClientApplicationClientId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#aws_managed_client_application_reference DatazoneConnection#aws_managed_client_application_reference}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#user_managed_client_application_client_id DatazoneConnection#user_managed_client_application_client_id}. |

---

##### `awsManagedClientApplicationReference`<sup>Optional</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.awsManagedClientApplicationReference"></a>

```java
public java.lang.String getAwsManagedClientApplicationReference();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#aws_managed_client_application_reference DatazoneConnection#aws_managed_client_application_reference}.

---

##### `userManagedClientApplicationClientId`<sup>Optional</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication.property.userManagedClientApplicationClientId"></a>

```java
public java.lang.String getUserManagedClientApplicationClientId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#user_managed_client_application_client_id DatazoneConnection#user_managed_client_application_client_id}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials;

DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.builder()
//  .accessToken(java.lang.String)
//  .jwtToken(java.lang.String)
//  .refreshToken(java.lang.String)
//  .userManagedClientApplicationClientSecret(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#access_token DatazoneConnection#access_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken">jwtToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#jwt_token DatazoneConnection#jwt_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#refresh_token DatazoneConnection#refresh_token}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#user_managed_client_application_client_secret DatazoneConnection#user_managed_client_application_client_secret}. |

---

##### `accessToken`<sup>Optional</sup> <a name="accessToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#access_token DatazoneConnection#access_token}.

---

##### `jwtToken`<sup>Optional</sup> <a name="jwtToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.jwtToken"></a>

```java
public java.lang.String getJwtToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#jwt_token DatazoneConnection#jwt_token}.

---

##### `refreshToken`<sup>Optional</sup> <a name="refreshToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#refresh_token DatazoneConnection#refresh_token}.

---

##### `userManagedClientApplicationClientSecret`<sup>Optional</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials.property.userManagedClientApplicationClientSecret"></a>

```java
public java.lang.String getUserManagedClientApplicationClientSecret();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#user_managed_client_application_client_secret DatazoneConnection#user_managed_client_application_client_secret}.

---

### DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements;

DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.builder()
//  .availabilityZone(java.lang.String)
//  .securityGroupIdList(java.util.List<java.lang.String>)
//  .subnetId(java.lang.String)
//  .subnetIdList(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#availability_zone DatazoneConnection#availability_zone}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList">securityGroupIdList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#security_group_id_list DatazoneConnection#security_group_id_list}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#subnet_id DatazoneConnection#subnet_id}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetIdList">subnetIdList</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#subnet_id_list DatazoneConnection#subnet_id_list}. |

---

##### `availabilityZone`<sup>Optional</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#availability_zone DatazoneConnection#availability_zone}.

---

##### `securityGroupIdList`<sup>Optional</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.securityGroupIdList"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#security_group_id_list DatazoneConnection#security_group_id_list}.

---

##### `subnetId`<sup>Optional</sup> <a name="subnetId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#subnet_id DatazoneConnection#subnet_id}.

---

##### `subnetIdList`<sup>Optional</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements.property.subnetIdList"></a>

```java
public java.util.List<java.lang.String> getSubnetIdList();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#subnet_id_list DatazoneConnection#subnet_id_list}.

---

### DatazoneConnectionPropsHyperPodProperties <a name="DatazoneConnectionPropsHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsHyperPodProperties;

DatazoneConnectionPropsHyperPodProperties.builder()
//  .clusterName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}. |

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

### DatazoneConnectionPropsIamProperties <a name="DatazoneConnectionPropsIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsIamProperties;

DatazoneConnectionPropsIamProperties.builder()
//  .glueLineageSyncEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}. |

---

##### `glueLineageSyncEnabled`<sup>Optional</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties.property.glueLineageSyncEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGlueLineageSyncEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}.

---

### DatazoneConnectionPropsLakehouseProperties <a name="DatazoneConnectionPropsLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsLakehouseProperties;

DatazoneConnectionPropsLakehouseProperties.builder()
//  .glueLineageSyncEnabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether Glue lineage sync is enabled for the lakehouse connection. |

---

##### `glueLineageSyncEnabled`<sup>Optional</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties.property.glueLineageSyncEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGlueLineageSyncEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether Glue lineage sync is enabled for the lakehouse connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#glue_lineage_sync_enabled DatazoneConnection#glue_lineage_sync_enabled}

---

### DatazoneConnectionPropsMlflowProperties <a name="DatazoneConnectionPropsMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsMlflowProperties;

DatazoneConnectionPropsMlflowProperties.builder()
//  .trackingServerArn(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.property.trackingServerArn">trackingServerArn</a></code> | <code>java.lang.String</code> | The ARN of the MLflow tracking server. |

---

##### `trackingServerArn`<sup>Optional</sup> <a name="trackingServerArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties.property.trackingServerArn"></a>

```java
public java.lang.String getTrackingServerArn();
```

- *Type:* java.lang.String

The ARN of the MLflow tracking server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#tracking_server_arn DatazoneConnection#tracking_server_arn}

---

### DatazoneConnectionPropsRedshiftProperties <a name="DatazoneConnectionPropsRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftProperties;

DatazoneConnectionPropsRedshiftProperties.builder()
//  .credentials(DatazoneConnectionPropsRedshiftPropertiesCredentials)
//  .databaseName(java.lang.String)
//  .host(java.lang.String)
//  .lineageSync(DatazoneConnectionPropsRedshiftPropertiesLineageSync)
//  .port(java.lang.Number)
//  .storage(DatazoneConnectionPropsRedshiftPropertiesStorage)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#credentials DatazoneConnection#credentials}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#database_name DatazoneConnection#database_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.host">host</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#host DatazoneConnection#host}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.lineageSync">lineageSync</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | Redshift Lineage Sync Configuration Input. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.port">port</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#port DatazoneConnection#port}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#storage DatazoneConnection#storage}. |

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.credentials"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesCredentials getCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#credentials DatazoneConnection#credentials}.

---

##### `databaseName`<sup>Optional</sup> <a name="databaseName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#database_name DatazoneConnection#database_name}.

---

##### `host`<sup>Optional</sup> <a name="host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#host DatazoneConnection#host}.

---

##### `lineageSync`<sup>Optional</sup> <a name="lineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.lineageSync"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesLineageSync getLineageSync();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

Redshift Lineage Sync Configuration Input.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#lineage_sync DatazoneConnection#lineage_sync}

---

##### `port`<sup>Optional</sup> <a name="port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#port DatazoneConnection#port}.

---

##### `storage`<sup>Optional</sup> <a name="storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties.property.storage"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesStorage getStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#storage DatazoneConnection#storage}.

---

### DatazoneConnectionPropsRedshiftPropertiesCredentials <a name="DatazoneConnectionPropsRedshiftPropertiesCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesCredentials;

DatazoneConnectionPropsRedshiftPropertiesCredentials.builder()
//  .secretArn(java.lang.String)
//  .usernamePassword(DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.usernamePassword">usernamePassword</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | The username and password to be used for authentication. |

---

##### `secretArn`<sup>Optional</sup> <a name="secretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#secret_arn DatazoneConnection#secret_arn}.

---

##### `usernamePassword`<sup>Optional</sup> <a name="usernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials.property.usernamePassword"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword getUsernamePassword();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

The username and password to be used for authentication.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#username_password DatazoneConnection#username_password}

---

### DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword;

DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.builder()
//  .password(java.lang.String)
//  .username(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.password">password</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#password DatazoneConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.username">username</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#username DatazoneConnection#username}. |

---

##### `password`<sup>Optional</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#password DatazoneConnection#password}.

---

##### `username`<sup>Optional</sup> <a name="username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#username DatazoneConnection#username}.

---

### DatazoneConnectionPropsRedshiftPropertiesLineageSync <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesLineageSync;

DatazoneConnectionPropsRedshiftPropertiesLineageSync.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .schedule(DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#enabled DatazoneConnection#enabled}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | Lineage Sync Schedule. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#enabled DatazoneConnection#enabled}.

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync.property.schedule"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

Lineage Sync Schedule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}

---

### DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule;

DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.builder()
//  .schedule(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.property.schedule">schedule</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}. |

---

##### `schedule`<sup>Optional</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#schedule DatazoneConnection#schedule}.

---

### DatazoneConnectionPropsRedshiftPropertiesStorage <a name="DatazoneConnectionPropsRedshiftPropertiesStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesStorage;

DatazoneConnectionPropsRedshiftPropertiesStorage.builder()
//  .clusterName(java.lang.String)
//  .workgroupName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}. |

---

##### `clusterName`<sup>Optional</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#cluster_name DatazoneConnection#cluster_name}.

---

##### `workgroupName`<sup>Optional</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#workgroup_name DatazoneConnection#workgroup_name}.

---

### DatazoneConnectionPropsS3Properties <a name="DatazoneConnectionPropsS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsS3Properties;

DatazoneConnectionPropsS3Properties.builder()
//  .registerS3AccessGrantLocation(java.lang.Boolean|IResolvable)
//  .s3AccessGrantLocationId(java.lang.String)
//  .s3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.registerS3AccessGrantLocation">registerS3AccessGrantLocation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Specifies whether to register the S3 Access Grant location. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3AccessGrantLocationId">s3AccessGrantLocationId</a></code> | <code>java.lang.String</code> | The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | The Amazon S3 URI that's part of the Amazon S3 properties of a connection. |

---

##### `registerS3AccessGrantLocation`<sup>Optional</sup> <a name="registerS3AccessGrantLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.registerS3AccessGrantLocation"></a>

```java
public java.lang.Boolean|IResolvable getRegisterS3AccessGrantLocation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Specifies whether to register the S3 Access Grant location.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#register_s3_access_grant_location DatazoneConnection#register_s3_access_grant_location}

---

##### `s3AccessGrantLocationId`<sup>Optional</sup> <a name="s3AccessGrantLocationId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3AccessGrantLocationId"></a>

```java
public java.lang.String getS3AccessGrantLocationId();
```

- *Type:* java.lang.String

The Amazon S3 Access Grant location ID that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#s3_access_grant_location_id DatazoneConnection#s3_access_grant_location_id}

---

##### `s3Uri`<sup>Optional</sup> <a name="s3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

The Amazon S3 URI that's part of the Amazon S3 properties of a connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#s3_uri DatazoneConnection#s3_uri}

---

### DatazoneConnectionPropsSparkEmrProperties <a name="DatazoneConnectionPropsSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsSparkEmrProperties;

DatazoneConnectionPropsSparkEmrProperties.builder()
//  .computeArn(java.lang.String)
//  .instanceProfileArn(java.lang.String)
//  .javaVirtualEnv(java.lang.String)
//  .logUri(java.lang.String)
//  .managedEndpointArn(java.lang.String)
//  .pythonVirtualEnv(java.lang.String)
//  .runtimeRole(java.lang.String)
//  .trustedCertificatesS3Uri(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.computeArn">computeArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#compute_arn DatazoneConnection#compute_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#instance_profile_arn DatazoneConnection#instance_profile_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.logUri">logUri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#log_uri DatazoneConnection#log_uri}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.managedEndpointArn">managedEndpointArn</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#managed_endpoint_arn DatazoneConnection#managed_endpoint_arn}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.runtimeRole">runtimeRole</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#runtime_role DatazoneConnection#runtime_role}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.trustedCertificatesS3Uri">trustedCertificatesS3Uri</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#trusted_certificates_s3_uri DatazoneConnection#trusted_certificates_s3_uri}. |

---

##### `computeArn`<sup>Optional</sup> <a name="computeArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.computeArn"></a>

```java
public java.lang.String getComputeArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#compute_arn DatazoneConnection#compute_arn}.

---

##### `instanceProfileArn`<sup>Optional</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#instance_profile_arn DatazoneConnection#instance_profile_arn}.

---

##### `javaVirtualEnv`<sup>Optional</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.javaVirtualEnv"></a>

```java
public java.lang.String getJavaVirtualEnv();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

##### `logUri`<sup>Optional</sup> <a name="logUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#log_uri DatazoneConnection#log_uri}.

---

##### `managedEndpointArn`<sup>Optional</sup> <a name="managedEndpointArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.managedEndpointArn"></a>

```java
public java.lang.String getManagedEndpointArn();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#managed_endpoint_arn DatazoneConnection#managed_endpoint_arn}.

---

##### `pythonVirtualEnv`<sup>Optional</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.pythonVirtualEnv"></a>

```java
public java.lang.String getPythonVirtualEnv();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

##### `runtimeRole`<sup>Optional</sup> <a name="runtimeRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.runtimeRole"></a>

```java
public java.lang.String getRuntimeRole();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#runtime_role DatazoneConnection#runtime_role}.

---

##### `trustedCertificatesS3Uri`<sup>Optional</sup> <a name="trustedCertificatesS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties.property.trustedCertificatesS3Uri"></a>

```java
public java.lang.String getTrustedCertificatesS3Uri();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#trusted_certificates_s3_uri DatazoneConnection#trusted_certificates_s3_uri}.

---

### DatazoneConnectionPropsSparkGlueProperties <a name="DatazoneConnectionPropsSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsSparkGlueProperties;

DatazoneConnectionPropsSparkGlueProperties.builder()
//  .additionalArgs(DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs)
//  .glueConnectionName(java.lang.String)
//  .glueVersion(java.lang.String)
//  .idleTimeout(java.lang.Number)
//  .javaVirtualEnv(java.lang.String)
//  .numberOfWorkers(java.lang.Number)
//  .pythonVirtualEnv(java.lang.String)
//  .workerType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.additionalArgs">additionalArgs</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | Spark Glue Args. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueConnectionName">glueConnectionName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#glue_connection_name DatazoneConnection#glue_connection_name}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#glue_version DatazoneConnection#glue_version}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#idle_timeout DatazoneConnection#idle_timeout}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#number_of_workers DatazoneConnection#number_of_workers}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.workerType">workerType</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#worker_type DatazoneConnection#worker_type}. |

---

##### `additionalArgs`<sup>Optional</sup> <a name="additionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.additionalArgs"></a>

```java
public DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs getAdditionalArgs();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

Spark Glue Args.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#additional_args DatazoneConnection#additional_args}

---

##### `glueConnectionName`<sup>Optional</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueConnectionName"></a>

```java
public java.lang.String getGlueConnectionName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#glue_connection_name DatazoneConnection#glue_connection_name}.

---

##### `glueVersion`<sup>Optional</sup> <a name="glueVersion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#glue_version DatazoneConnection#glue_version}.

---

##### `idleTimeout`<sup>Optional</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#idle_timeout DatazoneConnection#idle_timeout}.

---

##### `javaVirtualEnv`<sup>Optional</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.javaVirtualEnv"></a>

```java
public java.lang.String getJavaVirtualEnv();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#java_virtual_env DatazoneConnection#java_virtual_env}.

---

##### `numberOfWorkers`<sup>Optional</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#number_of_workers DatazoneConnection#number_of_workers}.

---

##### `pythonVirtualEnv`<sup>Optional</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.pythonVirtualEnv"></a>

```java
public java.lang.String getPythonVirtualEnv();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#python_virtual_env DatazoneConnection#python_virtual_env}.

---

##### `workerType`<sup>Optional</sup> <a name="workerType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#worker_type DatazoneConnection#worker_type}.

---

### DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs <a name="DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs;

DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.builder()
//  .connection(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.property.connection">connection</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#connection DatazoneConnection#connection}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs.property.connection"></a>

```java
public java.lang.String getConnection();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#connection DatazoneConnection#connection}.

---

### DatazoneConnectionPropsWorkflowsMwaaProperties <a name="DatazoneConnectionPropsWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsWorkflowsMwaaProperties;

DatazoneConnectionPropsWorkflowsMwaaProperties.builder()
//  .mwaaEnvironmentName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.property.mwaaEnvironmentName">mwaaEnvironmentName</a></code> | <code>java.lang.String</code> | The name of the MWAA environment. |

---

##### `mwaaEnvironmentName`<sup>Optional</sup> <a name="mwaaEnvironmentName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties.property.mwaaEnvironmentName"></a>

```java
public java.lang.String getMwaaEnvironmentName();
```

- *Type:* java.lang.String

The name of the MWAA environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/datazone_connection#mwaa_environment_name DatazoneConnection#mwaa_environment_name}

---

## Classes <a name="Classes" id="Classes"></a>

### DatazoneConnectionAwsLocationOutputReference <a name="DatazoneConnectionAwsLocationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionAwsLocationOutputReference;

new DatazoneConnectionAwsLocationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAccessRole">resetAccessRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsAccountId">resetAwsAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsRegion">resetAwsRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetIamConnectionId">resetIamConnectionId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessRole` <a name="resetAccessRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAccessRole"></a>

```java
public void resetAccessRole()
```

##### `resetAwsAccountId` <a name="resetAwsAccountId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsAccountId"></a>

```java
public void resetAwsAccountId()
```

##### `resetAwsRegion` <a name="resetAwsRegion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetAwsRegion"></a>

```java
public void resetAwsRegion()
```

##### `resetIamConnectionId` <a name="resetIamConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.resetIamConnectionId"></a>

```java
public void resetIamConnectionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRoleInput">accessRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountIdInput">awsAccountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegionInput">awsRegionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionIdInput">iamConnectionIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRole">accessRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegion">awsRegion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionId">iamConnectionId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessRoleInput`<sup>Optional</sup> <a name="accessRoleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRoleInput"></a>

```java
public java.lang.String getAccessRoleInput();
```

- *Type:* java.lang.String

---

##### `awsAccountIdInput`<sup>Optional</sup> <a name="awsAccountIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountIdInput"></a>

```java
public java.lang.String getAwsAccountIdInput();
```

- *Type:* java.lang.String

---

##### `awsRegionInput`<sup>Optional</sup> <a name="awsRegionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegionInput"></a>

```java
public java.lang.String getAwsRegionInput();
```

- *Type:* java.lang.String

---

##### `iamConnectionIdInput`<sup>Optional</sup> <a name="iamConnectionIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionIdInput"></a>

```java
public java.lang.String getIamConnectionIdInput();
```

- *Type:* java.lang.String

---

##### `accessRole`<sup>Required</sup> <a name="accessRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.accessRole"></a>

```java
public java.lang.String getAccessRole();
```

- *Type:* java.lang.String

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `awsRegion`<sup>Required</sup> <a name="awsRegion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.awsRegion"></a>

```java
public java.lang.String getAwsRegion();
```

- *Type:* java.lang.String

---

##### `iamConnectionId`<sup>Required</sup> <a name="iamConnectionId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.iamConnectionId"></a>

```java
public java.lang.String getIamConnectionId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionAwsLocation getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionAwsLocation">DatazoneConnectionAwsLocation</a>

---


### DatazoneConnectionConfigurationsList <a name="DatazoneConnectionConfigurationsList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionConfigurationsList;

new DatazoneConnectionConfigurationsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get"></a>

```java
public DatazoneConnectionConfigurationsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<DatazoneConnectionConfigurations> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>>

---


### DatazoneConnectionConfigurationsOutputReference <a name="DatazoneConnectionConfigurationsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionConfigurationsOutputReference;

new DatazoneConnectionConfigurationsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetClassification">resetClassification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetProperties">resetProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClassification` <a name="resetClassification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetClassification"></a>

```java
public void resetClassification()
```

##### `resetProperties` <a name="resetProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.resetProperties"></a>

```java
public void resetProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classificationInput">classificationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.propertiesInput">propertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classification">classification</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.properties">properties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `classificationInput`<sup>Optional</sup> <a name="classificationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classificationInput"></a>

```java
public java.lang.String getClassificationInput();
```

- *Type:* java.lang.String

---

##### `propertiesInput`<sup>Optional</sup> <a name="propertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.propertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `classification`<sup>Required</sup> <a name="classification" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.classification"></a>

```java
public java.lang.String getClassification();
```

- *Type:* java.lang.String

---

##### `properties`<sup>Required</sup> <a name="properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.properties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurationsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionConfigurations getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionConfigurations">DatazoneConnectionConfigurations</a>

---


### DatazoneConnectionPropsAmazonQPropertiesOutputReference <a name="DatazoneConnectionPropsAmazonQPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsAmazonQPropertiesOutputReference;

new DatazoneConnectionPropsAmazonQPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetAuthMode">resetAuthMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetIsEnabled">resetIsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetProfileArn">resetProfileArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthMode` <a name="resetAuthMode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetAuthMode"></a>

```java
public void resetAuthMode()
```

##### `resetIsEnabled` <a name="resetIsEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetIsEnabled"></a>

```java
public void resetIsEnabled()
```

##### `resetProfileArn` <a name="resetProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.resetProfileArn"></a>

```java
public void resetProfileArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authModeInput">authModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabledInput">isEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArnInput">profileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode">authMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled">isEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn">profileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authModeInput`<sup>Optional</sup> <a name="authModeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authModeInput"></a>

```java
public java.lang.String getAuthModeInput();
```

- *Type:* java.lang.String

---

##### `isEnabledInput`<sup>Optional</sup> <a name="isEnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileArnInput`<sup>Optional</sup> <a name="profileArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArnInput"></a>

```java
public java.lang.String getProfileArnInput();
```

- *Type:* java.lang.String

---

##### `authMode`<sup>Required</sup> <a name="authMode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.authMode"></a>

```java
public java.lang.String getAuthMode();
```

- *Type:* java.lang.String

---

##### `isEnabled`<sup>Required</sup> <a name="isEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.isEnabled"></a>

```java
public java.lang.Boolean|IResolvable getIsEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profileArn`<sup>Required</sup> <a name="profileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.profileArn"></a>

```java
public java.lang.String getProfileArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsAmazonQProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---


### DatazoneConnectionPropsAthenaPropertiesOutputReference <a name="DatazoneConnectionPropsAthenaPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsAthenaPropertiesOutputReference;

new DatazoneConnectionPropsAthenaPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resetWorkgroupName">resetWorkgroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetWorkgroupName` <a name="resetWorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.resetWorkgroupName"></a>

```java
public void resetWorkgroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupNameInput">workgroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupNameInput"></a>

```java
public java.lang.String getWorkgroupNameInput();
```

- *Type:* java.lang.String

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsAthenaProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUserName">resetUserName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUserName` <a name="resetUserName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.resetUserName"></a>

```java
public void resetUserName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userNameInput">userNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName">userName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `userNameInput`<sup>Optional</sup> <a name="userNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userNameInput"></a>

```java
public java.lang.String getUserNameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `userName`<sup>Required</sup> <a name="userName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.userName"></a>

```java
public java.lang.String getUserName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode">resetAuthorizationCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri">resetRedirectUri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorizationCode` <a name="resetAuthorizationCode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetAuthorizationCode"></a>

```java
public void resetAuthorizationCode()
```

##### `resetRedirectUri` <a name="resetRedirectUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.resetRedirectUri"></a>

```java
public void resetRedirectUri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput">authorizationCodeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput">redirectUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode">authorizationCode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri">redirectUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationCodeInput`<sup>Optional</sup> <a name="authorizationCodeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCodeInput"></a>

```java
public java.lang.String getAuthorizationCodeInput();
```

- *Type:* java.lang.String

---

##### `redirectUriInput`<sup>Optional</sup> <a name="redirectUriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUriInput"></a>

```java
public java.lang.String getRedirectUriInput();
```

- *Type:* java.lang.String

---

##### `authorizationCode`<sup>Required</sup> <a name="authorizationCode" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.authorizationCode"></a>

```java
public java.lang.String getAuthorizationCode();
```

- *Type:* java.lang.String

---

##### `redirectUri`<sup>Required</sup> <a name="redirectUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.redirectUri"></a>

```java
public java.lang.String getRedirectUri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference">resetAwsManagedClientApplicationReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId">resetUserManagedClientApplicationClientId</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAwsManagedClientApplicationReference` <a name="resetAwsManagedClientApplicationReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetAwsManagedClientApplicationReference"></a>

```java
public void resetAwsManagedClientApplicationReference()
```

##### `resetUserManagedClientApplicationClientId` <a name="resetUserManagedClientApplicationClientId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.resetUserManagedClientApplicationClientId"></a>

```java
public void resetUserManagedClientApplicationClientId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput">awsManagedClientApplicationReferenceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput">userManagedClientApplicationClientIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference">awsManagedClientApplicationReference</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId">userManagedClientApplicationClientId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `awsManagedClientApplicationReferenceInput`<sup>Optional</sup> <a name="awsManagedClientApplicationReferenceInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReferenceInput"></a>

```java
public java.lang.String getAwsManagedClientApplicationReferenceInput();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientIdInput`<sup>Optional</sup> <a name="userManagedClientApplicationClientIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientIdInput"></a>

```java
public java.lang.String getUserManagedClientApplicationClientIdInput();
```

- *Type:* java.lang.String

---

##### `awsManagedClientApplicationReference`<sup>Required</sup> <a name="awsManagedClientApplicationReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.awsManagedClientApplicationReference"></a>

```java
public java.lang.String getAwsManagedClientApplicationReference();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientId`<sup>Required</sup> <a name="userManagedClientApplicationClientId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.userManagedClientApplicationClientId"></a>

```java
public java.lang.String getUserManagedClientApplicationClientId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken">resetAccessToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken">resetJwtToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken">resetRefreshToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret">resetUserManagedClientApplicationClientSecret</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAccessToken` <a name="resetAccessToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetAccessToken"></a>

```java
public void resetAccessToken()
```

##### `resetJwtToken` <a name="resetJwtToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetJwtToken"></a>

```java
public void resetJwtToken()
```

##### `resetRefreshToken` <a name="resetRefreshToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetRefreshToken"></a>

```java
public void resetRefreshToken()
```

##### `resetUserManagedClientApplicationClientSecret` <a name="resetUserManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.resetUserManagedClientApplicationClientSecret"></a>

```java
public void resetUserManagedClientApplicationClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput">accessTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput">jwtTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput">refreshTokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput">userManagedClientApplicationClientSecretInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken">accessToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken">jwtToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken">refreshToken</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret">userManagedClientApplicationClientSecret</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessTokenInput`<sup>Optional</sup> <a name="accessTokenInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessTokenInput"></a>

```java
public java.lang.String getAccessTokenInput();
```

- *Type:* java.lang.String

---

##### `jwtTokenInput`<sup>Optional</sup> <a name="jwtTokenInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtTokenInput"></a>

```java
public java.lang.String getJwtTokenInput();
```

- *Type:* java.lang.String

---

##### `refreshTokenInput`<sup>Optional</sup> <a name="refreshTokenInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshTokenInput"></a>

```java
public java.lang.String getRefreshTokenInput();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientSecretInput`<sup>Optional</sup> <a name="userManagedClientApplicationClientSecretInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecretInput"></a>

```java
public java.lang.String getUserManagedClientApplicationClientSecretInput();
```

- *Type:* java.lang.String

---

##### `accessToken`<sup>Required</sup> <a name="accessToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.accessToken"></a>

```java
public java.lang.String getAccessToken();
```

- *Type:* java.lang.String

---

##### `jwtToken`<sup>Required</sup> <a name="jwtToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.jwtToken"></a>

```java
public java.lang.String getJwtToken();
```

- *Type:* java.lang.String

---

##### `refreshToken`<sup>Required</sup> <a name="refreshToken" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.refreshToken"></a>

```java
public java.lang.String getRefreshToken();
```

- *Type:* java.lang.String

---

##### `userManagedClientApplicationClientSecret`<sup>Required</sup> <a name="userManagedClientApplicationClientSecret" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.userManagedClientApplicationClientSecret"></a>

```java
public java.lang.String getUserManagedClientApplicationClientSecret();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties">putAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication">putOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials">putOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties">resetAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication">resetOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials">resetOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType">resetOAuth2GrantType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl">resetTokenUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap">resetTokenUrlParametersMap</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthorizationCodeProperties` <a name="putAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties"></a>

```java
public void putAuthorizationCodeProperties(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putAuthorizationCodeProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `putOAuth2ClientApplication` <a name="putOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication"></a>

```java
public void putOAuth2ClientApplication(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2ClientApplication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `putOAuth2Credentials` <a name="putOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials"></a>

```java
public void putOAuth2Credentials(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.putOAuth2Credentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `resetAuthorizationCodeProperties` <a name="resetAuthorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetAuthorizationCodeProperties"></a>

```java
public void resetAuthorizationCodeProperties()
```

##### `resetOAuth2ClientApplication` <a name="resetOAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2ClientApplication"></a>

```java
public void resetOAuth2ClientApplication()
```

##### `resetOAuth2Credentials` <a name="resetOAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2Credentials"></a>

```java
public void resetOAuth2Credentials()
```

##### `resetOAuth2GrantType` <a name="resetOAuth2GrantType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetOAuth2GrantType"></a>

```java
public void resetOAuth2GrantType()
```

##### `resetTokenUrl` <a name="resetTokenUrl" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrl"></a>

```java
public void resetTokenUrl()
```

##### `resetTokenUrlParametersMap` <a name="resetTokenUrlParametersMap" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.resetTokenUrlParametersMap"></a>

```java
public void resetTokenUrlParametersMap()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties">authorizationCodeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication">oAuth2ClientApplication</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials">oAuth2Credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput">authorizationCodePropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput">oAuth2ClientApplicationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput">oAuth2CredentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput">oAuth2GrantTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput">tokenUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput">tokenUrlParametersMapInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType">oAuth2GrantType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl">tokenUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap">tokenUrlParametersMap</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationCodeProperties`<sup>Required</sup> <a name="authorizationCodeProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodeProperties"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference getAuthorizationCodeProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodePropertiesOutputReference</a>

---

##### `oAuth2ClientApplication`<sup>Required</sup> <a name="oAuth2ClientApplication" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplication"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference getOAuth2ClientApplication();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplicationOutputReference</a>

---

##### `oAuth2Credentials`<sup>Required</sup> <a name="oAuth2Credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2Credentials"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference getOAuth2Credentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2CredentialsOutputReference</a>

---

##### `authorizationCodePropertiesInput`<sup>Optional</sup> <a name="authorizationCodePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.authorizationCodePropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties getAuthorizationCodePropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesAuthorizationCodeProperties</a>

---

##### `oAuth2ClientApplicationInput`<sup>Optional</sup> <a name="oAuth2ClientApplicationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2ClientApplicationInput"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication getOAuth2ClientApplicationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2ClientApplication</a>

---

##### `oAuth2CredentialsInput`<sup>Optional</sup> <a name="oAuth2CredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2CredentialsInput"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials getOAuth2CredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOAuth2Credentials</a>

---

##### `oAuth2GrantTypeInput`<sup>Optional</sup> <a name="oAuth2GrantTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantTypeInput"></a>

```java
public java.lang.String getOAuth2GrantTypeInput();
```

- *Type:* java.lang.String

---

##### `tokenUrlInput`<sup>Optional</sup> <a name="tokenUrlInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlInput"></a>

```java
public java.lang.String getTokenUrlInput();
```

- *Type:* java.lang.String

---

##### `tokenUrlParametersMapInput`<sup>Optional</sup> <a name="tokenUrlParametersMapInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMapInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTokenUrlParametersMapInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `oAuth2GrantType`<sup>Required</sup> <a name="oAuth2GrantType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.oAuth2GrantType"></a>

```java
public java.lang.String getOAuth2GrantType();
```

- *Type:* java.lang.String

---

##### `tokenUrl`<sup>Required</sup> <a name="tokenUrl" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrl"></a>

```java
public java.lang.String getTokenUrl();
```

- *Type:* java.lang.String

---

##### `tokenUrlParametersMap`<sup>Required</sup> <a name="tokenUrlParametersMap" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.tokenUrlParametersMap"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getTokenUrlParametersMap();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials">putBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties">putOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType">resetAuthenticationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials">resetBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials">resetCustomAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn">resetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties">resetOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putBasicAuthenticationCredentials` <a name="putBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials"></a>

```java
public void putBasicAuthenticationCredentials(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putBasicAuthenticationCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `putOAuth2Properties` <a name="putOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties"></a>

```java
public void putOAuth2Properties(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.putOAuth2Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `resetAuthenticationType` <a name="resetAuthenticationType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetAuthenticationType"></a>

```java
public void resetAuthenticationType()
```

##### `resetBasicAuthenticationCredentials` <a name="resetBasicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetBasicAuthenticationCredentials"></a>

```java
public void resetBasicAuthenticationCredentials()
```

##### `resetCustomAuthenticationCredentials` <a name="resetCustomAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetCustomAuthenticationCredentials"></a>

```java
public void resetCustomAuthenticationCredentials()
```

##### `resetKmsKeyArn` <a name="resetKmsKeyArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetKmsKeyArn"></a>

```java
public void resetKmsKeyArn()
```

##### `resetOAuth2Properties` <a name="resetOAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetOAuth2Properties"></a>

```java
public void resetOAuth2Properties()
```

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials">basicAuthenticationCredentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties">oAuth2Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput">authenticationTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput">basicAuthenticationCredentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput">customAuthenticationCredentialsInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput">kmsKeyArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput">oAuth2PropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType">authenticationType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials">customAuthenticationCredentials</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn">kmsKeyArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `basicAuthenticationCredentials`<sup>Required</sup> <a name="basicAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentials"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference getBasicAuthenticationCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentialsOutputReference</a>

---

##### `oAuth2Properties`<sup>Required</sup> <a name="oAuth2Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2Properties"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference getOAuth2Properties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2PropertiesOutputReference</a>

---

##### `authenticationTypeInput`<sup>Optional</sup> <a name="authenticationTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationTypeInput"></a>

```java
public java.lang.String getAuthenticationTypeInput();
```

- *Type:* java.lang.String

---

##### `basicAuthenticationCredentialsInput`<sup>Optional</sup> <a name="basicAuthenticationCredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.basicAuthenticationCredentialsInput"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials getBasicAuthenticationCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationBasicAuthenticationCredentials</a>

---

##### `customAuthenticationCredentialsInput`<sup>Optional</sup> <a name="customAuthenticationCredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentialsInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAuthenticationCredentialsInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsKeyArnInput`<sup>Optional</sup> <a name="kmsKeyArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArnInput"></a>

```java
public java.lang.String getKmsKeyArnInput();
```

- *Type:* java.lang.String

---

##### `oAuth2PropertiesInput`<sup>Optional</sup> <a name="oAuth2PropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.oAuth2PropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties getOAuth2PropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOAuth2Properties</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `authenticationType`<sup>Required</sup> <a name="authenticationType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.authenticationType"></a>

```java
public java.lang.String getAuthenticationType();
```

- *Type:* java.lang.String

---

##### `customAuthenticationCredentials`<sup>Required</sup> <a name="customAuthenticationCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.customAuthenticationCredentials"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getCustomAuthenticationCredentials();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `kmsKeyArn`<sup>Required</sup> <a name="kmsKeyArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.kmsKeyArn"></a>

```java
public java.lang.String getKmsKeyArn();
```

- *Type:* java.lang.String

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration">putAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements">putPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAthenaProperties">resetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAuthenticationConfiguration">resetAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionProperties">resetConnectionProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionType">resetConnectionType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetMatchCriteria">resetMatchCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPhysicalConnectionRequirements">resetPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPythonProperties">resetPythonProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetSparkProperties">resetSparkProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateCredentials">resetValidateCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateForComputeEnvironments">resetValidateForComputeEnvironments</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAuthenticationConfiguration` <a name="putAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration"></a>

```java
public void putAuthenticationConfiguration(DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putAuthenticationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---

##### `putPhysicalConnectionRequirements` <a name="putPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements"></a>

```java
public void putPhysicalConnectionRequirements(DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.putPhysicalConnectionRequirements.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---

##### `resetAthenaProperties` <a name="resetAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAthenaProperties"></a>

```java
public void resetAthenaProperties()
```

##### `resetAuthenticationConfiguration` <a name="resetAuthenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetAuthenticationConfiguration"></a>

```java
public void resetAuthenticationConfiguration()
```

##### `resetConnectionProperties` <a name="resetConnectionProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionProperties"></a>

```java
public void resetConnectionProperties()
```

##### `resetConnectionType` <a name="resetConnectionType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetConnectionType"></a>

```java
public void resetConnectionType()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetMatchCriteria` <a name="resetMatchCriteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetMatchCriteria"></a>

```java
public void resetMatchCriteria()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetPhysicalConnectionRequirements` <a name="resetPhysicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPhysicalConnectionRequirements"></a>

```java
public void resetPhysicalConnectionRequirements()
```

##### `resetPythonProperties` <a name="resetPythonProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetPythonProperties"></a>

```java
public void resetPythonProperties()
```

##### `resetSparkProperties` <a name="resetSparkProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetSparkProperties"></a>

```java
public void resetSparkProperties()
```

##### `resetValidateCredentials` <a name="resetValidateCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateCredentials"></a>

```java
public void resetValidateCredentials()
```

##### `resetValidateForComputeEnvironments` <a name="resetValidateForComputeEnvironments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.resetValidateForComputeEnvironments"></a>

```java
public void resetValidateForComputeEnvironments()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration">authenticationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements">physicalConnectionRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaPropertiesInput">athenaPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfigurationInput">authenticationConfigurationInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionPropertiesInput">connectionPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionTypeInput">connectionTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteriaInput">matchCriteriaInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirementsInput">physicalConnectionRequirementsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonPropertiesInput">pythonPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkPropertiesInput">sparkPropertiesInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentialsInput">validateCredentialsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironmentsInput">validateForComputeEnvironmentsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties">athenaProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties">connectionProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType">connectionType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria">matchCriteria</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties">pythonProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties">sparkProperties</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials">validateCredentials</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments">validateForComputeEnvironments</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authenticationConfiguration`<sup>Required</sup> <a name="authenticationConfiguration" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfiguration"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference getAuthenticationConfiguration();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfigurationOutputReference</a>

---

##### `physicalConnectionRequirements`<sup>Required</sup> <a name="physicalConnectionRequirements" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirements"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference getPhysicalConnectionRequirements();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference</a>

---

##### `athenaPropertiesInput`<sup>Optional</sup> <a name="athenaPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAthenaPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `authenticationConfigurationInput`<sup>Optional</sup> <a name="authenticationConfigurationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.authenticationConfigurationInput"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration getAuthenticationConfigurationInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration">DatazoneConnectionPropsGluePropertiesGlueConnectionInputAuthenticationConfiguration</a>

---

##### `connectionPropertiesInput`<sup>Optional</sup> <a name="connectionPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectionPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionTypeInput`<sup>Optional</sup> <a name="connectionTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionTypeInput"></a>

```java
public java.lang.String getConnectionTypeInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `matchCriteriaInput`<sup>Optional</sup> <a name="matchCriteriaInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteriaInput"></a>

```java
public java.lang.String getMatchCriteriaInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `physicalConnectionRequirementsInput`<sup>Optional</sup> <a name="physicalConnectionRequirementsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.physicalConnectionRequirementsInput"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements getPhysicalConnectionRequirementsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---

##### `pythonPropertiesInput`<sup>Optional</sup> <a name="pythonPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPythonPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sparkPropertiesInput`<sup>Optional</sup> <a name="sparkPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkPropertiesInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkPropertiesInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validateCredentialsInput`<sup>Optional</sup> <a name="validateCredentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentialsInput"></a>

```java
public java.lang.Boolean|IResolvable getValidateCredentialsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validateForComputeEnvironmentsInput`<sup>Optional</sup> <a name="validateForComputeEnvironmentsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironmentsInput"></a>

```java
public java.util.List<java.lang.String> getValidateForComputeEnvironmentsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.athenaProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getAthenaProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionProperties`<sup>Required</sup> <a name="connectionProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getConnectionProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `connectionType`<sup>Required</sup> <a name="connectionType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.connectionType"></a>

```java
public java.lang.String getConnectionType();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `matchCriteria`<sup>Required</sup> <a name="matchCriteria" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.matchCriteria"></a>

```java
public java.lang.String getMatchCriteria();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `pythonProperties`<sup>Required</sup> <a name="pythonProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.pythonProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getPythonProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `sparkProperties`<sup>Required</sup> <a name="sparkProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.sparkProperties"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getSparkProperties();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `validateCredentials`<sup>Required</sup> <a name="validateCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateCredentials"></a>

```java
public java.lang.Boolean|IResolvable getValidateCredentials();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `validateForComputeEnvironments`<sup>Required</sup> <a name="validateForComputeEnvironments" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.validateForComputeEnvironments"></a>

```java
public java.util.List<java.lang.String> getValidateForComputeEnvironments();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInput getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---


### DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference <a name="DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference;

new DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone">resetAvailabilityZone</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList">resetSecurityGroupIdList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId">resetSubnetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetIdList">resetSubnetIdList</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAvailabilityZone` <a name="resetAvailabilityZone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetAvailabilityZone"></a>

```java
public void resetAvailabilityZone()
```

##### `resetSecurityGroupIdList` <a name="resetSecurityGroupIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSecurityGroupIdList"></a>

```java
public void resetSecurityGroupIdList()
```

##### `resetSubnetId` <a name="resetSubnetId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetId"></a>

```java
public void resetSubnetId()
```

##### `resetSubnetIdList` <a name="resetSubnetIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.resetSubnetIdList"></a>

```java
public void resetSubnetIdList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput">availabilityZoneInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput">securityGroupIdListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput">subnetIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdListInput">subnetIdListInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone">availabilityZone</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList">securityGroupIdList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId">subnetId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList">subnetIdList</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `availabilityZoneInput`<sup>Optional</sup> <a name="availabilityZoneInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZoneInput"></a>

```java
public java.lang.String getAvailabilityZoneInput();
```

- *Type:* java.lang.String

---

##### `securityGroupIdListInput`<sup>Optional</sup> <a name="securityGroupIdListInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdListInput"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetIdInput`<sup>Optional</sup> <a name="subnetIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdInput"></a>

```java
public java.lang.String getSubnetIdInput();
```

- *Type:* java.lang.String

---

##### `subnetIdListInput`<sup>Optional</sup> <a name="subnetIdListInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdListInput"></a>

```java
public java.util.List<java.lang.String> getSubnetIdListInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `availabilityZone`<sup>Required</sup> <a name="availabilityZone" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.availabilityZone"></a>

```java
public java.lang.String getAvailabilityZone();
```

- *Type:* java.lang.String

---

##### `securityGroupIdList`<sup>Required</sup> <a name="securityGroupIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.securityGroupIdList"></a>

```java
public java.util.List<java.lang.String> getSecurityGroupIdList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `subnetId`<sup>Required</sup> <a name="subnetId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetId"></a>

```java
public java.lang.String getSubnetId();
```

- *Type:* java.lang.String

---

##### `subnetIdList`<sup>Required</sup> <a name="subnetIdList" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.subnetIdList"></a>

```java
public java.util.List<java.lang.String> getSubnetIdList();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirementsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements">DatazoneConnectionPropsGluePropertiesGlueConnectionInputPhysicalConnectionRequirements</a>

---


### DatazoneConnectionPropsGluePropertiesOutputReference <a name="DatazoneConnectionPropsGluePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsGluePropertiesOutputReference;

new DatazoneConnectionPropsGluePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput">putGlueConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resetGlueConnectionInput">resetGlueConnectionInput</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putGlueConnectionInput` <a name="putGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput"></a>

```java
public void putGlueConnectionInput(DatazoneConnectionPropsGluePropertiesGlueConnectionInput value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.putGlueConnectionInput.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---

##### `resetGlueConnectionInput` <a name="resetGlueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.resetGlueConnectionInput"></a>

```java
public void resetGlueConnectionInput()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput">glueConnectionInput</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInputInput">glueConnectionInputInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueConnectionInput`<sup>Required</sup> <a name="glueConnectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInput"></a>

```java
public DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference getGlueConnectionInput();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference">DatazoneConnectionPropsGluePropertiesGlueConnectionInputOutputReference</a>

---

##### `glueConnectionInputInput`<sup>Optional</sup> <a name="glueConnectionInputInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.glueConnectionInputInput"></a>

```java
public IResolvable|DatazoneConnectionPropsGluePropertiesGlueConnectionInput getGlueConnectionInputInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesGlueConnectionInput">DatazoneConnectionPropsGluePropertiesGlueConnectionInput</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsGlueProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---


### DatazoneConnectionPropsHyperPodPropertiesOutputReference <a name="DatazoneConnectionPropsHyperPodPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsHyperPodPropertiesOutputReference;

new DatazoneConnectionPropsHyperPodPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.resetClusterName"></a>

```java
public void resetClusterName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsHyperPodProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---


### DatazoneConnectionPropsIamPropertiesOutputReference <a name="DatazoneConnectionPropsIamPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsIamPropertiesOutputReference;

new DatazoneConnectionPropsIamPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resetGlueLineageSyncEnabled">resetGlueLineageSyncEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlueLineageSyncEnabled` <a name="resetGlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.resetGlueLineageSyncEnabled"></a>

```java
public void resetGlueLineageSyncEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabledInput">glueLineageSyncEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueLineageSyncEnabledInput`<sup>Optional</sup> <a name="glueLineageSyncEnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGlueLineageSyncEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `glueLineageSyncEnabled`<sup>Required</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGlueLineageSyncEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsIamProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---


### DatazoneConnectionPropsLakehousePropertiesOutputReference <a name="DatazoneConnectionPropsLakehousePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsLakehousePropertiesOutputReference;

new DatazoneConnectionPropsLakehousePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resetGlueLineageSyncEnabled">resetGlueLineageSyncEnabled</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetGlueLineageSyncEnabled` <a name="resetGlueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.resetGlueLineageSyncEnabled"></a>

```java
public void resetGlueLineageSyncEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabledInput">glueLineageSyncEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled">glueLineageSyncEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `glueLineageSyncEnabledInput`<sup>Optional</sup> <a name="glueLineageSyncEnabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getGlueLineageSyncEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `glueLineageSyncEnabled`<sup>Required</sup> <a name="glueLineageSyncEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.glueLineageSyncEnabled"></a>

```java
public java.lang.Boolean|IResolvable getGlueLineageSyncEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsLakehouseProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---


### DatazoneConnectionPropsMlflowPropertiesOutputReference <a name="DatazoneConnectionPropsMlflowPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsMlflowPropertiesOutputReference;

new DatazoneConnectionPropsMlflowPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resetTrackingServerArn">resetTrackingServerArn</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTrackingServerArn` <a name="resetTrackingServerArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.resetTrackingServerArn"></a>

```java
public void resetTrackingServerArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArnInput">trackingServerArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn">trackingServerArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `trackingServerArnInput`<sup>Optional</sup> <a name="trackingServerArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArnInput"></a>

```java
public java.lang.String getTrackingServerArnInput();
```

- *Type:* java.lang.String

---

##### `trackingServerArn`<sup>Required</sup> <a name="trackingServerArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.trackingServerArn"></a>

```java
public java.lang.String getTrackingServerArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsMlflowProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---


### DatazoneConnectionPropsOutputReference <a name="DatazoneConnectionPropsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsOutputReference;

new DatazoneConnectionPropsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties">putAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties">putAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties">putGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties">putHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties">putIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties">putLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties">putMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties">putRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties">putS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties">putSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties">putSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties">putWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAmazonQProperties">resetAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAthenaProperties">resetAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetGlueProperties">resetGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetHyperPodProperties">resetHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetIamProperties">resetIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetLakehouseProperties">resetLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetMlflowProperties">resetMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetRedshiftProperties">resetRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetS3Properties">resetS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkEmrProperties">resetSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkGlueProperties">resetSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsMwaaProperties">resetWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsServerlessProperties">resetWorkflowsServerlessProperties</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAmazonQProperties` <a name="putAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties"></a>

```java
public void putAmazonQProperties(DatazoneConnectionPropsAmazonQProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAmazonQProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---

##### `putAthenaProperties` <a name="putAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties"></a>

```java
public void putAthenaProperties(DatazoneConnectionPropsAthenaProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putAthenaProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---

##### `putGlueProperties` <a name="putGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties"></a>

```java
public void putGlueProperties(DatazoneConnectionPropsGlueProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putGlueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---

##### `putHyperPodProperties` <a name="putHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties"></a>

```java
public void putHyperPodProperties(DatazoneConnectionPropsHyperPodProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putHyperPodProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---

##### `putIamProperties` <a name="putIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties"></a>

```java
public void putIamProperties(DatazoneConnectionPropsIamProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putIamProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---

##### `putLakehouseProperties` <a name="putLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties"></a>

```java
public void putLakehouseProperties(DatazoneConnectionPropsLakehouseProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putLakehouseProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---

##### `putMlflowProperties` <a name="putMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties"></a>

```java
public void putMlflowProperties(DatazoneConnectionPropsMlflowProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putMlflowProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---

##### `putRedshiftProperties` <a name="putRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties"></a>

```java
public void putRedshiftProperties(DatazoneConnectionPropsRedshiftProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putRedshiftProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---

##### `putS3Properties` <a name="putS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties"></a>

```java
public void putS3Properties(DatazoneConnectionPropsS3Properties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putS3Properties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---

##### `putSparkEmrProperties` <a name="putSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties"></a>

```java
public void putSparkEmrProperties(DatazoneConnectionPropsSparkEmrProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkEmrProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---

##### `putSparkGlueProperties` <a name="putSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties"></a>

```java
public void putSparkGlueProperties(DatazoneConnectionPropsSparkGlueProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putSparkGlueProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---

##### `putWorkflowsMwaaProperties` <a name="putWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties"></a>

```java
public void putWorkflowsMwaaProperties(DatazoneConnectionPropsWorkflowsMwaaProperties value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.putWorkflowsMwaaProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---

##### `resetAmazonQProperties` <a name="resetAmazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAmazonQProperties"></a>

```java
public void resetAmazonQProperties()
```

##### `resetAthenaProperties` <a name="resetAthenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetAthenaProperties"></a>

```java
public void resetAthenaProperties()
```

##### `resetGlueProperties` <a name="resetGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetGlueProperties"></a>

```java
public void resetGlueProperties()
```

##### `resetHyperPodProperties` <a name="resetHyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetHyperPodProperties"></a>

```java
public void resetHyperPodProperties()
```

##### `resetIamProperties` <a name="resetIamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetIamProperties"></a>

```java
public void resetIamProperties()
```

##### `resetLakehouseProperties` <a name="resetLakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetLakehouseProperties"></a>

```java
public void resetLakehouseProperties()
```

##### `resetMlflowProperties` <a name="resetMlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetMlflowProperties"></a>

```java
public void resetMlflowProperties()
```

##### `resetRedshiftProperties` <a name="resetRedshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetRedshiftProperties"></a>

```java
public void resetRedshiftProperties()
```

##### `resetS3Properties` <a name="resetS3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetS3Properties"></a>

```java
public void resetS3Properties()
```

##### `resetSparkEmrProperties` <a name="resetSparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkEmrProperties"></a>

```java
public void resetSparkEmrProperties()
```

##### `resetSparkGlueProperties` <a name="resetSparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetSparkGlueProperties"></a>

```java
public void resetSparkGlueProperties()
```

##### `resetWorkflowsMwaaProperties` <a name="resetWorkflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsMwaaProperties"></a>

```java
public void resetWorkflowsMwaaProperties()
```

##### `resetWorkflowsServerlessProperties` <a name="resetWorkflowsServerlessProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.resetWorkflowsServerlessProperties"></a>

```java
public void resetWorkflowsServerlessProperties()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQProperties">amazonQProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference">DatazoneConnectionPropsAmazonQPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaProperties">athenaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference">DatazoneConnectionPropsAthenaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.glueProperties">glueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodProperties">hyperPodProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference">DatazoneConnectionPropsHyperPodPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamProperties">iamProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference">DatazoneConnectionPropsIamPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehouseProperties">lakehouseProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference">DatazoneConnectionPropsLakehousePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowProperties">mlflowProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference">DatazoneConnectionPropsMlflowPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftProperties">redshiftProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference">DatazoneConnectionPropsRedshiftPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3Properties">s3Properties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference">DatazoneConnectionPropsS3PropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrProperties">sparkEmrProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference">DatazoneConnectionPropsSparkEmrPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGlueProperties">sparkGlueProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference">DatazoneConnectionPropsSparkGluePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties">workflowsMwaaProperties</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQPropertiesInput">amazonQPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaPropertiesInput">athenaPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.gluePropertiesInput">gluePropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodPropertiesInput">hyperPodPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamPropertiesInput">iamPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehousePropertiesInput">lakehousePropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowPropertiesInput">mlflowPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftPropertiesInput">redshiftPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3PropertiesInput">s3PropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrPropertiesInput">sparkEmrPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGluePropertiesInput">sparkGluePropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaPropertiesInput">workflowsMwaaPropertiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessPropertiesInput">workflowsServerlessPropertiesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties">workflowsServerlessProperties</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `amazonQProperties`<sup>Required</sup> <a name="amazonQProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQProperties"></a>

```java
public DatazoneConnectionPropsAmazonQPropertiesOutputReference getAmazonQProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQPropertiesOutputReference">DatazoneConnectionPropsAmazonQPropertiesOutputReference</a>

---

##### `athenaProperties`<sup>Required</sup> <a name="athenaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaProperties"></a>

```java
public DatazoneConnectionPropsAthenaPropertiesOutputReference getAthenaProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaPropertiesOutputReference">DatazoneConnectionPropsAthenaPropertiesOutputReference</a>

---

##### `glueProperties`<sup>Required</sup> <a name="glueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.glueProperties"></a>

```java
public DatazoneConnectionPropsGluePropertiesOutputReference getGlueProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGluePropertiesOutputReference">DatazoneConnectionPropsGluePropertiesOutputReference</a>

---

##### `hyperPodProperties`<sup>Required</sup> <a name="hyperPodProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodProperties"></a>

```java
public DatazoneConnectionPropsHyperPodPropertiesOutputReference getHyperPodProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodPropertiesOutputReference">DatazoneConnectionPropsHyperPodPropertiesOutputReference</a>

---

##### `iamProperties`<sup>Required</sup> <a name="iamProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamProperties"></a>

```java
public DatazoneConnectionPropsIamPropertiesOutputReference getIamProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamPropertiesOutputReference">DatazoneConnectionPropsIamPropertiesOutputReference</a>

---

##### `lakehouseProperties`<sup>Required</sup> <a name="lakehouseProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehouseProperties"></a>

```java
public DatazoneConnectionPropsLakehousePropertiesOutputReference getLakehouseProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehousePropertiesOutputReference">DatazoneConnectionPropsLakehousePropertiesOutputReference</a>

---

##### `mlflowProperties`<sup>Required</sup> <a name="mlflowProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowProperties"></a>

```java
public DatazoneConnectionPropsMlflowPropertiesOutputReference getMlflowProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowPropertiesOutputReference">DatazoneConnectionPropsMlflowPropertiesOutputReference</a>

---

##### `redshiftProperties`<sup>Required</sup> <a name="redshiftProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftProperties"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesOutputReference getRedshiftProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference">DatazoneConnectionPropsRedshiftPropertiesOutputReference</a>

---

##### `s3Properties`<sup>Required</sup> <a name="s3Properties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3Properties"></a>

```java
public DatazoneConnectionPropsS3PropertiesOutputReference getS3Properties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference">DatazoneConnectionPropsS3PropertiesOutputReference</a>

---

##### `sparkEmrProperties`<sup>Required</sup> <a name="sparkEmrProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrProperties"></a>

```java
public DatazoneConnectionPropsSparkEmrPropertiesOutputReference getSparkEmrProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference">DatazoneConnectionPropsSparkEmrPropertiesOutputReference</a>

---

##### `sparkGlueProperties`<sup>Required</sup> <a name="sparkGlueProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGlueProperties"></a>

```java
public DatazoneConnectionPropsSparkGluePropertiesOutputReference getSparkGlueProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference">DatazoneConnectionPropsSparkGluePropertiesOutputReference</a>

---

##### `workflowsMwaaProperties`<sup>Required</sup> <a name="workflowsMwaaProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaProperties"></a>

```java
public DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference getWorkflowsMwaaProperties();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference">DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference</a>

---

##### `amazonQPropertiesInput`<sup>Optional</sup> <a name="amazonQPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.amazonQPropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsAmazonQProperties getAmazonQPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAmazonQProperties">DatazoneConnectionPropsAmazonQProperties</a>

---

##### `athenaPropertiesInput`<sup>Optional</sup> <a name="athenaPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.athenaPropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsAthenaProperties getAthenaPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsAthenaProperties">DatazoneConnectionPropsAthenaProperties</a>

---

##### `gluePropertiesInput`<sup>Optional</sup> <a name="gluePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.gluePropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsGlueProperties getGluePropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsGlueProperties">DatazoneConnectionPropsGlueProperties</a>

---

##### `hyperPodPropertiesInput`<sup>Optional</sup> <a name="hyperPodPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.hyperPodPropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsHyperPodProperties getHyperPodPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsHyperPodProperties">DatazoneConnectionPropsHyperPodProperties</a>

---

##### `iamPropertiesInput`<sup>Optional</sup> <a name="iamPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.iamPropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsIamProperties getIamPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsIamProperties">DatazoneConnectionPropsIamProperties</a>

---

##### `lakehousePropertiesInput`<sup>Optional</sup> <a name="lakehousePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.lakehousePropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsLakehouseProperties getLakehousePropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsLakehouseProperties">DatazoneConnectionPropsLakehouseProperties</a>

---

##### `mlflowPropertiesInput`<sup>Optional</sup> <a name="mlflowPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.mlflowPropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsMlflowProperties getMlflowPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsMlflowProperties">DatazoneConnectionPropsMlflowProperties</a>

---

##### `redshiftPropertiesInput`<sup>Optional</sup> <a name="redshiftPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.redshiftPropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftProperties getRedshiftPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---

##### `s3PropertiesInput`<sup>Optional</sup> <a name="s3PropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.s3PropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsS3Properties getS3PropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---

##### `sparkEmrPropertiesInput`<sup>Optional</sup> <a name="sparkEmrPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkEmrPropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsSparkEmrProperties getSparkEmrPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---

##### `sparkGluePropertiesInput`<sup>Optional</sup> <a name="sparkGluePropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.sparkGluePropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsSparkGlueProperties getSparkGluePropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---

##### `workflowsMwaaPropertiesInput`<sup>Optional</sup> <a name="workflowsMwaaPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsMwaaPropertiesInput"></a>

```java
public IResolvable|DatazoneConnectionPropsWorkflowsMwaaProperties getWorkflowsMwaaPropertiesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---

##### `workflowsServerlessPropertiesInput`<sup>Optional</sup> <a name="workflowsServerlessPropertiesInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessPropertiesInput"></a>

```java
public java.lang.String getWorkflowsServerlessPropertiesInput();
```

- *Type:* java.lang.String

---

##### `workflowsServerlessProperties`<sup>Required</sup> <a name="workflowsServerlessProperties" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.workflowsServerlessProperties"></a>

```java
public java.lang.String getWorkflowsServerlessProperties();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionProps getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionProps">DatazoneConnectionProps</a>

---


### DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference;

new DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword">putUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetSecretArn">resetSecretArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetUsernamePassword">resetUsernamePassword</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsernamePassword` <a name="putUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword"></a>

```java
public void putUsernamePassword(DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.putUsernamePassword.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---

##### `resetSecretArn` <a name="resetSecretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetSecretArn"></a>

```java
public void resetSecretArn()
```

##### `resetUsernamePassword` <a name="resetUsernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.resetUsernamePassword"></a>

```java
public void resetUsernamePassword()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword">usernamePassword</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArnInput">secretArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePasswordInput">usernamePasswordInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn">secretArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usernamePassword`<sup>Required</sup> <a name="usernamePassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePassword"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference getUsernamePassword();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference</a>

---

##### `secretArnInput`<sup>Optional</sup> <a name="secretArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArnInput"></a>

```java
public java.lang.String getSecretArnInput();
```

- *Type:* java.lang.String

---

##### `usernamePasswordInput`<sup>Optional</sup> <a name="usernamePasswordInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.usernamePasswordInput"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword getUsernamePasswordInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---

##### `secretArn`<sup>Required</sup> <a name="secretArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.secretArn"></a>

```java
public java.lang.String getSecretArn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---


### DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference;

new DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetPassword">resetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetUsername">resetUsername</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPassword` <a name="resetPassword" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetPassword"></a>

```java
public void resetPassword()
```

##### `resetUsername` <a name="resetUsername" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.resetUsername"></a>

```java
public void resetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.passwordInput">passwordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.usernameInput">usernameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password">password</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username">username</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `passwordInput`<sup>Optional</sup> <a name="passwordInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.passwordInput"></a>

```java
public java.lang.String getPasswordInput();
```

- *Type:* java.lang.String

---

##### `usernameInput`<sup>Optional</sup> <a name="usernameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.usernameInput"></a>

```java
public java.lang.String getUsernameInput();
```

- *Type:* java.lang.String

---

##### `password`<sup>Required</sup> <a name="password" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.password"></a>

```java
public java.lang.String getPassword();
```

- *Type:* java.lang.String

---

##### `username`<sup>Required</sup> <a name="username" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.username"></a>

```java
public java.lang.String getUsername();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePasswordOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword">DatazoneConnectionPropsRedshiftPropertiesCredentialsUsernamePassword</a>

---


### DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference;

new DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule">putSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putSchedule` <a name="putSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule"></a>

```java
public void putSchedule(DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.putSchedule.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule">schedule</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.schedule"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference getSchedule();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.scheduleInput"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule getScheduleInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesLineageSync getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---


### DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference;

new DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resetSchedule">resetSchedule</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetSchedule` <a name="resetSchedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.resetSchedule"></a>

```java
public void resetSchedule()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.scheduleInput">scheduleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule">schedule</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `scheduleInput`<sup>Optional</sup> <a name="scheduleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.scheduleInput"></a>

```java
public java.lang.String getScheduleInput();
```

- *Type:* java.lang.String

---

##### `schedule`<sup>Required</sup> <a name="schedule" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.schedule"></a>

```java
public java.lang.String getSchedule();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncScheduleOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule">DatazoneConnectionPropsRedshiftPropertiesLineageSyncSchedule</a>

---


### DatazoneConnectionPropsRedshiftPropertiesOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesOutputReference;

new DatazoneConnectionPropsRedshiftPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync">putLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage">putStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetDatabaseName">resetDatabaseName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetHost">resetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetLineageSync">resetLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetPort">resetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetStorage">resetStorage</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentials` <a name="putCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials"></a>

```java
public void putCredentials(DatazoneConnectionPropsRedshiftPropertiesCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---

##### `putLineageSync` <a name="putLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync"></a>

```java
public void putLineageSync(DatazoneConnectionPropsRedshiftPropertiesLineageSync value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putLineageSync.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---

##### `putStorage` <a name="putStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage"></a>

```java
public void putStorage(DatazoneConnectionPropsRedshiftPropertiesStorage value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.putStorage.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetDatabaseName` <a name="resetDatabaseName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetDatabaseName"></a>

```java
public void resetDatabaseName()
```

##### `resetHost` <a name="resetHost" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetHost"></a>

```java
public void resetHost()
```

##### `resetLineageSync` <a name="resetLineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetLineageSync"></a>

```java
public void resetLineageSync()
```

##### `resetPort` <a name="resetPort" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetPort"></a>

```java
public void resetPort()
```

##### `resetStorage` <a name="resetStorage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.resetStorage"></a>

```java
public void resetStorage()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync">lineageSync</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage">storage</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseNameInput">databaseNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.hostInput">hostInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSyncInput">lineageSyncInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.portInput">portInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storageInput">storageInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName">databaseName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host">host</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port">port</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentials"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference">DatazoneConnectionPropsRedshiftPropertiesCredentialsOutputReference</a>

---

##### `lineageSync`<sup>Required</sup> <a name="lineageSync" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSync"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference getLineageSync();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference">DatazoneConnectionPropsRedshiftPropertiesLineageSyncOutputReference</a>

---

##### `storage`<sup>Required</sup> <a name="storage" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storage"></a>

```java
public DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference getStorage();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference">DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference</a>

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.credentialsInput"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesCredentials getCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesCredentials">DatazoneConnectionPropsRedshiftPropertiesCredentials</a>

---

##### `databaseNameInput`<sup>Optional</sup> <a name="databaseNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseNameInput"></a>

```java
public java.lang.String getDatabaseNameInput();
```

- *Type:* java.lang.String

---

##### `hostInput`<sup>Optional</sup> <a name="hostInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.hostInput"></a>

```java
public java.lang.String getHostInput();
```

- *Type:* java.lang.String

---

##### `lineageSyncInput`<sup>Optional</sup> <a name="lineageSyncInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.lineageSyncInput"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesLineageSync getLineageSyncInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesLineageSync">DatazoneConnectionPropsRedshiftPropertiesLineageSync</a>

---

##### `portInput`<sup>Optional</sup> <a name="portInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.portInput"></a>

```java
public java.lang.Number getPortInput();
```

- *Type:* java.lang.Number

---

##### `storageInput`<sup>Optional</sup> <a name="storageInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.storageInput"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesStorage getStorageInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---

##### `databaseName`<sup>Required</sup> <a name="databaseName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.databaseName"></a>

```java
public java.lang.String getDatabaseName();
```

- *Type:* java.lang.String

---

##### `host`<sup>Required</sup> <a name="host" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.host"></a>

```java
public java.lang.String getHost();
```

- *Type:* java.lang.String

---

##### `port`<sup>Required</sup> <a name="port" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.port"></a>

```java
public java.lang.Number getPort();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftProperties">DatazoneConnectionPropsRedshiftProperties</a>

---


### DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference <a name="DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference;

new DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetClusterName">resetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetWorkgroupName">resetWorkgroupName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetClusterName` <a name="resetClusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetClusterName"></a>

```java
public void resetClusterName()
```

##### `resetWorkgroupName` <a name="resetWorkgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.resetWorkgroupName"></a>

```java
public void resetWorkgroupName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterNameInput">clusterNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupNameInput">workgroupNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName">clusterName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName">workgroupName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `clusterNameInput`<sup>Optional</sup> <a name="clusterNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterNameInput"></a>

```java
public java.lang.String getClusterNameInput();
```

- *Type:* java.lang.String

---

##### `workgroupNameInput`<sup>Optional</sup> <a name="workgroupNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupNameInput"></a>

```java
public java.lang.String getWorkgroupNameInput();
```

- *Type:* java.lang.String

---

##### `clusterName`<sup>Required</sup> <a name="clusterName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.clusterName"></a>

```java
public java.lang.String getClusterName();
```

- *Type:* java.lang.String

---

##### `workgroupName`<sup>Required</sup> <a name="workgroupName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.workgroupName"></a>

```java
public java.lang.String getWorkgroupName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorageOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsRedshiftPropertiesStorage getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsRedshiftPropertiesStorage">DatazoneConnectionPropsRedshiftPropertiesStorage</a>

---


### DatazoneConnectionPropsS3PropertiesOutputReference <a name="DatazoneConnectionPropsS3PropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsS3PropertiesOutputReference;

new DatazoneConnectionPropsS3PropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetRegisterS3AccessGrantLocation">resetRegisterS3AccessGrantLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3AccessGrantLocationId">resetS3AccessGrantLocationId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3Uri">resetS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetRegisterS3AccessGrantLocation` <a name="resetRegisterS3AccessGrantLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetRegisterS3AccessGrantLocation"></a>

```java
public void resetRegisterS3AccessGrantLocation()
```

##### `resetS3AccessGrantLocationId` <a name="resetS3AccessGrantLocationId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3AccessGrantLocationId"></a>

```java
public void resetS3AccessGrantLocationId()
```

##### `resetS3Uri` <a name="resetS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.resetS3Uri"></a>

```java
public void resetS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocationInput">registerS3AccessGrantLocationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationIdInput">s3AccessGrantLocationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3UriInput">s3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation">registerS3AccessGrantLocation</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId">s3AccessGrantLocationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri">s3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `registerS3AccessGrantLocationInput`<sup>Optional</sup> <a name="registerS3AccessGrantLocationInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocationInput"></a>

```java
public java.lang.Boolean|IResolvable getRegisterS3AccessGrantLocationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `s3AccessGrantLocationIdInput`<sup>Optional</sup> <a name="s3AccessGrantLocationIdInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationIdInput"></a>

```java
public java.lang.String getS3AccessGrantLocationIdInput();
```

- *Type:* java.lang.String

---

##### `s3UriInput`<sup>Optional</sup> <a name="s3UriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3UriInput"></a>

```java
public java.lang.String getS3UriInput();
```

- *Type:* java.lang.String

---

##### `registerS3AccessGrantLocation`<sup>Required</sup> <a name="registerS3AccessGrantLocation" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.registerS3AccessGrantLocation"></a>

```java
public java.lang.Boolean|IResolvable getRegisterS3AccessGrantLocation();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `s3AccessGrantLocationId`<sup>Required</sup> <a name="s3AccessGrantLocationId" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3AccessGrantLocationId"></a>

```java
public java.lang.String getS3AccessGrantLocationId();
```

- *Type:* java.lang.String

---

##### `s3Uri`<sup>Required</sup> <a name="s3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.s3Uri"></a>

```java
public java.lang.String getS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3PropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsS3Properties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsS3Properties">DatazoneConnectionPropsS3Properties</a>

---


### DatazoneConnectionPropsSparkEmrPropertiesOutputReference <a name="DatazoneConnectionPropsSparkEmrPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference;

new DatazoneConnectionPropsSparkEmrPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetComputeArn">resetComputeArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetInstanceProfileArn">resetInstanceProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetJavaVirtualEnv">resetJavaVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetLogUri">resetLogUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetManagedEndpointArn">resetManagedEndpointArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetPythonVirtualEnv">resetPythonVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetRuntimeRole">resetRuntimeRole</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetTrustedCertificatesS3Uri">resetTrustedCertificatesS3Uri</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetComputeArn` <a name="resetComputeArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetComputeArn"></a>

```java
public void resetComputeArn()
```

##### `resetInstanceProfileArn` <a name="resetInstanceProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetInstanceProfileArn"></a>

```java
public void resetInstanceProfileArn()
```

##### `resetJavaVirtualEnv` <a name="resetJavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetJavaVirtualEnv"></a>

```java
public void resetJavaVirtualEnv()
```

##### `resetLogUri` <a name="resetLogUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetLogUri"></a>

```java
public void resetLogUri()
```

##### `resetManagedEndpointArn` <a name="resetManagedEndpointArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetManagedEndpointArn"></a>

```java
public void resetManagedEndpointArn()
```

##### `resetPythonVirtualEnv` <a name="resetPythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetPythonVirtualEnv"></a>

```java
public void resetPythonVirtualEnv()
```

##### `resetRuntimeRole` <a name="resetRuntimeRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetRuntimeRole"></a>

```java
public void resetRuntimeRole()
```

##### `resetTrustedCertificatesS3Uri` <a name="resetTrustedCertificatesS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.resetTrustedCertificatesS3Uri"></a>

```java
public void resetTrustedCertificatesS3Uri()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArnInput">computeArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArnInput">instanceProfileArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnvInput">javaVirtualEnvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUriInput">logUriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArnInput">managedEndpointArnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnvInput">pythonVirtualEnvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRoleInput">runtimeRoleInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3UriInput">trustedCertificatesS3UriInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn">computeArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn">instanceProfileArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri">logUri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn">managedEndpointArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole">runtimeRole</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri">trustedCertificatesS3Uri</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `computeArnInput`<sup>Optional</sup> <a name="computeArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArnInput"></a>

```java
public java.lang.String getComputeArnInput();
```

- *Type:* java.lang.String

---

##### `instanceProfileArnInput`<sup>Optional</sup> <a name="instanceProfileArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArnInput"></a>

```java
public java.lang.String getInstanceProfileArnInput();
```

- *Type:* java.lang.String

---

##### `javaVirtualEnvInput`<sup>Optional</sup> <a name="javaVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnvInput"></a>

```java
public java.lang.String getJavaVirtualEnvInput();
```

- *Type:* java.lang.String

---

##### `logUriInput`<sup>Optional</sup> <a name="logUriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUriInput"></a>

```java
public java.lang.String getLogUriInput();
```

- *Type:* java.lang.String

---

##### `managedEndpointArnInput`<sup>Optional</sup> <a name="managedEndpointArnInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArnInput"></a>

```java
public java.lang.String getManagedEndpointArnInput();
```

- *Type:* java.lang.String

---

##### `pythonVirtualEnvInput`<sup>Optional</sup> <a name="pythonVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnvInput"></a>

```java
public java.lang.String getPythonVirtualEnvInput();
```

- *Type:* java.lang.String

---

##### `runtimeRoleInput`<sup>Optional</sup> <a name="runtimeRoleInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRoleInput"></a>

```java
public java.lang.String getRuntimeRoleInput();
```

- *Type:* java.lang.String

---

##### `trustedCertificatesS3UriInput`<sup>Optional</sup> <a name="trustedCertificatesS3UriInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3UriInput"></a>

```java
public java.lang.String getTrustedCertificatesS3UriInput();
```

- *Type:* java.lang.String

---

##### `computeArn`<sup>Required</sup> <a name="computeArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.computeArn"></a>

```java
public java.lang.String getComputeArn();
```

- *Type:* java.lang.String

---

##### `instanceProfileArn`<sup>Required</sup> <a name="instanceProfileArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.instanceProfileArn"></a>

```java
public java.lang.String getInstanceProfileArn();
```

- *Type:* java.lang.String

---

##### `javaVirtualEnv`<sup>Required</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.javaVirtualEnv"></a>

```java
public java.lang.String getJavaVirtualEnv();
```

- *Type:* java.lang.String

---

##### `logUri`<sup>Required</sup> <a name="logUri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.logUri"></a>

```java
public java.lang.String getLogUri();
```

- *Type:* java.lang.String

---

##### `managedEndpointArn`<sup>Required</sup> <a name="managedEndpointArn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.managedEndpointArn"></a>

```java
public java.lang.String getManagedEndpointArn();
```

- *Type:* java.lang.String

---

##### `pythonVirtualEnv`<sup>Required</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.pythonVirtualEnv"></a>

```java
public java.lang.String getPythonVirtualEnv();
```

- *Type:* java.lang.String

---

##### `runtimeRole`<sup>Required</sup> <a name="runtimeRole" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.runtimeRole"></a>

```java
public java.lang.String getRuntimeRole();
```

- *Type:* java.lang.String

---

##### `trustedCertificatesS3Uri`<sup>Required</sup> <a name="trustedCertificatesS3Uri" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.trustedCertificatesS3Uri"></a>

```java
public java.lang.String getTrustedCertificatesS3Uri();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsSparkEmrProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkEmrProperties">DatazoneConnectionPropsSparkEmrProperties</a>

---


### DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference <a name="DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference;

new DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resetConnection">resetConnection</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetConnection` <a name="resetConnection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.resetConnection"></a>

```java
public void resetConnection()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connectionInput">connectionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection">connection</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `connectionInput`<sup>Optional</sup> <a name="connectionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connectionInput"></a>

```java
public java.lang.String getConnectionInput();
```

- *Type:* java.lang.String

---

##### `connection`<sup>Required</sup> <a name="connection" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.connection"></a>

```java
public java.lang.String getConnection();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---


### DatazoneConnectionPropsSparkGluePropertiesOutputReference <a name="DatazoneConnectionPropsSparkGluePropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsSparkGluePropertiesOutputReference;

new DatazoneConnectionPropsSparkGluePropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs">putAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetAdditionalArgs">resetAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueConnectionName">resetGlueConnectionName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueVersion">resetGlueVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetIdleTimeout">resetIdleTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetJavaVirtualEnv">resetJavaVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetNumberOfWorkers">resetNumberOfWorkers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetPythonVirtualEnv">resetPythonVirtualEnv</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetWorkerType">resetWorkerType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAdditionalArgs` <a name="putAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs"></a>

```java
public void putAdditionalArgs(DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.putAdditionalArgs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---

##### `resetAdditionalArgs` <a name="resetAdditionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetAdditionalArgs"></a>

```java
public void resetAdditionalArgs()
```

##### `resetGlueConnectionName` <a name="resetGlueConnectionName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueConnectionName"></a>

```java
public void resetGlueConnectionName()
```

##### `resetGlueVersion` <a name="resetGlueVersion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetGlueVersion"></a>

```java
public void resetGlueVersion()
```

##### `resetIdleTimeout` <a name="resetIdleTimeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetIdleTimeout"></a>

```java
public void resetIdleTimeout()
```

##### `resetJavaVirtualEnv` <a name="resetJavaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetJavaVirtualEnv"></a>

```java
public void resetJavaVirtualEnv()
```

##### `resetNumberOfWorkers` <a name="resetNumberOfWorkers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetNumberOfWorkers"></a>

```java
public void resetNumberOfWorkers()
```

##### `resetPythonVirtualEnv` <a name="resetPythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetPythonVirtualEnv"></a>

```java
public void resetPythonVirtualEnv()
```

##### `resetWorkerType` <a name="resetWorkerType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.resetWorkerType"></a>

```java
public void resetWorkerType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs">additionalArgs</a></code> | <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgsInput">additionalArgsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionNameInput">glueConnectionNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersionInput">glueVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeoutInput">idleTimeoutInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnvInput">javaVirtualEnvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkersInput">numberOfWorkersInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnvInput">pythonVirtualEnvInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerTypeInput">workerTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName">glueConnectionName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion">glueVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout">idleTimeout</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv">javaVirtualEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers">numberOfWorkers</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv">pythonVirtualEnv</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType">workerType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `additionalArgs`<sup>Required</sup> <a name="additionalArgs" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgs"></a>

```java
public DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference getAdditionalArgs();
```

- *Type:* <a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgsOutputReference</a>

---

##### `additionalArgsInput`<sup>Optional</sup> <a name="additionalArgsInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.additionalArgsInput"></a>

```java
public IResolvable|DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs getAdditionalArgsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs">DatazoneConnectionPropsSparkGluePropertiesAdditionalArgs</a>

---

##### `glueConnectionNameInput`<sup>Optional</sup> <a name="glueConnectionNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionNameInput"></a>

```java
public java.lang.String getGlueConnectionNameInput();
```

- *Type:* java.lang.String

---

##### `glueVersionInput`<sup>Optional</sup> <a name="glueVersionInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersionInput"></a>

```java
public java.lang.String getGlueVersionInput();
```

- *Type:* java.lang.String

---

##### `idleTimeoutInput`<sup>Optional</sup> <a name="idleTimeoutInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeoutInput"></a>

```java
public java.lang.Number getIdleTimeoutInput();
```

- *Type:* java.lang.Number

---

##### `javaVirtualEnvInput`<sup>Optional</sup> <a name="javaVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnvInput"></a>

```java
public java.lang.String getJavaVirtualEnvInput();
```

- *Type:* java.lang.String

---

##### `numberOfWorkersInput`<sup>Optional</sup> <a name="numberOfWorkersInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkersInput"></a>

```java
public java.lang.Number getNumberOfWorkersInput();
```

- *Type:* java.lang.Number

---

##### `pythonVirtualEnvInput`<sup>Optional</sup> <a name="pythonVirtualEnvInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnvInput"></a>

```java
public java.lang.String getPythonVirtualEnvInput();
```

- *Type:* java.lang.String

---

##### `workerTypeInput`<sup>Optional</sup> <a name="workerTypeInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerTypeInput"></a>

```java
public java.lang.String getWorkerTypeInput();
```

- *Type:* java.lang.String

---

##### `glueConnectionName`<sup>Required</sup> <a name="glueConnectionName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueConnectionName"></a>

```java
public java.lang.String getGlueConnectionName();
```

- *Type:* java.lang.String

---

##### `glueVersion`<sup>Required</sup> <a name="glueVersion" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.glueVersion"></a>

```java
public java.lang.String getGlueVersion();
```

- *Type:* java.lang.String

---

##### `idleTimeout`<sup>Required</sup> <a name="idleTimeout" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.idleTimeout"></a>

```java
public java.lang.Number getIdleTimeout();
```

- *Type:* java.lang.Number

---

##### `javaVirtualEnv`<sup>Required</sup> <a name="javaVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.javaVirtualEnv"></a>

```java
public java.lang.String getJavaVirtualEnv();
```

- *Type:* java.lang.String

---

##### `numberOfWorkers`<sup>Required</sup> <a name="numberOfWorkers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.numberOfWorkers"></a>

```java
public java.lang.Number getNumberOfWorkers();
```

- *Type:* java.lang.Number

---

##### `pythonVirtualEnv`<sup>Required</sup> <a name="pythonVirtualEnv" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.pythonVirtualEnv"></a>

```java
public java.lang.String getPythonVirtualEnv();
```

- *Type:* java.lang.String

---

##### `workerType`<sup>Required</sup> <a name="workerType" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.workerType"></a>

```java
public java.lang.String getWorkerType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGluePropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsSparkGlueProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsSparkGlueProperties">DatazoneConnectionPropsSparkGlueProperties</a>

---


### DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference <a name="DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.datazone_connection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference;

new DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resetMwaaEnvironmentName">resetMwaaEnvironmentName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMwaaEnvironmentName` <a name="resetMwaaEnvironmentName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.resetMwaaEnvironmentName"></a>

```java
public void resetMwaaEnvironmentName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentNameInput">mwaaEnvironmentNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName">mwaaEnvironmentName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `mwaaEnvironmentNameInput`<sup>Optional</sup> <a name="mwaaEnvironmentNameInput" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentNameInput"></a>

```java
public java.lang.String getMwaaEnvironmentNameInput();
```

- *Type:* java.lang.String

---

##### `mwaaEnvironmentName`<sup>Required</sup> <a name="mwaaEnvironmentName" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.mwaaEnvironmentName"></a>

```java
public java.lang.String getMwaaEnvironmentName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaPropertiesOutputReference.property.internalValue"></a>

```java
public IResolvable|DatazoneConnectionPropsWorkflowsMwaaProperties getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.datazoneConnection.DatazoneConnectionPropsWorkflowsMwaaProperties">DatazoneConnectionPropsWorkflowsMwaaProperties</a>

---



