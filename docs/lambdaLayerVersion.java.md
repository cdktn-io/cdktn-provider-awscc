# `lambdaLayerVersion` Submodule <a name="`lambdaLayerVersion` Submodule" id="@cdktn/provider-awscc.lambdaLayerVersion"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LambdaLayerVersion <a name="LambdaLayerVersion" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version awscc_lambda_layer_version}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_layer_version.LambdaLayerVersion;

LambdaLayerVersion.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(LambdaLayerVersionContent)
//  .compatibleArchitectures(java.util.List<java.lang.String>)
//  .compatibleRuntimes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .layerName(java.lang.String)
//  .licenseInfo(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | The function layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleArchitectures">compatibleArchitectures</a></code> | <code>java.util.List<java.lang.String></code> | A list of compatible instruction set architectures. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleRuntimes">compatibleRuntimes</a></code> | <code>java.util.List<java.lang.String></code> | A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | The description of the version. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.layerName">layerName</a></code> | <code>java.lang.String</code> | The name or Amazon Resource Name (ARN) of the layer. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.licenseInfo">licenseInfo</a></code> | <code>java.lang.String</code> | The layer's software license. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.content"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

The function layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#content LambdaLayerVersion#content}

---

##### `compatibleArchitectures`<sup>Optional</sup> <a name="compatibleArchitectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleArchitectures"></a>

- *Type:* java.util.List<java.lang.String>

A list of compatible instruction set architectures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.compatibleRuntimes"></a>

- *Type:* java.util.List<java.lang.String>

A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.description"></a>

- *Type:* java.lang.String

The description of the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#description LambdaLayerVersion#description}

---

##### `layerName`<sup>Optional</sup> <a name="layerName" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.layerName"></a>

- *Type:* java.lang.String

The name or Amazon Resource Name (ARN) of the layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}

---

##### `licenseInfo`<sup>Optional</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.Initializer.parameter.licenseInfo"></a>

- *Type:* java.lang.String

The layer's software license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#license_info LambdaLayerVersion#license_info}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent">putContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures">resetCompatibleArchitectures</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes">resetCompatibleRuntimes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetDescription">resetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLayerName">resetLayerName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo">resetLicenseInfo</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putContent` <a name="putContent" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent"></a>

```java
public void putContent(LambdaLayerVersionContent value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

---

##### `resetCompatibleArchitectures` <a name="resetCompatibleArchitectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleArchitectures"></a>

```java
public void resetCompatibleArchitectures()
```

##### `resetCompatibleRuntimes` <a name="resetCompatibleRuntimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetCompatibleRuntimes"></a>

```java
public void resetCompatibleRuntimes()
```

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetDescription"></a>

```java
public void resetDescription()
```

##### `resetLayerName` <a name="resetLayerName" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLayerName"></a>

```java
public void resetLayerName()
```

##### `resetLicenseInfo` <a name="resetLicenseInfo" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.resetLicenseInfo"></a>

```java
public void resetLicenseInfo()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LambdaLayerVersion resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isConstruct"></a>

```java
import io.cdktn.providers.awscc.lambda_layer_version.LambdaLayerVersion;

LambdaLayerVersion.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement"></a>

```java
import io.cdktn.providers.awscc.lambda_layer_version.LambdaLayerVersion;

LambdaLayerVersion.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource"></a>

```java
import io.cdktn.providers.awscc.lambda_layer_version.LambdaLayerVersion;

LambdaLayerVersion.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport"></a>

```java
import io.cdktn.providers.awscc.lambda_layer_version.LambdaLayerVersion;

LambdaLayerVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LambdaLayerVersion.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LambdaLayerVersion resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LambdaLayerVersion to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LambdaLayerVersion that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LambdaLayerVersion to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference">LambdaLayerVersionContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerVersionArn">layerVersionArn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput">compatibleArchitecturesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput">compatibleRuntimesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.contentInput">contentInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput">layerNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput">licenseInfoInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerName">layerName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo">licenseInfo</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.content"></a>

