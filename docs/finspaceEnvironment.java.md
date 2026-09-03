# `finspaceEnvironment` Submodule <a name="`finspaceEnvironment` Submodule" id="@cdktn/provider-awscc.finspaceEnvironment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FinspaceEnvironment <a name="FinspaceEnvironment" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment awscc_finspace_environment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironment;

FinspaceEnvironment.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .dataBundles(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .federationMode(java.lang.String)
//  .federationParameters(FinspaceEnvironmentFederationParameters)
//  .kmsKeyId(java.lang.String)
//  .superuserParameters(FinspaceEnvironmentSuperuserParameters)
//  .tags(IResolvable|java.util.List<FinspaceEnvironmentTags>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.dataBundles">dataBundles</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of FinSpace Data Bundles to install. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Description of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.federationMode">federationMode</a></code> | <code>java.lang.String</code> | Federation mode used with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.federationParameters">federationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | Additional parameters to identify Federation mode. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | KMS key used to encrypt customer data within FinSpace Environment infrastructure. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.superuserParameters">superuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | Parameters of the first Superuser for the FinSpace Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#name FinspaceEnvironment#name}

---

##### `dataBundles`<sup>Optional</sup> <a name="dataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.dataBundles"></a>

- *Type:* java.util.List<java.lang.String>

ARNs of FinSpace Data Bundles to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#data_bundles FinspaceEnvironment#data_bundles}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Description of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#description FinspaceEnvironment#description}

---

##### `federationMode`<sup>Optional</sup> <a name="federationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.federationMode"></a>

- *Type:* java.lang.String

Federation mode used with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_mode FinspaceEnvironment#federation_mode}

---

##### `federationParameters`<sup>Optional</sup> <a name="federationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.federationParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

Additional parameters to identify Federation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_parameters FinspaceEnvironment#federation_parameters}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.kmsKeyId"></a>

- *Type:* java.lang.String

KMS key used to encrypt customer data within FinSpace Environment infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#kms_key_id FinspaceEnvironment#kms_key_id}

---

##### `superuserParameters`<sup>Optional</sup> <a name="superuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.superuserParameters"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

Parameters of the first Superuser for the FinSpace Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#superuser_parameters FinspaceEnvironment#superuser_parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.Initializer.parameter.tags"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#tags FinspaceEnvironment#tags}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters">putFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters">putSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags">putTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles">resetDataBundles</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode">resetFederationMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters">resetFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId">resetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters">resetSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags">resetTags</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFederationParameters` <a name="putFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters"></a>

```java
public void putFederationParameters(FinspaceEnvironmentFederationParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putFederationParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---

##### `putSuperuserParameters` <a name="putSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters"></a>

```java
public void putSuperuserParameters(FinspaceEnvironmentSuperuserParameters value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putSuperuserParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---

##### `putTags` <a name="putTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags"></a>

```java
public void putTags(IResolvable|java.util.List<FinspaceEnvironmentTags> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.putTags.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>>

---

##### `resetDataBundles` <a name="resetDataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDataBundles"></a>

```java
public void resetDataBundles()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetFederationMode` <a name="resetFederationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationMode"></a>

```java
public void resetFederationMode()
```

##### `resetFederationParameters` <a name="resetFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetFederationParameters"></a>

```java
public void resetFederationParameters()
```

##### `resetKmsKeyId` <a name="resetKmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetKmsKeyId"></a>

```java
public void resetKmsKeyId()
```

##### `resetSuperuserParameters` <a name="resetSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetSuperuserParameters"></a>

```java
public void resetSuperuserParameters()
```

##### `resetTags` <a name="resetTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.resetTags"></a>

```java
public void resetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironment;

FinspaceEnvironment.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironment;

FinspaceEnvironment.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironment;

FinspaceEnvironment.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironment;

FinspaceEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),FinspaceEnvironment.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a FinspaceEnvironment resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the FinspaceEnvironment to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing FinspaceEnvironment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the FinspaceEnvironment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId">awsAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId">dedicatedServiceAccountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn">environmentArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId">environmentId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl">environmentUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters">federationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl">sageMakerStudioDomainUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters">superuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags">tags</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput">dataBundlesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput">federationModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput">federationParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput">kmsKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput">superuserParametersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput">tagsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles">dataBundles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode">federationMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `awsAccountId`<sup>Required</sup> <a name="awsAccountId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.awsAccountId"></a>

```java
public java.lang.String getAwsAccountId();
```

- *Type:* java.lang.String

---

##### `dedicatedServiceAccountId`<sup>Required</sup> <a name="dedicatedServiceAccountId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dedicatedServiceAccountId"></a>

```java
public java.lang.String getDedicatedServiceAccountId();
```

- *Type:* java.lang.String

---

##### `environmentArn`<sup>Required</sup> <a name="environmentArn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentArn"></a>

```java
public java.lang.String getEnvironmentArn();
```

- *Type:* java.lang.String

---

##### `environmentId`<sup>Required</sup> <a name="environmentId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentId"></a>

```java
public java.lang.String getEnvironmentId();
```

- *Type:* java.lang.String

---

##### `environmentUrl`<sup>Required</sup> <a name="environmentUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.environmentUrl"></a>

```java
public java.lang.String getEnvironmentUrl();
```

- *Type:* java.lang.String

---

##### `federationParameters`<sup>Required</sup> <a name="federationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParameters"></a>

```java
public FinspaceEnvironmentFederationParametersOutputReference getFederationParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference">FinspaceEnvironmentFederationParametersOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sageMakerStudioDomainUrl`<sup>Required</sup> <a name="sageMakerStudioDomainUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.sageMakerStudioDomainUrl"></a>

```java
public java.lang.String getSageMakerStudioDomainUrl();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `superuserParameters`<sup>Required</sup> <a name="superuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParameters"></a>

```java
public FinspaceEnvironmentSuperuserParametersOutputReference getSuperuserParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference">FinspaceEnvironmentSuperuserParametersOutputReference</a>

---

##### `tags`<sup>Required</sup> <a name="tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tags"></a>

```java
public FinspaceEnvironmentTagsList getTags();
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList">FinspaceEnvironmentTagsList</a>

---

##### `dataBundlesInput`<sup>Optional</sup> <a name="dataBundlesInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundlesInput"></a>

```java
public java.util.List<java.lang.String> getDataBundlesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `federationModeInput`<sup>Optional</sup> <a name="federationModeInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationModeInput"></a>

```java
public java.lang.String getFederationModeInput();
```

- *Type:* java.lang.String

---

##### `federationParametersInput`<sup>Optional</sup> <a name="federationParametersInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationParametersInput"></a>

```java
public IResolvable|FinspaceEnvironmentFederationParameters getFederationParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---

##### `kmsKeyIdInput`<sup>Optional</sup> <a name="kmsKeyIdInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyIdInput"></a>

```java
public java.lang.String getKmsKeyIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `superuserParametersInput`<sup>Optional</sup> <a name="superuserParametersInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.superuserParametersInput"></a>

```java
public IResolvable|FinspaceEnvironmentSuperuserParameters getSuperuserParametersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---

##### `tagsInput`<sup>Optional</sup> <a name="tagsInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tagsInput"></a>

```java
public IResolvable|java.util.List<FinspaceEnvironmentTags> getTagsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>>

---

##### `dataBundles`<sup>Required</sup> <a name="dataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.dataBundles"></a>

```java
public java.util.List<java.lang.String> getDataBundles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `federationMode`<sup>Required</sup> <a name="federationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.federationMode"></a>

```java
public java.lang.String getFederationMode();
```

- *Type:* java.lang.String

---

##### `kmsKeyId`<sup>Required</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironment.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### FinspaceEnvironmentConfig <a name="FinspaceEnvironmentConfig" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentConfig;

FinspaceEnvironmentConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .name(java.lang.String)
//  .dataBundles(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .federationMode(java.lang.String)
//  .federationParameters(FinspaceEnvironmentFederationParameters)
//  .kmsKeyId(java.lang.String)
//  .superuserParameters(FinspaceEnvironmentSuperuserParameters)
//  .tags(IResolvable|java.util.List<FinspaceEnvironmentTags>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles">dataBundles</a></code> | <code>java.util.List<java.lang.String></code> | ARNs of FinSpace Data Bundles to install. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description">description</a></code> | <code>java.lang.String</code> | Description of the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode">federationMode</a></code> | <code>java.lang.String</code> | Federation mode used with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters">federationParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | Additional parameters to identify Federation mode. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId">kmsKeyId</a></code> | <code>java.lang.String</code> | KMS key used to encrypt customer data within FinSpace Environment infrastructure. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters">superuserParameters</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | Parameters of the first Superuser for the FinSpace Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags">tags</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>></code> | An array of key-value pairs to apply to this resource. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#name FinspaceEnvironment#name}

---

##### `dataBundles`<sup>Optional</sup> <a name="dataBundles" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.dataBundles"></a>

```java
public java.util.List<java.lang.String> getDataBundles();
```

- *Type:* java.util.List<java.lang.String>

ARNs of FinSpace Data Bundles to install.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#data_bundles FinspaceEnvironment#data_bundles}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Description of the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#description FinspaceEnvironment#description}

---

##### `federationMode`<sup>Optional</sup> <a name="federationMode" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationMode"></a>

```java
public java.lang.String getFederationMode();
```

- *Type:* java.lang.String

Federation mode used with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_mode FinspaceEnvironment#federation_mode}

---

##### `federationParameters`<sup>Optional</sup> <a name="federationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.federationParameters"></a>

```java
public FinspaceEnvironmentFederationParameters getFederationParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

Additional parameters to identify Federation mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_parameters FinspaceEnvironment#federation_parameters}

---

##### `kmsKeyId`<sup>Optional</sup> <a name="kmsKeyId" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.kmsKeyId"></a>

```java
public java.lang.String getKmsKeyId();
```

- *Type:* java.lang.String

KMS key used to encrypt customer data within FinSpace Environment infrastructure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#kms_key_id FinspaceEnvironment#kms_key_id}

---

##### `superuserParameters`<sup>Optional</sup> <a name="superuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.superuserParameters"></a>

```java
public FinspaceEnvironmentSuperuserParameters getSuperuserParameters();
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

Parameters of the first Superuser for the FinSpace Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#superuser_parameters FinspaceEnvironment#superuser_parameters}

---

##### `tags`<sup>Optional</sup> <a name="tags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentConfig.property.tags"></a>

```java
public IResolvable|java.util.List<FinspaceEnvironmentTags> getTags();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>>

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#tags FinspaceEnvironment#tags}

---

### FinspaceEnvironmentFederationParameters <a name="FinspaceEnvironmentFederationParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentFederationParameters;

FinspaceEnvironmentFederationParameters.builder()
//  .applicationCallBackUrl(java.lang.String)
//  .attributeMap(IResolvable|java.util.List<FinspaceEnvironmentFederationParametersAttributeMap>)
//  .federationProviderName(java.lang.String)
//  .federationUrn(java.lang.String)
//  .samlMetadataDocument(java.lang.String)
//  .samlMetadataUrl(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl">applicationCallBackUrl</a></code> | <code>java.lang.String</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap">attributeMap</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>></code> | Attribute map for SAML configuration. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName">federationProviderName</a></code> | <code>java.lang.String</code> | Federation provider name to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn">federationUrn</a></code> | <code>java.lang.String</code> | SAML metadata URL to link with the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument">samlMetadataDocument</a></code> | <code>java.lang.String</code> | SAML metadata document to link the federation provider to the Environment. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl">samlMetadataUrl</a></code> | <code>java.lang.String</code> | SAML metadata URL to link with the Environment. |

---

##### `applicationCallBackUrl`<sup>Optional</sup> <a name="applicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.applicationCallBackUrl"></a>

```java
public java.lang.String getApplicationCallBackUrl();
```

- *Type:* java.lang.String

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#application_call_back_url FinspaceEnvironment#application_call_back_url}

---

##### `attributeMap`<sup>Optional</sup> <a name="attributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.attributeMap"></a>

```java
public IResolvable|java.util.List<FinspaceEnvironmentFederationParametersAttributeMap> getAttributeMap();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>>

Attribute map for SAML configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#attribute_map FinspaceEnvironment#attribute_map}

---

##### `federationProviderName`<sup>Optional</sup> <a name="federationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationProviderName"></a>

```java
public java.lang.String getFederationProviderName();
```

- *Type:* java.lang.String

Federation provider name to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_provider_name FinspaceEnvironment#federation_provider_name}

---

##### `federationUrn`<sup>Optional</sup> <a name="federationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.federationUrn"></a>

```java
public java.lang.String getFederationUrn();
```

- *Type:* java.lang.String

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#federation_urn FinspaceEnvironment#federation_urn}

---

##### `samlMetadataDocument`<sup>Optional</sup> <a name="samlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataDocument"></a>

```java
public java.lang.String getSamlMetadataDocument();
```

- *Type:* java.lang.String

SAML metadata document to link the federation provider to the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#saml_metadata_document FinspaceEnvironment#saml_metadata_document}

---

##### `samlMetadataUrl`<sup>Optional</sup> <a name="samlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters.property.samlMetadataUrl"></a>

```java
public java.lang.String getSamlMetadataUrl();
```

- *Type:* java.lang.String

SAML metadata URL to link with the Environment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#saml_metadata_url FinspaceEnvironment#saml_metadata_url}

---

### FinspaceEnvironmentFederationParametersAttributeMap <a name="FinspaceEnvironmentFederationParametersAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentFederationParametersAttributeMap;

FinspaceEnvironmentFederationParametersAttributeMap.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

### FinspaceEnvironmentSuperuserParameters <a name="FinspaceEnvironmentSuperuserParameters" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentSuperuserParameters;

FinspaceEnvironmentSuperuserParameters.builder()
//  .emailAddress(java.lang.String)
//  .firstName(java.lang.String)
//  .lastName(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | Email address. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName">firstName</a></code> | <code>java.lang.String</code> | First name. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName">lastName</a></code> | <code>java.lang.String</code> | Last name. |

---

##### `emailAddress`<sup>Optional</sup> <a name="emailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

Email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#email_address FinspaceEnvironment#email_address}

---

##### `firstName`<sup>Optional</sup> <a name="firstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

First name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#first_name FinspaceEnvironment#first_name}

---

##### `lastName`<sup>Optional</sup> <a name="lastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

Last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#last_name FinspaceEnvironment#last_name}

---

### FinspaceEnvironmentTags <a name="FinspaceEnvironmentTags" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentTags;

FinspaceEnvironmentTags.builder()
//  .key(java.lang.String)
//  .value(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key">key</a></code> | <code>java.lang.String</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value">value</a></code> | <code>java.lang.String</code> | The value for the tag. |

---

##### `key`<sup>Optional</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#key FinspaceEnvironment#key}

---

##### `value`<sup>Optional</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/finspace_environment#value FinspaceEnvironment#value}

---

## Classes <a name="Classes" id="Classes"></a>

### FinspaceEnvironmentFederationParametersAttributeMapList <a name="FinspaceEnvironmentFederationParametersAttributeMapList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentFederationParametersAttributeMapList;

new FinspaceEnvironmentFederationParametersAttributeMapList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get"></a>

```java
public FinspaceEnvironmentFederationParametersAttributeMapOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FinspaceEnvironmentFederationParametersAttributeMap> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>>

---


### FinspaceEnvironmentFederationParametersAttributeMapOutputReference <a name="FinspaceEnvironmentFederationParametersAttributeMapOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference;

new FinspaceEnvironmentFederationParametersAttributeMapOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapOutputReference.property.internalValue"></a>

```java
public IResolvable|FinspaceEnvironmentFederationParametersAttributeMap getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>

---


### FinspaceEnvironmentFederationParametersOutputReference <a name="FinspaceEnvironmentFederationParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentFederationParametersOutputReference;

new FinspaceEnvironmentFederationParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap">putAttributeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl">resetApplicationCallBackUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap">resetAttributeMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName">resetFederationProviderName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn">resetFederationUrn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument">resetSamlMetadataDocument</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl">resetSamlMetadataUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAttributeMap` <a name="putAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap"></a>

```java
public void putAttributeMap(IResolvable|java.util.List<FinspaceEnvironmentFederationParametersAttributeMap> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.putAttributeMap.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>>

---

##### `resetApplicationCallBackUrl` <a name="resetApplicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetApplicationCallBackUrl"></a>

```java
public void resetApplicationCallBackUrl()
```

##### `resetAttributeMap` <a name="resetAttributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetAttributeMap"></a>

```java
public void resetAttributeMap()
```

##### `resetFederationProviderName` <a name="resetFederationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationProviderName"></a>

```java
public void resetFederationProviderName()
```

##### `resetFederationUrn` <a name="resetFederationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetFederationUrn"></a>

```java
public void resetFederationUrn()
```

##### `resetSamlMetadataDocument` <a name="resetSamlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataDocument"></a>

```java
public void resetSamlMetadataDocument()
```

##### `resetSamlMetadataUrl` <a name="resetSamlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.resetSamlMetadataUrl"></a>

```java
public void resetSamlMetadataUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap">attributeMap</a></code> | <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput">applicationCallBackUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput">attributeMapInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput">federationProviderNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput">federationUrnInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput">samlMetadataDocumentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput">samlMetadataUrlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl">applicationCallBackUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName">federationProviderName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn">federationUrn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument">samlMetadataDocument</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl">samlMetadataUrl</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `attributeMap`<sup>Required</sup> <a name="attributeMap" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMap"></a>

```java
public FinspaceEnvironmentFederationParametersAttributeMapList getAttributeMap();
```

- *Type:* <a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMapList">FinspaceEnvironmentFederationParametersAttributeMapList</a>

---

##### `applicationCallBackUrlInput`<sup>Optional</sup> <a name="applicationCallBackUrlInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrlInput"></a>

```java
public java.lang.String getApplicationCallBackUrlInput();
```

- *Type:* java.lang.String

---

##### `attributeMapInput`<sup>Optional</sup> <a name="attributeMapInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.attributeMapInput"></a>

```java
public IResolvable|java.util.List<FinspaceEnvironmentFederationParametersAttributeMap> getAttributeMapInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersAttributeMap">FinspaceEnvironmentFederationParametersAttributeMap</a>>

---

##### `federationProviderNameInput`<sup>Optional</sup> <a name="federationProviderNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderNameInput"></a>

```java
public java.lang.String getFederationProviderNameInput();
```

- *Type:* java.lang.String

---

##### `federationUrnInput`<sup>Optional</sup> <a name="federationUrnInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrnInput"></a>

```java
public java.lang.String getFederationUrnInput();
```

- *Type:* java.lang.String

---

##### `samlMetadataDocumentInput`<sup>Optional</sup> <a name="samlMetadataDocumentInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocumentInput"></a>

```java
public java.lang.String getSamlMetadataDocumentInput();
```

- *Type:* java.lang.String

---

##### `samlMetadataUrlInput`<sup>Optional</sup> <a name="samlMetadataUrlInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrlInput"></a>

```java
public java.lang.String getSamlMetadataUrlInput();
```

- *Type:* java.lang.String

---

##### `applicationCallBackUrl`<sup>Required</sup> <a name="applicationCallBackUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.applicationCallBackUrl"></a>

```java
public java.lang.String getApplicationCallBackUrl();
```

- *Type:* java.lang.String

---

##### `federationProviderName`<sup>Required</sup> <a name="federationProviderName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationProviderName"></a>

```java
public java.lang.String getFederationProviderName();
```

- *Type:* java.lang.String

---

##### `federationUrn`<sup>Required</sup> <a name="federationUrn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.federationUrn"></a>

```java
public java.lang.String getFederationUrn();
```

- *Type:* java.lang.String

---

##### `samlMetadataDocument`<sup>Required</sup> <a name="samlMetadataDocument" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataDocument"></a>

```java
public java.lang.String getSamlMetadataDocument();
```

- *Type:* java.lang.String

---

##### `samlMetadataUrl`<sup>Required</sup> <a name="samlMetadataUrl" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.samlMetadataUrl"></a>

```java
public java.lang.String getSamlMetadataUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|FinspaceEnvironmentFederationParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentFederationParameters">FinspaceEnvironmentFederationParameters</a>

---


### FinspaceEnvironmentSuperuserParametersOutputReference <a name="FinspaceEnvironmentSuperuserParametersOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentSuperuserParametersOutputReference;

new FinspaceEnvironmentSuperuserParametersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress">resetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName">resetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName">resetLastName</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEmailAddress` <a name="resetEmailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetEmailAddress"></a>

```java
public void resetEmailAddress()
```

##### `resetFirstName` <a name="resetFirstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetFirstName"></a>

```java
public void resetFirstName()
```

##### `resetLastName` <a name="resetLastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.resetLastName"></a>

```java
public void resetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput">emailAddressInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput">firstNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput">lastNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress">emailAddress</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName">firstName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName">lastName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `emailAddressInput`<sup>Optional</sup> <a name="emailAddressInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddressInput"></a>

```java
public java.lang.String getEmailAddressInput();
```

- *Type:* java.lang.String

---

##### `firstNameInput`<sup>Optional</sup> <a name="firstNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstNameInput"></a>

```java
public java.lang.String getFirstNameInput();
```

- *Type:* java.lang.String

---

##### `lastNameInput`<sup>Optional</sup> <a name="lastNameInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastNameInput"></a>

```java
public java.lang.String getLastNameInput();
```

- *Type:* java.lang.String

---

##### `emailAddress`<sup>Required</sup> <a name="emailAddress" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.emailAddress"></a>

```java
public java.lang.String getEmailAddress();
```

- *Type:* java.lang.String

---

##### `firstName`<sup>Required</sup> <a name="firstName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.firstName"></a>

```java
public java.lang.String getFirstName();
```

- *Type:* java.lang.String

---

##### `lastName`<sup>Required</sup> <a name="lastName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.lastName"></a>

```java
public java.lang.String getLastName();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParametersOutputReference.property.internalValue"></a>

```java
public IResolvable|FinspaceEnvironmentSuperuserParameters getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentSuperuserParameters">FinspaceEnvironmentSuperuserParameters</a>

---


### FinspaceEnvironmentTagsList <a name="FinspaceEnvironmentTagsList" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentTagsList;

new FinspaceEnvironmentTagsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get"></a>

```java
public FinspaceEnvironmentTagsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<FinspaceEnvironmentTags> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>>

---


### FinspaceEnvironmentTagsOutputReference <a name="FinspaceEnvironmentTagsOutputReference" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.finspace_environment.FinspaceEnvironmentTagsOutputReference;

new FinspaceEnvironmentTagsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey">resetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue">resetValue</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetKey` <a name="resetKey" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetKey"></a>

```java
public void resetKey()
```

##### `resetValue` <a name="resetValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.resetValue"></a>

```java
public void resetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput">keyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput">valueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key">key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value">value</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `keyInput`<sup>Optional</sup> <a name="keyInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.keyInput"></a>

```java
public java.lang.String getKeyInput();
```

- *Type:* java.lang.String

---

##### `valueInput`<sup>Optional</sup> <a name="valueInput" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.valueInput"></a>

```java
public java.lang.String getValueInput();
```

- *Type:* java.lang.String

---

##### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.key"></a>

```java
public java.lang.String getKey();
```

- *Type:* java.lang.String

---

##### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.value"></a>

```java
public java.lang.String getValue();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTagsOutputReference.property.internalValue"></a>

```java
public IResolvable|FinspaceEnvironmentTags getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.finspaceEnvironment.FinspaceEnvironmentTags">FinspaceEnvironmentTags</a>

---