```java
public LambdaLayerVersionContentOutputReference getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference">LambdaLayerVersionContentOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `layerVersionArn`<sup>Required</sup> <a name="layerVersionArn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerVersionArn"></a>

```java
public java.lang.String getLayerVersionArn();
```

- *Type:* java.lang.String

---

##### `compatibleArchitecturesInput`<sup>Optional</sup> <a name="compatibleArchitecturesInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitecturesInput"></a>

```java
public java.util.List<java.lang.String> getCompatibleArchitecturesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compatibleRuntimesInput`<sup>Optional</sup> <a name="compatibleRuntimesInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimesInput"></a>

```java
public java.util.List<java.lang.String> getCompatibleRuntimesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `contentInput`<sup>Optional</sup> <a name="contentInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.contentInput"></a>

```java
public IResolvable|LambdaLayerVersionContent getContentInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `layerNameInput`<sup>Optional</sup> <a name="layerNameInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerNameInput"></a>

```java
public java.lang.String getLayerNameInput();
```

- *Type:* java.lang.String

---

##### `licenseInfoInput`<sup>Optional</sup> <a name="licenseInfoInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfoInput"></a>

```java
public java.lang.String getLicenseInfoInput();
```

- *Type:* java.lang.String

---

##### `compatibleArchitectures`<sup>Required</sup> <a name="compatibleArchitectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleArchitectures"></a>

```java
public java.util.List<java.lang.String> getCompatibleArchitectures();
```

- *Type:* java.util.List<java.lang.String>

---

##### `compatibleRuntimes`<sup>Required</sup> <a name="compatibleRuntimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.compatibleRuntimes"></a>

```java
public java.util.List<java.lang.String> getCompatibleRuntimes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `layerName`<sup>Required</sup> <a name="layerName" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.layerName"></a>

```java
public java.lang.String getLayerName();
```

- *Type:* java.lang.String

---

##### `licenseInfo`<sup>Required</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.licenseInfo"></a>

```java
public java.lang.String getLicenseInfo();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersion.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LambdaLayerVersionConfig <a name="LambdaLayerVersionConfig" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_layer_version.LambdaLayerVersionConfig;

LambdaLayerVersionConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .content(LambdaLayerVersionContent)
//  .compatibleArchitectures(java.util.List<java.lang.String>)
//  .compatibleRuntimes(java.util.List<java.lang.String>)
//  .description(java.lang.String)
//  .layerName(java.lang.String)
//  .licenseInfo(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.content">content</a></code> | <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | The function layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures">compatibleArchitectures</a></code> | <code>java.util.List<java.lang.String></code> | A list of compatible instruction set architectures. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes">compatibleRuntimes</a></code> | <code>java.util.List<java.lang.String></code> | A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.description">description</a></code> | <code>java.lang.String</code> | The description of the version. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName">layerName</a></code> | <code>java.lang.String</code> | The name or Amazon Resource Name (ARN) of the layer. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo">licenseInfo</a></code> | <code>java.lang.String</code> | The layer's software license. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `content`<sup>Required</sup> <a name="content" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.content"></a>

```java
public LambdaLayerVersionContent getContent();
```

- *Type:* <a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

The function layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#content LambdaLayerVersion#content}

---

##### `compatibleArchitectures`<sup>Optional</sup> <a name="compatibleArchitectures" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleArchitectures"></a>

```java
public java.util.List<java.lang.String> getCompatibleArchitectures();
```

- *Type:* java.util.List<java.lang.String>

A list of compatible instruction set architectures.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_architectures LambdaLayerVersion#compatible_architectures}

---

##### `compatibleRuntimes`<sup>Optional</sup> <a name="compatibleRuntimes" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.compatibleRuntimes"></a>

```java
public java.util.List<java.lang.String> getCompatibleRuntimes();
```

- *Type:* java.util.List<java.lang.String>

A list of compatible function runtimes. Used for filtering with ListLayers and ListLayerVersions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#compatible_runtimes LambdaLayerVersion#compatible_runtimes}

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

The description of the version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#description LambdaLayerVersion#description}

---

##### `layerName`<sup>Optional</sup> <a name="layerName" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.layerName"></a>

```java
public java.lang.String getLayerName();
```

- *Type:* java.lang.String

The name or Amazon Resource Name (ARN) of the layer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#layer_name LambdaLayerVersion#layer_name}

---

##### `licenseInfo`<sup>Optional</sup> <a name="licenseInfo" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionConfig.property.licenseInfo"></a>

```java
public java.lang.String getLicenseInfo();
```

- *Type:* java.lang.String

The layer's software license.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#license_info LambdaLayerVersion#license_info}

---

### LambdaLayerVersionContent <a name="LambdaLayerVersionContent" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_layer_version.LambdaLayerVersionContent;

LambdaLayerVersionContent.builder()
    .s3Bucket(java.lang.String)
    .s3Key(java.lang.String)
//  .s3ObjectStorageMode(java.lang.String)
//  .s3ObjectVersion(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | The Amazon S3 bucket of the layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | The Amazon S3 key of the layer archive. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectStorageMode">s3ObjectStorageMode</a></code> | <code>java.lang.String</code> | Specifies whether Lambda should copy the deployment package to its internal storage (COPY) or reference it directly from your S3 bucket (REFERENCE). |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | For versioned objects, the version of the layer archive object to use. |

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

The Amazon S3 bucket of the layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_bucket LambdaLayerVersion#s3_bucket}

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

The Amazon S3 key of the layer archive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_key LambdaLayerVersion#s3_key}

---

##### `s3ObjectStorageMode`<sup>Optional</sup> <a name="s3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectStorageMode"></a>

```java
public java.lang.String getS3ObjectStorageMode();
```

- *Type:* java.lang.String

Specifies whether Lambda should copy the deployment package to its internal storage (COPY) or reference it directly from your S3 bucket (REFERENCE).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_object_storage_mode LambdaLayerVersion#s3_object_storage_mode}

---

##### `s3ObjectVersion`<sup>Optional</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

For versioned objects, the version of the layer archive object to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/lambda_layer_version#s3_object_version LambdaLayerVersion#s3_object_version}

---

## Classes <a name="Classes" id="Classes"></a>

### LambdaLayerVersionContentOutputReference <a name="LambdaLayerVersionContentOutputReference" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer"></a>

```java
import io.cdktn.providers.awscc.lambda_layer_version.LambdaLayerVersionContentOutputReference;

new LambdaLayerVersionContentOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectStorageMode">resetS3ObjectStorageMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectVersion">resetS3ObjectVersion</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetS3ObjectStorageMode` <a name="resetS3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectStorageMode"></a>

```java
public void resetS3ObjectStorageMode()
```

##### `resetS3ObjectVersion` <a name="resetS3ObjectVersion" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.resetS3ObjectVersion"></a>

```java
public void resetS3ObjectVersion()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3BucketInput">s3BucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3KeyInput">s3KeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageModeInput">s3ObjectStorageModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersionInput">s3ObjectVersionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Bucket">s3Bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Key">s3Key</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageMode">s3ObjectStorageMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersion">s3ObjectVersion</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `s3BucketInput`<sup>Optional</sup> <a name="s3BucketInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3BucketInput"></a>

```java
public java.lang.String getS3BucketInput();
```

- *Type:* java.lang.String

---

##### `s3KeyInput`<sup>Optional</sup> <a name="s3KeyInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3KeyInput"></a>

```java
public java.lang.String getS3KeyInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectStorageModeInput`<sup>Optional</sup> <a name="s3ObjectStorageModeInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageModeInput"></a>

```java
public java.lang.String getS3ObjectStorageModeInput();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersionInput`<sup>Optional</sup> <a name="s3ObjectVersionInput" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersionInput"></a>

```java
public java.lang.String getS3ObjectVersionInput();
```

- *Type:* java.lang.String

---

##### `s3Bucket`<sup>Required</sup> <a name="s3Bucket" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Bucket"></a>

```java
public java.lang.String getS3Bucket();
```

- *Type:* java.lang.String

---

##### `s3Key`<sup>Required</sup> <a name="s3Key" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3Key"></a>

```java
public java.lang.String getS3Key();
```

- *Type:* java.lang.String

---

##### `s3ObjectStorageMode`<sup>Required</sup> <a name="s3ObjectStorageMode" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectStorageMode"></a>

```java
public java.lang.String getS3ObjectStorageMode();
```

- *Type:* java.lang.String

---

##### `s3ObjectVersion`<sup>Required</sup> <a name="s3ObjectVersion" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.s3ObjectVersion"></a>

```java
public java.lang.String getS3ObjectVersion();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContentOutputReference.property.internalValue"></a>

```java
public IResolvable|LambdaLayerVersionContent getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-awscc.lambdaLayerVersion.LambdaLayerVersionContent">LambdaLayerVersionContent</a>

---



